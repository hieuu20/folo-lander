import { PartnerSlide } from '@/types/partnerSlide';
import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

interface Props {
    partnerSlides: PartnerSlide[];
}
export function PartnerSlider({ partnerSlides }: Props) {
    return (
        <Box w={"100%"} py={{ base: 40, md: 60, xl: 80 }}>
            <Box>
                <Marquee
                    direction="left"
                    speed={30}
                    delay={5}
                    play={true}
                    className=""
                    pauseOnHover
                >
                    {partnerSlides.map((o, i) => {
                        return (
                            <Box key={i} h={{ base: 48, md: 64, xl: 80 }} w={"fit-content"} px={{ base: 24, md: 40 }}>
                                <Image src={o.thumb} width={100} height={100} alt='partner slide thumb' className='h-full w-auto object-cover' />
                            </Box>
                        );
                    })}
                </Marquee>
            </Box>
        </Box>
    );
}
