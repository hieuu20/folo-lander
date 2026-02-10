import { IFeaturedCreator } from '@/types/featuredCreator';
import { Box, Flex, Text, Title } from '@mantine/core';
import React from 'react';
import Marquee from "react-fast-marquee";
import proBadge from "@public/icons/pro-badge.png";
import verifiedBadge from "@public/icons/verified-badge.png";
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const badges = {
    "VERIFIED": verifiedBadge,
    "PRO": proBadge
};


interface Props {
    featuredCreators: IFeaturedCreator[];
}
export function FeaturedCreator({ featuredCreators }: Props) {
    return (
        <Box
            py={{ base: 40, md: 60, xl: 80 }}
            bg={"linear-gradient(90deg, #FFFFFF 0%, #F7F7FC 50%, #FFFFFF 100%)"}
        >
            <Title order={4} fz={{ base: 32, md: 45, xl: 56 }} fw={700} mb={{ base: 24, md: 32, xl: 40 }} c={"#131416"} ta={"center"}>
                $1,245,665 earnt by creators
            </Title>

            <Box>
                <Marquee
                    direction="right"
                    speed={30}
                    delay={5}
                    play={true}
                    className=""
                    pauseOnHover
                >
                    {featuredCreators.map((o, i) => {
                        return (
                            <Flex 
                                key={i} 
                                px={{ base: 24, md: 40, xl: 60 }} 
                                gap={{ base: 8 }} 
                                align={"center"}
                                onClick={() => {
                                    if(!o.profileLink) return;

                                    window.open(o.profileLink, "_blank");
                                }}
                                className={twMerge(o.profileLink && "cursor-pointer")}
                            >
                                <Box pos={"relative"} w={{ base: 40, md: 64 }} className='aspect-square'>
                                    <Image src={o.avatar} alt='creator avatar' fill className='object-cover rounded-full' />
                                    <Image src={badges[o.badge]} alt='badge' className='absolute bottom-0 right-0 w-[13px] md:w-[22px] h-auto' />
                                </Box>

                                <Flex direction={"column"} gap={2}>
                                    <Text fz={{ base: 16, md: 20 }} fw={500} lh={1.5}>
                                        {o.name}
                                    </Text>

                                    <Text fz={{ base: 13, md: 16 }} c={"#4D5053"} lh={1.2}>
                                        {o.role}
                                    </Text>
                                </Flex>
                            </Flex>
                        );
                    })}
                </Marquee>
            </Box>
        </Box>
    );
}
