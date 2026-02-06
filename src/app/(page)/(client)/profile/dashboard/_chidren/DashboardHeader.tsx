'use client';

import React, { useCallback, useEffect, useState } from "react";
import { Box, Flex, Text, Button, Card, } from '@mantine/core';
import shareIcon from "@public/profile/dashboard/share.svg";
import Image from "next/image";
import giftIcon from "@public/profile/dashboard/gift.svg";
import { EarningOverview, IUser } from "@/types/user";
import SectionButton from "@/components/buttons/SectionButton";
import { formatCompact } from "@/utils";

interface Props {
    profile: IUser;
}
export function DashboardHeader({ profile }: Props) {
    const referralLink = `${window.location.origin}?ref=${profile?.referralCode}`;

    const [earningOverview, setEarningOverview] = useState<EarningOverview>();

    const fetchData = useCallback(async () => {
        const res = await fetch("/api/earing-overview");
        const resData = await res.json();
        setEarningOverview(resData.data);

    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleRefLink = useCallback(async () => {
        await navigator.share({
            title: "Join Folo with me today!",
            text: "Join Folo with me today!",
            url: referralLink,
        });
    }, [referralLink]);

    return (
        <Flex
            id="dashboard-header"
            className="bg-no-repeat bg-cover bg-center aspect-[1.30208333333] md:aspect-[3.62258064516]"
            style={{
                backgroundImage: "url('/profile/dashboard/bg.webp')"
            }}
            align={"center"}
            justify={"center"}
            pb={{ base: 16, md: 24 }}
            mt={{ base: -60, md: 0 }}
            pt={{ base: 50, md: 0 }}
        >
            <Flex direction="column" align="center" gap={16} m={"auto"} px={{ base: 16 }} w={"100%"}>
                <Flex gap={24} c={"#FFFFFFCC"} justify={"center"}>
                    <Text c="#FFFFFFCC" lh={1.4} fz={{ base: 14 }}>
                        <span className="font-semibold text-white">{formatCompact(earningOverview?.pointToday || 0)}</span> Today points
                    </Text>
                    <Text c="#FFFFFFCC" lh={1.4} fz={{ base: 14 }}>
                        <span className="font-semibold text-white">{formatCompact(earningOverview?.numberOfFan || 0)}</span> Fans
                    </Text>
                    <Text c="#FFFFFFCC" lh={1.4} fz={{ base: 14 }}>
                        <span className="font-semibold text-white">{formatCompact(earningOverview?.numberOfCreator || 0)}</span> Creators
                    </Text>
                </Flex>

                <Card
                    radius="16px"
                    px={16} py={12}
                    bd={"1px solid #E7E7F826"}
                    h={64}
                    w={{ base: "100%", md: 343 }}
                    maw={343}
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

                        <Button
                            w={40} h={40} bg={"white"}
                            className="rounded-2xl hover:opacity-70 transition-all duration-200"
                            p={0}
                            onClick={handleRefLink}
                        >
                            <Image src={shareIcon} alt="shareIcon" className="w-6 h-auto" />
                        </Button>
                    </Flex>
                </Card>

                <Flex gap={12} w={{ base: "100%", md: 343 }} maw={343} justify={"space-between"}>
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
                    <SectionButton
                        show={true}
                        href="/profile/rewards"
                        title="Rewards"
                        leftSection={<Image src={giftIcon} alt="giftIcon" className="w-6 h-auto" />}
                        bd={"1px solid #E7E7F826"}
                        w={"48%"}
                        h={48}
                        fz={16}
                        fw={600}
                        bg={"linear-gradient(180deg, rgba(247, 247, 252, 0.1) 0%, rgba(116, 116, 173, 0.1) 100%)"}
                        className="rounded-2xl"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}