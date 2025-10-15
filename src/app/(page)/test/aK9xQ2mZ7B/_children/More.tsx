import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import goldIcon from "@public/version-3/more/gold-icon.svg";


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
        href: "https://knky.agency/"
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
        href: "https://knky.co?init=signUpCreator"
    },
    {
        title: "FAN",
        href: "https://knky.co?init=signUpUser"
    },

];

export function More() {
    const main = useRef(null);

    return (
        <Box
            id='more' w={"100%"} bg={"#F0F0FC"} h={"screen"}
        // className='aspect-[1.77777777778]'
        >
            <Box ref={main} className='container-version3' h={"100%"}>
                <Box
                    pos={"relative"}
                    style={{
                        backgroundImage: "url('/version-3/unlimited/bg-pc.webp')",
                        backgroundColor: "#F0F0FC"
                    }}
                    py={{ base: 104, md: 70, lg: 80, xl: 90, "2xl": 100 }}
                    h={"100%"}
                    className='bg-contain bg-repeat w-full aspect-[1.63148148148]'
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
                                            lh={1.2}
                                            c={"#131416"}
                                            className='uppercase'
                                        >
                                            <Link href={o.href} target='_blank' className='relative group inline-flex items-center gap-2 '>
                                                <motion.span
                                                    initial={{ y: "150%", opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: "easeIn",
                                                        delay: index * 0.1
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {o.title} →
                                                    {index == 4 && (
                                                        <Image src={goldIcon} alt='gold icon' className='w-3 md:w-4 lg:w-5 2xl:w-6 h-auto absolute top-[-24%] left-[78%]' />
                                                    )}
                                                </motion.span>
                                                <span className="absolute z-10 left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
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
                            className='relative w-1/2 md:w-1/5 aspect-[0.82783018867]'
                        >
                            <video
                                autoPlay={true}
                                playsInline
                                loop
                                preload="auto"
                                controls={false}
                                muted={true}
                                className="w-full h-full object-cover rounded-2xl"
                            >
                                <source src={"/version-3/more/video.mp4"} type="video/mp4" />
                            </video>

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
                                            lh={1.2}
                                            c={"#131416"}
                                            className='uppercase'
                                        >
                                            <Link href={o.href} target='_blank' className='relative group'>
                                                <motion.span
                                                    initial={{ y: "150%", opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: "easeIn",
                                                        delay: index * 0.1
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {o.title} →
                                                </motion.span>
                                                <span className="absolute z-10 left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
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
                            <Link 
                                href={"https://help.knky.co/en/"} 
                                target='_blank' 
                                className='relative group inline-flex items-center gap-2'
                            >
                                <motion.span
                                    initial={{ y: "150%", opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeIn"
                                    }}
                                    className="inline-block"
                                >
                                    <span className="relative">
                                        HELP CENTER →
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#AC1991] transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </motion.span>
                            </Link>
                        </Text>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
