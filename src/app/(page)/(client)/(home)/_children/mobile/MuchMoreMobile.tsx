import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useRef } from 'react';

import { More, moreList } from '@/utils';
import Slider from 'react-slick';
import gsap from 'gsap/dist/gsap';
import { motion } from 'framer-motion';
import right from "@public/news/arrow-right.svg";
import left from "@public/news/arrow-left.svg";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export function MuchMoreMobile() {
    const main = useRef(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sliderRef = useRef<any>();

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
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box w={"100%"} h={"130vh"} id='MuchMore' bg={"white"}>
            <Flex
                ref={main}
                h={"100vh"}
                w={"100%"}
                justify={"center"}
                align={"center"}
                direction={"column"}
                gap={24}
                className='container'
                pb={{ base: 40 }}
                pt={71}
            >
                <motion.div
                    id='more-text'
                    // initial={{ y: 100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.6, ease: "circOut" }}
                    className='flex flex-col gap-4 w-[94%]'
                >
                    <Text fz={{ base: 32, sm: 36, md: 45, lg: 48, xl: 53, "2xl": 56 }} fw={600} c={"#131416"} lh={1.2} ta={"center"}>
                        And much more
                    </Text>

                    <Text fz={{ base: 16 }} fw={500} c={"#4D5053"} lh={1.2} ta={"center"}>
                        A growing set of tools designed to support creators, brands, and users to help you grow.
                    </Text>
                </motion.div>

                <motion.div
                    // initial={{ y: 150, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.6, ease: "circOut", delay: 0.3 }}
                    className='w-full overflow-hidden'
                >
                    <Slider
                        ref={sliderRef}
                        {...settings}
                        className="[&_.slick-slide]:px-2.5 2xl:[&_.slick-slide]:px-3 [&_.slick-slide]:translate-x-[50%] [&_.slick-list]:-mx-2.5 2xl:[&_.slick-list]:-mx-3"
                    >
                        {moreList.map((o, index) => {
                            return (
                                <MoreItem key={index} item={o} />
                            );
                        })}
                    </Slider>
                </motion.div>

                <Flex gap={24} w={"100%"} justify={"center"} mt={{ base: 24, md: 32, xl: 48 }} className="">
                    <Image src={left} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={() => sliderRef.current.slickPrev()} />
                    <Image src={right} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={() => sliderRef.current.slickNext()} />
                </Flex>
            </Flex>
        </Box>
    );
}


const MoreItem = ({ item }: { item: More }) => {
    return (
        <Flex
            direction={"column"}
            justify={"space-between"}
            w={"100%"}
            bg={item.backgroundRadiant || item.backgroundColor || undefined}
            style={{
                backgroundImage: item.backgroundImg ? `url('${item.backgroundImg}')` : undefined
            }}
            p={{ base: 24 }}
            className='rounded-[40px] aspect-[0.62267857142] overflow-hidden bg-no-repeat bg-cover'
        >
            <Flex direction={"column"} gap={{ base: 12 }}>
                <Text fz={{ base: 20, md: 32 }} c={item.titleColor} fw={600} lh={1.2}>
                    {item.title}
                </Text>

                <Text fz={{ base: 14, md: 20 }} c={item.dscColor} mb={{ base: 12 }} lh={1.2}>
                    {item.description}
                </Text>
            </Flex>

            <Box
                w={item.larger ? "calc(100% + 24px)" : "100%"}
                pos={"relative"}
                bottom={item.absolute?.bottom ? -24 : 0}
                right={item.absolute?.right ? 0 : 0}
            >
                <Image src={item.img} alt={item.title} className='w-full h-auto' />
            </Box>

        </Flex>
    );
};