/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Input, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import SectionButton from '@/components/buttons/SectionButton';
import { motion } from 'framer-motion';

import downIcon from "@public/version-3/banner/down.svg";
import Link from 'next/link';

export const BannerTop = () => {

    return (
        <Box bg={"#0A0014"} h={"fit-content"} className='overflow-hidden'>
            <Box className='container-version3' h={"100%"}>
                <Flex
                    direction={"column"}
                    pos={"relative"}
                    justify={"space-between"}
                    h={"100%"}
                    align={{ base: "center" }}
                    pt={{ base: 80 }}
                    gap={{ base: 24 }}
                >
                    <motion.div
                        initial={{ y: "20%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeInOut',
                            delay: 0
                        }}
                        className='w-[72%] aspect-[0.65384236453] flex justify-center'
                    >
                        <video
                            preload="metadata"
                            playsInline
                            autoPlay
                            loop
                            muted
                            disablePictureInPicture={true}
                            disableRemotePlayback={true}
                            className="w-full h-full"
                        >
                            <source src={"/version-3/banner/video.mp4"} type="video/mp4" />
                        </video>
                    </motion.div>

                    <Flex
                        direction={"column"}
                        gap={{ base: 24, sm: 28, md: 32, lg: 36, xl: 38, '2xl': 40 }}
                        w={{ base: "100%", md: "40%" }}
                        pb={{ base: 40 }}
                        align={"center"}
                    >
                        <Flex
                            direction={"column"}
                            gap={{ base: 8, sm: 12, md: 16, lg: 20, xl: 22, '2xl': 24 }}
                            align={"center"}
                        >
                            <motion.div
                                initial={{ y: "30%", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeInOut',
                                    delay: 0.1
                                }}
                                className='w-[80%]'
                            >
                                <Text
                                    fz={{ base: 28, sm: 36, md: 50, lg: 56, xl: 64, "2xl": 71 }}
                                    fw={700}
                                    c={"white"}
                                    lh={1.2}
                                    ta={"center"}
                                >
                                    Premium Starts With You 👑
                                </Text>
                            </motion.div>

                            <motion.div
                                initial={{ y: "30%", opacity: 0 }}
                                // animate={isInView ? { y: 0, opacity: 1 } : {}}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
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
                                    ta={"center"}
                                >
                                    Creators earn, fans experience. <br />
                                    Join the award winning social marketplace! 🏆
                                </Text>
                            </motion.div>
                        </Flex>

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeInOut',
                                delay: 0.5
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
                                />

                                <SectionButton
                                    show={true}
                                    title='Create Now →'
                                    className='rounded-2xl'
                                    fz={{ base: 14, md: 15, "2xl": 16 }}
                                    fw={500}
                                    w={{ base: 110, md: 120, xl: 124 }}
                                    h={"100%"}
                                    lts={-0.5}
                                    px={0}
                                />
                            </Flex>
                        </motion.div>

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeInOut',
                                delay: 0.7
                            }}
                        >
                            <Link
                                href={"https://knky.co/fresh?init=signUpUser"}
                                className='text-[#FFFFFFCC] font-medium text-base md:text-lg 2xl:text-xl hover:text-blue-400'
                            >
                                I&apos;m a fan →
                            </Link>
                        </motion.div>

                        {/* <ScrollButton opacity={opacity} /> */}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};


const ScrollButton = ({ opacity }: { opacity: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.5
            }}
            // className='absolute bottom-10 left-0'
            className='mt-3'
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
                        <Image src={downIcon} alt='down icon' width={16} height={16} />
                    </motion.div>
                    <span className='text-[10px] font-semibold text-white'>
                        Scroll for more
                    </span>
                </Flex>
            </motion.div>
        </motion.div>
    );
};