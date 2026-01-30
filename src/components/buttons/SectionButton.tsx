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
  id?: string;
  onClick?: () => void
};
export default function SectionButton(props: Props) {
  const { show = true, title, href, icon, className, id, onClick, bg, ...rest } = props;

  if (!show) {
    return null;
  }

  return (
    <Button
      id={id}
      bg={ bg || "#435EFB"}
      c={"white"}
      fw={500}
      h={40}
      px={32}
      onClick={onClick}
      className={twMerge(
        "rounded-lg [&_.mantine-Button-label]:w-full transition-all duration-200",
        !bg || bg == "#435EFB" ? "hover:bg-[#2036B5]" : "hover:opacity-70",
        className
      )}
      {...rest}
    >
      <Link
        href={href ?? "/"}
        target={href?.includes("http") ? "_blank" : undefined}
        className={twMerge('w-full h-full flex justify-center items-center', rest.disabled || !href ? "pointer-events-none" : "")}
      >
        {icon && icon}

        {title}
      </Link>
    </Button>
  );
}
