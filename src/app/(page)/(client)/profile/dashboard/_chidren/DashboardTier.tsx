/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Card, Flex, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Slider from "react-slick";
import { AccountLevel } from "@/types/accountLevel";
import { IUser } from "@/types/user";
import pointIcon from "@public/icons/point-icon.svg";
import { formatNumber } from "@/utils";
import checkIcon from "@public/icons/circle-check.svg";
import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { ArrowRight } from "@/components/icons/ArrowRight";

interface Props {
    accountLevels: AccountLevel[];
    profile: IUser
}
export function DashboardTier({ accountLevels, profile }: Props) {
    const [height, setHeight] = useState(0);
    const sliderRef = useRef<any>();
    const [slideWidth, setSlideWidth] = useState(0);
    const progressRef = useRef<any>();

    const [translateX, setTranslateX] = useState(0);

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        pauseOnHover: true,
        autoplay: false,
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
                    slidesToShow: 1.4,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const indexActive = accountLevels.filter(o => o.mintPoint < profile.totalpoint).length - 1;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll(".tier-perk");
            if (elements.length > 0) {
                const max = Array.from(elements).reduce((max, el) => {
                    const height = el.getBoundingClientRect().height;
                    return height > max ? height : max;
                }, 0);
                setHeight(max);
            }

            const slickTrackEl = document.querySelector(".slick-slide");
            if (slickTrackEl) {
                const width = slickTrackEl.getBoundingClientRect().width;
                setSlideWidth(width);
            }
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [accountLevels]);

    const percent = (((indexActive + 1) / accountLevels.length) * 100) - 8.3334;

    console.log({ percent });

    const onPrev = useCallback(() => {
        sliderRef.current.slickPrev();
        setTranslateX(prev => {
            if (prev < 0) {
                return 0;
            }
            return prev;
        });
    }, []);

    const onNext = useCallback(() => {
        sliderRef.current.slickNext();
        setTranslateX(prev => {
            if (prev == 0) {
                return slideWidth * -2;
            }
            return prev;
        });
    }, [slideWidth]);

    console.log({ translateX });

    return (
        <Box mt={40}>
            <Flex direction="column" align="center" mb={24} gap={4}>
                <Text fw={600} fz={{ base: 20 }} lh={1.4} ta={{ base: "left", md: "center" }}>
                    My Tier
                </Text>
                <Text fz={14} c="#4D5053" ta={{ base: "left", md: "center" }}>
                    Continue refer your friends, contribute or invest on Folo to get higher badge.
                </Text>
            </Flex>

            <Slider
                ref={sliderRef}
                {...settings}
                className="[&_.slick-slide]:px-2 [&_.slick-list]:-mx-2 [&_.slick-track]:relative"
            >
                {accountLevels.map((o, index) => {
                    return (
                        <TierCard key={index} item={o} isActive={indexActive == index} height={height} />
                    );
                })}
            </Slider>

            <Box w={"100%"} className="overflow-hidden">
                <Box
                    ref={progressRef}
                    w={slideWidth * accountLevels.length} pos={"relative"} bg={"#E7E7F8"} h={4} my={{ base: 24 }}
                    style={{
                        transform: `translateX(${translateX}px)`,
                    }}
                    className="transition-all duration-500"
                >
                    <Box w={`${percent}%`} bg={"linear-gradient(90deg, #435EFB 0%, #283895 100%)"} h={"100%"} pos={"absolute"} left={0} />
                    <Box bg={"#435EFB"} w={12} h={12} pos={"absolute"} left={`${percent}%`} top={"50%"} className="-translate-x-1/2 -translate-y-1/2 rounded-full" />
                </Box>
            </Box>

            <Flex gap={24} w={"100%"} justify={"center"} mt={{ base: 24, md: "4vh" }}>
                <Box onClick={onPrev} className="hover:opacity-70 transition-all duration-200 cursor-pointer">
                    <ArrowLeft w={32} h={32} />
                </Box>

                <Box onClick={onNext} className="hover:opacity-60 transition-all duration-200 cursor-pointer">
                    <ArrowRight w={32} h={32} />
                </Box>
            </Flex>
        </Box>
    );
}

function TierCard({ item, isActive, height, }: { item: AccountLevel, isActive: boolean, height: number, }) {
    return (
        <Card
            pos={"relative"}
            p={16}
            className={"rounded-[32px]"}
            bd={isActive ? "2px solid #435EFB" : "1px solid #E7E7F8"}
        >
            {isActive && (
                <Flex
                    pos={"absolute"}
                    top={0}
                    left={"50%"}
                    w={82}
                    h={24}
                    fz={13}
                    fw={500}
                    bg={"#435EFB"}
                    align={"center"}
                    justify={"center"}
                    c={"white"}
                    className="-translate-x-1/2 rounded-b-lg"
                >
                    Current rank
                </Flex>
            )}
            <Flex direction="column" gap={16} >
                <Flex
                    style={{
                        backgroundImage: `url('${item.bgSrc}')`
                    }}
                    className="bg-cover bg-no-repeat aspect-[1.75806451613]"
                    align={"center"}
                    justify={"center"}
                    direction={"column"}
                    gap={8}
                    c={item.color}
                >
                    <Image src={item.icon} alt="tier icon" width={24} height={24} className="object-cover" />
                    <Text fw={600} fz={{ base: 24 }} lh={1.2}>
                        {item.title}
                    </Text>

                    {item.mintPoint == 0 ? (
                        <Text fz={16} fw={500} lh={1.2} c="#4D5053" ta={"center"}>
                            For All Members
                        </Text>
                    ) : (
                        <Text fz={16} fw={500} lh={1.2} className="flex items-center gap-1 justify-center">
                            {formatNumber(item.mintPoint)}
                            <Image src={pointIcon} alt="pointIcon" width={20} height={20} />
                        </Text>
                    )}
                </Flex>
                <Box h={height}>
                    <Stack gap={6} className="tier-perk" >
                        {item.perks.map((o, i) => {
                            return (
                                <Text key={i} fz={14} lh={1.45} className="flex items-center gap-1">
                                    <Image src={checkIcon} alt="checkIcon" width={16} height={16} />
                                    {o}
                                </Text>
                            );
                        })}
                    </Stack>
                </Box>
            </Flex>
        </Card>
    );
}
