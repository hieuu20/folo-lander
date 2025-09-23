/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box, Flex, Text } from '@mantine/core';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import logo from "@public/version-3/banner/logo.webp";
import Image from 'next/image';
import gsap from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';
import { ICreatorIdol } from '@/app/api/_entities/creatorIdol';
import Link from 'next/link';
import clickIcon from "@public/version-3/growth/idols/click.svg";
import clickActiveIcon from "@public/version-3/growth/idols/click-active.svg";
import { twMerge } from 'tailwind-merge';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import phoneBorder from "@public/version-3/banner/phone/phone-border.webp";
import { motion, useAnimate, useInView } from 'framer-motion';

import phone1 from "@public/version-3/banner/phone/1.webp";
import phone2 from "@public/version-3/banner/phone/2.webp";
import phone3 from "@public/version-3/banner/phone/3.webp";
import phone4 from "@public/version-3/banner/phone/4.webp";
import phone5 from "@public/version-3/banner/phone/5.webp";
import { Circle, Phase3 } from './BannerBottom';
import { stars } from '@/utils/stars';

interface Props {
    idols: ICreatorIdol[];
}

function sumBeforeIndex(arr: number[], index: number) {
    return arr.slice(0, index).reduce((sum, val) => sum + val, 0);
}

function animateStars(tl: gsap.core.Timeline, starElements: any[], stepIndex: number) {
    if (stepIndex === 0) {
        starElements.forEach((star) => {
            tl.fromTo(
                star,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                },
                "<"
            );
        });
    } else {
        starElements.forEach((star, index) => {
            const xFrom = sumBeforeIndex(stars[index].x, stepIndex);
            const yFrom = sumBeforeIndex(stars[index].y, stepIndex);

            tl.fromTo(
                star,
                { x: xFrom, y: yFrom },
                {
                    x: xFrom + stars[index].x[stepIndex],
                    y: yFrom + stars[index].y[stepIndex],
                    duration: 1,
                    ease: "power2.inOut",
                },
                "<"
            );
        });
    }
}


export function BannerMidle({ idols }: Props) {
    const main = useRef(null);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    pin: true,
                    start: 'top top',
                    end: '+=15000',
                    scrub: true,
                    markers: false,
                },
            });

            const phoneImageEls = gsap.utils.toArray(".phone-image") as any[];
            const slideList = gsap.utils.toArray(".banner-slide-item") as Element[];

            tl.fromTo(
                "#banner-logo",
                { x: "-50%", y: "-50%" },
                { x: "-50%", y: "-50%", duration: 1 },
            );

            tl.fromTo(
                "#text-1",
                { x: "100%", y: 0 },
                { x: 0, y: 0, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#text-2",
                { x: "-100%", y: 0 },
                { x: 0, y: 0, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#banner-logo-img",
                { scale: 1 },
                { scale: 0.22692307692, duration: 1 },
            );

            tl.to(
                "#banner-logo",
                { top: "10%", duration: 1 },
                "<"
            );

            tl.fromTo(
                "#phase-2",
                { y: "100%", opacity: 1 },
                { y: 0, opacity: 2, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#mySwiper",
                { y: 0, },
                { y: 0, duration: 2 },
            );

            tl.fromTo(
                "#phone-1-section",
                { autoAlpha: 0, },
                { autoAlpha: 1, duration: 0 },
            );

            tl.fromTo(
                "#phone-2",
                { autoAlpha: 1, },
                { autoAlpha: 0, duration: 0 },
                "<"
            );

            tl.to(
                "#banner-logo",
                { autoAlpha: 0, duration: 0.5 },
            );

            tl.fromTo(
                "#mySwiper",
                { y: 0, autoAlpha: 1, opacity: 1 },
                { y: 0, autoAlpha: 0, opacity: 0, duration: 0.5 },
                "<"
            );

            tl.fromTo(
                phoneImageEls[0],
                { y: "100%" },
                { y: 0, duration: 1, ease: "none" },
                "<"
            );

            tl.fromTo(
                '#center-idol-fake',
                { x: "-50%", y: "-50%", filter: "blur(0px)", scale: 1 },
                { filter: "blur(20px)", scale: 0.8, duration: 1, ease: "power2.inOut" },
                "<"
            );

            tl.fromTo(
                '#center-idol-fake',
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0, ease: "none" },
            );

            tl.to(
                "#phone-1-section",
                { top: "40vh", duration: 1 },
                "<"
            );









            tl.fromTo(
                "#image-circle1",
                { y: "100%", opacity: 0.2 },
                { y: 0, opacity: 1, duration: 1, ease: "easeIn" },
                "<"
            );

            tl.fromTo(
                "#phone-text",
                { y: 100, opacity: 0, x: "-50%" },
                { y: 0, opacity: 1, x: "-50%", duration: 0.5, ease: "easeIn" },
            );


            tl.fromTo(
                "#image-circle1",
                { rotate: 0, scale: 1, y: 0 },
                { rotate: 60, scale: 1, y: 0, duration: 2, ease: "none" }
            );

            tl.fromTo(
                "#image-circle1",
                { y: 0, opacity: 1, rotate: 60 },
                { y: "-136%", opacity: 0, rotate: 95, duration: 2, ease: "none" },
            );

            tl.fromTo(
                "#circle-background",
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0.5, ease: "none" },
                "<"
            );

            tl.fromTo(
                "#phone-text",
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 1, ease: "power2.inOut" },
                "<"
            );

            tl.fromTo(
                "#phone",
                { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, y: 0 },
                {
                    rotateX: 8,
                    rotateY: -8,
                    rotateZ: 8,
                    duration: 2,
                    x: "-88%",
                    y: "12%",
                    ease: "power2.inOut",
                },
                "<"
            );

            tl.fromTo(
                "#banner-button",
                { autoAlpha: 0, y: 600 },
                {
                    autoAlpha: 1,
                    y: 0,
                    x: "-49.99%",
                    duration: 0.8,
                    ease: "power2.inOut",
                },
                "<=+0.5"
            );

            const texts = gsap.utils.toArray(".text-item");
            const stars = gsap.utils.toArray(".star-icon");

            texts.forEach((el: any, index) => {
                tl.fromTo(
                    el,
                    { x: "100%", y: "80%", rotate: 60, autoAlpha: 0 },
                    { x: "0%", y: 0, rotate: 0, autoAlpha: 1, duration: 1 },
                    index == 0 ? "<=+0.3" : "<"
                );

                tl.fromTo(
                    phoneImageEls[index + 1],
                    { y: "-100%" },
                    { y: 0, duration: 1, ease: "none" },
                    "<"
                );

                tl.fromTo(
                    phoneImageEls[index],
                    { filter: "blur(0px)", scale: 1 },
                    { filter: "blur(20px)", scale: 0.85, duration: 0.8, ease: "power2.inOut" },
                    "<"
                );

                animateStars(tl, stars, index);

                if (index < texts.length - 1) {
                    tl.fromTo(el,
                        { x: 0, y: 0, autoAlpha: 1, rotate: 0 },
                        { x: "-100%", y: "80%", rotate: -70, autoAlpha: 0, duration: 1, delay: 0.1 }
                    );
                }
            });
        },
        {
            scope: main,
        }
    );

    return (
        <Box
            w={"100%"}
            h={15950}
        >
            <Flex
                ref={main}
                pos={"relative"}
                justify={"center"}
                align={"center"}
                h={"100vh"}
                w={"100%"}
            >
                <Box pos={"absolute"} w={"100%"} h={"100%"} top={0} left={0} className='overflow-hidden'>
                    <Box
                        pos={"absolute"}
                        top={0}
                        left={"50%"}
                        w={"120%"}
                        className='aspect-[6.68049792531] -translate-y-1/2 -translate-x-1/2'
                        style={{
                            background: "radial-gradient(50% 50% at 50% 50%, rgba(117, 17, 175, 0.4) 0%, rgba(18, 2, 32, 0) 100%)"
                        }}
                    />
                </Box>

                <Box
                    pos={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    id='banner-logo'
                    c={"white"}
                    // h={{ base: 440, xl: 470, "2xl": 520 }}
                    h={{ base: "48.1481481481vh" }}
                >
                    <Image src={logo} alt='logo' id='banner-logo-img' className='h-full w-auto object-cover' />
                    <Text
                        id='text-1-wrap'
                        pos={"absolute"}
                        top={"50%"}
                        left={"-0.6vh"}
                        // fz={{ base: 40, sm: 46, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                        fz={{ base: "clamp(40px, 6.2vh, 64px)" }}
                        fw={900}
                        className='-translate-y-1/2 overflow-hidden whitespace-nowrap'
                    >
                        <span id='text-1' className='block'>
                            WHO’S IN
                        </span>
                    </Text>

                    <Text
                        id='text-2-wrap'
                        pos={"absolute"}
                        top={"50%"}
                        // fz={{ base: 40, sm: 46, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                        fz={{ base: "clamp(40px, 5.92592592593vh, 64px)" }}
                        fw={900}
                        left={"51vh"}
                        className='-translate-y-1/2 overflow-hidden whitespace-nowrap'
                    >
                        <span id='text-2' className='block'>
                            ALREADY
                        </span>
                    </Text>
                </Box>
                <Phase2 idols={idols} />
            </Flex>
        </Box>
    );
}

const Phase2 = ({ idols }: Props) => {
    const [scope] = useAnimate();
    const isInView = useInView(scope, { once: false, amount: 0.99 });

    const swiperRef = useRef<any>(null);
    const [centerRealIndex, setCenterRealIndex] = useState(4);

    useEffect(() => {
        swiperRef?.current?.swiper?.autoplay?.stop();
        const handleScroll = () => {
            const phase2El = document.getElementById("phase-2");
            if (phase2El) {
                if (Number(phase2El.style.opacity) == 2) {
                    swiperRef?.current?.swiper?.autoplay?.start();
                } else {
                    swiperRef?.current?.swiper?.autoplay?.stop();
                }
            }

            const swiperEl = document.getElementById("mySwiper");
            if (swiperEl) {
                if (Number(swiperEl.style.opacity) != 1) {
                    swiperRef?.current?.swiper?.autoplay?.stop();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleMouseEnter = () => {
        swiperRef?.current?.swiper?.autoplay?.stop();
    };

    const handleMouseLeave = () => {
        swiperRef?.current?.swiper?.autoplay?.start();
    };

    const list = [...idols, ...idols, ...idols, ...idols,];

    return (
        <Flex
            id='phase-2'
            ref={scope}
            pos={"absolute"}
            w={"100%"}
            h={"100%"}
            top={0}
            left={0}
            align={"center"}
            justify={"center"}
        >
            <Phone1 centerIdol={list[centerRealIndex]} />
            <Phone2 isInView={isInView} />

            <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                pos={"absolute"}
                w={"100%"}
                left={0}
                top={"56vh"}
                className='-translate-y-1/2'
            >
                <Swiper
                    id='mySwiper'
                    ref={swiperRef}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 800,
                    }}
                    fadeEffect={{ crossFade: true }}
                    spaceBetween={0}
                    allowTouchMove={false}
                    modules={[
                        Autoplay,
                    ]}
                    onSlideChange={(swiper) => {
                        setCenterRealIndex(prev => prev >= list.length - 3 ? 4 : centerRealIndex + 1);
                    }}
                    className="mySwiper [&_.swiper-wrapper]:items-center overflow-visible"
                >
                    {list.map((o, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className={twMerge(
                                    "-translate-x-[10.3225806452vw]",
                                    'transition-all will-change-transform duration-300 ease-linear',
                                    centerRealIndex == index ? "w-[17.4193548387vw]" : "w-[12.9032258065vw]",
                                    centerRealIndex == index ? "px-[1.32005208333vw]" : "px-[0.43567708333vw]"
                                )}
                            >
                                <IdolItem idol={o} isInView={isInView} index={index} centerRealIndex={centerRealIndex} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box >
        </Flex>
    );
};


const phoneImages = [
    phone1,
    phone2,
    phone3,
    phone4,
    phone5
];

const Phone1 = ({ centerIdol }: { centerIdol: ICreatorIdol }) => {
    return (
        <Flex
            id='phone-1-section'
            pos={"absolute"}
            direction={"column"}
            align={"center"}
            justify={"center"}
            top={"56vh"}
            left={"50vw"}
            className='container-version3 -translate-y-1/2 -translate-x-1/2'
        >
            <Circle />
            <Phase3 />
            <Box
                id='phone'
                w={"23.802083333vw"}
                pos={"relative"}
                className=' aspect-[0.65312441358] z-10'
            >

                <Image src={phoneBorder} alt='phoneBorder' fill className='object-cover' />
                <Box
                    pos={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    w={"62.8%"}
                    h={"88%"}
                    bg={"black"}
                    className='-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px]'
                />

                <Box
                    id='center-idol-fake'
                    pos={"absolute"}
                    w={'17.427604166vw'}
                    px={'1.32005208333vw'}
                    top={"50%"}
                    left={"50%"}
                    className='overflow-hidden'
                >
                    <IdolItem idol={centerIdol} centerRealIndex={1} index={1} isInView={true} />
                </Box>
                {
                    phoneImages.map((o, index) => {
                        return (
                            <Box
                                key={index}
                                pos={"absolute"}
                                top={"50%"}
                                left={"50%"}
                                w={"62.8%"}
                                className='-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px]'
                            >
                                <Image
                                    key={index}
                                    src={o}
                                    alt='phone image'
                                    className='relative phone-image object-cover will-change-transform transform-3d w-full h-auto '
                                />
                            </Box>
                        );
                    })
                }
                <Flex
                    id="phone-text"
                    pos={"absolute"}
                    bottom={{ base: "-15%" }}
                    left={"50%"}
                    direction={"column"}
                    gap={{ base: 8, md: 10, xl: 12 }}
                    align={"center"}
                >
                    <Text fz={{ base: 11, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }} lh={1.2} c={"#FFFFFFCC"} className='whitespace-nowrap'>
                        Your content. Your rules. Public, private, or premium.
                    </Text>

                    <Text fz={{ base: 20, sm: 22, md: 26, lg: 28, xl: 30, "2xl": 32 }} fw={500} lh={1.2} c={"white"} className='whitespace-nowrap'>
                        KNKY adapts to you!
                    </Text>
                </Flex>
            </Box >
        </Flex>
    );
};


const Phone2 = ({ isInView }: { isInView: boolean }) => {
    return (
        <Box
            id='phone-2'
            pos={"absolute"}
            w={"23.802083333vw"}
            left={"50vw"}
            top={"56vh"}
            className='-translate-y-1/2 -translate-x-1/2 aspect-[0.65312441358]'
        >
            <motion.div
                initial={{ y: 300 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0
                }}
                className='w-full h-full'
            >
                <Image src={phoneBorder} alt='phoneBorder' fill className='object-cover' />
                <Box
                    pos={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    w={"62.8%"}
                    h={"88%"}
                    bg={"black"}
                    className='-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px]'
                />
            </motion.div>
        </Box>
    );
};


const IdolItem = ({ idol, centerRealIndex, index, isInView }: { idol: ICreatorIdol, centerRealIndex: number, index: number, isInView: boolean }) => {
    const getDelay = (index: number) => {
        if (index == centerRealIndex) return 0;
        if (index < centerRealIndex) return 0.1 * (centerRealIndex - index);
        if (index > centerRealIndex) return 0.1 * (index - centerRealIndex);
        return 0;
    };

    const getY = (index: number) => {
        if (index == centerRealIndex) return 300;
        if (index < centerRealIndex) return 300 + 50 * (centerRealIndex - index);
        if (index > centerRealIndex) return 300 + 50 * (index - centerRealIndex);
    };

    const renderContent = () => {
        if (centerRealIndex == index) {
            return (
                <Flex
                    pos={"relative"}
                    direction={"column"} w={"100%"} align={"center"} c={"white"} className='aspect-[0.46284631701] overflow-hidden'
                >
                    <Box
                        pos={"relative"}
                        w={"100%"}
                        className={twMerge(
                            'idol-image overflow-hidden rounded-[33px] w-full h-full',
                        )}
                    >
                        <Image src={idol.img} alt={idol.name} fill className='object-cover' />
                        <Flex pos={"absolute"} w={"100%"} h={"fit-content"} bottom={0} left={0} direction={"column"} gap={{ base: 12 }}>
                            <Flex justify={"end"} pr={{ base: 12 }}>
                                <Link
                                    target='_blank'
                                    href={`https://knky.co/creator/${idol.userName}`}
                                    className='cursor-pointer relative aspect-square w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 group'
                                >
                                    <Image src={clickIcon} alt='click icon' fill className='object-cover group-hover:hidden' />
                                    <Image src={clickActiveIcon} alt='click icon' fill className='object-cover hidden group-hover:block' />
                                </Link>
                            </Flex>
                            <Flex direction={"column"} gap={{ base: 4, md: 6, xl: 8 }} py={{ base: 12 }} bg={"black"}>
                                <Text
                                    ta={"center"}
                                    fz={{ base: 11.4, sm: 13.5, md: 16, lg: 18, xl: 20, "2xl": 22.3 }}
                                    fw={700}
                                    className='uppercase whitespace-nowrap'
                                    lh={1.2}
                                >
                                    {idol.name}
                                </Text>

                                <Text
                                    lh={1.2} ta={"center"}
                                    fz={{ base: 7.2, sm: 8, md: 10, lg: 11.5, xl: 12.6, "2xl": 14 }} c={"#FFFFFFCC"} fw={500}
                                >
                                    @{idol.userName}
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            );
        }

        return (
            <Flex direction={"column"} w={"100%"} align={"center"} c={"white"}>
                <Box
                    pos={"relative"}
                    mb={{ base: 8, sm: 9, md: 12, lg: 14, xl: 15, "2xl": 16 }}
                    w={"100%"}
                    className={twMerge(
                        'idol-image overflow-hidden',
                        "aspect-[0.65352112676]",
                        "rounded-t-2xl"
                    )}
                >
                    <Image src={idol.img} alt={idol.name} fill className='object-cover' />
                    <Link
                        target='_blank'
                        href={`https://knky.co/creator/${idol.userName}`}
                        className='cursor-pointer absolute bottom-1 md:bottom-1.5 2xl:bottom-2 right-1 md:right-1.5 2xl:right-2 aspect-square w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-10 group'
                    >
                        <Image src={clickIcon} alt='click icon' fill className='object-cover group-hover:hidden' />
                        <Image src={clickActiveIcon} alt='click icon' fill className='object-cover hidden group-hover:block' />
                    </Link>
                </Box>

                <Text
                    ta={"center"}
                    fz={{ base: 11.4, sm: 13.5, md: 16, lg: 18, xl: 20, "2xl": 22.3 }}
                    mb={{ base: 4, md: 6, xl: 8 }}
                    fw={700}
                    className='uppercase whitespace-nowrap'
                    lh={1.2}
                >
                    {idol.name}
                </Text>

                <Text
                    lh={1.2} ta={"center"}
                    fz={{ base: 7.2, sm: 8, md: 10, lg: 11.5, xl: 12.6, "2xl": 14 }} c={"#FFFFFFCC"} fw={500}
                >
                    @{idol.userName}
                </Text>
            </Flex>
        );
    };

    return (
        <AnimationWraper
            hasAnimation={true}
            isInView={isInView}
            y={getY(index)}
            delay={getDelay(index)}
        >
            <Box
                w={{ base: "100%" }}
                className={centerRealIndex == index ? "banner-slide-item center-slide" : "banner-slide-item"}
            >
                {renderContent()}
            </Box>
        </AnimationWraper>
    );
};

const AnimationWraper = ({ children, hasAnimation = false, y = 0, isInView = false, delay = 0 }: PropsWithChildren<{ hasAnimation?: boolean, y?: number, isInView?: boolean, delay?: number }>) => {
    if (hasAnimation) {
        return (
            <motion.div
                initial={{ y: y }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: delay
                }}
                className='w-full'
            >
                {children}
            </motion.div>
        );
    }
    return children;
};