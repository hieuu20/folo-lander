/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Flex, Input, Text } from '@mantine/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import logoWhite from "@public/icons/logo-white.webp";
import bgImage from "@public/banner/bg.webp";

import Image from 'next/image';
import SectionButton from '@/components/buttons/SectionButton';
import { motion, useAnimation } from 'framer-motion';
import { useDisclosure, useWindowHeight } from '@/hooks';
import { loadingTime } from '@/utils';
import { SuccessPopup } from '@/components/Popups';

export function BannerMobile() {
    const main = useRef<any>();
    const wdHeight = useWindowHeight();
    const [userName, setUserName] = useState('');
    const [submiting, setSubmitting] = useState(false);
    const [susscessOpened, { open: successOpen, close: successClose }] = useDisclosure();
    const [errorMsg, setErrorMsg] = useState("");

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
                transition: { duration: 0.6, ease: "easeInOut", delay: loadingTime + 1.3 }
            });

            control1.start({
                top: spacing,
                transition: { duration: 0.5, ease: "easeInOut", delay: loadingTime + 1.9 }
            });

            control3.start({
                y: 0, opacity: 1, x: "-50%",
                transition: { duration: 0.8, ease: "easeInOut", delay: loadingTime + 1.9 }
            });
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, [control1, control2, control3]);

    useEffect(() => {
        const titleElement = document.getElementById("banner-title-mb");
        if (titleElement) {
            setTitleHeight(titleElement.getBoundingClientRect()?.height);
        }
    }, []);

    const handleSignup = useCallback(async () => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/waiting-list", {
                method: "POST",
                body: JSON.stringify({ email: userName })
            });

            const result = await res.json();

            if (result?.data) {
                close();
                successOpen();
                setUserName("");
                setErrorMsg("");
            } else {
                setErrorMsg("You’ve already signed up");
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setSubmitting(false);
        }
    }, [successOpen, userName]);


    const topHeight = wdHeight - (tileHeight + 40 * 2 + 32);

    return (
        <Box
            ref={main}
            id='aasasa'
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
                        initial={{
                            top: wdHeight - topHeight
                        }}
                        // animate={{
                        //     top: spacing
                        // }}
                        animate={control1}
                        // transition={{ duration: 0.5, ease: "easeInOut", delay: loadingTime + 2.6 }}
                        className='absolute aspect-[0.77954545454]'
                        style={{
                            height: topHeight
                        }}
                    >
                        <motion.div
                            initial={{
                                width: "26vw",
                                aspectRatio: 1.62727272727,
                            }}
                            animate={control2}
                            // animate={{
                            //     width: "100%",
                            //     aspectRatio: 0.77954545454,
                            // }}
                            // transition={{ duration: 0.6, ease: "easeInOut", delay: loadingTime + 2 }}
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
                                <source src={"/banner/video1-mb.mp4"} type="video/mp4" />
                            </video>
                            {/* <Image src={bgImage} alt='banner bg' fill className='object-cover' /> */}
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
                        // animate={{ y: 0, opacity: 1, x: "-50%" }}
                        // transition={{ duration: 0.8, ease: "easeInOut", delay: loadingTime + 2.6 }}
                        animate={control3}
                        className='flex flex-col gap-6 justify-center absolute left-1/2 w-[90%]'
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
                            h={{ base: 50, sm: 52, md: 56, lg: 58, xl: 60, "2xl": 64 }}
                            w={{ base: "100%", sm: 320, md: 360, lg: 390, xl: 410, "2xl": 438 }}
                            align={"center"}
                            pos={"relative"}
                        >
                            <Input
                                bg={"transparent"}
                                fz={{ base: 16, md: 18, "2xl": 20 }}
                                fw={500}
                                pl={4}
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
                                w={{ base: 90, md: 96, xl: 107 }}
                                h={"100%"}
                                bg={"#435EFB"}
                                px={0}
                                onClick={handleSignup}
                                loading={submiting}
                            />

                            {errorMsg && (
                                <Text fz={14} c={"#F11E11"} pos={"absolute"} left={12} bottom={-24}>
                                    {errorMsg}
                                </Text>
                            )}
                        </Flex>
                    </motion.div>
                    <SuccessPopup opened={susscessOpened} close={successClose} />
                </Flex>
            </Box>
        </Box>
    );
}



