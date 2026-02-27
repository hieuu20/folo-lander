import { Box } from '@mantine/core';
import React from 'react';
import img from "@public/feature/3/img.webp";
import Image from 'next/image';

export function Feature3() {
    return (
        <Box w={"100%"} pos={"relative"} className='aspect-square rounded-[40px] overflow-hidden'>
            <Image src={img} alt='img2' className='w-full h-full object-cover' />
        </Box>
    );
}
