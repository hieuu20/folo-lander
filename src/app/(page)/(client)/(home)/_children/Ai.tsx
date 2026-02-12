import { Box, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import elipse1 from "@public/slogan/ellipse1.webp";
import elipse2 from "@public/slogan/ellipse2.webp";
import elipse3 from "@public/slogan/ellipse3.webp";

import starIcon from "@public/ai/star.webp";

export function Ai() {
    return (
        // <Box h={"100vh"}>
        <Box id='slogan' w={"100%"} h={"100vh"} pos={"relative"} className='overflow-hidden'>
            <BackgroundAnimations />

            <Box w={"100%"} h={"100%"} pos={"relative"} className='container'>
                <Image src={elipse1} alt='elipse' className='w-auto h-[15%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />
                <Image src={elipse2} alt='elipse' className='w-auto h-[35%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />
                <Image src={elipse3} alt='elipse' className='w-auto h-[55%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />

                <Flex
                    id='slogan-text'
                    direction={"column"}
                    pos={"absolute"}
                    top={"45%"}
                    left={"50%"}
                    align={"center"}
                    c={"white"}
                    w={{ base: "90%", md: "50%"}}
                    className='-translate-y-[52px] md:-translate-y-[74px] -translate-x-1/2 z-10'
                >
                    <Image src={starIcon} alt='starIcon' className='w-[104px] md:w-[155px] h-auto mb-10' />
                    <Title
                        order={2}
                        fz={{ base: 32, md: 40, lg: 45, xl: 50, "2xl": 56 }} fw={600}
                        lh={1.2}
                        ta={"center"}
                        mb={16}
                    >
                        Faster, Simpler and Smarter.
                    </Title>

                    <Text
                        c={"#FFFFFFCC"} fz={{ base: 18, md: 22, lg: 24, xl: 26, "2xl": 28 }} lh={1.2} ta={"center"}
                    >
                        The AI-first system understands your needs, increases your earnings, and improves every micro interaction.
                    </Text>
                </Flex>
            </Box>
        </Box>
        // </Box>
    );
}


const BackgroundAnimations = () => {
    return (
        <>
            {/* {Array.from({ length: 50 }).map((o, index) => {
                return (
                    <BackgroundAnimation key={index} index={index} />
                );
            })} */}
            <video
                autoPlay={true}
                playsInline
                loop
                preload="auto"
                controls={false}
                muted={true}
                className="w-full h-full object-cover absolute top-0 left-0 object-top"
            >
                <source src={"/slogan/layer.mov"} type="video/mp4" />
            </video>
        </>
    );
};