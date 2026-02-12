/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';

import { Box, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Slider from 'react-slick';
import { formatTime } from '@/utils/helpers';
import Link from 'next/link';

import { twMerge } from 'tailwind-merge';
import newsLogo from "@public/news/logo.png";

import { INews } from '@/types/news';
import right from "@public/news/arrow-right.svg";
import left from "@public/news/arrow-left.svg";
import { useBrowserWidth } from '@/hooks';

interface Props {
    news: INews[];
}

export function News({ news }: Props) {
    const [height, setHeight] = useState(0);
    const { width } = useBrowserWidth();

    const sliderRef = useRef<any>();

    const itemMobileWidth = 290;
    const slideToShow = width / itemMobileWidth;

    const centerPadding = ((slideToShow - 1) / 2) * itemMobileWidth;

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

    const isPlay = news.length > 4;

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        pauseOnHover: true,
        autoplay: isPlay,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: Math.floor(news.length / 2),
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
                    centerMode: true,
                    centerPadding: `${centerPadding + 5}px`,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box
            pos={"relative"}
            id='News'
            w={"100%"}
            bg={"white"}
            py={{ base: 40, md: 60, xl: 80 }}
        >
            <Box className='md:container'>
                <Title
                    w={{ base: "100%" }}
                    px={16}
                    order={2}
                    fz={{ base: 32, md: 56 }}
                    c={"#131416"}
                    fw={600}
                    lh={1.2}
                    ta={"center"}
                    mb={{ base: 24, md: 40 }}
                >
                    NEWS
                </Title>

                <Box mb={{ base: 24 }}>
                    <Slider
                        ref={sliderRef}
                        {...settings}
                        className="[&_.slick-slide]:px-2.5 2xl:[&_.slick-slide]:px-3 [&_.slick-list]:-mx-2.5 2xl:[&_.slick-list]:-mx-3"
                    >
                        {news.map((o, index) => {
                            return (
                                <Box
                                    key={index}
                                    className={twMerge('group bg-white cursor-pointer')}
                                >
                                    <Flex
                                        direction={"column"}
                                        className='rounded-2xl overflow-hidden'
                                        bd={"1px solid #E7E7F8"}
                                    >
                                        <Box pos={"relative"} w={"100%"} className='overflow-hidden aspect-[1.24279835391]'>
                                            <Image src={o.thumb} alt={o.title} width={200} height={200} className='w-full h-auto object-cover  group-hover:scale-105 transition-all duration-300 ease-in-out' />
                                            <Image src={newsLogo} alt='newsLogo' className='absolute bottom-0 left-0 w-[108px] h-auto object-cover' />
                                        </Box>

                                        <Flex
                                            direction={"column"}
                                            p={{ base: 16, md: 20, xl: 24 }}
                                            gap={{ base: 16 }}
                                            bg={"white"}
                                            className='rounded-b-2xl'
                                        >
                                            <Text fz={{ base: 16 }} c={"#4D5053"} lh={1.2}>
                                                {formatTime(o.createdAt as any)}
                                            </Text>

                                            <Box h={height}>
                                                <Text fz={{ base: 20, md: 22, xl: 24 }} c={"#131416"} lh={1.2} fw={600} className='news-title'>
                                                    {o.title}
                                                </Text>
                                            </Box>

                                            <Link
                                                href={o.hasLink ? o.buttonLink : `/news/${o.slug}`}
                                                target={'_blank'}
                                                className='text-[#435EFB] font-semibold py-2 hover:opacity-70 transition-all duration-200'
                                            >
                                                {o.hasLink ? o.buttonLabel : "Read article →"}
                                            </Link>
                                        </Flex>
                                    </Flex>
                                </Box>
                            );
                        })}
                    </Slider>
                </Box>

                <Flex gap={24} w={"100%"} justify={"center"} className={twMerge(!isPlay ? "lg:invisible" : "")}>
                    <Image src={left} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={() => sliderRef.current.slickPrev()} />
                    <Image src={right} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={() => sliderRef.current.slickNext()} />
                </Flex>
            </Box>
        </Box>
    );
}
