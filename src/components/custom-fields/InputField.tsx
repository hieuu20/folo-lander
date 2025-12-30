import React from "react";
import { FieldProps } from "formik";
import { twMerge } from "tailwind-merge";
import { Input } from "@mantine/core";

interface InputFieldProps extends FieldProps {
  readonly label?: string | JSX.Element;
  readonly placeholder?: string;
  readonly disable?: boolean;
  readonly type?: string;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly required?: boolean;
  readonly errorClassName?: string;
}
export function InputField(props: InputFieldProps) {
  const {
    field,
    form,
    label,
    placeholder,
    disable,
    className,
    required = false,
    errorClassName,
    ...inputProps
  } = props;

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const errorString = errors[name] as string;

  return (
    <div className="w-full flex flex-col h-fit relative gap-1">
      {label && (
        <span>
          <span className="text-[#4D5053] text-xs leading-[1.2]">{label}</span>
          {required && <span className="text-[#F11E11] ml-[2px] leading-[1.2] text-sm">*</span>}
        </span>
      )}

      <Input
        {...field}
        {...inputProps}
        id={name}
        name={name}
        placeholder={placeholder}
        disabled={disable}
        bg={"##F5F5F6"}
        classNames={{
          input: twMerge(
            "px-3 bg-white placeholder:text-[#4D5053] placeholder:font-normal text-black text-sm h-10 rounded-lg font-medium border border-solid border-[#E7E7F8]",
            className
          ),
          wrapper: "",
        }}
      />

      {showError && (
        <span
          className={twMerge(
            "text-[#FF0000] absolute text-[13px] font-medium bottom-[-19px] left-1",
            errorClassName
          )}
        >
          {errorString}
        </span>
      )}
    </div>
  );
}
