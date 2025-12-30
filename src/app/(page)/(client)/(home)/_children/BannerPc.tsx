/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Flex, Input, Text } from '@mantine/core';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import logoWhite from "@public/icons/logo-white.webp";
import bgImage from "@public/banner/bg.webp";

import Image from 'next/image';
import SectionButton from '@/components/buttons/SectionButton';
import { motion, useAnimate, useScroll, useTransform } from 'framer-motion';
import { useDisclosure, useWindowHeight } from '@/hooks';
import { loadingTime } from '@/utils/constants';
import { SignupPopup } from '@/components/Popups';
import downIcon from "@public/version-3/banner/down.svg";

export function BannerPc() {
    const wdHeight = useWindowHeight();
    const [opened, { open, close }] = useDisclosure();
    const [scope] = useAnimate();

    const [userName, setUserName] = useState('');

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
                        className='flex flex-col gap-6 justify-center items-center absolute left-1/2'
                        style={{ bottom: spacing }}
                    >
                        <Text
                            c={"#131416"}
                            fz={{ base: 36, sm: 42, md: 54, lg: 60, xl: 66, "2xl": 72 }}
                            lh={1.2}
                            fw={700}
                            ta={"center"}
                        >
                            Together, We Build <br /> the <span className='italic'>You</span> Platform.
                        </Text>

                        <Flex
                            justify={"space-between"}
                            bg={"transparent"}
                            bd={"1px solid #E7E7F8"}
                            p={{ base: 8 }}
                            className='rounded-3xl'
                            h={{ base: 48, sm: 52, md: 56, lg: 58, xl: 60, "2xl": 64 }}
                            w={{ base: "100%", sm: 320, md: 360, lg: 390, xl: 410, "2xl": 438 }}
                            align={"center"}
                        >
                            <Input
                                bg={"transparent"}
                                fz={{ base: 16, md: 18, "2xl": 20 }}
                                fw={500}
                                placeholder='Enter username'
                                classNames={{
                                    input: "placeholder-[#4D5053] bg-transparent pl-1 md:pl-2",
                                    wrapper: "bg-transparent"
                                }}
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                c={"black"}
                            // className='placeholder-[#FFFFFF59]'
                            />

                            <SectionButton
                                show={true}
                                title='Join Now →'
                                className='rounded-2xl'
                                fz={{ base: 14, md: 15, "2xl": 16 }}
                                fw={600}
                                w={{ base: 88, md: 96, xl: 107 }}
                                h={"100%"}
                                bg={"#435EFB"}
                                px={0}
                                onClick={() => {
                                    open();
                                    setTimeout(() => {
                                        setUserName('');
                                    }, 300);
                                }}
                            />
                        </Flex>
                    </motion.div>

                </Flex>
            </Box>
            <ScrollButton opacity={opacity} />
            <SignupPopup opened={opened} close={close} userName={userName} />
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
                delay: 1.2
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