/* eslint-disable @typescript-eslint/no-unused-vars */
import { IFaq } from '@/types/faq';
import { Accordion, Box, Flex, Text, Title } from '@mantine/core';
import React from 'react';

interface Props {
    faqs: IFaq[];
}
export function Faq({ faqs }: Props) {
    return (
        <Box
            w={"100%"}
            bg={"#F7F7FC"}
        >
            <Flex
                className='container'
                direction={{ base: "column", lg: "row" }}
                justify={{ base: "center", md: "space-between" }}
                py={{ base: 40, md: 60, xl: 80 }}
                pb={{ base: 60, md: 80, xl: 100 }}
                gap={{ base: 24, sm: 40 }}
            >
                <Title
                    order={4}
                    fz={{ base: 32, md: 60, xl: 80 }}
                    fw={{ base: 700, md: 600 }}
                    c={"#131416"}
                    w={{ base: "100%", lg: "28%" }}
                    ta={{ base: "center", lg: "unset" }}
                >
                    Frequently
                    Asked
                    Questions
                </Title>

                <Flex
                    w={{ base: "100%", lg: "45%", "2xl": 500 }}
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
        </Box>
    );
}
