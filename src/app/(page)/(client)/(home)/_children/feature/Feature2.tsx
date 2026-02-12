import { Box, Flex } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import featureShop from "@public/slogan/feature/2/img2.webp";
import { LiveComments } from '../slogan/LiveComment';
import { LiveCount } from '../slogan/LiveCount';

export function Feature2() {


    return (
        <Box
            w={{ base: "100%" }} pos={"relative"}
            key={2}
            h={"fit-content"}
        >
            <Box w={"100%"} pos={"relative"} className='aspect-square rounded-[40px] overflow-hidden'>
                <Box w={"100%"} h={"100%"} className='overflow-hidden'>
                    <video
                        autoPlay={true}
                        playsInline
                        loop
                        preload="auto"
                        controls={false}
                        muted={true}
                        className="w-full h-full object-cover"
                    >
                        <source src={"/slogan/feature/2/video.mp4"} type="video/mp4" />
                    </video>
                </Box>
                <Flex
                    h={"10.3%"}
                    pos={"absolute"}
                    top={"3%"}
                    left={"3%"}
                    bg={"#F11E11"}
                    fz={"3.6cqh"}
                    fw={500}
                    c={"white"}
                    justify={"center"}
                    align={"center"}
                    className='rounded-[20px] aspect-[1.72523961661]'
                >
                    LIVE
                </Flex>
                <Flex
                    pos={"absolute"}
                    top={"3%"}
                    left={"22%"}
                    // w={"11.2%"}
                    h={"10.3%"}
                    fz={"3.6cqh"}
                    fw={500}
                    c={"white"}
                    justify={"center"}
                    align={"center"}
                    bg={"#000000CC"}
                    className='rounded-[20px] aspect-[1.32966331578]'
                >
                    <LiveCount isInView={true} />
                </Flex>

                <Flex
                    direction={"column"}
                    gap={8}
                    w={"51%"}
                    h={"48%"}
                    pos={"absolute"}
                    bottom={"1%"}
                    left={"2%"}
                    className='overflow-hidden'
                >
                    <LiveComments />
                </Flex>

                <Box
                    className='absolute w-[37%] h-fit bottom-0 right-[2.5%]'
                >
                    <Image src={featureShop} alt='featureShop' className='w-full h-auto object-cover' />
                </Box>
            </Box>
        </Box>
    );
}
