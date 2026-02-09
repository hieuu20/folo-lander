/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputPasswordField } from '@/components';
import { Box, Button, Flex, Text } from '@mantine/core';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import * as Yup from 'yup';

export function ChangePassword() {

  const handleSignup = useCallback(async (values: any, {
    setSubmitting,
    setFieldError,
    resetForm
  }: FormikHelpers<any>) => {
    try {
      setSubmitting(true);
      const res = await fetch('/api/auth/change-password', {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PUT",
        body: JSON.stringify(values)
      });
      const resData = await res.json();

      if (resData?.data?.status == 200) {
        resetForm();
      }

      if (!resData?.data?.data) {
        setFieldError("email", resData?.data?.message);
      }
    } catch (err) {
      console.log({ err });
    } finally {
      setSubmitting(false);
    }
  }, []);

  return (
    <Box w={{ base: "100%" }} p={{ base: 16 }} c={"#131416"} h={"fit-content"} bg={"#FFFFFF"} className='md:rounded-lg'>
      <Text fz={{ base: 20 }} fw={600} mb={{ base: 4 }}>
        Change password
      </Text>

      <Text c={"#4D5053"} fz={{ base: 13, md: 14 }} lh={1.2} mb={{ base: 12, md: 16 }}>
        If your account was created using social login, you can’t change your password.
      </Text>

      <Formik
        initialValues={{
          password: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          newPassword: Yup.string()
            .required('New password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
              /(\d|[!@#$%^&*()_\-+=.,?])/,
              'Must contain at least one number or one special character'
            ),
        })}
        onSubmit={handleSignup}
      >
        {({ values, isSubmitting, isValid }) => {
          const isActive = isValid && values.password && values.newPassword && values.confirmPassword && values.newPassword == values.confirmPassword;

          return (
            <Form className='w-full'>
              <Flex direction={"column"} gap={16} w={{ base: "100%" }}>
                <Field
                  name="password"
                  placeholder="Enter current password"
                  label="Current password"
                  required={true}
                  className="text-sm text-[#131416] font-normal"
                  value={values.password}
                  component={InputPasswordField}
                />

                <Flex direction={"column"} gap={16}>
                  <Field
                    name="newPassword"
                    placeholder="Enter new password"
                    label="New password"
                    required={true}
                    className="text-sm text-[#131416] font-normal"
                    value={values.newPassword}
                    component={InputPasswordField}
                  />

                  <ul className='text-xs text-[#4D5053] leading-[1.4] list-disc pl-4'>
                    <li>Password must be at least 8 characters.</li>
                    <li>Must contain at least one number or one special character: ! @ # $ % ^  & * ( ) _ - + = . , ?</li>
                  </ul>
                </Flex>

                <Field
                  name="confirmPassword"
                  placeholder="Re-enter new password"
                  label="Confirm new password"
                  required={true}
                  className="text-sm text-[#131416] font-normal"
                  value={values.confirmPassword}
                  component={InputPasswordField}
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
                  Change password
                </Button>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
