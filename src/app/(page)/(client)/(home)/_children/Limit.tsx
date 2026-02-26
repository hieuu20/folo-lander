import { useBrowserWidth } from '@/hooks';
import { Box, SimpleGrid } from '@mantine/core';
import React from 'react';
import img1 from "@public/limit/1.webp";
import img2 from "@public/limit/2.webp";
import img3 from "@public/limit/3.webp";
import img4 from "@public/limit/4.webp";
import img5 from "@public/limit/5.webp";
import img2_1 from "@public/limit/2-1.webp";
import img4_1 from "@public/limit/4-1.webp";
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Limit() {
    const { isMb } = useBrowserWidth();

    const render = () => {
        if (!isMb) {
            return (
                <SimpleGrid pos={"relative"} cols={{ base: 3, lg: 5 }} spacing={{ base: 8 }} h={"100%"}>
                    <Box pos="relative" w="100%" h="100%" className='overflow-hidden'>
                        <motion.div
                            animate={{ y: ["-50%", "0%"] }}   // top → bottom
                            transition={{
                                repeat: Infinity,
                                duration: 36,
                                ease: "linear"
                            }}
                            className="flex flex-col gap-2"
                        >
                            <Image src={img1} alt="limit-img" className="w-full h-auto" />
                            <Image src={img1} alt="limit-img" className="w-full h-auto" />
                        </motion.div>
                    </Box>

                    <Box pos="relative" w="100%" h="100%" className='overflow-hidden'>
                        <motion.div
                            animate={{ y: ["-50%", "0%"] }}   // top → bottom
                            transition={{
                                repeat: Infinity,
                                duration: 40,
                                ease: "linear"
                            }}
                            className="flex flex-col gap-2"
                        >
                            <Image src={img2} alt="limit-img" className="w-full h-auto" />
                            <Image src={img2} alt="limit-img" className="w-full h-auto" />
                            <Image src={img2_1} alt="limit-img" className="w-full h-auto" />
                        </motion.div>
                    </Box>

                    <Box pos="relative" w="100%" h="100%" className='overflow-hidden'>
                        <motion.div
                            animate={{ y: ["-50%", "0%"] }}   // top → bottom
                            transition={{
                                repeat: Infinity,
                                duration: 36,
                                ease: "linear"
                            }}
                            className="flex flex-col gap-2"
                        >
                            <Image src={img3} alt="limit-img" className="w-full h-auto" />
                            <Image src={img3} alt="limit-img" className="w-full h-auto" />
                        </motion.div>
                    </Box>

                    <Box pos="relative" w="100%" h="100%" className='overflow-hidden'>
                        <motion.div
                            animate={{ y: ["-50%", "0%"] }}   // top → bottom
                            transition={{
                                repeat: Infinity,
                                duration: 40,
                                ease: "linear"
                            }}
                            className="flex flex-col gap-2"
                        >
                            <Image src={img4} alt="limit-img" className="w-full h-auto" />
                            <Image src={img4} alt="limit-img" className="w-full h-auto" />
                            <Image src={img4_1} alt="limit-img" className="w-full h-auto" />
                        </motion.div>
                    </Box>

                     <Box pos="relative" w="100%" h="100%" className='overflow-hidden'>
                        <motion.div
                            animate={{ y: ["-50%", "0%"] }}   // top → bottom
                            transition={{
                                repeat: Infinity,
                                duration: 36,
                                ease: "linear"
                            }}
                            className="flex flex-col gap-2"
                        >
                            <Image src={img5} alt="limit-img" className="w-full h-auto" />
                            <Image src={img5} alt="limit-img" className="w-full h-auto" />
                        </motion.div>
                    </Box>
                </SimpleGrid>
            );


        }
    };

    return (
        <Box pos={"relative"} w={"100%"} className='aspect-[1.89473684211] overflow-hidden'>
            <Box
                pos={"absolute"}
                top={"50%"}
                left={"50%"}
                px={{ base: 16, md: 40 }}
                py={{ base: 24, md: 40 }}
                fz={{ base: 32, md: 56 }}
                fw={600}
                lh={1.2}
                c={"white"}
                bg={"#00000066"}
                className='rounded-3xl md:rounded-[40px] backdrop-blur-[3px] -translate-x-1/2 -translate-y-1/2 z-10'
            >
                Creating without limits
            </Box>

            {render()}
        </Box>
    );
}
