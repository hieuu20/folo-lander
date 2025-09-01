import React from "react";
import { FieldProps } from "formik";
import { twMerge } from "tailwind-merge";
import {
  Divider,
  Flex,
  FlexProps,
  Input,
  InputProps,
  Select,
  SelectProps,
} from "@mantine/core";
import { uniq } from "lodash";

interface Props extends FieldProps {
  readonly label?: string | JSX.Element;
  readonly placeholder?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly areaProps?: SelectProps;
  readonly phoneInputProps: InputProps;
  readonly rootProps: FlexProps;
  readonly areaName: string;
  readonly classes?: {
    root?: string;
    areaInput?: string;
    phoneInput?: string;
  };
}
export function PhoneNumberField(props: Props) {
  const {
    field,
    form,
    label,
    placeholder,
    disabled,
    classes,
    required = false,
    areaProps,
    phoneInputProps,
    rootProps,
    areaName,
  } = props;

  const { name } = field;
  const { errors, touched, setFieldValue, values } = form;
  const showError = errors[name] && touched[name];
  const errorString = errors[name] as string;

  const onSelect = React.useCallback(
    (value: unknown) => {
      setFieldValue(areaName, value);
    },
    [areaName, setFieldValue]
  );

  return (
    <div className="w-full flex flex-col h-fit mb-1 relative gap-1">
      {label && (
        <span>
          <span className="text-[#4D5053] text-xs">{label}</span>
          {required && <span className="text-[#F11E11] ml-[2px]">*</span>}
        </span>
      )}

      <Flex
        bg={"#F5F5F6"}
        className={twMerge("rounded-lg", classes?.root)}
        px={12}
        h={40}
        align={'center'}
        gap={4}
        {...rootProps}
      >
        <Select
          data={uniq([])}
          disabled={disabled}
          value={values[areaName]}
          classNames={{
            input: twMerge(
              "bg-[#F5F5F6] placeholder-gray-400 text-[#131416] text-sm h-10 font-medium",
              classes?.areaInput
            ),
            wrapper: "",
          }}
          onChange={onSelect}
          w={44}
          rightSection={null}
          rightSectionWidth={0}
          withCheckIcon={false}
          comboboxProps={{ width: 80, dropdownPadding: 0 }}
          {...areaProps}
        />

        <Divider orientation="vertical" bg={'#EBEBEC'} w={1} h={24} my={'auto'}/>

        <Input
          {...field}
          id={name}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          bg={"##F5F5F6"}
          flex={1}
          classNames={{
            input: twMerge(
              "px-3 bg-[#F5F5F6] placeholder-gray-500 placeholder-font-bold text-black text-base h-10 rounded-lg font-medium",
              classes?.phoneInput
            ),
            wrapper: "",
          }}
          {...phoneInputProps}
        />
      </Flex>

      {showError && (
        <span
          className={twMerge(
            "text-[#FF0000] absolute text-[13px] font-medium bottom-[-19px] left-1"
          )}
        >
          {errorString}
        </span>
      )}
    </div>
  );
}
