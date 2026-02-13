'use client';

import { InputField } from '@/components';
import { Popup } from '@/components/Popups/Popup';
import UploadImage from '@/components/upload/UploadImage';
import { notify } from '@/utils/notify';
import { Button, Checkbox, Flex, Select } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import Image from 'next/image';
import TickVerified from '@public/icons/verify-tick.svg';
import TickPro from '@public/icons/pro-tick.svg';
import { CreatorBadge, IFeaturedCreator } from '@/types/featuredCreator';

interface Props {
    opened: boolean;
    close: () => void;
    initialValue?: Partial<IFeaturedCreator>;
    refresh: () => void;
}

const BADGE_OPTIONS = [
    {
        value: CreatorBadge.VERIFIED,
        label: 'Verified Creator',
        leftSection: <Image src={TickVerified} alt="" width={24} height={24} />,
    },
    {
        value: CreatorBadge.PRO,
        label: 'Pro Creator',
        leftSection: <Image src={TickPro} alt="" width={24} height={24} />,
    },
];

export default function FeaturedCreatorFormPopup({ opened, close, initialValue, refresh }: Props) {
    const isEdit = !!initialValue?._id;

    const onSubmit = useCallback(
        async (
            values: Partial<IFeaturedCreator>,
            { setSubmitting }: FormikHelpers<Partial<IFeaturedCreator>>,
        ) => {
            try {
                setSubmitting(true);
                const res = await fetch(
                    isEdit
                        ? `/api/admin/featured-creator/${initialValue?._id}`
                        : `/api/admin/featured-creator`,
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            title={isEdit ? 'Edit Featured Creator' : 'New Featured Creator'}
        >
            <Formik initialValues={initialValue || { isActive: true }} onSubmit={onSubmit}>
                {({ values, setFieldValue, isSubmitting }) => {
                    const isValid = values.name && values.avatar && values.role;
                    return (
                        <Form className="w-full">
                            <Flex direction={'column'} gap={16} align={'center'} px={40} pb={24}>
                                <UploadImage
                                    src={values.avatar}
                                    onSuccess={(src) => setFieldValue('avatar', src)}
                                />

                                <Select
                                    label="Badge"
                                    placeholder="Select badge"
                                    data={BADGE_OPTIONS.map((opt) => ({
                                        value: opt.value,
                                        label: opt.label,
                                    }))}
                                    value={values.badge}
                                    onChange={(value) => setFieldValue('badge', value)}
                                    required
                                    className="w-full"
                                    leftSection={
                                        values.badge === CreatorBadge.VERIFIED ? (
                                            <Image
                                                src={TickVerified}
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        ) : values.badge === CreatorBadge.PRO ? (
                                            <Image src={TickPro} alt="" width={20} height={20} />
                                        ) : null
                                    }
                                    renderOption={({ option }) => {
                                        const icon =
                                            option.value === CreatorBadge.VERIFIED ? (
                                                <Image
                                                    src={TickVerified}
                                                    alt=""
                                                    width={20}
                                                    height={20}
                                                />
                                            ) : option.value === CreatorBadge.PRO ? (
                                                <Image
                                                    src={TickPro}
                                                    alt=""
                                                    width={20}
                                                    height={20}
                                                />
                                            ) : null;

                                        return (
                                            <Flex gap={8} align="center">
                                                {icon}
                                                <span>{option.label}</span>
                                            </Flex>
                                        );
                                    }}
                                    styles={{
                                        label: { fontSize: 14, fontWeight: 500 },
                                    }}
                                />

                                <Field
                                    id="name"
                                    name="name"
                                    placeholder="Enter creator name"
                                    label="Creator name"
                                    required={true}
                                    className="text-sm"
                                    value={values.name}
                                    component={InputField}
                                />

                                <Field
                                    id="role"
                                    name="role"
                                    placeholder="Enter type"
                                    label="Type"
                                    required={true}
                                    className="text-sm"
                                    value={values.role}
                                    component={InputField}
                                />

                                <Field
                                    id="profileLink"
                                    name="profileLink"
                                    placeholder="Enter profile link"
                                    label="Profile link"
                                    required={false}
                                    className="text-sm"
                                    value={values.profileLink}
                                    component={InputField}
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
