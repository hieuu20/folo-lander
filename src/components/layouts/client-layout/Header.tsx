/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Flex } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import logo from "@public/header/logo.svg";
import SectionButton from '@/components/buttons/SectionButton';
import { useBrowserWidth } from '@/hooks';


export function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('Header');
      if (header) {
        setIsSticky(window.scrollY >= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id='Header'
      className={twMerge(
        "z-50 w-full h-fit bg-transparent fixed top-0 left-0 transition-all duration-800 ease-in-out backdrop-blur-sm",
        isSticky ? "opacity-[1]" : "opacity-0"
      )}
    >
      <Flex
        justify="space-between"
        align="center"
        h={{ base: 71 }}
        className={`container`}
        bg={"transparent"}
      >
        <Link
          href={"/"}
          className="relative w-[40px] md:w-[50px] aspect-[1.55279503106]"
        >
          <Image src={logo} alt="header logo" id='header-logo' fill className='object-cover opacity1 transition-all duration-150' />
        </Link>
        <Flex gap={12}>
          <SectionButton
            title="Join the waitlist"
            href="https://knky.co/fresh"
            show={true}
            w={{ base: 150 }}
            h={{ base: 40 }}
            px={0}
            fz={{ base: 14 }}
            fw={600}
            bg={"#435EFB"}
          />
        </Flex>
      </Flex>
    </header>
  );
}

