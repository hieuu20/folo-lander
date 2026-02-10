import { Box, Flex, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import trustIcon from "@public/people-say/trust.webp";
import Image from 'next/image';
import { IPeopleSay } from '@/types/peopleSay';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
    peopleSays: IPeopleSay[];
}
export function PeopleSay({ peopleSays = [] }: Props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % peopleSays.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [peopleSays.length]);

    return (
        <Box w={"100%"} py={{ base: 40, md: 60, xl: 80 }} bg={"#F7F7FC"}>
            <Flex
                className='container'
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center" }}
            >
                <Flex w={{ base: "100%", md: "24%" }} direction={"column"} gap={{ base: 24, md: 32 }}>
                    <Image src={trustIcon} alt='trustIcon' className='w-[130px] md:w-[160px] xl:w-[195px] h-auto' />
                    <Text fz={{ base: 32, md: 60, xl: 80 }} fw={{ base: 700, md: 600 }} c={"#131416"}>
                        What
                        people
                        say 💬
                    </Text>
                </Flex>

                <Flex
                    w={{ base: "100%", md: "50%", x: 680 }}
                    justify={"center"}
                    bg={"white"}
                    p={{ base: 24, md: 40, xl: 64 }}
                    fz={{ base: 20, md: 48 }}
                    fw={600}
                    c={"#131416"}
                    className='rounded-2xl md:rounded-3xl aspect-[1.10063897764]'
                >
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            “{peopleSays[index].feedback}”
                        </motion.p>
                    </AnimatePresence>
                </Flex>
            </Flex>
        </Box>
    );
}
