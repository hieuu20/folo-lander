import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import img from "@public/feature/5/img.webp";

export function Feature5() {
    return (
        <Box
            w={"full"}
            right={"-1%"}
            pos={"relative"}
            className='aspect-[1.0578125] rounded-[40px] overflow-hidden'
        >
            <Image src={img} alt='img2' className='w-full h-full object-cover' />
        </Box>
    );
}
