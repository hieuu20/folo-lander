/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button, Flex } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import logo from "@public/header/logo.svg";
import { useApp } from '@/app/context/AppContext';
import SectionButton from '@/components/buttons/SectionButton';


export function Header() {
  const [show, setShow] = useState(false);
  const { profile } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('Header');
      const footerElm = document.getElementById("footer");

      if (header && footerElm) {
        const rect = footerElm.getBoundingClientRect();
        setShow(window.scrollY >= window.innerHeight && rect.top > 100);
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
        show ? "opacity-[1]" : "opacity-0"
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

        {profile ? (
          <Flex gap={16}>
            <SectionButton
              show={true}
              title='Share to earn'
              className='rounded-lg hidden md:inline-block'
              fz={{ base: 16 }}
              fw={600}
              w={{ base: 150 }}
              h={40}
              px={0}
              bg={"#435EFB"}
              c={"white"}
              mx={"auto"}
            />

            <SectionButton
              show={true}
              title='My dashboard'
              className='rounded-lg'
              fz={{ base: 16 }}
              fw={600}
              w={{ base: 126, md: 150 }}
              h={40}
              px={0}
              bg={"#131416"}
              c={"white"}
              mx={"auto"}
              href='/profile'
            />
          </Flex>
        ) : (
          <Flex gap={12}>
            <Button
              w={{ base: 150 }}
              h={{ base: 40 }}
              px={0}
              fz={{ base: 14 }}
              fw={600}
              c={"white"}
              bg={"#435EFB"}
              className='rounded-lg transition-all duration-200 hover:scale-105'
            >
              Join the waitlist
            </Button>
          </Flex>
        )}

      </Flex>
    </header>
  );
}

