import React from 'react';
import bgPc from "@public/leaderboard/jwl-bg-pc.webp";
import bgMb from "@public/leaderboard/jwl-bg-mb.webp";
import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import { EmailWaitingListInput } from '../../_shared/EmailWaitingListInput';
import { Role } from '@/types/role';
import { useApp } from '@/app/context/AppContext';

interface Props {
    roles: Role[];
}

export function JoinWaitList({ roles }: Props) {
    const { profile } = useApp();

    if (profile) {
        return <></>;
    }

    return (
        <Box py={{ base: 60, md: 80 }}>
            <Box className='container'>
                <Flex
                    w={"100%"}
                    pos={"relative"}
                    align={"center"}
                    justify={"center"}
                    px={{ base: 16, md: 32, xl: 56 }}
                    py={{ base: 40, md: 56, xl: 72 }}
                >
                    <Box
                        pos={"absolute"}
                        inset={0} bd={{ base: "4px solid #f6f4f4", md: "8px solid #f6f4f4" }}
                        className='rounded-3xl md:rounded-[64px] overflow-hidden'
                    >
                        <Image src={bgPc} alt='bgPc' fill className='object-cover hidden md:inline-block' />
                        <Image src={bgMb} alt='bgMb' fill className='object-cover md:hidden' />
                    </Box>

                    <Flex
                        pos={"relative"}
                        w={"100%"}
                        justify={"space-between"}
                        align={"center"}
                        direction={{ base: "column", md: "row" }}
                        gap={{ base: 24 }}
                    >
                        <Flex direction={"column"} align={{ base: "center", md: "unset" }} gap={{ base: 12, md: 8, xl: 4 }}>
                            <Text
                                fz={{ base: 32, md: 36, xl: 40 }}
                                fw={{ base: 700, md: 600 }}
                                lh={1.2}
                                ta={{ base: "center", md: "left" }}
                            >
                                Join the waitlist
                            </Text>

                            <Text
                                fz={{ base: 14, md: 16, xl: 20 }}
                                c={"#4D5053"} lh={1.4}
                                ta={{ base: "center", md: "left" }}
                                w={{ base: "94%", md: "100%" }}
                            >
                                Get the latest updates, special offers, and early access.
                            </Text>
                        </Flex>

                        <Box w={"fit-content"}>
                            <EmailWaitingListInput roles={roles} />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}
