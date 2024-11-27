"use client";

import React from "react";
import { useDisclosure } from "@/hooks/useDisclosure";
import { headerItem } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import menuIcon from "@public/icons/menu.svg";
import closeWhiteIcon from "@public/icons/close-white.svg";
import { Box, Drawer, FocusTrap, Text } from "@mantine/core";
import { twMerge } from "tailwind-merge";
import { IconChevronRight } from "@tabler/icons-react";


export function MobileMenu() {
  const [opened, { close, toggle }] = useDisclosure(false);
  return (
    <div className="flex lg:hidden">
      <Image
        src={opened ? closeWhiteIcon : menuIcon}
        alt="cart icon"
        width={26}
        height={26}
        className="cursor-pointer text-hover"
        onClick={toggle}
        id="cart-icon-control"
      />

      <Drawer
        opened={opened}
        position={'right'}
        onClose={close}
        zIndex={100}
        // offset={64}
        // offset={}
        overlayProps={{
          top: 64
        }}
        withCloseButton={false}
        className={twMerge('[&_.mantine-Drawer-inner]:mt-16')}
      >
        <FocusTrap.InitialFocus />
        <Box className="container">
          {headerItem.map((item, index) => {
            return (
              <Box key={index} py={16} w={'100%'} className="py-4 border-b border-gray-200">
                <Link
                  href={item.href}
                  onClick={close}
                  className={"flex items-center justify-between w-full"}
                >
                  <Text
                    key={item.title}
                    fz={18}
                    lh={1.2}
                    fw={600}
                  >
                    {item.title}
                  </Text>
                  <IconChevronRight width={30} height={30}/>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Drawer>
    </div>
  );
}
