"use client";

import { useApp } from '@/app/context/AppContext';
import { AreaField, InputField } from '@/components';
import { SystemSetting } from '@/types/systemSetting';
import { notify } from '@/utils/notify';
import { Button, Stack, Text, Title } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

export function TrackingSetting() {
    const { setting } = useApp();
    const router = useRouter();

    const onSubmit = useCallback(async (values: SystemSetting, { setSubmitting }: FormikHelpers<SystemSetting>) => {
        try {
            setSubmitting(true);
            const res = await fetch(`/api/admin/setting`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(values)
            });

            const resData = await res.json();

            if (resData.data._id) {
                router.refresh();
                notify.success("Action successfully");
            } else {
                notify.error("Action fail");
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            notify.error("Action fail");
        } finally {
            setSubmitting(false);
        }
    }, [router]);

    if (!setting) {
        return <></>;
    }

    return (
        <Formik
            initialValues={setting}
            onSubmit={onSubmit}
        >
            {({ values, isSubmitting }) => {
                console.log({ values });
                return (
                    <Form className='w-full'>
                        <div className="max-w-[700px] bg-white px-4">
                            <Title order={4} fz={14} fw={600}>Tracking setup</Title>
                            <Text size="sm" c="#4D5053" className="mt-1 mb-6">
                                Add 3rd party tracking pixels to measure conversions and traffic.
                            </Text>

                            <Stack gap={24}>

                            </Stack>

                            {/* Google Adwords */}
                            <Section title="Google Adwords">
                                <TwoCols>
                                    <Field
                                        name="tracking.googleAdwords.id"
                                        placeholder="Enter ID"
                                        label="Adwords conversion ID"
                                        required={true}
                                        className="text-sm"
                                        value={values.tracking.googleAdwords.id}
                                        component={InputField}
                                    />

                                    <Field
                                        name="tracking.googleAdwords.label"
                                        placeholder="Enter label"
                                        label="Adwords conversion label"
                                        required={true}
                                        className="text-sm"
                                        value={values.tracking.googleAdwords.label}
                                        component={InputField}
                                    />
                                </TwoCols>
                            </Section>

                            {/* Google Analytics */}
                            <Section title="Google Analytics">
                                <TwoCols>
                                    <Field
                                        name="tracking.googleAnalytics.uaId"
                                        placeholder="Enter ID"
                                        label="UA tracking ID"
                                        required={true}
                                        className="text-sm"
                                        value={values.tracking.googleAnalytics.uaId}
                                        component={InputField}
                                    />

                                    <Field
                                        name="tracking.googleAnalytics.ga4Id"
                                        placeholder="Enter ID"
                                        label="GA4 tracking ID"
                                        required={true}
                                        className="text-sm"
                                        value={values.tracking.googleAnalytics.ga4Id}
                                        component={InputField}
                                    />
                                </TwoCols>
                            </Section>

                            {/* Meta Pixel */}
                            <Section title="Meta Pixel (Facebook/Instagram)">
                                <TwoCols>
                                    <Field
                                        name="tracking.metaPixel.pixelId"
                                        placeholder="Enter ID"
                                        label="Pixel ID (Can be found in Event Manager)"
                                        required={true}
                                        className="text-sm"
                                        value={values.tracking.metaPixel.pixelId}
                                        component={AreaField}
                                    />

                                    <Field
                                        name="tracking.metaPixel.token"
                                        placeholder="Enter ID"
                                        label="Conversions API Access Token"
                                        required={true}
                                        className="text-sm"
                                        value={values.tracking.metaPixel.token}
                                        component={AreaField}
                                    />
                                </TwoCols>
                            </Section>

                            {/* Snapchat */}
                            <Section title="Snapchat Pixel">
                                <Field
                                    name="tracking.snapchatPixel.id"
                                    placeholder="Enter ID"
                                    label="Snapchat Pixel ID"
                                    required={true}
                                    className="text-sm"
                                    value={values.tracking.snapchatPixel.id}
                                    component={InputField}
                                />
                            </Section>

                            {/* TikTok */}
                            <Section title="Tiktok Pixel">
                                <Field
                                    name="tracking.tiktokPixel.id"
                                    placeholder="Enter ID"
                                    label="Tiktok Pixel ID"
                                    required={true}
                                    className="text-sm"
                                    value={values.tracking.tiktokPixel.id}
                                    component={InputField}
                                />
                            </Section>

                            {/* X */}
                            <Section title="X (Twitter) Tracking">
                                <Field
                                    name="tracking.xTracking.id"
                                    placeholder="Enter ID"
                                    label="X (Twitter) Pixel ID"
                                    required={true}
                                    className="text-sm"
                                    value={values.tracking.xTracking.id}
                                    component={InputField}
                                />
                            </Section>

                            {/* Omnisend */}
                            <Section title="Omnisend code">
                                <Field
                                    name="tracking.omnisend.code"
                                    placeholder="Enter ID"
                                    label="Omnisend tracking code"
                                    required={true}
                                    className="text-sm"
                                    value={values.tracking.omnisend.code}
                                    component={InputField}
                                />
                            </Section>

                            <Button
                                h={40}
                                w={198}
                                bg={"#376CEC"}
                                c={"white"}
                                fz={16}
                                fw={600}
                                loading={isSubmitting}
                                className='rounded-lg'
                                type='submit'
                            >
                                Save changes
                            </Button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}


function Section({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <div className="mb-6">
            <Text fw={400} fz={12} c={"#4D5053"} className="mb-3">
                {title}
            </Text>
            {children}
        </div>
    );
}

function TwoCols({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children}
        </div>
    );
}