"use client";

import { Box, Flex, Text, Title } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

import gsap from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import elipse1 from "@public/slogan/ellipse1-mb.webp";
import elipse2 from "@public/slogan/ellipse2-mb.webp";
import elipse3 from "@public/slogan/ellipse3-mb.webp";

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import starIcon from "@public/slogan/star.svg";

import feature1 from "@public/slogan/feature/1/img.webp";
import feature1Phone from "@public/slogan/feature/1/phone.webp";

import featureShop from "@public/slogan/feature/2/img2.webp";

import bgFeature3 from "@public/slogan/feature/3/bg.webp";
import descriptionFeature3 from "@public/slogan/feature/3/description.webp";
import phoneFeature3 from "@public/slogan/feature/3/phone.webp";
import starFeature3 from "@public/slogan/feature/3/star.webp";

import img1Feature4 from "@public/slogan/feature/4/img1.webp";
import img2Feature4 from "@public/slogan/feature/4/img2.webp";
import img3Feature4 from "@public/slogan/feature/4/img3.webp";

import img1Feature5 from "@public/slogan/feature/5/img1.webp";
import img2Feature5 from "@public/slogan/feature/5/img2.webp";
import logoFeature5 from "@public/slogan/feature/5/logo.webp";

import { LiveComments } from '../slogan/LiveComment';
import { LiveCount } from '../slogan/LiveCount';

import bg1Feature6 from "@public/slogan/feature/6/bg-1.webp";
import imgFeature6 from "@public/slogan/feature/6/img1.webp";
import { twMerge } from 'tailwind-merge';



export function SloganMobile() {
    const main = useRef(null);
    const [ctnPadding, setCtnPadding] = useState(0);

    useEffect(() => {
        const containerEl = document.querySelector(".container");
        if (containerEl) {
            const styles = window.getComputedStyle(containerEl);
            const paddingLeft = parseFloat(styles.paddingLeft);
            const marginLeft = parseFloat(styles.marginLeft);
            setCtnPadding(paddingLeft + marginLeft);
        }
    }, []);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                "#slogan-text",
                { autoAlpha: 0, y: "50%", x: "-50%" },
                {
                    autoAlpha: 1, y: -50, x: "-50%", ease: "power2.out",
                    scrollTrigger: {
                        trigger: main.current,
                        start: 'top 45%',
                        end: 'top top',
                        scrub: true,
                    },
                }
            );

            const step = window.innerHeight;
            const endValue = step * 2.5;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    pin: true,
                    start: 'top top',
                    end: `+=${endValue}`,
                    markers: false,
                    scrub: true,
                },
            });

            tl.fromTo(
                "#feature",
                { y: 0 },
                { y: 0, duration: 0.1, ease: "power2.out", delay: 0.5 },
            );

            tl.fromTo(
                "#feature",
                { y: 0 },
                { y: "-99vh", duration: 1.5, ease: "power2.out", delay: 0.5 },
            );

            tl.fromTo(
                "#feature",
                { x: 0, y: "-99vh" },
                { x: 0, y: "-99vh", duration: 0.1, ease: "power2.out", delay: 0.5 },
            );
        },
        { scope: main, }
    );

    return (
        <>
            <Box
                h={"320vh"}
                bg={"white"}
            >
                <Box ref={main} className='overflow-hidden'>
                    <Box id='slogan' w={"100%"} h={"100vh"} pos={"relative"} className='overflow-hidden'>
                        <BackgroundAnimation />

                        <Box w={"100%"} h={"100%"} pos={"relative"} className='container'>
                            <Image src={elipse1} alt='elipse' className='w-auto h-[18%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />
                            <Image src={elipse2} alt='elipse' className='w-auto h-[38%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />
                            <Image src={elipse3} alt='elipse' className='w-auto h-[58%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />

                            <Flex
                                id='slogan-text'
                                direction={"column"}
                                pos={"absolute"}
                                top={"42%"}
                                left={"50%"}
                                align={"center"}
                                c={"white"}
                                w={"90%"}
                            >
                                <Image src={starIcon} alt='starIcon' className='w-[104px] h-auto mb-10' />
                                <Title
                                    order={2} fz={{ base: 32, md: 40, lg: 45, xl: 50, "2xl": 56 }} fw={600}
                                    lh={1.2}
                                    ta={"center"}
                                    mb={16}
                                >
                                    Faster, Simpler and Smarter.
                                </Title>

                                <Text
                                    c={"#FFFFFFCC"} fz={{ base: 18, md: 22, lg: 24, xl: 26, "2xl": 28 }} lh={1.2} ta={"center"}
                                >
                                    The AI-first system understands your needs, increases your earnings, and improves every micro interaction.
                                </Text>
                            </Flex>
                        </Box>
                    </Box>

                    <Box id='feature' w={"100%"} bg={"white"} className='rounded-t-[28px] overflow-hidden'>
                        <Feature1 padding={ctnPadding} />
                    </Box>
                </Box>
            </Box>

            <Feature2 padding={ctnPadding} />
            <Feature3 padding={ctnPadding} />
            <Feature4 padding={ctnPadding} />
            <Feature5 padding={ctnPadding} />
            <Feature6 padding={ctnPadding} />
        </>
    );
}

const Feature1 = ({ }: { padding: number }) => {
    return (
        <Flex
            h={"100vh"}
            direction={{ base: "column" }}
            justify={{ base: "center" }}
            align={{ base: "center" }}
            gap={80}
        >
            <Box w={"70%"} h={"fit-content"} pos={"relative"} ml={"auto"}>
                <Image src={feature1} alt='feature1' id='feature1-image' className='h-auto w-full object-cover' />
                <Image src={feature1Phone} alt='feature1Phone' id='feature1-phone' className='h-[80%] w-auto absolute bottom-[-6%] left-0 object-cover -translate-x-1/2' />
            </Box>

            <Flex id='feature-1-text' direction={"column"} gap={{ base: 16 }} w={"90%"} >
                <Text fz={{ base: 32, sm: 36, md: 45, lg: 48, xl: 53, "2xl": 56 }} fw={700} c={"#131416"} lh={1.2} ta={"center"}>
                    Conversations Upgraded.
                </Text>

                <Text fz={{ base: 16 }} fw={500} c={"#4D5053"} lh={1.2} ta={"center"}>
                    From instant messages to video calls, built to engage, track, and monetise.
                </Text>
            </Flex>
        </Flex>
    );
};

const Feature2 = ({ padding }: { padding: number }) => {
    const main = useRef(null);
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.6 });

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: main.current,
            start: 'top top',
            end: '+=30%',
            pin: true,
            pinSpacing: true,
        });
    }, { scope: main });

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.5;
        }
    }, []);

    return (
        <Box
            ref={main}
            h={"105vh"}
        >
            <Flex
                h={"100vh"}
                direction={{ base: "column" }}
                justify={{ base: "center" }}
                align={{ base: "center" }}
                gap={80}
                pr={padding}
                className='overflow-hidden'
                bg={"#F5F5FF"}
            >
                <Box pr={padding}>
                    <Box ref={ref} w={"full"} pos={"relative"} className='aspect-[1.11842105263]'>
                        <Box w={"100%"} h={"100%"} className='rounded-r-[1000px] overflow-hidden'>
                            <video
                                ref={videoRef}
                                autoPlay={true}
                                playsInline
                                loop
                                preload="auto"
                                controls={false}
                                muted={true}
                                className="w-full h-full object-cover"
                            >
                                <source src={"/slogan/feature/2/video.mp4"} type="video/mp4" />
                            </video>
                        </Box>
                        <Flex
                            h={"12%"}
                            pos={"absolute"}
                            top={"3%"}
                            left={"3%"}
                            bg={"#F11E11"}
                            fz={"2.9cqh"}
                            fw={500}
                            c={"white"}
                            justify={"center"}
                            align={"center"}
                            className='rounded-[11px] aspect-[1.72523961661]'
                        >
                            LIVE
                        </Flex>
                        <Flex
                            pos={"absolute"}
                            top={"3%"}
                            left={"25%"}
                            // w={"11.2%"}
                            h={"12%"}
                            fz={"2.9cqh"}
                            fw={500}
                            c={"white"}
                            justify={"center"}
                            align={"center"}
                            bg={"#000000CC"}
                            className='rounded-[11px] aspect-[1.32966331578]'
                        >
                            <LiveCount isInView={isInView} />
                        </Flex>

                        <Flex
                            direction={"column"}
                            gap={8}
                            w={"51%"}
                            h={"25vh"}
                            pos={"absolute"}
                            bottom={"1%"}
                            left={"2%"}
                            className='overflow-hidden'
                        >
                            <LiveComments />
                        </Flex>

                        <motion.div
                            id='feature2-shop'
                            className='absolute w-[37%] h-fit bottom-0 right-[2.5%]'
                        >
                            <Image src={featureShop} alt='featureShop' className='w-full h-auto object-cover' />
                        </motion.div>
                    </Box>
                </Box>

                <Flex id='feature-2-text' direction={"column"} gap={{ base: 16 }} w={"90%"} >
                    <Text fz={{ base: 32, sm: 36, md: 45, lg: 48, xl: 53, "2xl": 56 }} fw={700} c={"#131416"} lh={1.2} ta={"center"}>
                        The Open Marketplace.
                    </Text>

                    <Text fz={{ base: 16 }} fw={500} c={"#4D5053"} lh={1.2} ta={"center"}>
                        Products, services, subscriptions, and live selling - all in one open marketplace.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

const Feature3 = ({ padding }: { padding: number }) => {
    const main = useRef(null);
    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.create({
                trigger: main.current,
                start: 'top top',
                end: '+=30%',
                pin: true,
                pinSpacing: true,
            });
        },
        { scope: main, }
    );

    return (
        <Box
            ref={main}
            h={"105vh"}
        >
            <Flex
                h={"100vh"}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center" }}
                align={{ base: "center" }}
                w={"100%"}
                gap={80}
                className='overflow-hidden'
            >
                <Box pl={padding} w={"100%"} h={"fit-content"}>
                    <Box h={"auto"} w={"100%"} id='imgFeature3' pos={"relative"} className='aspect-[1.0303030303]'>
                        <Image src={bgFeature3} id='bgFeature3' alt='bgFeature3' className='w-full h-full object-cover' />
                        <Image src={starFeature3} id='starFeature3' alt='starFeature3' className='w-[36%] h-auto absolute left-[54%] top-[14%]' />
                        <Image src={phoneFeature3} id='phoneFeature3' alt='phoneFeature3' className='w-[57%] h-auto absolute left-[-4%] top-1/2 -translate-y-1/2' />
                        <Image src={descriptionFeature3} id='descriptionFeature3' alt='descriptionFeature3' className='w-[49.8%] h-auto absolute left-[37%] bottom-[5%]' />
                    </Box>
                </Box>

                <Flex id='feature-3-text' direction={"column"} gap={{ base: 16 }} w={"90%"} >
                    <Text fz={{ base: 32, sm: 36, md: 45, lg: 48, xl: 53, "2xl": 56 }} fw={700} c={"#131416"} lh={1.2} ta={"center"}>
                        Don’t Fake It. Scale It Authentically
                    </Text>

                    <Text fz={{ base: 16 }} fw={500} c={"#4D5053"} lh={1.2} ta={"center"}>
                        Our Ai co-pilot flags high-value fans, filters noise, and helps you reply faster.
                    </Text>
                </Flex>

            </Flex>
        </Box>
    );
};

const Feature4 = ({ padding }: { padding: number }) => {
    const main = useRef(null);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.create({
                trigger: main.current,
                start: 'top top',
                end: '+=30%',
                pin: true,
                pinSpacing: true,
            });
        },
        { scope: main }
    );

    return (
        <Box
            ref={main}
            h={"105vh"}
        >
            <Flex
                h={"100vh"}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center" }}
                align={{ base: "center" }}
                gap={80}
                className='overflow-hidden'
                bg={"#F5F5FF"}
            >
                <Box pr={padding + 16} w={"100%"} h={"fit-content"}>
                    <Box id='imgFeature4' h={"auto"} w={"100%"} pos={"relative"} className='aspect-[1.11842105263]'>
                        <Box id='bgFeature4' w={"100%"} h={"100%"} bg={"#D0CBFF"} className='rounded-r-[1000px]' />
                        <Image src={img1Feature4} id='img1Feature4' alt='img1Feature4' className='absolute w-[60%] h-auto object-cover top-1/2 left-[7%] -translate-y-1/2' />
                        <Image src={img2Feature4} id='img2Feature4' alt='img2Feature4' className='absolute w-[33%] h-auto object-cover top-[14%] right-[-3%]' />
                        <Image src={img3Feature4} id='img3Feature4' alt='img3Feature4' className='absolute w-[33%] h-auto object-cover top-[45%] right-[-3%]' />
                    </Box>
                </Box>

                <Flex id='feature-4-text' direction={"column"} gap={{ base: 16 }} w={"90%"} >
                    <Text fz={{ base: 32, sm: 36, md: 45, lg: 48, xl: 53, "2xl": 56 }} ta={"center"} fw={700} c={"#131416"} lh={1.2}>
                        Build Meaningful Relationships
                    </Text>

                    <Text fz={{ base: 16 }} ta={"center"} fw={500} c={"#4D5053"} lh={1.2}>
                        Channels help you build a loyal community and deliver premium value and services to your subscribers.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

const Feature5 = ({ padding }: { padding: number }) => {
    const main = useRef(null);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.create({
                trigger: main.current,
                start: 'top top',
                end: '+=30%',
                pin: true,
                pinSpacing: true,
            });

        },
        { scope: main, }
    );

    return (
        <Box
            ref={main}
            h={"105vh"}
        >
            <Flex
                h={"100vh"}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center" }}
                align={{ base: "center" }}
                w={"100%"}
                gap={80}
                className='overflow-hidden'
            >
                <Box pl={padding} w={"100%"} h={"fit-content"}>
                    <Box id='imgFeature5' h={"auto"} w={"100%"} pos={"relative"} className='aspect-[1.0303030303]'>
                        <Box bg={"#376CEC"} id='bgFeature3' w={"100%"} h={"100%"} className='rounded-l-[1000px] absolute top-0 left-0' />
                        <Image src={img2Feature5} id='img2Feature5' alt='img2Feature5' className='w-[27%] h-auto absolute left-[63%] top-1/2 -translate-y-1/2' />
                        <Image src={img1Feature5} id='img1Feature5' alt='img1Feature5' className='w-[40%] h-auto absolute left-[28%] top-1/2 -translate-y-1/2' />
                        <Image src={logoFeature5} id='logoFeature5' alt='logoFeature5' className='w-[40%] h-auto absolute left-[0%] top-1/2 -translate-y-1/2' />
                    </Box>
                </Box>

                <Flex id='feature-5-text' direction={"column"} gap={{ base: 16 }} w={"90%"} >
                    <Text fz={{ base: 32, sm: 36, md: 45, lg: 48, xl: 53, "2xl": 56 }} fw={700} c={"#131416"} lh={1.2} ta={"center"}>
                        The Platform for Everyone.
                    </Text>

                    <Text fz={{ base: 16 }} fw={500} c={"#4D5053"} lh={1.2} ta={"center"}>
                        Express every side of you, with controls that let fans choose their experience.
                    </Text>
                </Flex>

            </Flex>
        </Box>
    );
};

const Feature6 = ({ padding }: { padding: number }) => {
    const main = useRef(null);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.create({
                trigger: main.current,
                start: 'top top',
                end: '+=30%',
                pin: true,
                pinSpacing: true,
            });
        },
        { scope: main }
    );

    return (
        <Box
            ref={main}
            h={"105vh"}
        >
            <Flex
                h={"100vh"}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center" }}
                align={{ base: "center" }}
                gap={80}
                className='overflow-hidden'
                bg={"#F5F5FF"}
            >
                <Box pr={padding} w={"100%"} h={"fit-content"}>
                    <Box h={"auto"} w={"100%"} pos={"relative"} className='aspect-[1.11842105263] rounded-r-[1000px] overflow-hidden'>
                        <motion.div
                            initial={{
                                x: "0%",
                                y: "-50%",
                                rotate: "-14.8deg"
                            }}
                            animate={{
                                x: ["-100%", "100%"]
                            }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                            }}
                            className='h-[200%] w-auto absolute top-1/2 right-[-16%] aspect-[1.42911153119]'
                        >
                            <Image
                                src={bg1Feature6}
                                alt='waveIcon'
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{
                                x: "0%",
                                y: "-50%",
                                rotate: "-14.8deg"
                            }}
                            animate={{
                                x: ["-100%", "100%"]
                            }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                                delay: 15
                            }}
                            className='h-[200%] w-auto absolute top-1/2 right-[-16%] aspect-[1.42911153119]'
                        >
                            <Image
                                src={bg1Feature6}
                                alt='waveIcon'
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className={twMerge(
                                'w-[70%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ',
                                "backdrop-blur-[4px] rounded-[100px]"
                            )}
                        >
                            <Image
                                src={imgFeature6}
                                alt='imgFeature6'
                                className="object-cover w-full h-auto"
                            />
                        </motion.div>
                    </Box>
                </Box>

                <Flex id='feature-6-text' direction={"column"} gap={{ base: 16 }} w={"90%"} >
                    <Text fz={{ base: 32, sm: 36, md: 45, lg: 48, xl: 53, "2xl": 56 }} ta={"center"} fw={700} c={"#131416"} lh={1.2}>
                        Where You Get Found
                    </Text>

                    <Text fz={{ base: 16 }} ta={"center"} fw={500} c={"#4D5053"} lh={1.2}>
                        More than traffic - Match AI connects your work with fans who actually engage.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};


const BackgroundAnimation = () => {
    return (
        <>
            <video
                autoPlay={true}
                playsInline
                loop
                preload="auto"
                controls={false}
                muted={true}
                className="w-full h-full object-cover absolute top-0 left-0 object-top"
            >
                <source src={"/slogan/layer.mov"} type="video/mp4" />
            </video>
        </>
    );
};