import React, { ReactNode } from "react";
import { FieldProps } from "formik";
import { Select, SelectProps } from "@mantine/core";
import { twMerge } from "tailwind-merge";
import { IconChevronDown } from "@tabler/icons-react";

type Props = FieldProps &
  SelectProps & {
    readonly label: ReactNode;
    readonly onChange: (value: unknown) => void;
    readonly isRequired: boolean;
  };

export function SelectField(props: Props) {
  const {
    field,
    form,
    label,
    placeholder,
    data,
    className,
    disabled,
    required,
    ...restProps
  } = props;
  const { name, value } = field;
  const { errors, touched, setFieldValue } = form;
  const showError = errors[name] && touched[name];

  const onSelect = React.useCallback(
    (value: unknown) => {
      setFieldValue(name, value);
    },
    [name, setFieldValue]
  );

  return (
    <div className="w-full flex flex-col h-fit mb-1 relative gap-1">
      {label && (
        <span>
          <span className="text-[#4D5053] text-xs">{label}</span>
          {required && <span className="text-[#F11E11] ml-[2px]">*</span>}
        </span>
      )}
      <Select
        id={name}
        {...field}
        {...restProps}
        data={data}
        value={value}
        onChange={onSelect}
        placeholder={placeholder}
        disabled={disabled}
        classNames={{
          input: twMerge(
            "px-3 bg-white placeholder-gray-400 text-black text-base h-10 font-medium cursor-pointer",
            "border border-[#E7E7F8] rounded-lg",
            className
          ),
        }}
        rightSection={<IconChevronDown width={24} height={24} color="#000" />}
      />

      {showError && (
        <span
          className={twMerge(
            "text-[#FF0000] absolute text-[13px] font-medium bottom-[-19px] left-1"
          )}
        >
          {errors[name]?.toString()}
        </span>
      )}
    </div>
  );
}
