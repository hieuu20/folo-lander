/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from '@/components';
import { SelectField } from '@/components/custom-fields/SelectField';
import { IUser } from '@/types/user';
import { Box, Button, Flex, Text } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';
import { countries } from '@/utils';
import calendarIcon from "@public/icons/calendar.svg";
import Image from 'next/image';
import { dispatchFetchProfile } from '@/utils/windowEvent';

interface Props {
    profile: IUser;
}

export function AccountInfo({ profile }: Props) {
    const handleSignup = useCallback(async (values: any, {
        setSubmitting,
        setFieldError,
        resetForm
    }: FormikHelpers<any>) => {
        try {
            setSubmitting(true);
            const res = await fetch('/api/user', {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                method: "PUT",
                body: JSON.stringify(values)
            });
            const resData = await res.json();

            if (resData?.data?.data) {
                dispatchFetchProfile();
                resetForm();
            } else {
                setFieldError("email", resData?.data?.message);
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setSubmitting(false);
        }
    }, []);

    const getLocation = useCallback(() => {
        if (!profile.location) return "USA:United States";

        if (profile.location.split(":").length > 1) {
            return profile.location;
        } else {
            const country = countries.find(o => o.label == profile.location);
            if (country) {
                return `${country.value}:${country.label}`;
            }
        }
        return "US:United States";
    }, [profile]);

    return (
        <Box
            w={{ base: "100%" }}
            p={{ base: 16 }} c={"#131416"}
            bg={"#FFFFFF"}
            className='md:rounded-lg border border-[#E7E7F8] md:border-none'
        >
            <Text fz={{ base: 20 }} fw={600} mb={{ base: 12, md: 16 }}>
                Account info
            </Text>

            <Formik
                initialValues={{
                    email: profile.email,
                    username: profile.username,
                    location: getLocation(),
                    dateOfBirth: dayjs(profile.dob).format('YYYY-MM-DD')
                }}
                enableReinitialize={true}
                onSubmit={handleSignup}
            >
                {({ values, isSubmitting, setFieldValue }) => {
                    const isActive = values.username != profile.username || values.location != profile.location || values.dateOfBirth != profile.dob;

                    return (
                        <Form className='w-full'>
                            <Flex direction={"column"} gap={16} w={{ base: "100%" }}>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    label="Email"
                                    required={true}
                                    className="text-sm text-[#6E7174] bg-[#C6CBD0]"
                                    readOnly={true}
                                    value={values.email}
                                    component={InputField}
                                />

                                <Field
                                    name="username"
                                    placeholder="Enter username"
                                    label="Request username"
                                    required={true}
                                    className="text-sm text-[#131416] font-normal"
                                    value={values.username}
                                    component={InputField}
                                />

                                <Field
                                    name="location"
                                    placeholder="Select location"
                                    label="Location (public)"
                                    required={false}
                                    className="text-sm text-[#131416] font-normal"
                                    value={values.location}
                                    data={countries.map((o) => {
                                        return {
                                            value: `${o.value}:${o.label}`,
                                            label: `${o.flag} ${o.value}`
                                        };
                                    })}
                                    searchable={true}
                                    component={SelectField}
                                />

                                <DatePickerInput
                                    label="Date of birth"
                                    placeholder="Pick date"
                                    value={dayjs(values.dateOfBirth).toDate()}
                                    classNames={{
                                        label: "text-[#4D5053] text-xs leading-[1.2] font-normal",
                                        input: "h-10 border border-[#E7E7F8] rounded-lg px-3 text-sm text-[#131416] font-normal",
                                        section: "pr-3 w-fit"
                                    }}
                                    w={"100%"}
                                    onChange={(value) => {
                                        setFieldValue('dateOfBirth', dayjs(value).format('YYYY-MM-DD'));
                                    }}
                                    rightSection={
                                        <Image src={calendarIcon} alt='calendarIcon' className='w-6 h-auto cursor-pointer' />
                                    }
                                />

                                <Button
                                    h={40}
                                    w={198}
                                    bg={isActive ? "#376CEC" : "#C6CBD0"}
                                    c={isActive ? "white" : "#6E7174"}
                                    disabled={!isActive}
                                    fz={16}
                                    fw={600}
                                    loading={isSubmitting}
                                    className='rounded-lg'
                                    type='submit'
                                >
                                    Save changes
                                </Button>
                            </Flex>
                        </Form>
                    );
                }}
            </Formik>
        </Box>
    );
}
