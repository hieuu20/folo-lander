/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Flex } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import logo from "@public/header/logo.png";
import SectionButton from '@/components/buttons/SectionButton';
import { useBrowserWidth } from '@/hooks';


export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { isMb } = useBrowserWidth();

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

  // useEffect(() => {
  //   const bannerElement = document.getElementById('Banner');
  //   if (bannerElement) {
  //     setBannerHeight(bannerElement.offsetHeight);
  //   }
  // }, []);

  // const top = useMemo(() => -1 * (bannerHeight * 0.42), [bannerHeight]);

  console.log({ isSticky });

  return (
    <header
      id='Header'
      className={twMerge(
        "z-50 w-full h-0 fixed bg-[#E8ECF5D9]",
      )}
      style={{
        // position: isSticky ? 'fixed' : 'static',
        top: isSticky ? 0 : window.innerHeight,
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        h={{ base: 71 }}
        className={`container`}
        bg={"#E8ECF5D9"}
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

          <SectionButton
            title="Discover KNKY"
            href="https://knky.co/fresh"
            show={true}
            w={{ base: 150 }}
            h={{ base: 40 }}
            px={0}
            fz={{ base: 14 }}
            fw={600}
            bg={"#131416"}
          />
        </Flex>
      </Flex>
    </header>
  );
}
