/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box } from '@mantine/core';
import React, { useRef } from 'react';
import { BannerTop } from './banner-pc/BannerTop';
import { BannerBottom } from './banner-pc/BannerBottom';
import Image from 'next/image';
import logo from "@public/version-3/banner/logo.png";
import { motion } from 'framer-motion';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export function BannerPc() {
    const main = useRef<any>();

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: '.box-c',
                pin: true,
                start: 'center center',
                end: '+=700',
                // markers: false,
                scrub: true,
                onLeave: () => gsap.to(".box-c", { autoAlpha: 0 }),
                onEnterBack: () => gsap.to(".box-c", { autoAlpha: 1 })
            });
        },
        {
            scope: main,
        }
    );

    return (
        <Box ref={main}>
            <BannerTop />

            <Box
                w={{ base: 232, md: "17.2%" }}
                className='aspect-[1.665]'
                mx={"auto"}
                mt={250}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className='relative w-full h-full box-c will-change-transform'
                >
                    <Image src={logo} alt='logo' fill />
                </motion.div>
            </Box>
            <BannerBottom />
        </Box>
    );
}



