/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box } from '@mantine/core';
import React, { useRef } from 'react';
import Image from 'next/image';
import logo from "@public/version-3/banner/logo.png";
import { motion } from 'framer-motion';
import { BannerTop } from './banner-mobile/BannerTop';
import { BannerBottom } from './banner-mobile/BannerBottom';

export function BannerMobile() {
    const main = useRef<any>();

    return (
        <Box ref={main}>
            <BannerTop />
            <Box
                w={{ base: 130, sm: 150, md: "17.2%" }}
                className='aspect-[1.665]'
                mx={"auto"}
                mt={{ base: -80 }}
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



