/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputField } from '@/components';
import { Popup } from '@/components/Popups/Popup';
import UploadImage from '@/components/upload/UploadImage';
import { TinyEditor } from '@/lib/tiny-editor';
import { INews } from '@/types/news';
import { notify } from '@/utils/notify';
import { Button, Checkbox, Flex } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import Image from 'next/image';
import React, { useCallback } from 'react';
import calendarIcon from "@public/icons/calendar.svg";


interface Props {
  opened: boolean;
  close: () => void;
  initialValue?: Partial<INews>;
  refresh: () => void;
}

export function NewFormPopup({ opened, close, initialValue, refresh }: Props) {

  const isEdit = !!initialValue?._id;

  const onSubmit = useCallback(async (values: Partial<INews>, { setSubmitting }: FormikHelpers<Partial<INews>>) => {
    try {
      setSubmitting(true);
      const res = await fetch(isEdit ? `/api/admin/news/${initialValue?._id}` : `/api/admin/news`, {
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
      size={900}
    >
      <Formik
        initialValues={initialValue || {}}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => {
          // const isValid = values.title && values.thumb && values.description;
          const isValid = true;

          console.log({ values });
          return (
            <Form className='w-full'>
              <Flex direction={"column"} gap={16} align={"center"} px={24} pb={24}>
                <UploadImage w={300} h={240} src={values.thumb} onSuccess={(src) => setFieldValue('thumb', src)} />

                <Field
                  name="title"
                  placeholder="Enter news title"
                  label="News title"
                  required={true}
                  className="text-sm"
                  value={values.title}
                  component={InputField}
                />

                <DatePickerInput
                  label="Created date"
                  placeholder="Pick date"
                  value={dayjs(values.date).toDate()}
                  classNames={{
                    label: "text-[#4D5053] text-xs leading-[1.2] font-normal",
                    input: "h-10 border border-[#E7E7F8] rounded-lg px-3 text-sm text-[#131416] font-normal",
                    section: "pr-3 w-fit"
                  }}
                  w={"100%"}
                  onChange={(value) => {
                    setFieldValue('date', dayjs(value).toISOString());
                  }}
                  rightSection={
                    <Image src={calendarIcon} alt='calendarIcon' className='w-6 h-auto cursor-pointer' />
                  }
                />

                <Flex gap={24} w={"100%"}>
                  <div className="flex items-center gap-2 w-fit">
                    <Checkbox
                      checked={values.hasLink}
                      color="#376CEC"
                      onChange={(e) => {
                        setFieldValue("hasLink", e.target.checked);
                      }}
                    />
                    <span className="text-sm whitespace-nowrap">
                      Link to external
                    </span>
                  </div>

                  <Field
                    name="buttonLink"
                    placeholder="Enter external link"
                    required={true}
                    className="text-sm"
                    value={values.buttonLink}
                    flex={1}
                    component={InputField}
                  />

                  <Field
                    name="buttonLabel"
                    placeholder="Enter external label"
                    required={true}
                    className="text-sm"
                    value={values.buttonLabel}
                    flex={1}
                    component={InputField}
                  />
                </Flex>

                <TinyEditor
                  onChange={(value) => setFieldValue("content", value)}
                  initialValue={values.content}
                  h={800}
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
