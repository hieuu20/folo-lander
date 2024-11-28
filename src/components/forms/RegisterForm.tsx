"use client";

import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useCallback } from "react";
import * as Yup from "yup";

import { dialCodes, emailRegExp } from "@/utils";
import {
  Button,
  ComboboxItem,
  ComboboxLikeRenderOptionInput,
  Flex,
  Grid,
  Radio,
  Text,
} from "@mantine/core";
import {
  CreateBusinessContactDto,
  CreateBusinessContactResponse,
} from "@/app/api/(controller)/public/business-contact/_service/dto";
import { InputField } from "../custom-fields";
import { SelectField } from "../custom-fields/SelectField";
import Image from "next/image";
import { PhoneNumberField } from "../custom-fields/PhoneNumberField";
import { useDisclosure } from "@/hooks";
import { SuccessModal } from "../modals/SuccessModal";

interface Props {
  closeAuthModal: () => void;
}

const businessTypes = [
  {
    label: 'Production Company',
    value: 'production_company'
  },
  {
    label: 'Store',
    value: 'store'
  }
];

export function RegisterForm({ closeAuthModal }: Props) {
  const [opened, { close: closeSuccess, open: openSuccess }] = useDisclosure();

  const handleRegister = async (
    values: CreateBusinessContactDto,
    { setSubmitting, resetForm }: FormikHelpers<CreateBusinessContactDto>
  ) => {
    try {
      setSubmitting(true);
      const res = await fetch("api/public/business-contact", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const result: CreateBusinessContactResponse = await res.json();

      if (result.data) {
        resetForm();
        openSuccess();
        return;
      }
    } catch (error) {
      console.log({ error });
      alert("An error occurred during data processing");
    } finally {
      setSubmitting(false);
    }
  };

  const renderCountryOption = useCallback(
    ({ option }: ComboboxLikeRenderOptionInput<ComboboxItem>) => {
      const current = dialCodes.find((c) => c.name === option.value);

      if (!current) return null;

      return (
        <Flex flex="1" gap={8} align="center">
          <Image
            src={current?.flag ?? ""}
            alt="flag"
            width={36}
            height={24}
            className="object-cover"
          />
          {option.label}
        </Flex>
      );
    },
    []
  );

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          businessName: "",
          businessType: businessTypes[0].value,
          contactName: "",
          country: "The United Kingdom",
          location: "",
          phoneCode: "+44",
          phoneNumber: "",
          taxNumber: "",
          timeOfOperation: "",
          isAccept: false,
        }}
        onSubmit={handleRegister}
        validationSchema={Yup.object({
          email: Yup.string()
            .trim()
            .matches(emailRegExp, "Invalid email address")
            .email("Invalid email address")
            .required("Please enter your email"),
          businessName: Yup.string()
            .trim()
            .required("Please enter your business name"),
          contactName: Yup.string()
            .trim()
            .max(255, "Contact name cannot be more than 255 characters")
            .required("Please enter your contact name"),
          country: Yup.string().trim().required("Please enter your country"),
          location: Yup.string().trim().required("Please enter your location"),
          phoneCode: Yup.string()
            .trim()
            .required("Please enter your dialing code"),
          phoneNumber: Yup.string()
            .trim()
            .max(255, "Cannot be more than 255 characters")
            .required("Please enter your phone number"),
          taxNumber: Yup.string()
            .trim()
            .max(255, "Cannot be more than 255 characters")
            .required("Please enter your tax number"),
          timeOfOperation: Yup.string()
            .trim()
            .max(255, "Cannot be more than 255 characters")
            .required("This field is required"),
          isAccept: Yup.boolean()
            .oneOf([true], "You must agree to the terms")
            .required("This field is required"),
        })}
      >
        {({ values, dirty, isSubmitting, isValid, setFieldValue }) => {
          const currentCountryFlag = dialCodes.find(
            (c) => c.name === values.country
          );

          return (
            <Form>
              <Grid mb={16}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="businessType"
                    id="Business type*"
                    label={"Business type"}
                    required={true}
                    placeholder="Enter business type"
                    value={values.businessType}
                    component={SelectField}
                    data={businessTypes}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="businessName"
                    id="businessName"
                    label={"Business/Company name*"}
                    required={true}
                    placeholder="Enter business name"
                    value={values.businessName}
                    component={InputField}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="contactName"
                    id="contactName"
                    label={"Contact name"}
                    required={true}
                    placeholder="Enter your first name"
                    value={values.contactName}
                    component={InputField}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="email"
                    id="Contact email"
                    label={"Contact email"}
                    required={true}
                    placeholder="example@knky.com"
                    value={values.email}
                    component={InputField}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="country"
                    id="Country"
                    label={"Country"}
                    required={true}
                    placeholder="Choose your country"
                    value={values.country}
                    data={dialCodes.map((c) => ({
                      value: c.name,
                      label: c.name,
                    }))}
                    renderOption={renderCountryOption}
                    searchable
                    leftSectionPointerEvents="none"
                    className="pl-[50px]"
                    leftSection={
                      <Image
                        src={currentCountryFlag?.flag ?? ""}
                        alt="flag"
                        width={36}
                        height={24}
                        className="object-cover mr-[-10px]"
                      />
                    }
                    component={SelectField}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="location"
                    id="Location"
                    label={"Location"}
                    required={true}
                    placeholder="Enter your location"
                    value={values.location}
                    component={InputField}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="phoneNumber"
                    areaName="phoneCode"
                    id="Phone number"
                    label={"Phone number"}
                    required={true}
                    placeholder="0000 000 000"
                    value={values.phoneNumber}
                    component={PhoneNumberField}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="taxNumber"
                    id="Tax number"
                    label={"Tax number"}
                    required={true}
                    placeholder="Enter Tax number"
                    value={values.taxNumber}
                    component={InputField}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Field
                    name="timeOfOperation"
                    id="timeOfOperation"
                    label={"How long has your business been in operation?"}
                    required={true}
                    placeholder="Enter here"
                    value={values.timeOfOperation}
                    component={InputField}
                  />
                </Grid.Col>
              </Grid>
              <Flex gap={12} mb={24}>
                <Radio
                  checked={values.isAccept}
                  onChange={(event) => {
                    setFieldValue("isAccept", event.currentTarget.checked);
                  }}
                  classNames={{
                    radio: "border border-solid border-[#808386]",
                  }}
                  pos={"relative"}
                  top={2}
                />
                <Text fz={{base: 13, md: 14}} lh={1.4} c={"#131416"}>
                  By checking this box, you confirm that you are at least 18
                  years of age (or the legal age of consent in your respective
                  country) and agree to our{" "}
                  <a
                    href="https://beta.knky.co/articles/terms-of-service"
                    target="blank"
                    rel="nofollow"
                    className="underline"
                  >
                    Agency Terms
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://beta.knky.co/articles/community-guidelines"
                    target="blank"
                    rel="nofollow"
                    className="underline"
                  >
                    Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://beta.knky.co/articles/privacy-policy"
                    target="blank"
                    rel="nofollow"
                    className="underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  .
                </Text>
              </Flex>
              <Button
                type="submit"
                disabled={!isValid || !dirty}
                bg={!isValid || !dirty ? "#808386" : "#AC1991"}
                c={!isValid || !dirty ? "#AFB1B3" : "white"}
                w={{ base: "100%", sm: 300, "2xl": 330 }}
                h={{ base: 40 }}
                loading={isSubmitting}
                loaderProps={{ type: "dots" }}
                fw={600}
                fz={16}
                className="rounded-[8px]"
              >
                Submit information
              </Button>
            </Form>
          );
        }}
      </Formik>
      <SuccessModal
        opened={opened}
        close={() => {
          closeSuccess();
          closeAuthModal();
        }}
        title="We’ve successfully received your business registration!"
        subTitle="Our team will review your business information and contact to you soon."
      />
    </React.Fragment>
  );
}
