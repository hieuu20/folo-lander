"use client";

import { Button, ButtonProps } from "@mantine/core";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import RegisterButton from "./RegisterButton";
import Link from "next/link";

type Props = ButtonProps & {
  show?: boolean;
  title?: string;
  href?: string;
  icon?: ReactNode;
};
export default function SectionButton(props: Props) {
  const { show, title, href, icon, className, ...rest } = props;

  if (!show) {
    return null;
  }

  if (href == "register") {
    return (
      <RegisterButton
        fz={{ base: 16, md: 18 }}
        fw={500}
        px={24}
        h={40}
        {...rest}
      >
        {title}
      </RegisterButton>
    );
  }

  return (
    <Button
      bg={"#AC1991"}
      c={"white"}
      fw={500}
      h={40}
      px={32}
      className={twMerge(
        "rounded-lg",
        !rest.bg || rest.bg === "#AC1991" ? "hover:bg-[#751363]" : "hover:opacity-90",
        className
      )}
      {...rest}
    >
      {icon && icon}
      <Link
        href={href ?? "/"}
        target={href?.includes("http") ? "_blank" : undefined}
      >
        {title}
      </Link>
    </Button>
  );
}
