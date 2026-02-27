import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import img from "@public/feature/4/img.webp";

export function Feature4() {
    return (
        <Box
            key={4}
            right={"-1%"}
            w={"full"}
            pos={"relative"}
            className='aspect-[1.0390625] rounded-[40px] overflow-hidden'
        >
            <Image src={img} alt='img2' className='w-full h-full object-cover' />
        </Box>
    );
}
