/* eslint-disable @typescript-eslint/no-unused-vars */
import { Popup } from '@/components/Popups/Popup';
import UploadImage from '@/components/upload/UploadImage';
import { PartnerSlide } from '@/types/partnerSlide';
import { notify } from '@/utils/notify';
import { Button, Checkbox, Flex } from '@mantine/core';
import { Form, Formik, FormikHelpers } from 'formik';
import { useCallback } from 'react';

interface Props {
    opened: boolean;
    close: () => void;
    initialValue?: Partial<PartnerSlide>;
    refresh: () => void;
}

export default function PartnerSideFormPopup({ opened, close, initialValue, refresh }: Props) {
    const isEdit = !!initialValue?._id;

    const onSubmit = useCallback(
        async (
            values: Partial<PartnerSlide>,
            { setSubmitting }: FormikHelpers<Partial<PartnerSlide>>,
        ) => {
            try {
                setSubmitting(true);
                const res = await fetch(
                    isEdit
                        ? `/api/admin/partner-side/${initialValue?._id}`
                        : `/api/admin/partner-side`,
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
        <Popup opened={opened} onClose={close} title={isEdit ? 'Edit partner' : 'New partner'}>
            <Formik initialValues={initialValue || { isActive: false }} onSubmit={onSubmit}>
                {({ values, setFieldValue, isSubmitting }) => {
                    const isValid = values.thumb;
                    return (
                        <Form className="w-full">
                            <Flex direction={'column'} gap={16} align={'center'} px={40} pb={24}>
                                <UploadImage
                                    src={values.thumb}
                                    onSuccess={(src) => setFieldValue('thumb', src)}
                                />

                                <div className="flex items-center gap-2 w-fit">
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
                                    Add partner
                                </Button>
                            </Flex>
                        </Form>
                    );
                }}
            </Formik>
        </Popup>
    );
}
