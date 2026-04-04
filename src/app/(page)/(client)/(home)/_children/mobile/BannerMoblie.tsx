/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Flex, Text } from '@mantine/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import logoWhite from "@public/icons/logo-white.webp";

import Image from 'next/image';
import SectionButton from '@/components/buttons/SectionButton';
import { motion, useAnimation } from 'framer-motion';
import { useWindowHeight } from '@/hooks';
import { useApp } from '@/app/context/AppContext';
import gsap from "gsap";

interface Props {
    isEndLoading: boolean;
}

export function BannerMobile({ isEndLoading }: Props) {
    const { profile } = useApp();
    const main = useRef<any>();
    const wdHeight = useWindowHeight();

    const control1 = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();

    const [tileHeight, setTitleHeight] = useState(0);
    const spacing = 40;

    useEffect(() => {
        const handleLoad = () => {
            control2.start({
                width: "100%",
                aspectRatio: 0.77954545454,
                transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 }
            });

            control1.start({
                top: spacing,
                transition: { duration: 0.5, ease: "easeInOut", delay: 1 }
            });

            control3.start({
                y: 0, opacity: 1, x: "-50%",
                transition: { duration: 0.8, ease: "easeInOut", delay: 1 }
            });
        };

        if (isEndLoading) {
            handleLoad();
        }

        // if (document.readyState === 'complete') {
        //     handleLoad();
        // } else {
        //     window.addEventListener('load', handleLoad);
        // }

        // return () => window.removeEventListener('load', handleLoad);
    }, [control1, control2, control3, isEndLoading]);

    useEffect(() => {
        const titleElement = document.getElementById("banner-title-mb");
        if (titleElement) {
            setTitleHeight(titleElement.getBoundingClientRect()?.height);
        }
    }, []);

    const scrollToSection = useCallback((htmlId: string) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `#${htmlId}`,
                autoKill: false,
            },
            ease: "power2.out",
        });
    }, []);

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
        }, 100);
    };

    const topHeight = wdHeight - (tileHeight + 40 * 2 + 32);

    return (
        <Box
            ref={main}
            h={{ base: window.innerHeight }}
            bg={"white"}
            className='overflow-hidden'
        >
            <Box className='container h-full'>
                <Flex
                    id='banner'
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                    w={{ base: "100%" }}
                    h={{ base: "100%" }}
                    pos={"relative"}
                    gap={{ base: 32, md: 40 }}
                >
                    <motion.div
                        initial={{ top: wdHeight - topHeight }}
                        animate={control1}
                        className='absolute aspect-[0.77954545454]'
                        style={{ height: topHeight }}
                    >
                        <motion.div
                            initial={{
                                width: "26vw",
                                aspectRatio: 1.62727272727,
                            }}
                            animate={control2}
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
                                <source src={"/banner/video-mb.mp4"} type="video/mp4" />
                            </video>
                        </motion.div>

                        <Image
                            src={logoWhite}
                            alt='logoWhite'
                            className='w-[31.6vw] h-auto center-absolute object-cover'
                        />
                    </motion.div>

                    <motion.div
                        id='banner-title-mb'
                        initial={{ y: "100%", opacity: 0, x: "-50%" }}
                        animate={control3}
                        className='flex flex-col gap-6 justify-center absolute left-1/2 w-[90%]'
                        style={{ bottom: spacing }}
                    >

                        <Flex direction={"column"} align={"center"} gap={{ base: 12, md: 8 }}>
                            <Text
                                c={"#131416"}
                                fz={{ base: 32, sm: 42, md: 54, lg: 60, xl: 66, "2xl": 72 }}
                                lh={1.2}
                                fw={700}
                                ta={"center"}
                            >
                                <span className='italic'>The You</span> Platform. <br />
                                For Creators and Communities
                            </Text>

                            <Text c={"#4D5053"} w={"100%"} fz={{ base: 13, md: 20 }} lh={{ base: 1.23, md: 1.4 }} ta={"center"}>
                                Folo is a creator commerce platform that helps you monetise your audience through chat, subscriptions, community, products and AI tools.
                            </Text>
                        </Flex>


                        {profile ? (
                            <Flex justify={"space-between"}>
                                <SectionButton
                                    show={true}
                                    title='Share to earn'
                                    className='rounded-lg'
                                    fz={{ base: 16 }}
                                    fw={600}
                                    w={{ base: "48%" }}
                                    h={40}
                                    px={0}
                                    bg={"#435EFB"}
                                    c={"white"}
                                    mx={"auto"}
                                    onClick={() => scrollToSection("Features")}
                                />

                                <SectionButton
                                    show={true}
                                    title='My dashboard'
                                    className='rounded-lg'
                                    fz={{ base: 16 }}
                                    fw={600}
                                    w={{ base: "48%" }}
                                    h={40}
                                    px={0}
                                    bg={"#131416"}
                                    c={"white"}
                                    mx={"auto"}
                                    href='/profile'
                                />
                            </Flex>
                        ) : (
                            <Flex justify={"space-between"}>
                                <SectionButton
                                    show={true}
                                    title='How it Works'
                                    className='rounded-lg'
                                    fz={{ base: 16 }}
                                    fw={600}
                                    w={{ base: "48%" }}
                                    h={40}
                                    px={0}
                                    bg={"#435EFB"}
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
                                    w={{ base: "48%" }}
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
        </Box>
    );
}



