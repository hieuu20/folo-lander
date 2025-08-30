"use client";

import { Flex } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import logo from "@public/version-3/icons/logo.webp";
import SectionButton from '@/components/buttons/SectionButton';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={twMerge(
                "z-50 w-full h-fit fixed top-0 bg-transparent",
                isScrolled ? "block" : "hidden"
            )}
        >
            <Flex
                justify="space-between"
                align="center"
                h={{ base: 64, md: 72 }}
                className={`container-version3`}
            >
                <Link
                    href={"/"}
                    className="relative w-[140px] aspect-[4.5]"
                >
                    <Image src={logo} alt="header logo" fill />
                </Link>
                <SectionButton
                    title="Join platform →"
                    href="https://knky.co/fresh"
                    show={true}
                    w={{ base: 120 }}
                    h={{ base: 32 }}
                    px={0}
                    fz={{ base: 14 }}
                    fw={600}
                />
            </Flex>
        </header>
    );
}
