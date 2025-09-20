/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Input, SimpleGrid, Text } from '@mantine/core';
import React, { ReactNode, useRef } from 'react';
import logo from "@public/version-3/icons/logo.webp";
import Image from 'next/image';
import youImg from "@public/version-3/banner/you.webp";
import vector from "@public/version-3/banner/vector.svg";
import bannerImg from "@public/version-3/banner/img.webp";
import SectionButton from '@/components/buttons/SectionButton';
import { motion, useAnimate, useInView, useScroll, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import phoneImge from "@public/version-3/banner/phone/phone-border.webp";

import downIcon from "@public/version-3/banner/down.svg";
import Link from 'next/link';

export const BannerTop = () => {
    const [scope] = useAnimate();
    const isInView = useInView(scope);

    const { scrollYProgress } = useScroll({
        target: scope,
        offset: ['start 0', 'start -0.3'],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <Box bg={"#0A0014"} h={"100vh"} className='overflow-hidden'>
            <Box className='container-version3' h={"100%"}>
                <Flex ref={scope} pos={"relative"} justify={"space-between"} h={"100%"} align={{ base: "center" }}>
                    <Flex
                        direction={"column"}
                        gap={{ base: 24, sm: 28, md: 32, lg: 36, xl: 38, '2xl': 40 }}
                        w={{ base: "100%", md: "40%" }}
                        pb={{ base: 40 }}
                    >
                        <Flex
                            direction={"column"}
                            gap={{ base: 8, sm: 12, md: 16, lg: 20, xl: 22, '2xl': 24 }}
                        >
                            <motion.div
                                initial={{ y: "30%", opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeInOut',
                                    delay: 0.1
                                }}
                            >
                                <Text
                                    fz={{ base: 28, sm: 36, md: 50, lg: 56, xl: 64, "2xl": 71 }}
                                    fw={700}
                                    c={"white"}
                                    lh={1.2}
                                >
                                    Premium Starts With You 👑
                                </Text>
                            </motion.div>

                            <motion.div
                                initial={{ y: "30%", opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeInOut',
                                    delay: 0.3
                                }}
                            >
                                <Text
                                    fz={{ base: 14, sm: 16, md: 20, lg: 24, xl: 28, "2xl": 32 }}
                                    c={"#FFFFFFCC"}
                                    lh={1.2}
                                >
                                    Creators earn, fans experience. <br/>
                                    Join the award winning social marketplace! 🏆
                                </Text>
                            </motion.div>
                        </Flex>

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                ease: 'easeInOut',
                                delay: 0.6
                            }}
                        >
                            <Flex
                                justify={"space-between"}
                                bg={"#1E1427"}
                                bd={"1px solid #FFFFFF14"}
                                p={{ base: 8 }}
                                className='rounded-3xl'
                                h={{ base: 48, sm: 52, md: 56, lg: 58, xl: 60, "2xl": 64 }}
                                w={{ base: 293, sm: 320, md: 360, lg: 390, xl: 410, "2xl": 438 }}
                                align={"center"}
                            >
                                <Input
                                    bg={"transparent"}
                                    fz={{ base: 16, md: 18, "2xl": 20 }}
                                    fw={500}
                                    placeholder='Your username'
                                    classNames={{
                                        input: "placeholder-[#FFFFFF59] bg-transparent pl-1 md:pl-2",
                                        wrapper: "bg-transparent"
                                    }}
                                    c={"white"}
                                // className='placeholder-[#FFFFFF59]'
                                />

                                <SectionButton
                                    show={true}
                                    title='Create Now →'
                                    className='rounded-2xl'
                                    fz={{ base: 14, md: 15, "2xl": 16 }}
                                    fw={600}
                                    w={{ base: 104, md: 120, xl: 124 }}
                                    h={"100%"}
                                    px={0}
                                />
                            </Flex>
                        </motion.div>

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                ease: 'easeInOut',
                                delay: 0.9
                            }}
                        >
                            <Link
                                href={"https://knky.co/fresh?init=signUpUser"}
                                className='text-[#FFFFFFCC] font-medium text-base md:text-lg 2xl:text-xl hover:text-blue-400'
                            >
                                I&apos;m a fan →
                            </Link>
                        </motion.div>
                    </Flex>

                    <motion.div
                        initial={{ y: "20%", opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                            duration: 0.6,
                            ease: 'easeInOut',
                            delay: 0.9
                        }}
                        className='h-[85%] flex-1 flex justify-center'
                    >
                        {/* <Image src={phoneImge} alt='phone Imge' className='h-[85%] w-auto object-cover' /> */}
                        <video
                            preload="auto"
                            playsInline
                            autoPlay
                            loop
                            muted
                            className="h-full w-auto"
                        >
                            <source src={"/version-3/banner/video.mp4"} type="video/mp4" />
                        </video>
                    </motion.div>
                    <ScrollButton opacity={opacity} />
                </Flex>
            </Box>
        </Box>
    );
};


const ScrollButton = ({ opacity }: { opacity: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 1.2
            }}
            className='absolute bottom-10 left-0'
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
                className='bg-[#291739] rounded-[100px] p-3'
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
                    <span className='text-lg font-semibold text-white'>
                        Scroll for more
                    </span>
                </Flex>
            </motion.div>
        </motion.div>
    );
};