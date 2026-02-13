/* eslint-disable @typescript-eslint/no-unused-vars */
import { Popup } from '@/components/Popups/Popup';
import { IPeopleSay } from '@/types/peopleSay';
import { notify } from '@/utils/notify';
import { Button, Checkbox, Flex, Textarea } from '@mantine/core';
import { Form, Formik, FormikHelpers } from 'formik';
import { useCallback } from 'react';

interface Props {
    opened: boolean;
    close: () => void;
    initialValue?: Partial<IPeopleSay>;
    refresh: () => void;
}

export default function PeopleSayFormPopup({ opened, close, initialValue, refresh }: Props) {
    const isEdit = !!initialValue?._id;

    const onSubmit = useCallback(
        async (
            values: Partial<IPeopleSay>,
            { setSubmitting }: FormikHelpers<Partial<IPeopleSay>>,
        ) => {
            try {
                setSubmitting(true);
                const res = await fetch(
                    isEdit ? `/api/admin/people-say/${initialValue?._id}` : `/api/admin/people-say`,
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
        <Popup
            opened={opened}
            onClose={close}
            title={isEdit ? 'Edit feedback' : 'Add feedback'}
        >
            <Formik
                initialValues={initialValue || { feedback: '', isActive: false, priority: 50 }}
                onSubmit={onSubmit}
            >
                {({ values, setFieldValue, isSubmitting }) => {
                    const isValid = values.feedback && values.feedback.trim().length > 0;
                    return (
                        <Form className="w-full">
                            <Flex direction={'column'} gap={16} align={'center'} px={40} pb={24}>
                                <Textarea
                                    label="Feedback"
                                    placeholder="Enter feedback from people"
                                    value={values.feedback}
                                    onChange={(e) => setFieldValue('feedback', e.target.value)}
                                    required
                                    className="w-full"
                                    rows={6}
                                    minRows={6}
                                    maxRows={10}
                                    styles={{
                                        label: { fontSize: 14, fontWeight: 500, marginBottom: 8 },
                                        input: { fontSize: 14 },
                                    }}
                                />

                                <div className="flex items-center justify-center gap-2 w-full">
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
