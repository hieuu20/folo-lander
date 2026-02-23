/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionButton from '@/components/buttons/SectionButton';
import { RolePopup, SuccessPopup } from '@/components/Popups';
import { useDisclosure } from '@/hooks';
import { Role } from '@/types/role';
import { validateEmail } from '@/utils';
import { Flex, Input, Text } from '@mantine/core';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    roles: Role[];
}
export function EmailWaitingListInput({ roles }: Props) {
    const [susscessOpened, { open: successOpen, close: successClose }] = useDisclosure();
    const [errorMsg, setErrorMsg] = useState("");
    const [isWarning, setIsWarning] = useState(false);

    const [opened, { open, close }] = useDisclosure();

    const handleSignup = useCallback(async (values: any, {
        setSubmitting,
        resetForm
    }: FormikHelpers<any>) => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/waiting-list", {
                method: "POST",
                body: JSON.stringify(values)
            });

            const result = await res.json();

            if (result?.data) {
                successOpen();
                resetForm();
                setErrorMsg("");
            } else {
                setErrorMsg("You’ve already signed up");
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setSubmitting(false);
        }
    }, [successOpen]);

    const onLogin = useCallback(async (email: string) => {
        if (!email) {
            setIsWarning(true);

            setTimeout(() => {
                setIsWarning(false);
            }, 2000);

            return;
        }

        if (!validateEmail(email)) {
            setErrorMsg("Email not valid!");

            setIsWarning(true);

            setTimeout(() => {
                setIsWarning(false);
            }, 2000);

            return;
        }
        open();
    }, [open]);

    return (
        <Formik
            initialValues={{
                email: "",
                roleId: roles[0]?._id
            }}
            onSubmit={handleSignup}
        >
            {({ values, isSubmitting, setFieldValue, submitForm }) => {
                return (
                    <Form className='w-fit'>
                        <Flex direction={"column"} gap={16} align={"center"} w={{ base: "100%" }}>
                            <Flex
                                justify={"space-between"}
                                bg={"white"}
                                bd={isWarning ? "1px solid #F11E11" : "1px solid #E7E7F8"}
                                p={{ base: 4, md: 6, xl: 8 }}
                                h={{ base: 48, sm: 52, md: 56, lg: 58, xl: 60, "2xl": 64 }}
                                w={{ base: "100%", sm: 320, md: 360, lg: 390, xl: 410, "2xl": 438 }}
                                align={"center"}
                                pos={"relative"}
                                className={twMerge('rounded-2xl md:rounded-3xl transition-all ease-in-out duration-200', isWarning && 'animate-shake')}
                            >
                                <Input
                                    bg={"white"}
                                    fz={{ base: 16, md: 18, "2xl": 20 }}
                                    fw={500}
                                    placeholder='Your Email address'
                                    classNames={{
                                        input: `${isWarning ? "placeholder-[#F11E11]" : "placeholder-[#4D5053]"} bg-transparent pl-1 md:pl-2 border-none text-base md:text-lg 2xl:text-[20px]`,
                                        wrapper: "bg-transparent"
                                    }}
                                    value={values.email}
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                    spellCheck={false}
                                    onChange={(e) => {
                                        setFieldValue("email", e.target.value);
                                        setErrorMsg("");
                                        setIsWarning(false);
                                    }}
                                    c={"black"}
                                />

                                <SectionButton
                                    show={true}
                                    title='Join the Waitlist →'
                                    className='rounded-2xl transition-all duration-300 ease-in-out'
                                    fz={{ base: 13, md: 14, "2xl": 16 }}
                                    fw={600}
                                    w={{ base: 121, md: 136, xl: 152 }}
                                    h={"100%"}
                                    bg={"#435EFB"}
                                    px={0}
                                    onClick={() => onLogin(values.email)}
                                    loading={isSubmitting}
                                />

                                {errorMsg && (
                                    <Text fz={14} c={"#F11E11"} pos={"absolute"} left={12} bottom={-24}>
                                        {errorMsg}
                                    </Text>
                                )}
                                <SuccessPopup opened={susscessOpened} close={successClose} title='Welcome aboard! 🎉' />
                            </Flex>

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

    );
}
