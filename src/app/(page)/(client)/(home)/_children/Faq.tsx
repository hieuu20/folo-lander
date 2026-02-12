/* eslint-disable @typescript-eslint/no-unused-vars */
import { IFaq } from '@/types/faq';
import { Accordion, Box, Flex, Text, Title } from '@mantine/core';
import React from 'react';
import bgPc from "@public/faq/bg-pc.webp";
import bgMb from "@public/faq/bg-mb.webp";

import Image from 'next/image';
import SectionButton from '@/components/buttons/SectionButton';
import gsap from "gsap";

interface Props {
    faqs: IFaq[];
}
export function Faq({ faqs }: Props) {

    const scrollToLeaderboard = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#Leaderboard",
                autoKill: false,
            },
            ease: "power2.out",
        });
    };
    return (
        <Box w={"100%"} bg={"#F7F7FC"}>
            <Flex
                className='container'
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "space-between" }}
                py={{ base: 40, md: 60, xl: 80 }}
                pb={{ base: 60, md: 80, xl: 100 }}
                gap={24}
            >
                <Title
                    order={4}
                    fz={{ base: 32, md: 60, xl: 80 }}
                    fw={{ base: 700, md: 600 }}
                    c={"#131416"}
                    w={{ base: "100%", md: "28%" }}
                    ta={{ base: "center", md: "unset" }}
                >
                    Frequently
                    Asked
                    Questions
                </Title>

                <Flex
                    w={{ base: "100%", md: "45%", x: 500 }}
                    direction={"column"}
                >
                    <Accordion
                        chevronPosition="right"
                        variant="contained"
                        chevronSize={32}
                        defaultValue={"0"}
                        className="[&_.mantine-Accordion-chevron_svg]:w-8 [&_.mantine-Accordion-chevron_svg]:h-8"
                    >
                        {faqs.map((faq, index) => {
                            return (
                                <Accordion.Item
                                    key={index}
                                    value={String(index)}
                                    bg={'white'}
                                    mb={{ base: index == faqs.length - 1 ? 0 : 16 }}
                                    className="rounded-2xl overflow-hidden border-none"
                                    style={{
                                        boxShadow: "0px 0px 15px 0px #0000000F"
                                    }}
                                >
                                    <Accordion.Control
                                        px={{ base: 16 }}
                                        className="[&_.mantine-Accordion-chevron_svg]:text-[#131416]"
                                    >
                                        <Title
                                            order={4}
                                            fz={{ base: 16, md: 20 }}
                                            fw={{ base: 500 }}
                                            c={'#131416'}
                                            lh={1.4}
                                        >
                                            {faq.question}
                                        </Title>
                                    </Accordion.Control>
                                    <Accordion.Panel className="[&_.mantine-Accordion-content]:pt-0">
                                        <Box
                                            fz={{ base: 14, md: 16 }}
                                            fw={400}
                                            c={'#4D5053'}
                                            dangerouslySetInnerHTML={{
                                                __html: faq.answer,
                                            }}
                                        />
                                    </Accordion.Panel>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion>

                </Flex>
            </Flex>

            {/* <Box
                pt={{ base: 40 }} pb={{ base: 80, md: 120 }}
                px={{ base: 16 }}
            >
                <Flex
                    w={{ base: "100%", md: "80%", xl: 1160 }}
                    direction={{ base: "column", md: "row" }}
                    mx={"auto"}
                    gap={{ base: 40 }}
                    pos={"relative"}
                    justify={"center"}
                    align={"center"}
                    className='aspect-[1.25182481752] md:aspect-[6.44444444444]'
                    px={{ base: 32, md: 0 }}
                >
                    <Image src={bgPc} alt='bg' fill className='object-cover hidden md:inline-block' />
                    <Image src={bgMb} alt='bg' fill className='object-cover md:hidden' />
                    <Text fz={{ base: 32, md: 34 }} fw={700} c={"#131416"} lh={1.2} pos={"relative"} ta={"center"}>
                        Refer Creators and your friends to earn 15% value.
                    </Text>

                    <SectionButton
                        title='Invite friends now →'
                        fz={{ base: 16, md: 20 }}
                        fw={600}
                        c={"white"}
                        w={{ base: 180, md: 224 }}
                        h={{ base: 40, md: 52 }}
                        px={0}
                        onClick={scrollToLeaderboard}
                    />
                </Flex>
            </Box> */}
        </Box>
    );
}
