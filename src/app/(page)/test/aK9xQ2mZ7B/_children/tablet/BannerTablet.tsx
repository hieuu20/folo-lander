/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box } from '@mantine/core';
import React, { useRef } from 'react';
import { ICreatorIdol } from '@/app/api/_entities/creatorIdol';
import { BannerTop } from './banner-tablet/BannerTop';
import { BannerMidle } from './banner-tablet/BannerMidle';

interface Props {
    idols: ICreatorIdol[];
}

export function BannerTablet({ idols }: Props) {
    const main = useRef<any>();

    return (
        <Box ref={main}>
            <BannerTop />
            <BannerMidle idols={idols} />
        </Box>
    );
}



