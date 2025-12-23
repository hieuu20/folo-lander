/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Flex, Text } from '@mantine/core';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import logoWhite from "@public/icons/logo-white.webp";
import bgImage from "@public/banner/bg.webp";

import Image from 'next/image';
import SectionButton from '@/components/buttons/SectionButton';
import { motion } from 'framer-motion';
import { useWindowHeight } from '@/hooks';
import { loadingTime } from '@/utils/constants';

// interface Props {
//     idols: ICreatorIdol[];
// }

export function BannerPc() {
    const main = useRef<any>();
    const wdHeight = useWindowHeight();

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

    // console.log({ spacing, tileHeight, topHeight, wdHeight });

    return (
        <Box
            ref={main}
            h={{ base: "100vh" }}
            bg={"white"}
            className='overflow-hidden'
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
                        transition={{ duration: 0.5, ease: "circOut", delay: loadingTime + 3.5 }}
                        className='absolute aspect-[2.75862068966]'
                        style={{
                            height: topHeight
                        }}
                    >
                        <motion.div
                            initial={{
                                width: "8.5vw",
                                aspectRatio: 1.62727272727,
                            }}
                            animate={{
                                width: "100%",
                                aspectRatio: 2.75862068966,
                            }}
                            transition={{ duration: 1, ease: "linear", delay: loadingTime + 2.5 }}
                            className='rounded-[300px] overflow-hidden center-absolute'
                        >
                            <Image src={bgImage} alt='banner bg' fill className='object-cover' />
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
                        transition={{ duration: 0.8, ease: "circOut", delay: loadingTime + 3.8 }}
                        className='flex flex-col gap-6 justify-center absolute left-1/2'
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
                            justify={{ base: "space-between", md: "center" }}
                            gap={{ base: 16 }} w={{ base: "100%" }}
                        >
                            <SectionButton
                                show={true}
                                title={"Join the waitlist"}
                                href={"/"}
                                w={{ base: "480%", md: 150 }}
                                h={{ base: 40 }}
                                fz={{ base: 16 }}
                                px={0}
                                fw={600}
                                bg={"#376CEC"}
                            />

                            <SectionButton
                                show={true}
                                title={"See More"}
                                href={"/"}
                                w={{ base: "480%", md: 150 }}
                                h={{ base: 40 }}
                                fz={{ base: 16 }}
                                px={0}
                                fw={600}
                                bg={"#131416"}
                            />
                        </Flex>
                    </motion.div>
                </Flex>
            </Box>
        </Box>
    );
}



