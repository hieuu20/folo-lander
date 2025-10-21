/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box } from '@mantine/core';
import React, { useRef } from 'react';
import { BannerTop } from './banner-mobile/BannerTop';
import { BannerMidle } from './banner-mobile/BannerMidle';
import { ICreatorIdol } from '@/app/api/_entities/creatorIdol';

interface Props {
    idols: ICreatorIdol[];
}

export function BannerMobile({ idols }: Props) {
    const main = useRef<any>();

    return (
        <Box ref={main}>
            <BannerTop />
            <BannerMidle idols={idols} />
            {/* <BannerBottom /> */}
        </Box>
    );
}



