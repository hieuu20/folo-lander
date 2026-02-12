import { Box, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import React, { useCallback, useRef } from 'react';
import Slider from 'react-slick';
import { useBrowserWidth } from '@/hooks';
import { WayGetPaid } from '@/types/wayGetPaid';
import { ArrowLeft } from '@/components/icons/ArrowLeft';
import { ArrowRight } from '@/components/icons/ArrowRight';
import { twMerge } from 'tailwind-merge';
import { More, moreList } from '@/utils/much-more';

interface Props {
    wayGetPaids: WayGetPaid[];
}

export function MuchMore({ wayGetPaids }: Props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sliderRef = useRef<any>();
    const { width, isMb } = useBrowserWidth();

    const itemWidth = isMb ? 290 : 338;


    const slideToShow = width / itemWidth;

    const onPrev = useCallback(() => {
        sliderRef.current.slickPrev();
    }, []);

    const onNext = useCallback(() => {
        sliderRef.current.slickNext();
    }, []);

    const centerPadding = ((slideToShow - 1) / 2) * itemWidth;

    // const settings = {
    //     dots: false,
    //     arrows: false,
    //     infinite: false,
    //     autoplay: false,
    //     slidesToShow: slideToShow,
    //     slidesToScroll: Math.floor(slideToShow),
    //     draggable: true,
    //     initialSlide: 0,
    //     afterChange: (index: number) => {
    //         setCurrent(index);
    //     },
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 centerMode: true,
    //                 centerPadding: `${centerPadding + 6}px`,
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        centerMode: true,
        centerPadding: `${centerPadding + 6}px`,
        slidesToShow: 1,
        draggable: true,
        // afterChange: (index: number) => {
        //     setCurrent(index);
        // },
        initialSlide: Math.floor(wayGetPaids.length / 2),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: `${centerPadding + 6}px`,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box id='MuchMore' w={"100%"} bg={"white"} py={{ base: 60, md: 80 }}>
            <Flex direction={"column"} gap={{ base: 24, md: 40 }}>
                <Title order={4} fz={{ base: 32, md: 56 }} fw={700} c={"#131416"} lh={1.2} ta={"center"}>
                    More ways to get paid
                </Title>

                <Slider
                    ref={sliderRef}
                    {...settings}
                    className="[&_.slick-slide]:px-3 [&_.slick-list]:-mx-3 [&_.slick-track]:relative"
                >
                    {wayGetPaids.map((o, index) => {
                        const item = moreList.find(x => x.title == o.title);
                        if (!item) {
                            return <></>;
                        }
                        return (
                            <MoreItem key={index} item={item} />
                        );
                    })}
                </Slider>

                <Flex gap={24} w={"100%"} justify={"center"}>
                    <Box onClick={onPrev} className={twMerge("hover:opacity-70 transition-all duration-200 cursor-pointer")}>
                        <ArrowLeft w={32} h={32} c={"#131416"} />
                    </Box>

                    <Box onClick={onNext} className={twMerge("hover:opacity-60 transition-all duration-200 cursor-pointer")}>
                        <ArrowRight w={32} h={32} c={"#131416"} />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}


const MoreItem = ({ item }: { item: More }) => {
    const { isMb } = useBrowserWidth();
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
            className='rounded-[40px] aspect-[0.60408921933] overflow-hidden bg-no-repeat bg-cover'
        >
            <Flex direction={"column"} gap={{ base: 12 }}>
                <Text fz={{ base: 24, md: 32 }} c={item.titleColor} fw={600} lh={1.2}>
                    {item.title}
                </Text>

                <Text fz={{ base: 16, md: 20 }} c={item.dscColor} lh={1.4}>
                    {item.description}
                </Text>

                {item.isCommingSoon && item.buttonImgMb && item.buttonImgPc && (
                    <Box
                        w={{ base: 76, md: 138 }}
                        h={{ base: 23, md: 38 }}
                        pos={"relative"}
                    // className='hover:opacity-75 transition-all duration-200 cursor-pointer'
                    >
                        <Image src={isMb ? item.buttonImgMb : item.buttonImgPc} alt='cmsButton' fill className='object-contain' />
                    </Box>
                )}
            </Flex>

            {item.isAi && item.imgMb ? (
                <Flex w={"100%"} h={"fit-content"} pos={"relative"}>
                    <Image src={isMb ? item.imgMb : item.img} alt='more img' className='w-full h-auto object-cover' />
                    <Image src={item.icon || ""} alt='much more icon' className='w-[36px] md:w-[40px] absolute right-0 top-0 translate-x-[40%] -translate-y-1/3' />
                </Flex>
            ) : (
                <Box
                    w={item.larger ? "calc(100% + 24px)" : "100%"}
                    pos={"relative"}
                    bottom={item.absolute?.bottom ? -24 : 0}
                    right={item.absolute?.right ? 0 : 0}
                >
                    <Image src={item.img} alt={item.title} className='w-full h-auto' />
                </Box>
            )}
        </Flex>
    );
};