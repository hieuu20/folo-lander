/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { InputField, InputPasswordField } from '@/components';
import { validateEmail } from '@/utils';
import { dispatchFetchProfile } from '@/utils/windowEvent';
import { Button, Flex } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

export default function AdminLoginPage() {
    const router = useRouter();
    const onSubmit = useCallback(async (values: any, {
        setErrors,
        setSubmitting,
    }: FormikHelpers<any>) => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/admin/login", {
                method: "POST",
                body: JSON.stringify(values)
            });
            const result = await res.json();

            if (result?.data?.accessToken) {
                dispatchFetchProfile();
                router.push("/admin");
            } else {
                setErrors({ password: result?.data?.message });
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setSubmitting(false);
        }
    }, [router]);

    return (
        <Flex w={"100%"} h={"100vh"} align={"center"} justify={"center"} bg={"white"}>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={onSubmit}
            >
                {({ values, isSubmitting }) => {
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
                                    type='submit'
                                    c={"white"}
                                    mx={"auto"}
                                    loading={isSubmitting}
                                    disabled={!isEnable}
                                >
                                    Login
                                </Button>
                            </Flex>
                        </Form>
                    );
                }}
            </Formik>
        </Flex>
    );
}
