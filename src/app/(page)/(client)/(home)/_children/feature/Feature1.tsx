import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import phone from "@public/feature/phone.webp";
import img1 from "@public/feature/1/1.webp";
import img2 from "@public/feature/1/2.webp";

export function Feature1() {
    return (
        <Box 
            w={{ base: "100%" }} pos={"relative"}
            key={1}
            h={"fit-content"}
        >
            <Box
                pos={"relative"}
                h={"fit-content"}
                w={"74%"}
                ml={"11%"}
            >
                <Image src={phone} alt='phone' className='w-full h-auto object-cover' />
                <video
                    autoPlay={true}
                    playsInline
                    loop
                    preload="auto"
                    controls={false}
                    muted={true}
                    className="w-[62.6%] aspect-[0.46176470588] rounded-[40px] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        boxShadow: "0px 5.26px 13.15px 0px #00000080 inset"
                    }}
                >
                    <source src={"/feature/1/video.mp4"} type="video/mp4" />
                </video>
            </Box>

            <Image src={img1} alt='img1' className='absolute w-[32%] h-auto left-0 top-[28%]' />
            <Image src={img2} alt='img1' className='absolute w-[36%] h-auto right-[1%] top-[60%]' />
        </Box>
    );
}
