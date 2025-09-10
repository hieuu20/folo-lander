import { Box, Flex, SimpleGrid, Text } from '@mantine/core';
import React, { ReactNode, useRef } from 'react';
import logo from "@public/version-3/icons/logo.webp";
import Image from 'next/image';
import youImg from "@public/version-3/banner/you.webp";
import vector from "@public/version-3/banner/vector-mb.svg";
import bannerImg from "@public/version-3/banner/img.webp";
import SectionButton from '@/components/buttons/SectionButton';
import { motion, useAnimate, useInView, useScroll, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const BannerTop = () => {
    const [scope] = useAnimate();
    const isInView = useInView(scope);

    return (
        <SimpleGrid
            pos={"relative"}
            h={{ base: "" }}
            w={"100%"}
            cols={{ base: 1, md: 2 }}
            spacing={0}
            verticalSpacing={0}
            className='overflow-hidden z-10'
        >
            <Animation disable={true}>
                <Flex
                    ref={scope}
                    pos={"relative"}
                    direction={{ base: "column" }}
                    bg={"#160328"}
                    h={{ base: "auto", md: "100%" }}
                    align={"center"}
                    justify={"center"}
                    className='container overflow-hidden md:aspect-auto'
                    py={{ base: 60 }}
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

                    <Logo isInView={isInView} />
                    <TitleMb isInView={isInView} />

                    <Flex
                        direction={"column"}
                        gap={{ base: 16 }}
                        mb={{ base: 40, md: 60, lg: 80, xl: 90, "2xl": 128 }}
                    >
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                ease: 'easeInOut',
                                delay: 0.6
                            }}
                        >
                            <SectionButton
                                show={true}
                                w={{ base: 207, md: 240, "2xl": 248 }}
                                h={{ base: 40, md: 44, lg: 46, xl: 48 }}
                                href='https://knky.co'
                                title={"Create Now →"}
                                fz={{ sm: 16 }}
                                fw={600}
                            />
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
                            <SectionButton
                                show={true}
                                w={{ base: 207, md: 240, "2xl": 248 }}
                                h={{ base: 40, md: 44, lg: 46, xl: 48 }}
                                title={"I’m a Fan →"}
                                href='https://knky.co?init=signUpUser'
                                fz={{ sm: 16 }}
                                fw={600}
                                bg={"transparent"}
                            />
                        </motion.div>
                    </Flex>

                    <Flex direction={"column"} gap={{ base: 16, "2xl": 20 }}>
                        <motion.div
                            initial={{ y: "30%", opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                ease: 'easeInOut',
                                delay: 1.2
                            }}
                        >
                            <Text fz={{ base: 13, sm: 14, md: 16, lg: 17, xl: 18, "2xl": 20 }} c={"#FFFFFFCC"} lh={1.2} ta={"center"}>
                                Creators earn, fans experience. <br />
                                One platform, endless possibilities.

                                <br />
                                <br />
                                Join the award winning social marketplace! 🏆
                            </Text>
                        </motion.div>
                    </Flex>
                </Flex>
            </Animation>

            <Animation position='right'>
                <motion.div
                    initial={{ y: "20%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}
                    className='w-full h-fit'
                >
                    <Image src={bannerImg} alt='bannerImg' className='w-full h-auto object-cover' />
                </motion.div>
            </Animation>
        </SimpleGrid>
    );
};

const Logo = ({ isInView }: { isInView: boolean }) => {
    return (
        <Box
            pos={"relative"}
            w={{ base: 125, sm: 150, md: 210, lg: 240, xl: 273 }}
            className='aspect-[5.25]'
            mb={{ base: 30, md: 36, xl: 42, "2xl": 48 }}
        >
            <motion.div
                initial={{ opacity: 0, y: "50%" }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="absolute w-full h-full"
            >
                <Image src={logo} alt='logo' fill className='object-cover' />
            </motion.div>
        </Box>
    );
};

const TitleMb = ({ isInView }: { isInView: boolean }) => {
    return (
        <motion.div
            initial={{ y: "30%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay: 0.3
            }}
        >
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
        </motion.div>
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