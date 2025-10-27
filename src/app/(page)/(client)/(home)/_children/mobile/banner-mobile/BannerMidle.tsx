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
import logoWhite from "@public/version-3/banner/logo-white.webp";

import phone1 from "@public/version-3/banner/phone/1.webp";
import phone2 from "@public/version-3/banner/phone/2.webp";
import phone3 from "@public/version-3/banner/phone/3.webp";
import phone4 from "@public/version-3/banner/phone/4.webp";
import phone5 from "@public/version-3/banner/phone/5.webp";
import phone6 from "@public/version-3/banner/phone/6.webp";
import phone7 from "@public/version-3/banner/phone/7.webp";
import phone8 from "@public/version-3/banner/phone/8.webp";

import phone from "@public/version-3/banner/phone/phone-border.webp";

import phonebgImage from "@public/version-3/banner/phone-bg.webp";
// import bannerbg1 from "@public/version-3/banner/banner-bg-1.webp";
// import bannerbg2 from "@public/version-3/banner/banner-bg-2.webp";


import SectionButton from '@/components/buttons/SectionButton';
import { CurveText } from '@/components/Typo';

import { bannerTexts } from '@/utils/bannerText';

interface Props {
    idols: ICreatorIdol[];
}


export function BannerMidle({ idols }: Props) {
    const main = useRef<HTMLDivElement>(null);

    const [height, setHeight] = useState(0);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHeight(window.screen.height);
        }

        const containerWidth = main.current?.getBoundingClientRect();
        setWidth(containerWidth?.width || 0);
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    pin: true,
                    start: 'top top',
                    end: '+=17100',
                    scrub: true,
                    markers: false,
                },
            });

            const phoneImageEls = gsap.utils.toArray(".phone-image") as any[];

            tl.fromTo(
                "#banner-logo",
                { x: "-50%", y: "-50%" },
                { x: "-50%", y: "-50%", duration: 1 },
            );

            tl.fromTo(
                "#banner-logo-img",
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#banner-white-logo-img",
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#text-1",
                { y: "120%", x: 0 },
                { x: 0, y: 0, duration: 1 },
            );

            tl.fromTo(
                "#text-2",
                { y: "-120%", x: 0 },
                { x: 0, y: 0, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#banner-logo-img-wrap",
                { scale: 1 },
                { scale: 0, duration: 1 },
            );

            tl.fromTo(
                "#text-1-wrap",
                { y: 0 },
                { y: 52, duration: 1 },
                "<"
            );

            tl.fromTo(
                "#text-2-wrap",
                { y: 0 },
                { y: -52, duration: 1 },
                "<"
            );

            tl.to(
                "#banner-logo",
                { top: "16%", duration: 1 },
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
                { y: 0, duration: 1.5 },
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
                "#phone-1-bg",
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 1 },
                "<"
            );

            // tl.fromTo(
            //     "#banner-bg-1",
            //     { autoAlpha: 1 },
            //     { autoAlpha: 0, duration: 1 },
            //     "<"
            // );

            tl.to(
                "#phone",
                { scale: 1.1, y: "-10%", duration: 1 },
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
                { y: 0, opacity: 1, x: "-50%", duration: 0.8, ease: "easeIn" },
            );

            tl.fromTo(
                "#image-circle1",
                { rotate: 0, scale: 1, y: 0 },
                { rotate: 60, scale: 1, y: 0, duration: 2, ease: "none" }
            );

            tl.fromTo(
                "#image-circle1",
                { y: 0, autoAlpha: 1, rotate: 60 },
                { y: "-136%", autoAlpha: 0, rotate: 95, duration: 2, ease: "none" },
            );

            tl.fromTo(
                "#banner-bg-2",
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 1 },
                "<"
            );

            tl.to(
                "#phone-1-bg",
                { width: "140%", height: "100%", duration: 1 },
                "<"
            );

            tl.fromTo(
                "#phone-text",
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 1, ease: "power2.inOut" },
                "<"
            );

            tl.fromTo(
                "#banner-button",
                { autoAlpha: 0, y: 100, x: "-50%" },
                {
                    autoAlpha: 1,
                    x: "-50%",
                    y: 0,
                    duration: 1,
                    ease: "power2.inOut",
                },
                "<=+1"
            );

            const texts = gsap.utils.toArray(".text-item");

            texts.forEach((el: any, index) => {
                tl.fromTo(
                    el,
                    { x: "180%", y: "80%", rotate: 100, autoAlpha: 0 },
                    { x: 0, y: 0, rotate: 0, autoAlpha: 1, duration: 2, ease: "none" },
                    index == 0 ? "<=+0.3" : "<"
                );

                tl.fromTo(
                    phoneImageEls[index + 1],
                    { y: "-100%" },
                    { y: 0, duration: 1.9, ease: "none" },
                    "<"
                );

                tl.fromTo(
                    phoneImageEls[index],
                    { filter: "blur(0px)", scale: 1 },
                    { filter: "blur(20px)", scale: 0.85, duration: 1.9, ease: "none" },
                    "<"
                );

                tl.fromTo(
                    el,
                    { x: 0, y: 0 },
                    { x: 0, y: 0, duration: 0.5, ease: "none" },
                );

                if (index < texts.length - 1) {
                    tl.fromTo(el, { x: 0, y: 0, autoAlpha: 1, rotate: 0 }, { x: "-180%", y: "80%", rotate: -100, autoAlpha: 0, duration: 2, delay: 0, ease: "none" });
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
            h={18000}
        >
            <Flex
                ref={main}
                pos={"relative"}
                justify={"center"}
                align={"center"}
                w={"100%"}
                className='overflow-hidden'
                style={{
                    aspectRatio: width / height,
                }}
            >
                {/* <Box pos={"absolute"} w={"100%"} h={"100%"} top={0} left={0} className='overflow-hidden'>
                    <Box
                        id='banner-bg-1'
                        pos={"absolute"}
                        top={0}
                        left={"50%"}
                        w={"400%"}
                        className='aspect-[6.68049792531] -translate-y-1/2 -translate-x-1/2'
                    >
                        <Image src={bannerbg1} alt='bannerbg1' fill className='object-cover' />
                    </Box>

                    <Box
                        id='banner-bg-2'
                        pos={"absolute"}
                        top={"0"}
                        right={"0"}
                        w={"160%"}
                        className='aspect-[1.39776951673] -translate-y-[40%] translate-x-[40%]'
                    >
                        <Image src={bannerbg2} alt='bannerbg2' fill className='object-cover' />
                    </Box>
                </Box> */}

                <Flex
                    id='banner-logo'
                    direction={"column"}
                    pos={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    w={"100%"}
                    c={"white"}
                    align={"center"}
                >
                    <Text
                        id='text-1-wrap'
                        fz={{ base: 40, sm: 46, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                        fw={900}
                        pb={{ base: 8, sm: 12, md: 16 }}
                        className='overflow-hidden whitespace-nowrap'
                        lh={1.2}
                    >
                        <span id='text-1' className='block'>
                            WHO’S IN
                        </span>
                    </Text>

                    <Box id='banner-logo-img-wrap' pos={"relative"} h={{ base: 100, sm: 120 }} className='aspect-[1.66923076923]'>
                        <Image src={logo} alt='logo' id='banner-logo-img' fill className='object-cover' />
                        <Image src={logoWhite} alt='logo' id='banner-white-logo-img' className='object-cover z-10' />
                    </Box>

                    <Text
                        id='text-2-wrap'
                        fz={{ base: 40, sm: 46, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                        fw={900}
                        pt={{ base: 8, sm: 12, md: 16 }}
                        lh={1.2}
                        className='overflow-hidden whitespace-nowrap'
                    >
                        <span id='text-2' className='block'>
                            ALREADY
                        </span>
                    </Text>
                </Flex>

                <Phase2 idols={idols} />
            </Flex>
        </Box>
    );
}

const Phase2 = ({ idols }: Props) => {
    const [scope] = useAnimate();
    const isInView = useInView(scope, { once: false, amount: 0.7 });

    const swiperRef = useRef<any>(null);
    const [centerRealIndex, setCenterRealIndex] = useState(3);

    const isAutoplaying = useRef(false);

    useEffect(() => {
        swiperRef?.current?.swiper?.autoplay?.stop();
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            const phase2El = document.getElementById("phase-2");
            const swiperEl = document.getElementById("mySwiper");

            if (!phase2El || !swiperEl) return;

            const shouldPlay = Number(phase2El.style.opacity) == 2 && Number(swiperEl.style.opacity) == 1;
            const swiper = swiperRef?.current?.swiper;

            if (shouldPlay && !isAutoplaying.current) {
                timeoutId = setTimeout(() => {
                    swiper?.autoplay?.start();
                    isAutoplaying.current = true;
                }, 500);
            } else if (!shouldPlay && isAutoplaying.current) {
                swiper?.autoplay?.stop();
                isAutoplaying.current = false;
            }
        };

        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll);
        return () => {
            window.removeEventListener("scroll", throttledScroll);
            clearTimeout(timeoutId);
        };
    }, [swiperRef]);

    const list = [...idols, ...idols];

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
                        delay: 900,
                    }}
                    fadeEffect={{ crossFade: true }}
                    spaceBetween={0}
                    allowTouchMove={false}
                    modules={[
                        Autoplay,
                    ]}
                    initialSlide={3}
                    onSlideChange={(swiper) => {
                        setCenterRealIndex(prev => prev >= list.length - 2 ? 1 : centerRealIndex + 1);
                    }}
                    className="mySwiper [&_.swiper-wrapper]:items-center overflow-visible"
                >
                    {list.map((o, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className={twMerge(
                                    "translate-x-[-8vw]",
                                    'transition-all will-change-transform duration-400 ease-in-out',
                                    centerRealIndex == index ? "w-[43.5466666667vw]" : "w-[36vw]",
                                    centerRealIndex == index ? "px-[2.1vw]" : "px-[1.8vw]"
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
    phone5,
    phone6,
    phone7,
    phone8,
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
            left={"50%"}
            className='container-version3 will-change-transform -translate-y-1/2 -translate-x-1/2'
        >
            <Circle />
            <Phase3 />

            <Box
                id="phone"
                pos={"relative"}
                w={"63.3306666667vw"}
                className='aspect-[0.65383647095] origin-top will-change-transform'
            >
                <Box
                    id="phone-1-bg"
                    pos={"absolute"} w={"240%"} h={"160%"} top={"50%"} left={"50%"} className='-translate-y-1/2 -translate-x-1/2 will-change-transform'
                >
                    <Image src={phonebgImage} alt='phonebgImage' fill className='object-cover' />
                </Box>

                <Image src={phone} alt='phone' fill className='object-cover' />

                <Box
                    pos={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    w={"62.8%"}
                    h={"88%"}
                    bg={"black"}
                    className='-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[6%]'
                />

                <Box
                    id='center-idol-fake'
                    pos={"absolute"}
                    w={'43.5466666667vw'}
                    px={'2.1vw'}
                    top={"50%"}
                    left={"50%"}
                    className='overflow-hidden'
                >
                    <IdolItem idol={centerIdol} centerRealIndex={1} index={1} isInView={true} />
                </Box>

                {phoneImages.map((o, index) => {
                    return (
                        <Box
                            key={index}
                            pos={"absolute"}
                            top={"50%"}
                            left={"50%"}
                            w={"62.8%"}
                            className='-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[6%] will-change-transform'
                        >
                            <Image
                                src={o}
                                alt='phone image'
                                className='relative phone-image object-cover will-change-transform transform-3d w-full h-auto '
                            />
                        </Box>
                    );
                })}

                <Flex
                    id="phone-text"
                    pos={"absolute"}
                    bottom={{ base: "-20%" }}
                    left={"50%"}
                    direction={"column"}
                    gap={{ base: 8, md: 10, xl: 12 }}
                    align={"center"}
                    className='will-change-transform'
                >
                    <Text fz={{ base: 14, sm: 16, md: 18, "2xl": 20 }} lh={1.4} lts={-0.5} c={"#FFFFFFCC"} className='whitespace-nowrap'>
                        Your content. Your rules. Public, private, or premium.
                    </Text>

                    <Text fz={{ base: 20, sm: 22, md: 26, lg: 28, xl: 30, "2xl": 32 }} fw={500} lh={1.4} c={"white"} className='whitespace-nowrap'>
                        KNKY adapts to you!
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
};


const Phone2 = ({ isInView }: { isInView: boolean }) => {
    return (
        <Box
            id='phone-2'
            pos={"absolute"}
            w={"62.3306666667vw"}
            left={"50%"}
            top={"56vh"}
            className='-translate-y-1/2 -translate-x-1/2 aspect-[0.65383647095] will-change-transform'
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
                            'idol-image overflow-hidden rounded-[18px] w-full h-full',
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

const Circle = () => {
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const element = document.getElementById("image-circle")?.getBoundingClientRect();
        if (element) {
            setContainerWidth(element.width);
        }
    }, []);

    const images = [
        "/version-3/banner/circle/1.webp",
        "/version-3/banner/circle/2.webp",
        "/version-3/banner/circle/3.webp",
        "/version-3/banner/circle/4.webp",
        "/version-3/banner/circle/5.webp",
        "/version-3/banner/circle/6.webp",
        "/version-3/banner/circle/7.webp",
        "/version-3/banner/circle/8.webp",
        "/version-3/banner/circle/9.webp",
        "/version-3/banner/circle/10.webp",
        "/version-3/banner/circle/11.webp",
        "/version-3/banner/circle/12.webp",
        "/version-3/banner/circle/13.webp",
        "/version-3/banner/circle/14.webp",
        "/version-3/banner/circle/15.webp",
        "/version-3/banner/circle/16.webp",
    ];

    return (
        <Box
            id='image-circle'
            pos={"absolute"}
            top={"24%"}
            left={"50%"}
            w={{ base: 680, sm: 720, md: "84%" }}
            className='aspect-square -translate-x-1/2'
        >
            <motion.div
                id='image-circle1'
                className="absolute w-full h-full origin-center"
            >
                {images.map((src, i) => {
                    const imgSize = containerWidth * 0.086; // 8% của div ngoài
                    const radius = containerWidth / 2 - (imgSize * 1);

                    const angle = (i / images.length) * 2 * Math.PI - Math.PI / 2;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    const rotate = i * 22.5;

                    return (
                        <Image
                            key={i}
                            src={src}
                            alt='circle image'
                            width={100}
                            height={100}
                            className='absolute w-[8.86%] h-auto object-cover'
                            style={{
                                left: "50%",
                                top: "50%",
                                transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rotate}deg)`,
                            }}
                        />
                    );
                })}

            </motion.div>
        </Box>
    );
};

const Phase3 = () => {

    return (
        <Flex
            pos={"absolute"}
            w={"100%"}
            h={"100%"}
            right={0}
            top={"62%"}
        >
            {bannerTexts.map((o, index) => {
                return (
                    <Flex
                        key={index}
                        direction={"column"}
                        pos={"absolute"}
                        w={"100%"}
                        h={"100%"}
                        top={0}
                        left={0}
                        align={"center"}
                        justify={"center"}
                        className={`text-item`}
                    >
                        <Flex
                            pos={"relative"}
                            top={"20%"}
                            direction={"column"}
                            w={"100%"}
                            align={"center"}
                            justify={"center"}
                            h={"100%"}
                        >
                            <CurveText text={o.text1} className='text-[32px] font-black' rootClassName='absolute top-[0%] left-[50%] -translate-x-1/2' />
                            <CurveText text={o.text2} className='text-[32px] font-black' rootClassName='absolute top-[9%] left-[50%] -translate-x-1/2' />
                            {o.mobile.map((x, i) => {
                                return (
                                    <CurveText
                                        key={i}
                                        text={x}
                                        className='text-[13px] font-medium'
                                        rootClassName={`absolute top-[${17 + i * 4}%] left-[50%] -translate-x-1/2`}
                                    />
                                );
                            })}
                            {/* <CurveText
                                text={o.text3}
                                className='text-[13px] font-medium'
                                rootClassName='absolute top-[17%] left-[50%] -translate-x-1/2'
                            />
                            <CurveText
                                text={o.text4}
                                className='text-[13px] font-medium'
                                rootClassName='absolute top-[21%] left-[50%] -translate-x-1/2'
                            />
                            {o.text5 && (
                                <CurveText
                                    text={o.text5}
                                    className='text-[13px] font-medium'
                                    rootClassName='absolute top-[25%] left-[50%] -translate-x-1/2'
                                />
                            )} */}
                        </Flex>
                    </Flex>
                );
            })}

            <SectionButton
                id="banner-button"
                pos={"absolute"}
                bottom={"2%"}
                left={"50%"}
                className=''
                show={true}
                w={{ base: 216 }}
                h={{ base: 40 }}
                href='https://knky.co/fresh'
                title={"Join KNKY today →"}
                fz={{ sm: 16 }}
                fw={600}
                style={{
                    opacity: 0
                }}
            />
        </Flex>
    );
};