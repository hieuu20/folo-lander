import React from "react";
import { HeaderLogo } from "./header-children/HeaderLogo";
import { NavMenu } from "./header-children/NavMenu";
import { Flex } from "@mantine/core";
import { MobileMenu } from "./header-children";
import SectionButton from "@/components/buttons/SectionButton";

export async function Header() {
  return (
    <header className={`z-10 w-full h-fit bg-transparent`}>
      <Flex
        justify="space-between"
        align="center"
        gap={128}
        h={{ base: 64, md: 72 }}
        className={`container`}
      >
        <HeaderLogo />
        <NavMenu />
        <Flex gap={{ base: 16, md: 24 }} align={"center"}>
          <SectionButton
            title="Join us now"
            href="https://beta.knky.co/fresh"
            show={true}
            w={{ base: 104, md: 140 }}
            h={{ base: 40 }}
            bg={'#AC1991'}
            px={0}
            fz={{base: 14, md: 16}}
            fw={600}
          />
          <MobileMenu />
        </Flex>
      </Flex>
    </header>
  );
}
