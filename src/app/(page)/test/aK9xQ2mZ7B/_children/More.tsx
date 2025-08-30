import { useBrowserWidth } from '@/hooks';
import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import img from "@public/version-3/more/img.webp";
import { motion } from 'framer-motion';


const textList = [
    {
        title: "Match MAKER",
        href: "https://match.knky.co/"
    },
    {
        title: "Prime",
        href: "https://prime.knky.co/"
    },
    {
        title: "Pro Creator",
        href: "https://pro.knky.co/"
    },
    {
        title: "Agency",
        href: "https://agency.knky.co/"
    },
    {
        title: "Business",
        href: "https://business.knky.co/"
    },
    {
        title: "$KNKY Cash",
        href: "https://knky.cash/"
    }
];

const textList2 = [
    {
        title: "Creator",
        href: "/"
    },
    {
        title: "FAN",
        href: "/fans"
    },

];

export function More() {
    const main = useRef(null);
    const { isMb } = useBrowserWidth();

    return (
        <Box w={"100%"} bg={"#F0F0FC"} className='aspect-[1.77777777778]'>
            <Box ref={main} className='container-version3' h={"100%"}>
                <Box
                    pos={"relative"}
                    style={{
                        backgroundImage: isMb ? "url('/unlimited/bg-mb.webp')" : "url('/unlimited/bg-pc.webp')",
                        backgroundColor: "#F0F0FC"
                    }}
                    py={{ base: 104, md: 70, lg: 80, xl: 90, "2xl": 100 }}
                    h={"100%"}
                    className='bg-contain w-full aspect-[1.63148148148]'
                >
                    <Flex justify={"space-between"}>
                        <Flex gap={{ base: 32, "2xl": 48 }}>
                            <Text
                                fz={{ base: 14, sm: 16, md: 18, lg: 20, xl: 22, "2xl": 24 }}
                                fw={{ base: 500, md: 600 }}
                                c={"#34363C"}
                            >
                                Experience more
                            </Text>

                            <Flex direction={"column"} gap={{ base: 8, md: 9, lg: 10, xl: 12, "2xl": 12 }}>
                                {textList.map((o, index) => {
                                    return (
                                        <Text
                                            key={index}
                                            fz={{ base: 20, sm: 24, md: 28, lg: 32, xl: 36, "2xl": 40 }}
                                            fw={700}
                                            lh={0.8}
                                            c={"#131416"}
                                            className='uppercase overflow-hidden'
                                        >
                                            <Link href={o.href} target='_blank' className='relative group inline-flex items-center gap-2 '>
                                                <motion.span
                                                    initial={{ y: "65%", rotateX: -70 }}
                                                    whileInView={{ y: 0, rotateX: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: "linear"
                                                    }}
                                                    className="inline-block relative"
                                                >
                                                    {o.title} →
                                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                                                </motion.span>
                                                {/* <span className="transform -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                                    →
                                                </span> */}
                                            </Link>
                                        </Text>
                                    );
                                })}
                            </Flex>
                        </Flex>

                        <motion.div
                            initial={{ y: "30%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                            }}
                            className='relative w-1/2 md:w-1/5'
                        >
                            <Image src={img} alt='more img' className='w-full h-auto' />
                        </motion.div>
                    </Flex>

                    <Flex
                        w={"100%"}
                        justify={"center"}
                        mt={{ base: 80, md: 90, lg: 100, xl: 110, "2xl": 120 }}
                    >
                        <Flex gap={{ base: 32, "2xl": 48 }}>
                            <Text
                                fz={{ base: 14, sm: 16, md: 18, lg: 20, xl: 22, "2xl": 24 }}
                                fw={{ base: 500, md: 600 }}
                                c={"#34363C"}
                            >
                                Get stated as a
                            </Text>

                            <Flex direction={"column"} gap={{ base: 8, md: 9, lg: 10, xl: 12, "2xl": 12 }}>
                                {textList2.map((o, index) => {
                                    return (
                                        <Text
                                            key={index}
                                            fz={{ base: 20, sm: 24, md: 28, lg: 32, xl: 36, "2xl": 40 }}
                                            fw={700}
                                            lh={0.8}
                                            c={"#131416"}
                                            className='uppercase overflow-hidden'
                                        >
                                            <Link href={o.href} target='_blank' className='relative group inline-flex items-center gap-2 '>
                                                <motion.span
                                                    initial={{ y: "65%", rotateX: -70 }}
                                                    whileInView={{ y: 0, rotateX: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: "linear"
                                                    }}
                                                    className="inline-block relative"
                                                >
                                                    {o.title} →
                                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                                                </motion.span>
                                            </Link>
                                        </Text>
                                    );
                                })}
                            </Flex>
                        </Flex>

                    </Flex>

                    <Flex pos={"absolute"} bottom={{ base: 80 }} right={{ base: 0 }} direction={"column"} gap={{ base: 4 }}>
                        <Text
                            fz={{ base: 13, md: 14, lg: 15, "2xl": 16 }}
                            c={"#4D5053"}
                        >
                            Questions and support.
                        </Text>

                        <Text
                            fz={{ base: 14, sm: 16, md: 18, lg: 20, xl: 22, "2xl": 24 }}
                            fw={600}
                            lh={1.2}
                            c={"#AC1991"}
                            className='uppercase'
                        >
                            <Link href={"https://help.knky.co/en/"} target='_blank' className='relative group inline-flex items-center gap-2 '>
                                <span className="relative">
                                    HELP CENTER →
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#AC1991] transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </Text>

                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
