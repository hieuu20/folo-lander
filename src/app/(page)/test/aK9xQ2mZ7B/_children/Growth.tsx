import { Box, Flex, Grid, Text, Title } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

import gsap from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

// import img11 from "@public/version-3/growth/idols/11.webp";
// import img12 from "@public/version-3/growth/idols/12.webp";
// import img13 from "@public/version-3/growth/idols/13.webp";
import clickIcon from "@public/version-3/growth/idols/click.svg";
import clickActiveIcon from "@public/version-3/growth/idols/click-active.svg";

import logo from "@public/version-3/growth/logo.svg";

import bg1 from "@public/version-3/growth/bg1.webp";
import bg2 from "@public/version-3/growth/bg2.webp";

import SectionButton from '@/components/buttons/SectionButton';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { growthList, growtTexthList } from '@/utils/growth';
import Marquee from 'react-fast-marquee';

export function Growth() {
    const main = useRef(null);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    pin: true,
                    start: 'top top',
                    end: '+=4000',
                    markers: false,
                    scrub: true,
                },
            });

            growtTexthList.forEach((o, index) => {
                if (index > 0) {
                    tl.fromTo(
                        `#growth-title-${index + 1}`,
                        { y: "200%", autoAlpha: 0 },
                        { y: 0, autoAlpha: 1, duration: 1, delay: 0.2 },
                        "<"
                    ).fromTo(
                        `#growth-subtitle-${index + 1}`,
                        { y: "200%", autoAlpha: 0, x: "-50%" },
                        { y: 0, autoAlpha: 1, x: "-50%", duration: 1, delay: 0.2 },
                        "<+=0.1"
                    );
                }

                if (index < growtTexthList.length - 1) {
                    tl.fromTo(
                        `#growth-title-${index + 1}`,
                        { y: 0, autoAlpha: 1 },
                        { y: "-100%", autoAlpha: 0, duration: 1 },
                    ).fromTo(
                        `#growth-subtitle-${index + 1}`,
                        { y: 0, autoAlpha: 1, x: "-50%" },
                        { y: 0, autoAlpha: 0, x: "-50%", duration: 1 },
                        "<"
                    );
                } else {
                    tl.fromTo(
                        `#growth-subtitle-${index + 1}`,
                        { y: 0, autoAlpha: 1 },
                        { y: 0, autoAlpha: 0, duration: 0.5 },
                    );
                }
            });

            tl.fromTo(
                "#growth-title",
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#growth-overlay",
                { scale: 1 },
                { scale: 4, duration: 2 },
                "<"
            );

            tl.fromTo(
                "#growth-overlay-bg",
                { opacity: 1 },
                { opacity: 0, duration: 1 },
                "<"
            );

            tl.fromTo(
                `#growth-title-${growtTexthList.length}`,
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#growth-top",
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0 },
                "<+=1.6"
            );
        },
    );

    return (
        <Box h={5000} className='overflow-hidden'>
            <Box
                id='growth'
                w={{ base: "100%" }}
                pos={"relative"}
                ref={main}
                className='md:aspect-[1.77777777778]'
            >
                <Top />
                <Bottom />
            </Box>
        </Box>
    );
}


const Top = () => {
    return (
        <Box
            pos={"relative"}
            w={"100%"} h={"100%"}
            className='z-10'
            id='growth-top'
        >
            <Box
                id='growth-overlay-bg'
                pos={"absolute"}
                w={"100%"}
                h={"100%"}
                top={0}
                left={0}
                bg={"#160328"}
            />
            <svg
                id='growth-overlay'
                className="relative w-full h-full"
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
            >
                <defs>
                    <mask id="capsuleMask">
                        <rect width="100%" height="100%" fill="white" />
                        <rect
                            x="34%"
                            y="35%"
                            width="32.8%"
                            height="28.6%"
                            rx="80"
                            fill="black"
                        />
                    </mask>
                </defs>

                <rect
                    width="100%"
                    height="100%"
                    fill="white"
                    mask="url(#capsuleMask)"
                />
            </svg>

            <Box
                pos={"absolute"}
                w={"100%"}
                h={"100%"}
                top={0}
                left={0}
            >
                <Title
                    id='growth-title'
                    w={{ base: "100%" }}
                    px={16}
                    top={"20%"}
                    pos={"absolute"}
                    order={2}
                    lh={1.2}
                    fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                    c={"#131416"}
                    fw={900}
                    ta={"center"}
                >
                    <motion.span
                        initial={{ y: "120%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            ease: "easeIn"
                        }}
                        className="inline-block"
                    >
                        GROWTH IN MOTION
                    </motion.span>
                </Title>

                {growtTexthList.map((o, index) => {
                    return (
                        <>
                            <Box
                                pos={"absolute"}
                                top={{ base: index == growtTexthList.length - 1 ? "42.5%" : "41%" }}
                                left={"50%"}
                                className='-translate-x-1/2 uppercase'
                            >
                                {index == growtTexthList.length - 1 && (
                                    <Image id={`growth-title-${index + 1}`} src={logo} alt='logo' className='w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[220px] h-auto' />
                                )}

                                {index < growtTexthList.length - 1 && (
                                    <Text
                                        id={`growth-title-${index + 1}`}
                                        fz={{ base: 60, sm: 70, md: 90, lg: 100, xl: 110, "2xl": 120 }}
                                        lh={1.2}
                                        c={"white"}
                                        fw={900}
                                    >
                                        {o.title}
                                    </Text>
                                )}
                            </Box>



                            <Text
                                id={`growth-subtitle-${index + 1}`}
                                pos={"absolute"}
                                w={{ base: index == 2 ? "34%" : "42%" }}
                                left={"50%"}
                                top={{ base: "71%" }}
                                fz={{ base: 24, sm: 28, md: 30, lg: 32, xl: 36, "2xl": 40 }}
                                c={"black"}
                                lh={1.2}
                                fw={700}
                                ta={"center"}
                                className='uppercase z-10 [&_a]:underline'
                            >
                                {index == 1 && (
                                    <span className='flex flex-col'>
                                        <span>
                                            is the average <br />
                                            creator’s <span className='text-[#19A50D]'>monthly earnings*</span>
                                        </span>

                                        <span className='text-sm text-[#4D5053] leading-[1.2] font-normal lowercase mt-5'>
                                            *Earnings example based on 500 followers, 2 channels, and a $15 subscription fee.
                                        </span>
                                    </span>
                                )}

                                {index !== 1 && (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: o.subTitle
                                        }}
                                    />
                                )}
                            </Text>
                        </>
                    );
                })}


            </Box>
        </Box>
    );
};


const Bottom = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(2000);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const imgElement = document.querySelector(".idol-image")?.getBoundingClientRect();
            if (imgElement?.height) {
                setHeight(imgElement?.height);
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const containerElement = document.getElementById("slide-container")?.getBoundingClientRect();
            if (containerElement?.width) {
                setWidth(containerElement?.width);
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <Box
            id='idols-slide'
            pos={"absolute"}
            w={"100%"}
            h={"100%"}
            top={0}
            left={0}
            bg={"#160328"}
            py={{ base: 80, md: 90, xl: 100, "2xl": 110 }}
        >
            <Image src={bg1} alt='bg1' className='w-[25.8%] h-auto absolute bottom-0 left-0' />
            <Image src={bg2} alt='bg-2' className='w-[25.8%] h-auto absolute top-0 right-0' />
            <Box className='container-version3'>
                <Title
                    w={{ base: "100%" }}
                    px={16}
                    order={2}
                    fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                    c={"white"}
                    fw={900}
                    lh={1.2}
                    ta={"center"}
                    mb={{ base: 40, sm: 45, md: 50, lg: 58, xl: 68, "2xl": 78 }}
                >
                    WHO’S ALREADY IN
                </Title>

                <Grid id='slide-container' gutter={{ base: 20, "2xl": 24 }}>
                    <Grid.Col id='slide-list' span={{ base: 12, md: 9, xl: 9.6 }} >
                        <Marquee
                            direction="left"
                            pauseOnHover={true}
                            pauseOnClick={true}
                            speed={50} delay={5}
                            className="w-full h-full"
                        >
                            <Flex
                                align={"center"}
                            >
                                {growthList.map((o, i) => {
                                    return (
                                        <Box key={i} w={{ base: width / 4, xl: width / 5 }} px={{ base: 10 }}>
                                            <Flex key={i} direction={"column"} w={"100%"} align={"center"} c={"white"}>
                                                <Box pos={"relative"} mb={{ base: 12, sm: 16, md: 20, "2xl": 24 }} w={"100%"} className='idol-image aspect-[0.57712305026]'>
                                                    <Image src={o.img} alt={o.name} fill className='object-cover' />
                                                    <Link
                                                        target='_blank'
                                                        href={`https://knky.co/creator/${o.userName}`}
                                                        className='cursor-pointer absolute bottom-1 md:bottom-1.5 2xl:bottom-2 right-1 md:right-1.5 2xl:right-2 aspect-square w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 group'
                                                    >
                                                        <Image src={clickIcon} alt='click icon' fill className='object-cover group-hover:hidden' />
                                                        <Image src={clickActiveIcon} alt='click icon' fill className='object-cover hidden group-hover:block' />
                                                    </Link>
                                                </Box>

                                                <Text
                                                    ta={"center"}
                                                    fz={{ base: 16, sm: 18, md: 23, lg: 25, xl: 28, "2xl": 32 }}
                                                    mb={{ base: 4, md: 6, xl: 8 }}
                                                    fw={700}
                                                    className='uppercase'
                                                    lh={1.2}
                                                >
                                                    {o.name}
                                                </Text>

                                                <Text lh={1.2} ta={"center"} fz={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }} c={"#FFFFFFCC"} fw={500}>
                                                    @{o.userName}
                                                </Text>
                                            </Flex>
                                        </Box>
                                    );
                                })}
                            </Flex>
                        </Marquee>
                    </Grid.Col>

                    <Grid.Col
                        span={{ base: 12, md: 3, xl: 2.4 }}
                    >
                        <Flex
                            h={{ base: "fit-content", md: height }}
                            w={{ base: "100%" }}
                            direction={"column"}
                            p={{ base: 16, md: 20, xl: 24 }}
                            justify={"space-between"}
                            c={"white"}
                            gap={{ base: 16 }}
                            style={{
                                background: "linear-gradient(341.28deg, #3A0053 23.13%, #7D1CA6 91.02%), linear-gradient(122.2deg, #4E1980 3.29%, #290948 76.62%)"
                            }}
                            className='rounded-2xl'
                        >
                            <Text lh={1.2} fz={{ base: 32, sm: 35, md: 38, lg: 42, xl: 44, "2xl": 48 }} fw={900}>
                                YOUR SPOT
                            </Text>

                            <Text lh={1.2} fz={{ base: 18, sm: 22, md: 26, lg: 29, xl: 32, "2xl": 38 }} fw={700}>
                                READY TO SHOW WHAT YOU CREATE 👇
                            </Text>

                            <SectionButton
                                show={true}
                                title='Join us Today →'
                                w={{ base: 123, sm: 132, md: 140, lg: 148, xl: 156, "2xl": 161 }}
                                h={{ base: 32, sm: 36, md: 40, lg: 42, xl: 44, "2xl": 48 }}
                                fz={{ base: 14, md: 16 }}
                                c={"white"}
                                fw={600}
                                px={0}
                                href='https://knky.co'
                            />
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Box>
        </Box>
    );
};