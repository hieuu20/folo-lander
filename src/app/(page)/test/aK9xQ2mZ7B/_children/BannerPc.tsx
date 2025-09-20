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
import { BannerMidle } from './banner-pc/BannerMidle';
import { ICreatorIdol } from '@/app/api/_entities/creatorIdol';

interface Props {
    idols: ICreatorIdol[];
}

export function BannerPc({ idols }: Props) {
    const main = useRef<any>();

    return (
        <Box ref={main}>
            <BannerTop />
            <BannerMidle idols={idols} />
        </Box>
    );
}



