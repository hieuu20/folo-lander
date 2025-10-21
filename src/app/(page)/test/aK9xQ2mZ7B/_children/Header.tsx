"use client";

import { Flex } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import logo from "@public/version-3/header/logo-white.webp";
import logoBlack from "@public/version-3/header/logo-black.webp";
import SectionButton from '@/components/buttons/SectionButton';

export const setHeaderLogoColor = (type: "white" | "black") => {
    const headerWhite = document.getElementById("header-logo");
    const headerBlack = document.getElementById("header-logo-black");
    if (headerWhite && headerBlack) {
        if (type == "white") {
            headerWhite.style.opacity = "1";
            headerBlack.style.opacity = "0";
        } else {
            headerWhite.style.opacity = "0";
            headerBlack.style.opacity = "1";
        }
    }
};

export function Header() {
    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["unlimited", "growth", "more"];
            let logoType: "white" | "black" = "white";

            for (const sec of sections) {
                const rect = document.getElementById(sec)?.getBoundingClientRect();
                if (rect) {
                    const inViewport = rect.top < 1 && rect.bottom > 0;

                    if (inViewport && sec == "growth") {
                        console.log("growth");
                        const growthTopElement = document.getElementById("growth-top");
                        if (growthTopElement) {
                            logoType = Number(growthTopElement.style.opacity) == 0 ? "white" : "black";
                        }
                        break;
                    }

                    if (inViewport) {
                        logoType = "black";
                        break;
                    }
                }
            }
            setHeaderLogoColor(logoType);

            const lastSection = document.getElementById("Running");
            if (lastSection) {
                const rect = lastSection.getBoundingClientRect();
                const inViewport = rect.bottom > 300;

                // console.log({ bottom: rect.bottom, inViewport });

                setIsScrolled(inViewport ? true : false);
            }
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
                    className="relative w-[40px] md:w-[50px] aspect-[1.55279503106]"
                >
                    <Image src={logo} alt="header logo" id='header-logo' fill className='object-cover opacity1 transition-all duration-150' />
                    <Image src={logoBlack} alt="header logo black" id='header-logo-black' fill className='object-cover opacity0 transition-all duration-150' />
                </Link>
                <SectionButton
                    title="Join KNKY →"
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
