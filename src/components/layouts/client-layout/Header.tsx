import React from "react";
import { HeaderLogo } from "./header-children/HeaderLogo";
import { NavMenu } from "./header-children/NavMenu";
import { Flex } from "@mantine/core";
import RegisterButton from "@/components/buttons/RegisterButton";
import { MobileMenu } from "./header-children";

export async function Header() {
  
  return (
    <header className={`fixed top-0 z-[100] w-full h-fit bg-[#1C0532]`}>
      <Flex
        justify="space-between"
        align="center"
        gap={128}
        h={{base: 64, md: 72}}
        className={`container`}
      >
        <HeaderLogo />
        <NavMenu />
        <Flex gap={{base: 16, md: 24}} align={'center'}>
          <RegisterButton
            w={{base: 104, md: 140}}
            h={{base: 40}}
            className="font-medium"
          >
            Register
          </RegisterButton>
          <MobileMenu />
        </Flex>
      </Flex>
    </header>
  );
}
