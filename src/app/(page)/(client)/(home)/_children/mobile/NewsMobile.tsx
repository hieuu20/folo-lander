/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';

import { Box, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { INews } from '@/app/api/_entities';
import Slider from 'react-slick';
import { formatTime } from '@/utils/helpers';
import Link from 'next/link';

import gsap from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';

import right from "@public/news/arrow-right.svg";
import left from "@public/news/arrow-left.svg";
import { twMerge } from 'tailwind-merge';

import newsLogo from "@public/news/logo.png";
import { motion, useAnimate, useInView } from 'framer-motion';

interface Props {
    news: INews[];
}

export default function NewsMobile({ news }: Props) {
    const [height, setHeight] = useState(0);
    const [scope] = useAnimate();
    const isInView = useInView(scope, { amount: 0.4, once: false });

    const sliderRef = useRef<any>();

    const main = useRef(null);

    useGSAP(
        () => {
            const step = window.innerHeight;
            const endValue = step * 2;

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
                "#News",
                { x: 0, y: 0 },
                { x: 0, y: 0, duration: 2, ease: "power2.out" },
            );
        },
        { scope: main, }
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll(".news-title");
            if (elements.length > 0) {
                const max = Array.from(elements).reduce((max, el) => {
                    const height = el.getBoundingClientRect().height;
                    return height > max ? height : max;
                }, 0);

                setHeight(max);
            }
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    const isPlay = isInView && news.length > 4;

    const settings = {
        dots: false,
        arrows: false,
        infinite: isPlay,
        speed: 500,
        pauseOnHover: true,
        autoplay: isPlay,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        draggable: true,
        responsive: [
            {
                breakpoint: 1240,
                autoplay: true,
                infinite: true,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box w={"100%"} bg={"white"} h={"150vh"}>
            <Flex
                id='News'
                w={"100%"}
                bg={"white"}
                align={"start"}
                h={"100vh"}
                ref={main}
            >
                <Box className='container' pt={71} ref={scope}>
                    <Title
                        id='news-title'
                        w={{ base: "100%" }}
                        px={16}
                        order={2}
                        fz={{ base: 32 }}
                        c={"#131416"}
                        fw={6700}
                        lh={1.2}
                        ta={"center"}
                        mb={{ base: "3vh" }}
                    >
                        <motion.span
                            // initial={{ y: "150%", opacity: 0 }}
                            // animate={isInView ? { y: 0, opacity: 1 } : {}}
                            // transition={{
                            //     duration: 0.6,
                            //     ease: "easeIn"
                            // }}
                            className="inline-block"
                        >
                            NEWS
                        </motion.span>
                    </Title>

                    <Slider
                        ref={sliderRef}
                        {...settings}
                        className="[&_.slick-slide]:px-2.5 2xl:[&_.slick-slide]:px-3 [&_.slick-list]:-mx-2.5 2xl:[&_.slick-list]:-mx-3"
                    >
                        {news.map((o, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className={twMerge('group bg-white cursor-pointer')}
                                    onClick={() => {
                                        window.open(o.hasLink ? o.buttonLink : `/news/${o.slug}`, "_blank");
                                    }}
                                >
                                    <Flex
                                        direction={"column"}
                                        className='rounded-2xl translate-x-[30%] sm:translate-x-0 overflow-hidden'
                                        bd={"1px solid #E7E7F8"}
                                    >
                                        <Box pos={"relative"} w={"100%"} h={"32vh"} className='overflow-hidden'>
                                            <Image src={o.thumb} alt={o.title} width={200} height={200} className='rounded-t-2xl w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out' />
                                            <Image src={newsLogo} alt='newsLogo' className='absolute bottom-0 left-0 w-[108px] h-auto object-cover' />
                                        </Box>

                                        <Flex
                                            direction={"column"}
                                            p={{ base: 16, md: 20, xl: 24 }}
                                            gap={{ base: 16 }}
                                            bg={"white"}
                                            className='rounded-b-2xl'
                                        >
                                            <Text fz={{ base: 14 }} c={"#4D5053"} lh={1.2}>
                                                {formatTime(o.createdAt as any)}
                                            </Text>

                                            <Box h={height}>
                                                <Text fz={{ base: 18, md: 22, xl: 24 }} c={"#131416"} lh={1.2} fw={600} className='news-title'>
                                                    {o.title}
                                                </Text>
                                            </Box>

                                            <Link
                                                href={o.hasLink ? o.buttonLink : `/news/${o.slug}`}
                                                target={'_blank'}
                                                className="text-[#435EFB] font-semibold py-2 hover:opacity-70 transition-all duration-200"
                                            >
                                                {o.hasLink ? o.buttonLabel : "Read article →"}
                                            </Link>
                                        </Flex>
                                    </Flex>
                                </motion.div>
                            );
                        })}
                    </Slider>

                    <Flex gap={24} w={"100%"} justify={"center"} mt={{ base: "3vh" }} className={twMerge(!isPlay ? "lg:invisible" : "")}>
                        <Image src={left} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={() => sliderRef.current.slickPrev()} />
                        <Image src={right} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={() => sliderRef.current.slickNext()} />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
