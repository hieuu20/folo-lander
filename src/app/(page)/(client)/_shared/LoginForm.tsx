/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField, InputPasswordField } from '@/components';
import { getDeviceId, getLocalStorage, USER_TYPE_ENUM, validateEmail } from '@/utils';
import { Box, Button, Flex } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import xIcon from "@public/leaderboard/x.png";
import fbIcon from "@public/leaderboard/fb.png";
import ggIcon from "@public/leaderboard/gg.png";
import Image from 'next/image';
import { RolePopup } from '@/components/Popups';
import { Role } from '@/types/role';
import { useDisclosure } from '@/hooks';
import { dispatchFetchProfile } from '@/utils/windowEvent';
import { firebaseAuth } from '@/utils/firebase';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithTwitter, useAuthState } from 'react-firebase-hooks/auth';
import { FacebookAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
interface Props {
    roles: Role[]
}

const XProvider = new TwitterAuthProvider();
const FbProvider = new FacebookAuthProvider();


export default function LoginForm({ roles }: Props) {
    const [opened, { open, close }] = useDisclosure();
    const [signInWithGoogle] = useSignInWithGoogle(firebaseAuth);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [signInWithFacebook] = useSignInWithFacebook(firebaseAuth);
    const [signInWithTwitter] = useSignInWithTwitter(firebaseAuth);
    const [user, loading] = useAuthState(firebaseAuth);

    const handleSignup = useCallback(async (values: any, {
        setErrors,
        setSubmitting,
    }: FormikHelpers<any>) => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                body: JSON.stringify(values)
            });
            const result = await res.json();

            if (result?.data?.accessToken) {
                dispatchFetchProfile();
            } else {
                setErrors({ password: result?.data?.message });
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setSubmitting(false);
        }
    }, []);

    const onLogin = useCallback(async (email: string, submitForm: () => void, setSubmitting: (isSubmitting: boolean) => void) => {
        try {
            setSubmitting(true);
            const res = await fetch(`/api/auth/verify-email?email=${email}`);
            const resData = await res.json();

            console.log({ resData });

            if (resData.data.isAvailable) {
                open();
            } else {
                submitForm();
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) { }
        finally {
            setSubmitting(false);
        }
    }, [open]);

    const signInGoogle = async () => {
        const test = await signInWithGoogle();
        const user = test?.user;
        console.log({ test, user });
    };

    const signInFacebook = async () => {
        const test = signInWithFacebook();

        console.log({ test });

        // const result = await signInWithPopup(firebaseAuth, FbProvider);
        // const token = await result.user.getIdToken();
        // const user = await result.user;

        // console.log({ token, user });
    };

    const signInTwitter = async () => {
        // const test = await signInWithTwitter();
        // const user = test?.user;
        // console.log({ test, user });

        const result = await signInWithPopup(firebaseAuth, XProvider);
        const token = await result.user.getIdToken();
        const user = await result.user;

        console.log({ token, user });
    };

    console.log({ user, loading });

    return (
        <Flex direction={"column"} gap={{ base: 24 }} align={"center"} w={{ base: "100%" }}>
            <Formik
                initialValues={{
                    userType: USER_TYPE_ENUM.USER,
                    email: "",
                    password: "",
                    deviceId: getDeviceId(),
                    referralCode: getLocalStorage("referralCode"),
                    roleId: roles[0]?._id
                }}
                onSubmit={handleSignup}
            >
                {({ values, isSubmitting, setFieldValue, submitForm, setSubmitting }) => {
                    const isEnable = validateEmail(values.email) && values.password;
                    return (
                        <Form className='w-full md:w-[340px]'>
                            <Flex direction={"column"} gap={16} align={"center"} w={{ base: "100%" }}>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    label="Email"
                                    required={true}
                                    className="text-sm"
                                    value={values.email}
                                    component={InputField}
                                />

                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    label="Password"
                                    required={true}
                                    className="text-sm"
                                    value={values.password}
                                    component={InputPasswordField}
                                />

                                <Button
                                    className='rounded-lg'
                                    fz={{ base: 16 }}
                                    fw={600}
                                    w={{ base: 170 }}
                                    h={40}
                                    bg={isEnable ? "#435EFB" : "gray"}
                                    px={0}
                                    type='button'
                                    c={"white"}
                                    mx={"auto"}
                                    loading={isSubmitting}
                                    disabled={!isEnable}
                                    onClick={() => onLogin(values.email, submitForm, setSubmitting)}
                                >
                                    Login
                                </Button>

                                <RolePopup
                                    values={values}
                                    roles={roles}
                                    opened={opened}
                                    close={close}
                                    setFieldValue={setFieldValue}
                                    submitForm={submitForm}
                                />
                            </Flex>
                        </Form>
                    );
                }}
            </Formik>

            <Flex gap={{ base: 24 }} align={"center"} justify={"center"}>
                <Box w={48} h={48} className='overflow-hidden cursor-pointer' onClick={signInGoogle}>
                    <Image src={ggIcon} alt='ggIcon' width={24} height={24} className='w-full h-full relative' />
                </Box>
                <Box w={48} h={48} className='overflow-hidden cursor-pointer'>
                    <Image src={xIcon} alt='ggIcon' width={24} height={24} className='w-full h-full' onClick={signInTwitter} />
                </Box>
                <Box w={48} h={48} className='overflow-hidden cursor-pointer' onClick={signInFacebook}>
                    <Image src={fbIcon} alt='ggIcon' width={24} height={24} className='w-full h-full relative' />
                </Box>
            </Flex>

        </Flex>
    );
}

