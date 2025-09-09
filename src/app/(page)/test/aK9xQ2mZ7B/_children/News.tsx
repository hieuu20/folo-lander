/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';

import bg1 from "@public/version-3/growth/bg1.webp";
import bg2 from "@public/version-3/growth/bg2.webp";
import { Box, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { INews } from '@/app/api/_entities';
import Slider from 'react-slick';
import { formatTime } from '@/utils/helpers';
import Link from 'next/link';

import right from "@public/version-3/news/arrow-right.svg";
import left from "@public/version-3/news/arrow-left.svg";

interface Props {
    news: INews[];
}

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    draggable: true,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                // infinite: true,
                slidesToShow: 1.2,
                slidesToScroll: 1,
                // centerMode: true,
                // centerPadding: "15%",
            },
        },
    ],
};

export default function News({ news }: Props) {
    const [height, setHeight] = useState(0);

    const sliderRef = useRef<any>();

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


    return (
        <Box
            id='News'
            w={"100%"}
            h={"fit-content"}
            top={0}
            left={0}
            bg={"#160328"}
            py={{ base: 80, md: 90, xl: 100, "2xl": 106 }}
        >
            <Image src={bg1} alt='bg1' className='w-[8.5%] h-auto absolute bottom-0 left-0' />
            <Image src={bg2} alt='bg-2' className='w-[8.5%] h-auto absolute top-0 right-0' />
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
                    mb={{ base: 40, sm: 45, md: 48, lg: 52, xl: 56, "2xl": 60 }}
                >
                    NEWS
                </Title>

                <Slider
                    ref={sliderRef}
                    {...settings}
                    className="[&_.slick-slide]:px-2.5 2xl:[&_.slick-slide]:px-3 [&_.slick-list]:-mx-2.5 2xl:[&_.slick-list]:-mx-3"
                >
                    {news.map((o, index) => {
                        return (
                            <Flex
                                key={index} direction={"column"}
                                className='rounded-2xl overflow-hidden translate-x-[20%] sm:translate-x-0'
                                bd={"1px solid #5600A8"}
                            >
                                <Link href={`/news/${o.slug}`} target='_blank'>
                                    <Image src={o.thumb} alt={o.title} width={200} height={200} className='w-full h-auto object-cover' />
                                </Link>

                                <Flex direction={"column"} p={{ base: 16, md: 20, xl: 24 }} gap={{ base: 16 }}>
                                    <Link href={`/news/${o.slug}`} target='_blank'>
                                        <Text fz={{ base: 16 }} c={"#FFFFFFCC"} lh={1.2}>
                                            {formatTime(o.createdAt as any)}
                                        </Text>
                                    </Link>

                                    <Box h={height}>
                                        <Link href={`/news/${o.slug}`} target='_blank'>
                                            <Text fz={{ base: 20, md: 22, xl: 24 }} c={"white"} lh={1.2} fw={600} className='news-title'>
                                                {o.title}
                                            </Text>
                                        </Link>
                                    </Box>

                                    {o.hasLink && (
                                        <Link href={o.buttonLink} target='_blank' className='text-[#C98FFF] font-semibold py-2 md:mt-2'>
                                            {o.buttonLabel}
                                        </Link>
                                    )}
                                </Flex>
                            </Flex>
                        );
                    })}
                </Slider>

                <Flex gap={24} w={"100%"} justify={"center"} mt={{ base: 24, md: 32, xl: 48 }}>
                    <Image src={left} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={() => sliderRef.current.slickPrev()} />
                    <Image src={right} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={() => sliderRef.current.slickNext()} />
                </Flex>
            </Box>
        </Box>
    );
}
