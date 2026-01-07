/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Flex, Text } from '@mantine/core';
import React, { useEffect, useMemo, useState } from 'react';
import logoWhite from "@public/icons/logo-white.webp";

import Image from 'next/image';
import { motion, useAnimate, useScroll, useTransform } from 'framer-motion';
import { useWindowHeight } from '@/hooks';
import { loadingTime } from '@/utils/constants';
import downIcon from "@public/icons/down.svg";
import { EmailWaitingListInput } from '../../_shared/EmailWaitingListInput';

export function BannerPc() {
    const wdHeight = useWindowHeight();
    const [scope] = useAnimate();
    const [tileHeight, setTitleHeight] = useState(0);

    useEffect(() => {
        const titleElement = document.getElementById("banner-title");
        if (titleElement) {
            setTitleHeight(titleElement.getBoundingClientRect()?.height);
        }
    }, []);


    const topHeight = wdHeight * 0.51;

    const spacing = useMemo(() => {
        return (wdHeight - (topHeight + tileHeight + 40)) / 2;
    }, [tileHeight, topHeight, wdHeight]);

    const { scrollYProgress } = useScroll({
        target: scope,
        offset: ['start 0', 'start -0.3'],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);



    return (
        <Box
            ref={scope}
            h={{ base: "100vh" }}
            bg={"white"}
            pos={"relative"}
            className='z-10'
        >
            <Box className='container'>
                <Flex
                    id='banner'
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                    w={{ base: "100%" }}
                    h={{ base: "100vh" }}
                    pos={"relative"}
                    gap={{ base: 32, md: 40 }}
                >
                    <motion.div
                        initial={{ top: wdHeight * 0.245 }}
                        animate={{ top: spacing }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: loadingTime + 2.4 }}
                        className='absolute aspect-[2.75862068966] z-10'
                        style={{
                            height: topHeight
                        }}
                    >
                        <motion.div
                            initial={{
                                width: "8.5vw",
                                aspectRatio: 1.62727272727,
                                opacity: 0
                            }}
                            animate={{
                                width: "100%",
                                aspectRatio: 2.75862068966,
                                opacity: 1
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: loadingTime + 1.6 }}
                            className='rounded-[300px] overflow-hidden center-absolute'
                        >
                            {/* <Image src={bgImage} alt='banner bg' fill className='object-cover' /> */}
                            <video
                                autoPlay={true}
                                playsInline
                                loop
                                preload="auto"
                                controls={false}
                                muted={true}
                                className="w-full h-full object-cover"
                            >
                                <source src={"/banner/video1-pc.mp4"} type="video/mp4" />
                            </video>
                        </motion.div>

                        <Image
                            src={logoWhite}
                            alt='logoWhite'
                            className='w-[11.1vw] h-auto center-absolute object-cover'
                        />
                    </motion.div>

                    <motion.div
                        id='banner-title'
                        initial={{ y: "100%", opacity: 0, x: "-50%" }}
                        animate={{ y: 0, opacity: 1, x: "-50%" }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: loadingTime + 2.4 }}
                        className='flex flex-col gap-6 justify-center items-center w-full absolute left-1/2'
                        style={{ bottom: spacing }}
                    >
                        <Text
                            c={"#131416"}
                            fz={{ base: 36, sm: 42, md: 54, lg: 60, xl: 66, "2xl": 72 }}
                            w={"fit-content"}
                            lh={1.2}
                            fw={700}
                            ta={"center"}
                        >
                            <span className='italic'>The You</span> Platform. <br/>
                            For Creators and Communities
                        </Text>
                        <EmailWaitingListInput />
                    </motion.div>
                </Flex>
            </Box>
            <ScrollButton opacity={opacity} />
        </Box>
    );
}



export const ScrollButton = ({ opacity }: { opacity: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 3
            }}
            className='absolute bottom-6 left-6'
        >
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{
                    opacity: opacity
                }}
                className='bg-[#F7F7FC] rounded-[100px] p-3'
            >
                <Flex gap={4} align={"center"} className='overflow-hidden'>
                    <motion.div
                        initial={{ y: -26 }}
                        animate={{ y: 26 }}
                        transition={{
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        <Image src={downIcon} alt='down icon' width={24} height={24} />
                    </motion.div>
                    <span className='text-lg font-semibold text-[#4D5053]'>
                        Scroll for more
                    </span>
                </Flex>
            </motion.div>
        </motion.div>
    );
};