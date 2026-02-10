'use client';

import { InputField } from '@/components';
import { Popup } from '@/components/Popups/Popup';
import { Faq } from '@/types/faq';
import { notify } from '@/utils/notify';
import { Button, Checkbox, Flex, Stack } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';

interface Props {
    opened: boolean;
    close: () => void;
    initialValue?: Partial<Faq>;
    refresh: () => void;
}

export default function FaqsFormPopup({ opened, close, initialValue, refresh }: Props) {
    const isEdit = !!initialValue?._id;

    const onSubmit = useCallback(
        async (values: Partial<Faq>, { setSubmitting }: FormikHelpers<Partial<Faq>>) => {
            try {
                setSubmitting(true);
                const res = await fetch(
                    isEdit ? `/api/admin/faq/${initialValue?._id}` : `/api/admin/faq`,
                    {
                        method: isEdit ? 'PUT' : 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        },
                        body: JSON.stringify(values),
                    },
                );

                const resData = await res.json();

                if (resData.data._id) {
                    close();
                    refresh();
                    notify.success('Action successfully');
                } else {
                    notify.error('Action fail');
                }
            } catch (err) {
                notify.error('Action fail');
            } finally {
                setSubmitting(false);
            }
        },
        [close, initialValue?._id, isEdit, refresh],
    );

    return (
        <Popup opened={opened} onClose={close} title={isEdit ? 'Edit FAQ' : 'New FAQ'}>
            <Formik initialValues={initialValue || { isActive: false }} onSubmit={onSubmit}>
                {({ values, setFieldValue, isSubmitting }) => {
                    const isValid = values.question && values.answer;
                    return (
                        <Form className="w-full">
                            <Flex direction={'column'} gap={16} align={'center'} px={40} pb={24}>
                                <Field
                                    id="question"
                                    name="question"
                                    placeholder="Enter question"
                                    label="Question"
                                    required={true}
                                    className="text-sm"
                                    value={values.question}
                                    component={InputField}
                                />

                                <Stack gap={8} className="w-full">
                                    <label className="text-sm font-medium">
                                        Answer<span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="answer"
                                        placeholder="Enter answer"
                                        value={values.answer || ''}
                                        onChange={(e) => setFieldValue('answer', e.target.value)}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        rows={6}
                                        style={{
                                            fontSize: 14,
                                            fontFamily: 'inherit',
                                        }}
                                    />
                                </Stack>

                                <div className="flex items-center gap-2 w-full">
                                    <Checkbox
                                        checked={values.isActive}
                                        color="#376CEC"
                                        onChange={(e) => {
                                            setFieldValue('isActive', e.target.checked);
                                        }}
                                    />
                                    <span className="font-medium">Active</span>
                                </div>

                                <Button
                                    h={40}
                                    w={198}
                                    disabled={!isValid}
                                    bg={isValid ? '#376CEC' : '#C6CBD0'}
                                    c={isValid ? 'white' : '#6E7174'}
                                    fz={16}
                                    fw={600}
                                    loading={isSubmitting}
                                    className="rounded-lg"
                                    type="submit"
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
