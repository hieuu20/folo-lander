"use client";

import { Button, ButtonProps } from "@mantine/core";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = ButtonProps & {
  show?: boolean;
  title?: string;
  href?: string;
  icon?: ReactNode;
  id?: string
};
export default function SectionButton(props: Props) {
  const { show, title, href, icon, className, id, ...rest } = props;

  if (!show) {
    return null;
  }

  return (
    <Button
      id={id}
      bg={"#AC1991"}
      c={"white"}
      fw={500}
      h={40}
      px={32}
      className={twMerge(
        "rounded-lg [&_.mantine-Button-label]:w-full",
        !rest.bg || rest.bg === "#AC1991"
          ? "hover:bg-[#751363]"
          : "hover:opacity-90",
        className
      )}
      {...rest}
    >
      <Link
        href={href ?? "/"}
        target={href?.includes("http") ? "_blank" : undefined}
        className={twMerge('w-full h-full flex justify-center items-center',rest.disabled ? "pointer-events-none" : "")}
      >
        {icon && icon}

        {title}
      </Link>
    </Button>
  );
}
