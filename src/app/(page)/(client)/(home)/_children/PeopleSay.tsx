/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Title } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import trustIcon from "@public/people-say/trust.webp";
import Image from 'next/image';
import { IPeopleSay } from '@/types/peopleSay';
import { AnimatePresence, motion, useInView } from 'framer-motion';

interface Props {
    peopleSays: IPeopleSay[];
}
export function PeopleSay({ peopleSays = [] }: Props) {
    const [index, setIndex] = useState(0);
    const ref = useRef<any>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (isInView) {
            intervalId = setInterval(() => {
                setIndex((prev) => (prev + 1) % peopleSays.length);
            }, 5000);
        }
        return () => clearInterval(intervalId);
    }, [isInView, peopleSays.length]);

    return (
        <Box ref={ref} w={"100%"} py={{ base: 40, md: 60, xl: 80 }} bg={"#F7F7FC"}>
            <Flex
                className='container'
                direction={{ base: "column", lg: "row" }}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center" }}
                gap={{ base: 24, sm: 60, lg: "unset" }}
            >
                <Flex w={{ base: "100%", lg: "24%" }} direction={"column"} gap={{ base: 24, lg: 32 }} align={{ base: "center", lg: "unset" }}>
                    <Image src={trustIcon} alt='trustIcon' className='w-[130px] md:w-[160px] xl:w-[195px] h-auto' />
                    <Title order={4} fz={{ base: 32, md: 60, xl: 80 }} fw={{ base: 700, md: 600 }} lh={1.2} c={"#131416"}>
                        What
                        people
                        say 💬
                    </Title>
                </Flex>

                <Flex
                    w={{ base: "100%", sm: "80%", lg: 680 }}
                    justify={"center"}
                    bg={"white"}
                    p={{ base: 24, md: 40, xl: 64 }}
                    fz={{ base: 20, md: 48 }}
                    fw={600}
                    c={"#131416"}
                    className='rounded-2xl md:rounded-3xl aspect-[1.10063897764]'
                    align={"center"}
                >
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className='text-center'
                        >
                            “{peopleSays[index].feedback}”
                        </motion.p>
                    </AnimatePresence>
                </Flex>
            </Flex>
        </Box>
    );
}
