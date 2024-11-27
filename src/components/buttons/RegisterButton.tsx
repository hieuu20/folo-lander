'use client';

import { useDisclosure } from "@/hooks";
import { Button, ButtonProps } from "@mantine/core";
import React from "react";
import { twMerge } from "tailwind-merge";
import { AuthModal } from "../modals/AuthModal";

type Props = ButtonProps;
export default function RegisterButton(props: Props) {
  const [opened, { open, close }] = useDisclosure();
  return (
    <React.Fragment>
      <Button
        {...props}
        bg={props.bg ?? "#AC1991"}
        className={twMerge("rounded-lg text-white", props.className)}
        color={props.color ?? "white"}
        onClick={open}
      />
      <AuthModal opened={opened} close={close} />
    </React.Fragment>
  );
}
