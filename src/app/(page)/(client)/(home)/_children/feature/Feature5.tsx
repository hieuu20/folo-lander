import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import img from "@public/feature/5/img.webp";

export function Feature5() {
    return (
        <Box
            w={{ base: "100%" }} pos={"relative"}
            right={"-1%"}
            key={5}
            h={"fit-content"}
        >
            <Box 
                w={"full"} 
                pos={"relative"} 
                className='aspect-[1.0578125] rounded-[40px] overflow-hidden'
            >
                <Image src={img} alt='img2' className='w-full h-full object-cover' />
            </Box>
        </Box>
    );
}
