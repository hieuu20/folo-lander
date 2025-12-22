/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Text } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionButton from '@/components/buttons/SectionButton';
import { motion } from 'framer-motion';

import downIcon from "@public/version-3/banner/down.svg";
import Link from 'next/link';

export const BannerTop = () => {
    const [userName, setUserName] = useState('');
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
        }
    }, []);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const input = ref.current;
        if (!input) return;
        input.readOnly = true;

        setTimeout(() => {
            input.readOnly = false;
        }, 300);
    }, []);

    useEffect(() => {
        const input = document.getElementById('banner-input');
        if (input && document.activeElement === input) {
            input.blur();
        }
    }, []);

    
    return (
        <Box bg={"#0A0014"} h={"fit-content"} className='overflow-hidden'>
            <Box className='container-version3' h={"100%"}>
                <Flex
                    direction={"column"}
                    pos={"relative"}
                    justify={"space-between"}
                    h={"100%"}
                    align={{ base: "center" }}
                    pt={{ base: 56 }}
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
                            ref={videoRef}
                            preload="metadata"
                            playsInline
                            autoPlay
                            loop
                            muted={true}
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
                                className='w-[70%]'
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
                                <input
                                    ref={ref}
                                    id='banner-input'
                                    autoFocus={false}
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder='Your username'
                                    className='bg-transparent text-base font-medium placeholder-[#FFFFFF59] pl-1 md:pl-2 text-white outline-none w-[68%]'
                                />

                                <SectionButton
                                    show={true}
                                    title='Create Now →'
                                    className='rounded-2xl block'
                                    fz={{ base: 14, md: 15, "2xl": 16 }}
                                    fw={500}
                                    w={{ base: 110, md: 120, xl: 124 }}
                                    h={"100%"}
                                    lts={-0.5}
                                    px={0}
                                    // href={`https://knky.co?init=signUpCreator?username=${userName}`}
                                    onClick={() => {
                                        window.open(`https://knky.co?init=signUpCreator&username=${userName}`, "_blank");
                                        setUserName('');
                                    }}
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
                                target='_blank'
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
