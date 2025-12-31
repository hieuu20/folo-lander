/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Grid, Modal, Text } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback, useEffect, useRef } from 'react';
import { InputField } from '../custom-fields';
import checkIcon from "@public/icons/check.svg";
import Image from 'next/image';
import SectionButton from '../buttons/SectionButton';
import { useDisclosure } from '@/hooks';
import lottie from 'lottie-web';
import { validateEmail } from '@/utils';

interface Props {
    userName?: string;
    opened: boolean;
    close: () => void
}

const list = [
    {
        icon: "😘",
        title: "I’m a Fan",
        description: "Enjoy and interaction with creators.",
        type: "FAN"
    },
    {
        icon: "🎉",
        title: "I’m a Creator",
        description: "Earn, share content, and provide services.",
        type: "CREATOR"
    },
    {
        icon: "💼",
        title: "We’re a Business",
        description: "Earn, share content, and provide services.",
        type: "BUSINESS"
    }
];
export function SignupPopup({ userName, opened, close }: Props) {
    const [susscessOpened, { open: successOpen, close: successClose }] = useDisclosure();

    const handleSignup = useCallback(async (values: any, {
        setErrors,
        setSubmitting,
    }: FormikHelpers<any>) => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/waiting-list", {
                method: "POST",
                body: JSON.stringify(values)
            });

            const result = await res.json();

            if (result?.data) {
                close();
                successOpen();
            } else {
                setErrors({ email: "You’ve already signed up" });
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setSubmitting(false);
        }
    }, [close, successOpen]);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                size={492}
                centered={true}
                title="Join the first wave on FOLO"
                closeButtonProps={{ w: 40, h: 40, ml: "auto" }}
                classNames={{
                    header: "pt-0 pr-0 h-10",
                    content: "rounded-[18px] overflow-hidden",
                    title: "absolute bottom-0 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap text-lg md:text-[20px]",
                    body: "pt-4 pb-6"
                }}
            >
                <Formik
                    initialValues={{
                        userType: "FAN",
                        userName: userName,
                        firstName: "",
                        lastName: "",
                        email: "",
                    }}
                    onSubmit={handleSignup}
                >
                    {({ values, isSubmitting }) => {
                        // const isEnable = values.userName && values.firstName && values.lastName && values.email;
                        const isEnable = validateEmail(values.email);

                        return (
                            <Form className='w-[96%] md:w-[92%] mx-auto'>
                                {/* <Text fz={{ base: 10, md: 12 }} c={"#4D5053"} lh={1.4} mb={4}>
                                    Who will you use FOLO? <span className='text-[#F11E11]'>*</span>
                                </Text>

                                <Grid gutter={12} mb={4}>
                                    {list.map((o, index) => {
                                        return (
                                            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                                                <Flex
                                                    pos={"relative"}
                                                    py={{ base: 8 }}
                                                    px={{ base: 12 }}
                                                    gap={{ base: 12 }}
                                                    w={"100%"}
                                                    align={"center"}
                                                    bd={values.userType == o.type ? "1px solid #435EFB" : "1px solid #E7E7F8"}
                                                    className='rounded-lg overflow-hidden cursor-pointer'
                                                    onClick={() => setFieldValue("userType", o.type)}
                                                >
                                                    <Text fz={{ base: 20, md: 24 }} fw={600}>{o.icon}</Text>

                                                    <Flex direction={"column"} gap={2} c={"#131416"}>
                                                        <Text fz={{ base: 14, md: 14 }} fw={500} lh={1.4}>{o.title}</Text>
                                                        <Text fz={{ base: 12, md: 12 }} fw={400} lh={1.4}>{o.description}</Text>
                                                    </Flex>

                                                    {values.userType == o.type && (
                                                        <Image src={checkIcon} alt='checkIcon' className='absolute top-0 right-0' />
                                                    )}
                                                </Flex>

                                            </Grid.Col>
                                        );
                                    })}

                                </Grid> */}

                                <Grid gutter={12} mb={24}>
                                    {/* <Grid.Col span={6}>
                                        <Field
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Your first name"
                                            label="First name"
                                            required={true}
                                            className="text-sm"
                                            value={values.firstName}
                                            component={InputField}
                                        />
                                    </Grid.Col>

                                    <Grid.Col span={6}>
                                        <Field
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Your last name"
                                            label="Last name"
                                            required={true}
                                            className="text-sm"
                                            value={values.lastName}
                                            component={InputField}
                                        />
                                    </Grid.Col> */}

                                    <Grid.Col span={12}>
                                        <Field
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            label="Email address"
                                            required={true}
                                            className="text-sm"
                                            value={values.email}
                                            component={InputField}
                                        />
                                    </Grid.Col>

                                    {/* <Grid.Col span={12}>
                                        <Field
                                            id="userName"
                                            name="userName"
                                            placeholder="Enter your username"
                                            label="Username"
                                            required={true}
                                            className="text-sm"
                                            value={values.userName}
                                            component={InputField}
                                        />
                                    </Grid.Col> */}
                                </Grid>

                                <Flex w={"100%"} justify={"center"}>
                                    <Button
                                        className='rounded-lg'
                                        fz={{ base: 16 }}
                                        fw={600}
                                        w={{ base: 198 }}
                                        h={40}
                                        bg={isEnable ? "#435EFB" : "gray"}
                                        px={0}
                                        type='submit'
                                        c={"white"}
                                        mx={"auto"}
                                        loading={isSubmitting}
                                        disabled={!isEnable}
                                    >
                                        Submit
                                    </Button>
                                </Flex>
                            </Form>
                        );
                    }}
                </Formik>
            </Modal>

            <SuccessPopup opened={susscessOpened} close={successClose} />
        </>
    );
}

export const SuccessPopup = ({ opened, close }: { opened: boolean, close: () => void }) => {
    useEffect(() => {
        const func = () => {
            if (opened) {
                close();
            }
        };
        const timeoutId = setTimeout(func, 3000);

        return () => clearTimeout(timeoutId);

    }, [close, opened]);

    return (
        <Modal
            opened={opened}
            onClose={close}
            size={259}
            centered={true}
            classNames={{
                header: "hidden",
                body: "py-6"
            }}
        >
            <Flex direction={"column"} gap={16} align={"center"}>
                <Tick />
                <Text c={"#131416"} fz={20} fw={600} lh={1.4}>
                    Welcome aboard! 🎉
                </Text>
            </Flex>
        </Modal>
    );
};

const Tick = () => {
    const container = useRef<any>(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/json/tick.json',
        });

        return () => animation.destroy();
    }, []);


    return (
        <Box ref={container} w={64} h={64} />
    );
};