"use client";

import { Box } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import logo from "@public/version-3/banner/logo.png";
import { motion } from 'framer-motion';
import { Header } from '@/components/layouts';
import { BannerTop } from './banner-mobile/BannerTop';
import { BannerBottom } from './banner-mobile/BannerBottom';

export function BannerMobile() {
    return (
        <Box 
            className='bg-contain bg-repeat md:hidden'
            style={{
                backgroundImage: "url('/banner/bg-mb.webp')",
                backgroundColor: "#0A0014"
            }}
        >
            <Header />
            <BannerTop />
            <Box
                w={{ base: 232, sm: 300, md: "17.2%"  }}
                mx={"auto"}
                mt={{ base: -250, sm: -300 }}
                className='aspect-[1.665] sticky top-[40%]'
            >
                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className='relative w-full h-full'
                >
                    <Image src={logo} alt='logo' fill />
                </motion.div>
            </Box>
            <BannerBottom />
        </Box>
    );
}



