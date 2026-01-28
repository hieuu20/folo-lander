'use client';

import React from "react";
import {
    Box,
    Flex,
    Text,
    Button,
    Card,
} from '@mantine/core';
import shareIcon from "@public/profile/dashboard/share.svg";
import Image from "next/image";
import giftIcon from "@public/profile/dashboard/gift.svg";
import { IUser } from "@/types/user";

interface Props {
    profile: IUser;
}
export function DashboardHeader({ profile }: Props) {
    const referralLink = `${window.location.origin}?ref=${profile?.referralCode}`;
    return (
        <Flex
            className="rounded-b-3xl bg-no-repeat bg-cover aspect-[3.62258064516]"
            style={{
                backgroundImage: "url('/profile/dashboard/bg.webp')"
            }}
            align={"center"}
            justify={"center"}
        >
            <Flex direction="column" align="center" gap={16} m={"auto"}>
                <Flex gap={24} c={"#FFFFFFCC"} justify={"center"}>
                    <Text c="#FFFFFFCC" lh={1.4} fz={{ base: 14 }}>
                        <span className="font-semibold">+1.2K</span> Today points
                    </Text>
                    <Text c="#FFFFFFCC" lh={1.4} fz={{ base: 14 }}>
                        <span className="font-semibold">+31</span> Fans
                    </Text>
                    <Text c="#FFFFFFCC" lh={1.4} fz={{ base: 14 }}>
                        <span className="font-semibold">+12</span> Creators
                    </Text>
                </Flex>

                <Card
                    radius="16px"
                    px={16} py={12}
                    bd={"1px solid #E7E7F826"}
                    h={64} w={{ base: "100%", md: 343 }}
                    bg={"linear-gradient(180deg, rgba(247, 247, 252, 0.1) 0%, rgba(116, 116, 173, 0.1) 100%)"}
                    className="backdrop-blur-sm"
                >
                    <Flex align="center" gap={12} justify={"space-between"}>
                        <Box flex={1}>
                            <Text fz={13} c="#FFFFFFCC">
                                My referral link:
                            </Text>
                            <Text fw={600} fz={14} c={"white"} lineClamp={1}>
                                {referralLink}
                            </Text>
                        </Box>

                        <Button w={40} h={40} bg={"white"} className="rounded-2xl" p={0}>
                            <Image src={shareIcon} alt="shareIcon" className="w-6 h-auto" />
                        </Button>
                    </Flex>
                </Card>

                <Flex gap={12} w={{ base: "100%", md: 343 }} justify={"space-between"}>
                    <Button
                        bd={"1px solid #E7E7F826"}
                        className="rounded-2xl"
                        w={"48%"}
                        h={48}
                        fz={16}
                        fw={600}
                        bg={"linear-gradient(180deg, rgba(247, 247, 252, 0.1) 0%, rgba(116, 116, 173, 0.1) 100%)"}
                    >
                        My rank: {profile?.rank}
                    </Button>
                    <Button
                        leftSection={<Image src={giftIcon} alt="giftIcon" className="w-6 h-auto" />}
                        bd={"1px solid #E7E7F826"}
                        className="rounded-2xl"
                        w={"48%"}
                        h={48}
                        fz={16}
                        fw={600}
                        bg={"linear-gradient(180deg, rgba(247, 247, 252, 0.1) 0%, rgba(116, 116, 173, 0.1) 100%)"}
                    >
                        Rewards
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}