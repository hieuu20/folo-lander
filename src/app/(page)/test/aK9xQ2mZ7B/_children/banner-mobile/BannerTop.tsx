import { Box, Flex, SimpleGrid, Text } from '@mantine/core';
import React, { ReactNode, useRef } from 'react';
import logo from "@public/version-3/icons/logo.webp";
import Image from 'next/image';
import youImg from "@public/version-3/banner/you.webp";
import vector from "@public/version-3/banner/vector-mb.svg";
import bannerImg from "@public/version-3/banner/img.webp";
import SectionButton from '@/components/buttons/SectionButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const BannerTop = () => {
    return (
        <SimpleGrid
            pos={"relative"}
            h={{ base: "fit-content", md: "100vh" }}
            cols={{ base: 1, md: 2 }}
            spacing={0}
            verticalSpacing={0}
            className='overflow-hidden z-10'
        >
            <Animation disable={true}>
                <Flex
                    pos={"relative"}
                    direction={{ base: "column" }}
                    bg={"#160328"}
                    h={{ base: "auto", md: "100%" }}
                    align={"center"}
                    justify={"center"}
                    className='container overflow-hidden aspect-[0.59] md:aspect-auto'
                    pt={{ base: 12, md: 24 }}
                >
                    <Box
                        pos={"absolute"}
                        top={0}
                        left={0}
                        w={"200%"}
                        className='aspect-[4.44039735099] -translate-y-1/2 -translate-x-[24%]'
                        style={{
                            background: "radial-gradient(50% 50% at 50% 50%, rgba(117, 17, 175, 0.3) 0%, rgba(18, 2, 32, 0) 100%)"
                        }}
                    />
                    <Box
                        pos={"relative"}
                        w={{ base: 128, sm: 150, md: 210, lg: 240, xl: 273 }}
                        className='aspect-[5.25]'
                        mb={{ base: 30, md: 36, xl: 42, "2xl": 48 }}
                    >
                        <Image src={logo} alt='logo' fill className='object-cover' />
                    </Box>
                    <TitleMb />
                    <Flex
                        direction={"column"}
                        gap={{ base: 16 }}
                        mb={{ base: 40, md: 60, lg: 80, xl: 90, "2xl": 128 }}
                    >
                        <SectionButton
                            show={true}
                            w={{ base: 207, md: 240, "2xl": 248 }}
                            h={{ base: 40, md: 44, lg: 46, xl: 48 }}
                            title={"Create Now →"}
                            fz={{ sm: 16 }}
                            fw={600}
                        />

                        <SectionButton
                            show={true}
                            w={{ base: 207, md: 240, "2xl": 248 }}
                            h={{ base: 40, md: 44, lg: 46, xl: 48 }}
                            title={"I’m a Fan →"}
                            href='/fans'
                            fz={{ sm: 16 }}
                            fw={600}
                            bg={"transparent"}
                        />
                    </Flex>

                    <Flex direction={"column"} gap={{ base: 16, "2xl": 20 }}>
                        <Text fz={{ base: 13, sm: 14, md: 16, lg: 17, xl: 18, "2xl": 20 }} c={"#FFFFFFCC"} lh={1.2} ta={"center"}>
                            Creators earn, fans experience. <br />
                            One platform, endless possibilities.
                        </Text>
                        <SectionButton
                            show={true}
                            w={{ base: 207, md: 240, "2xl": 248 }}
                            h={{ base: 40, md: 44, lg: 46, xl: 48 }}
                            title={"Explore creators →"}
                            fz={{ sm: 16 }}
                            fw={600}
                            bg={"transparent"}
                            className='hidden md:block'
                        />
                    </Flex>
                </Flex>
            </Animation>

            <Animation position='right'>
                <Image src={bannerImg} alt='bannerImg' className='w-full h-auto object-cover' />
            </Animation>
        </SimpleGrid>
    );
};

const TitleMb = () => {
    return (
        <Flex
            direction={"column"}
            fz={{ base: 50, sm: 56, md: 64, lg: 68, xl: 71 }}
            c={"white"}
            fw={900}
            justify={"center"}
            align={"center"}
            ta={"center"}
            mb={{ base: 50, md: 64, xl: 70, "2xl": 78 }}
            className='md:hidden'
        >
            PREMIUM
            <br />
            STARTS WITH
            <Box
                pos={"relative"}
                w={{ base: 170, sm: 190, md: 210, lg: 224, xl: 245, '2xl': 252 }}
                className='aspect-[1.73793103448]'
                mt={{ base: "-5%" }}
            >
                <Image src={youImg} alt='you img' fill className='z-10' />
                <Image src={vector} alt='vector' className='w-[2840%] max-w-[284%] aspect-[6] absolute bottom-[-50%] left-[-85%]' />
            </Box>
        </Flex>
    );

};

const Animation = ({
    children,
    className = '',
    position = "left",
    disable = false
}: {
    children?: ReactNode;
    className?: string;
    position?: "left" | "right",
    disable?: boolean
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.2', 'start -0.8'],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, position == "left" ? -45 : 45]);
    const x = useTransform(scrollYProgress, [0, 1], ["0", position == "left" ? "-120%" : "120%"]);
    const y = useTransform(scrollYProgress, [0, 1], ["0", "-100%"]);

    return (
        <motion.div
            className={twMerge(className)}
            ref={container}
            style={!disable ? {
                rotate,
                x,
                y
            } : {}}
        >
            {children}
        </motion.div>
    );
};