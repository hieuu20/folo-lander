import React from 'react';

import img2_1 from "@public/limit/2-1.webp";
import img1 from "@public/limit/mb1.webp";
import img2 from "@public/limit/mb2.webp";
import img3 from "@public/limit/mb3.webp";

import { Box, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function LimitMobile() {
    return (
        <Box pos={"relative"} w={"100%"} className='aspect-[0.53495007132] sm:aspect-[0.8] overflow-hidden'>
            <Box
                pos={"absolute"}
                top={"50%"}
                left={"50%"}
                px={{ base: 16, md: 40 }}
                py={{ base: 16, md: 40 }}
                fz={{ base: 28, md: 40 }}
                fw={600}
                lh={1.2}
                w={"fit-content"}
                c={"white"}
                bg={"#00000066"}
                className='rounded-3xl md:rounded-[40px] backdrop-blur-[3px] -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap'
            >
                Creating without limits
            </Box>

            <SimpleGrid cols={3} spacing={4} w={"100%"} h={"100%"} px={4}>
                <Box pos="relative" w={"100%"} h="100%" className='overflow-hidden'>
                    <motion.div
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 40,
                            ease: "linear"
                        }}
                        className="flex flex-col gap-1"
                    >
                        <Image src={img1} alt="limit-img" className="w-full h-auto" />
                        <Image src={img1} alt="limit-img" className="w-full h-auto" />
                    </motion.div>
                </Box>

                <Box pos="relative" w={"100%"} h="100%" className='overflow-hidden'>
                    <motion.div
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 46,
                            ease: "linear"
                        }}
                        className="flex flex-col gap-1"
                    >
                        <Image src={img2} alt="limit-img" className="w-full h-auto" />
                        <Image src={img2} alt="limit-img" className="w-full h-auto" />
                        <Image src={img2_1} alt="limit-img" className="w-full h-auto" />
                    </motion.div>
                </Box>

                <Box pos="relative" w={"100%"} h="100%" className='overflow-hidden'>
                    <motion.div
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 40,
                            ease: "linear"
                        }}
                        className="flex flex-col gap-1"
                    >
                        <Image src={img3} alt="limit-img" className="w-full h-auto" />
                        <Image src={img3} alt="limit-img" className="w-full h-auto" />
                    </motion.div>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
