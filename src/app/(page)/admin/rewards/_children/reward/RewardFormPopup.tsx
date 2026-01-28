/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputField } from '@/components';
import { Popup } from '@/components/Popups/Popup';
import UploadImage from '@/components/upload/UploadImage';
import { Reward } from '@/types/reward';
import { notify } from '@/utils/notify';
import { Button, Checkbox, Flex, Modal } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';


interface Props {
    opened: boolean;
    close: () => void;
    initialValue?: Partial<Reward>;
    refresh: () => void;
}

export default function RewardFormPopup({ opened, close, initialValue, refresh }: Props) {

    const isEdit = !!initialValue?._id;

    const onSubmit = useCallback(async (values: Partial<Reward>, { setSubmitting }: FormikHelpers<Partial<Reward>>) => {
        try {
            setSubmitting(true);
            const res = await fetch(isEdit ? `/api/admin/reward/${initialValue?._id}` : `/api/admin/reward`, {
                method: isEdit ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(values)
            });

            const resData = await res.json();

            if (resData.data._id) {
                close();
                refresh();
                notify.success("Action successfully");
            } else {
                notify.error("Action fail");
            }
        } catch (err) {
            notify.error("Action fail");
        } finally {
            setSubmitting(false);
        }
    }, [close, initialValue?._id, isEdit, refresh]);



    return (
        <Popup
            opened={opened}
            onClose={close}
            title={isEdit ? "Edit Leaderboard Reward" : "New Leaderboard Reward"}
        >
            <Formik
                initialValues={initialValue || {}}
                onSubmit={onSubmit}
            >
                {({ values, setFieldValue, isSubmitting }) => {
                    console.log({ values });
                    const isValid = values.leaderboardFrom && values.leaderboardTo && values.icon && values.icon;
                    return (
                        <Form className='w-full'>
                            <Flex direction={"column"} gap={16} align={"center"} px={40} pb={24}>
                                <UploadImage src={values.icon} onSuccess={(src) => setFieldValue('icon', src)} />

                                <Field
                                    id="name"
                                    name="name"
                                    placeholder="Enter reward name"
                                    label="Reward title"
                                    required={true}
                                    className="text-sm"
                                    value={values.name}
                                    component={InputField}
                                />

                                <Flex className='grid grid-cols-2 w-full gap-4'>
                                    <Field
                                        name="leaderboardFrom"
                                        placeholder="Enter rank from"
                                        label="From"
                                        required={true}
                                        className="text-sm"
                                        value={values.leaderboardFrom}
                                        component={InputField}
                                    />
                                    <Field
                                        id="leaderboardTo"
                                        name="leaderboardTo"
                                        placeholder="Enter rank to"
                                        label="To"
                                        required={true}
                                        className="text-sm"
                                        value={values.leaderboardTo}
                                        component={InputField}
                                    />
                                </Flex>
                                <div className="flex items-center gap-2 w-fit">
                                    <Checkbox
                                        checked={values.isActive}
                                        color="#376CEC"
                                        onChange={(e) => {
                                            setFieldValue("isActive", e.target.checked);
                                        }}
                                    />
                                    <span className="font-medium">
                                        Active
                                    </span>
                                </div>

                                <Button
                                    h={40}
                                    w={198}
                                    disabled={!isValid}
                                    bg={isValid ? "#376CEC" : "#C6CBD0"}
                                    c={isValid ? "white" : "#6E7174"}
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
        </Popup>
    );
}


