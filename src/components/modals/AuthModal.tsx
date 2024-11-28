"use client";

import React from "react";
import { Box, Flex, Modal, Text } from "@mantine/core";
import { RegisterForm } from "../forms/RegisterForm";
import registerThumb from "@public/images/register-thumb.png";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";

interface Props {
  opened: boolean;
  close: () => void;
}

export function AuthModal(props: Props) {
  const { opened, close } = props;

  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      size={1340}
      classNames={{
        root: "[&_.mantine-Modal-body]:p-0",
      }}
    >
      <Flex w={"100%"}>
        <Box w={"50%"} pos={"relative"} className="aspect-[0.79] hidden md:block">
          <Image
            src={registerThumb}
            alt="register thumb"
            fill
            className="object-cover"
          />
        </Box>
        <Flex
          pos={"relative"}
          direction={"column"}
          w={{ base: "100%", md: "50%" }}
          p={{ base: 32, sm: 40, md: 48, lg: 52, xl: 58 }}
          gap={{ base: 20, md: 24 }}
        >
          <IconX width={32} height={32} className="cursor-pointer fixed top-3 right-3" onClick={close} />
          <Text
            c={"#131416"}
            fz={{ base: 24, md: 28, xl: 30 }}
            lh={1.4}
            fw={700}
          >
            Brand Register
          </Text>

          <RegisterForm closeAuthModal={close} />
        </Flex>
      </Flex>
    </Modal>
  );
}
