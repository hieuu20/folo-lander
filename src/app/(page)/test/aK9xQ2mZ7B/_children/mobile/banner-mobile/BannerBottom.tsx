/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Text } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
// import logo from "@public/banner/logo.png";
// import Image from 'next/image';
// import itemImg from "@public/banner/circle/img.png";
import { motion, useInView } from 'framer-motion';
import phone from "@public/version-3/banner/phone/phone-border.webp";
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/dist/gsap';
import SectionButton from '@/components/buttons/SectionButton';
import { CurveText } from '@/components/Typo';

import phone1 from "@public/version-3/banner/phone/1.webp";
import phone2 from "@public/version-3/banner/phone/2.webp";
import phone3 from "@public/version-3/banner/phone/3.webp";
import phone4 from "@public/version-3/banner/phone/4.webp";
import phone5 from "@public/version-3/banner/phone/5.webp";

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

const phoneImages = [
    phone1,
    phone2,
    phone3,
    phone4,
    phone5
];

export function BannerBottom() {
    const main = useRef(null);
    const isInView = useInView(main, { amount: 0.99 });

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    pin: true,
                    start: 'center+=114 center',
                    end: '+=9000',
                    pinSpacing: false,
                    anticipatePin: 1,
                    scrub: true,
                    markers: false
                },
            });

            tl.fromTo(
                "#phone",
                { scale: 2, y: "60%" },
                { scale: 1, y: 0, duration: 0.5, ease: "power2.in" }
            );

            tl.fromTo(
                "#image-circle1",
                { scale: 0.58, opacity: 0.2, y: 0 },
                { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power2.in" },
                "<"
            );

            tl.fromTo(
                "#image-circle1",
                { rotate: 0, scale: 1, y: 0 },
                { rotate: 60, scale: 1, y: 0, duration: 2, ease: "none", delay: 0.1 }
            );

            tl.fromTo(
                "#image-circle1",
                { y: 0, opacity: 1, rotate: 60 },
                { y: "-136%", opacity: 0, rotate: 95, duration: 2, ease: "none" },
            );

            tl.to(
                "#phone-text",
                { autoAlpha: 0, duration: 1, ease: "power2.inOut" },
                "<"
            );
            tl.to(
                "#phone-bg",
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
            const phoneImageEls = gsap.utils.toArray(".phone-image") as any[];

            texts.forEach((el: any, index) => {
                tl.fromTo(
                    el,
                    { x: "180%", y: "80%", rotate: 100, autoAlpha: 0 },
                    { x: 0, y: 0, rotate: 0, autoAlpha: 1, duration: 1.5, delay: 0.5 },
                    index == 0 ? "<=+0.3" : "<"
                );

                tl.fromTo(
                    phoneImageEls[index + 1],
                    { y: "-100%" },
                    { y: 0, duration: 1.4, ease: "none" },
                    "<"
                );

                tl.fromTo(
                    phoneImageEls[index],
                    { filter: "blur(0px)", scale: 1 },
                    { filter: "blur(20px)", scale: 0.85, duration: 1.4, ease: "power2.inOut" },
                    "<"
                );

                if (index < texts.length - 1) {
                    tl.fromTo(el, { x: 0, y: 0, autoAlpha: 1, rotate: 0 }, { x: "-180%", y: "80%", rotate: -100, autoAlpha: 0, duration: 1.5, delay: 0.5 });
                }
            });
        },
        {
            scope: main,
        }
    );

    return (
        <Box pos={"relative"} h={9800} className='overflow-hidden'>
            <Flex direction={"column"} ref={main} pos={"relative"} align={"center"} className='container-version3'>
                <motion.div
                    id="phone-bg"
                    initial={{
                        width: 0,
                        height: 0
                    }}
                    animate={isInView ? {
                        width: "50%",
                        height: "150%"
                    } : {}}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 0.2
                    }}
                    className='absolute top-[24%] left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-60'
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(117, 17, 175, 0.3) 0%, rgba(18, 2, 32, 0) 100%)"
                    }}
                />
                <Circle />
                <Phase2 />
                <Phone isInView={isInView} />
            </Flex>
        </Box>
    );
}

const Phone = ({ }: { isInView: boolean }) => {
    return (
        <Box
            id="phone"
            pos={"relative"}
            w={{ base: "70%", md: "27.1%" }}
            className='aspect-[0.65312441358] origin-top'
        >

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
            {phoneImages.map((o, index) => {
                return (
                    <Box
                        key={index}
                        pos={"absolute"}
                        top={"50%"}
                        left={"50%"}
                        w={"62.8%"}
                        className='-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[6%]'
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
                className='-translate-x-1/2'
            >
                <Text fz={{ base: 14, sm: 16, md: 18, "2xl": 20 }} lh={1.4} lts={-0.5} c={"#FFFFFFCC"} className='whitespace-nowrap'>
                    Your content. Your rules. Public, private, or premium.
                </Text>

                <Text fz={{ base: 20, sm: 22, md: 26, lg: 28, xl: 30, "2xl": 32 }} fw={500} lh={1.4} c={"white"} className='whitespace-nowrap'>
                    KNKY adapts to you!
                </Text>
            </Flex>
        </Box>
    );
};

const Circle = () => {
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const element = document.getElementById("image-circle")?.getBoundingClientRect();
        if (element) {
            setContainerWidth(element.width);
        }
    }, []);

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
            <Box
                pos={"absolute"}
                bottom={0}
                left={"50%"}
                w={"150%"}
                h={"100%"}
                style={{
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
                }}
                className='-translate-x-1/2'
            />
        </Box>
    );
};

const Phase2 = () => {
    const list = [
        {
            text1: "MUTIPLE-LEVEL",
            text2: "SUBSCRIPTIONS",
            text3: "Industry-first subscriptions with channels, collabs,",
            text4: "and tailored niches. Upsells that drive real growth."
        },
        {
            text1: "PRIVATE",
            text2: "MESSAGING",
            text3: "One to one messaging reimagined with calls,",
            text4: "media and advanced analytics.",
            text5: "Smarter chats. Stronger connections.",
        },
        {
            text1: "LIVE",
            text2: "& EVENTS",
            text3: "Host ticketed lives, pay-per-view streams,",
            text4: "or one-to-one sessions.",
            text5: "Connect with fans like never before."
        },
        {
            text1: "SELL DIGITAL",
            text2: "SELL PHYSICAL",
            text3: "Offer digital goods, clips, and premium services.",
            text4: "Expand into merch and physical sales with ease."
        }
    ];
    return (
        <Flex
            pos={"absolute"}
            w={"100%"}
            h={"100%"}
            right={0}
            top={"62%"}
        >
            {list.map((o, index) => {
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
                            <CurveText
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
                            )}
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