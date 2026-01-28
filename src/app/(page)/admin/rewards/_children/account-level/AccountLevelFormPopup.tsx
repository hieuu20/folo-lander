/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputField } from '@/components';
import { Popup } from '@/components/Popups/Popup';
import { AccountLevel } from '@/types/accountLevel';
import { notify } from '@/utils/notify';
import { Button, Checkbox, Flex, Input, Stack, Text } from '@mantine/core';
import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { isNil } from 'lodash';
import React, { useCallback, useState } from 'react';


interface Props {
    opened: boolean;
    close: () => void;
    initialValue?: Partial<AccountLevel>;
    refresh: () => void;
}

export default function AccountLevelFormPopup({ opened, close, initialValue, refresh }: Props) {

    const isEdit = !!initialValue?._id;
    const [editIndex, setEditIndex] = useState<number>();

    const onSubmit = useCallback(async (values: Partial<AccountLevel>, { setSubmitting }: FormikHelpers<Partial<AccountLevel>>) => {
        try {
            setSubmitting(true);
            const res = await fetch(isEdit ? `/api/admin/account-level/${initialValue?._id}` : `/api/admin/account-level`, {
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
                    console.log({ values });
                    const isValid = values.title && values.perks;
                    return (
                        <Form className='w-full'>
                            <Flex direction={"column"} gap={16} align={"center"} px={24} pb={24}>
                                <Field
                                    name="title"
                                    placeholder="Enter account level title"
                                    label="Level title"
                                    required={true}
                                    className="text-sm"
                                    value={values.title}
                                    component={InputField}
                                />

                                <Field
                                    name="mintPoint"
                                    placeholder="Enter min power points"
                                    label="Min power points"
                                    required={true}
                                    className="text-sm"
                                    value={values.mintPoint}
                                    component={InputField}
                                />

                                <Flex direction={"column"} w={"100%"}>
                                    <span>
                                        <span className="text-[#4D5053] text-xs leading-[1.2]">Perks</span>
                                        <span className="text-[#F11E11] ml-[2px] leading-[1.2] text-sm">*</span>
                                    </span>

                                    <Stack w={"100%"} gap={0} mb={8}>
                                        {values.perks?.map((o, index) => {
                                            const isEdit = !isNil(editIndex) && editIndex == index;
                                            return isEdit ? (
                                                <PerkInput
                                                    key={index}
                                                    value={o}
                                                    onSave={(value) => {
                                                        setFieldValue("perks", values.perks?.map((x, i) => i == index ? value : x));
                                                        setEditIndex(undefined);
                                                    }}
                                                    h={46.5}
                                                    isEdit={true}
                                                />
                                            ) : (
                                                <Flex
                                                    key={index}
                                                    py={12} pr={12}
                                                    bg={index % 2 != 0 ? "#F7F7FC" : "white"}
                                                    className='border-b-[1px] border-solid border-[#E7E7F8]'
                                                    align={"center"}
                                                >
                                                    <IconCheck size={16} color='#19A50D' className='mr-2' />
                                                    <Text c={"#131416"} fz={14} flex={1}>{o}</Text>
                                                    <IconTrash
                                                        size={20}
                                                        className='mr-4 cursor-pointer'
                                                        onClick={() => setFieldValue("perks", values.perks?.filter((x, i) => i != index))}
                                                    />
                                                    <IconEdit
                                                        size={20}
                                                        className='mr-4 cursor-pointer'
                                                        onClick={() => setEditIndex(index)}
                                                    />
                                                </Flex>
                                            );
                                        })}
                                    </Stack>
                                    <PerkInput
                                        value=''
                                        onSave={(value) => setFieldValue("perks", [...(values.perks || []), value])}
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


const PerkInput = ({ value, onSave, h = 40, isEdit = false }: { value: string, h?: number, onSave: (value: string) => void, isEdit?: boolean }) => {
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
                {isEdit ? "Save" : "Add"}
            </Button>
        </Flex>
    );
};