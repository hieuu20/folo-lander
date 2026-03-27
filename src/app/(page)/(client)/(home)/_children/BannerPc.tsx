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
import { useApp } from '@/app/context/AppContext';
import SectionButton from '@/components/buttons/SectionButton';
import gsap from "gsap";

const getTopHeight = (wdHeight: number, wdWidth: number) => {
    const result = wdHeight * 0.51;

    const width = result * 2.75862068966;

    if (width > wdWidth) {
        return wdWidth * 0.88 / 2.75862068966;
    }

    return result;
};

export function BannerPc() {
    const { profile } = useApp();
    const wdHeight = useWindowHeight();
    const [scope] = useAnimate();
    const [tileHeight, setTitleHeight] = useState(0);

    useEffect(() => {
        const titleElement = document.getElementById("banner-title");
        if (titleElement) {
            setTitleHeight(titleElement.getBoundingClientRect()?.height);
        }
    }, []);

    const topHeight = getTopHeight(wdHeight, window.innerWidth);

    const spacing = useMemo(() => {
        return (wdHeight - (topHeight + tileHeight + 36)) / 2;
    }, [tileHeight, topHeight, wdHeight]);

    const { scrollYProgress } = useScroll({
        target: scope,
        offset: ['start 0', 'start -0.3'],
    });

    const scrollToSection = (htmlId: string) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `#${htmlId}`,
                autoKill: false,
            },
            ease: "power2.out",
        });
    };

    const scrollToFeatureSection = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `#Features`,
                autoKill: false,
            },
            ease: "power2.out",
        });

        const event = new CustomEvent("RESET_FEATURE_PROGRESS", {
            detail: {
                value: null,
            },
        });

        setTimeout(() => {
            window.dispatchEvent(event);
        }, 400);
    };
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
                    gap={{ base: 32, md: 36 }}
                >
                    <motion.div
                        initial={{ top: wdHeight * 0.5 - (topHeight * 0.5) }}
                        animate={{ top: spacing }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: loadingTime + 2.4 }}
                        className='absolute aspect-[2.75862068966] z-10'
                        style={{
                            height: topHeight,
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
                            <video
                                autoPlay={true}
                                playsInline
                                loop
                                preload="auto"
                                controls={false}
                                muted={true}
                                className="w-full h-full object-cover"
                            >
                                <source src={"/banner/video-pc.mp4"} type="video/mp4" />
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
                        <Flex direction={"column"} align={"center"} gap={{ base: 12, md: 8 }}>
                            <Text
                                c={"#131416"}
                                fz={{ base: 32, sm: 36, md: 40, lg: 44, "2xl": 48 }}
                                w={"fit-content"}
                                lh={1.2}
                                fw={700}
                                ta={"center"}
                            >
                                <span className='italic'>The You</span> Platform. <br />
                                For Creators and Communities
                            </Text>

                            <Text c={"#4D5053"} w={"80%"} fz={{ base: 14, md: 16 }} lh={1.4} ta={"center"}>
                                Folo is a creator commerce platform that helps you monetise your audience through chat, subscriptions, community, products and AI tools.
                            </Text>
                        </Flex>
                        {profile ? (
                            <Flex gap={16}>
                                <SectionButton
                                    // href='#Leaderboard'
                                    show={true}
                                    title='Share to earn'
                                    className='rounded-lg'
                                    fz={{ base: 16 }}
                                    fw={600}
                                    w={{ base: 150 }}
                                    h={40}
                                    px={0}
                                    c={"white"}
                                    mx={"auto"}
                                    onClick={() => scrollToSection("Leaderboard")}
                                />

                                <SectionButton
                                    show={true}
                                    title='My dashboard'
                                    className='rounded-lg'
                                    fz={{ base: 16 }}
                                    fw={600}
                                    w={{ base: 150 }}
                                    h={40}
                                    px={0}
                                    bg={"#131416"}
                                    c={"white"}
                                    mx={"auto"}
                                    href='/profile'
                                />
                            </Flex>
                        ) : (
                            <Flex gap={16}>
                                <SectionButton
                                    // href='#Leaderboard'
                                    show={true}
                                    title='How it Works'
                                    className='rounded-lg'
                                    fz={{ base: 16 }}
                                    fw={600}
                                    w={{ base: 160 }}
                                    h={40}
                                    px={0}
                                    c={"white"}
                                    mx={"auto"}
                                    onClick={scrollToFeatureSection}
                                />

                                <SectionButton
                                    show={true}
                                    title='Earning Calculator'
                                    className='rounded-lg'
                                    fz={{ base: 16 }}
                                    fw={600}
                                    w={{ base: 160 }}
                                    h={40}
                                    px={0}
                                    bg={"#131416"}
                                    c={"white"}
                                    mx={"auto"}
                                    onClick={() => scrollToSection("Earning")}
                                />
                            </Flex>
                        )}
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