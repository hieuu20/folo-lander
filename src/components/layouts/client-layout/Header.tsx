"use client";

import React, { useEffect, useState } from "react";
import { HeaderLogo } from "./header-children/HeaderLogo";
import { NavMenu } from "./header-children/NavMenu";
import { Flex } from "@mantine/core";
import { MobileMenu } from "./header-children";
import SectionButton from "@/components/buttons/SectionButton";
import { twMerge } from "tailwind-merge";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        "z-50 w-full h-fit fixed top-0",
        isScrolled ? "bg-[#1C0532]" : "bg-transparent"
      )}
    >
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
            href="https://knky.co/fresh"
            show={true}
            w={{ base: 104, md: 140 }}
            h={{ base: 40 }}
            px={0}
            fz={{ base: 14, md: 16 }}
            fw={600}
          />
          <MobileMenu />
        </Flex>
      </Flex>
    </header>
  );
}
