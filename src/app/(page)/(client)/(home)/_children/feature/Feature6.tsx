import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import img from "@public/feature/6/img.webp";

export function Feature6() {
    return (
        <Box
            w={{ base: "100%" }} pos={"relative"}
            key={6}
            h={"fit-content"}
        >
            <Box
                w={"full"}
                pos={"relative"}
                className='aspect-square rounded-[40px] overflow-hidden'
            >
                <video
                    autoPlay={true}
                    playsInline
                    loop
                    preload="auto"
                    controls={false}
                    muted={true}
                    className="object-cover w-full h-full"
                    style={{
                        boxShadow: "0px 5.26px 13.15px 0px #00000080 inset"
                    }}
                >
                    <source src={"/feature/6/video.mp4"} type="video/mp4" />
                </video>
                <Image
                    src={img} alt='img2'
                    className='w-[92.5%] h-auto object-cover absolute bottom-[4%] left-1/2 -translate-x-1/2'
                />
            </Box>
        </Box>
    );
}
