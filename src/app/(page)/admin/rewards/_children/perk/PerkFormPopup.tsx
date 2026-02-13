/* eslint-disable @typescript-eslint/no-unused-vars */
import { AreaField, InputField, NumberInputField } from '@/components';
import { Popup } from '@/components/Popups/Popup';
import UploadImage from '@/components/upload/UploadImage';
import { Perk } from '@/types/perk';
import { notify } from '@/utils/notify';
import { Button, Checkbox, Flex, Input } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback, useState } from 'react';


interface Props {
    opened: boolean;
    close: () => void;
    initialValue?: Partial<Perk>;
    refresh: () => void;
}

export default function PerkFormPopup({ opened, close, initialValue, refresh }: Props) {

    const isEdit = !!initialValue?._id;

    const onSubmit = useCallback(async (values: Partial<Perk>, { setSubmitting }: FormikHelpers<Partial<Perk>>) => {
        try {
            setSubmitting(true);
            const res = await fetch(isEdit ? `/api/admin/perk/${initialValue?._id}` : `/api/admin/perk`, {
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
            title={"Edit Account levels"}
        >
            <Formik
                initialValues={initialValue || {}}
                onSubmit={onSubmit}
            >
                {({ values, setFieldValue, isSubmitting }) => {
                    const isValid = values.title && values.thumb && values.description;

                    console.log({ values });
                    return (
                        <Form className='w-full'>
                            <Flex direction={"column"} gap={16} align={"center"} px={24} pb={24}>
                                <UploadImage w={168} h={80} src={values.thumb} onSuccess={(src) => setFieldValue('thumb', src)} />

                                <Field
                                    name="title"
                                    placeholder="Enter perk title"
                                    label="Level title"
                                    required={true}
                                    className="text-sm"
                                    value={values.title}
                                    component={InputField}
                                />

                                <Field
                                    name="description"
                                    placeholder="Enter description"
                                    label="Description"
                                    required={true}
                                    className="text-sm"
                                    value={values.description}
                                    component={AreaField}
                                />

                                <Field
                                    name="pointToClaim"
                                    placeholder="Enter point to claim"
                                    label="Power point to claim"
                                    required={true}
                                    className="text-sm"
                                    value={values.pointToClaim}
                                    component={NumberInputField}
                                />

                                <Field
                                    name="priceToBuy"
                                    placeholder="Enter price to buy"
                                    label="Price to buy ($ USD)"
                                    required={true}
                                    className="text-sm"
                                    value={values.priceToBuy}
                                    prefix="$"
                                    component={NumberInputField}
                                />

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


const PerkInput = ({ value, onSave, h = 40 }: { value: string, h?: number, onSave: (value: string) => void }) => {
    const [inputValue, setInputValue] = useState<string>(value);

    return (
        <Flex justify={"space-between"} h={h} align={"center"} px={12} w={"100%"} bd={"1px solid #E7E7F8"} className='rounded-lg overflow-hidden'>
            <Input
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter perk'
                c={"#4D5053"}
                value={inputValue}
                classNames={{
                    input: "border-none pl-0"
                }}
                flex={1}
            />
            <Button
                h={26} fz={13}
                w={44}
                px={0}
                fw={500}
                c={inputValue ? "white" : "#6E7174"}
                onClick={() => {
                    onSave(inputValue);
                    setInputValue("");
                }}
                bg={inputValue ? "#376CEC" : "#C6CBD0"}
                className='transition-all duration-200'
            >
                Save
            </Button>
        </Flex>
    );
};