"use client";

import { ButtonCopy } from '@/components/buttons/ButtonCopy';
import { IUser } from '@/types/user';
import { Box, Button, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useCallback } from 'react';
import tickIcon from "@public/icons/tick.svg";
import { PointSetting } from '@/types/pointSetting';
import { ShareIcon } from '@/components/icons/ShareIcon';

interface Props {
    profile: IUser,
    pointSettings: PointSetting[]
}

export function ReferToEarnContainer({ profile, pointSettings }: Props) {
    const referralLink = `${window.location.origin}?ref=${profile?.referralCode}`;

    const handleRefLink = useCallback(async () => {
        await navigator.share({
            title: "Let join Folo",
            text: "Let join Folo",
            url: referralLink,
        });
    }, [referralLink]);

    const handleShare = useCallback(async (pointSetting: PointSetting) => {
        const referralLink = `${window.location.origin}?ref=${profile?.referralCode}`;
        const redirectLink = `${pointSetting.social?.link}${referralLink}`;
        window.open(
            redirectLink,
            "_blank",
        );

        await fetch("/api/share-social", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                socialId: pointSetting.socialId,
                userId: profile?._id
            })
        });
    }, [profile?._id, profile?.referralCode]);

    return (
        <Box px={16} py={{ base: 16, md: 24 }} bg={{ base: "white", md: "#F0F0FC" }} mih={"100vh"}>
            <Box>
                <Box pb={{ base: 12, md: 16 }}>
                    <Text fw={600} fz={{ base: 20 }} mb={4}>
                        Refer to Earn
                    </Text>
                    <Text c="#4D5053" fz={{ base: 14 }}>
                        Earn 100 points per fan, 200 points per creator, 300 per brand who signup from your referral link.
                    </Text>
                </Box>

                <Flex
                    bg={{ base: "#F7F7FC", md: "white" }}
                    className='rounded-2xl'
                    w={{ base: "100%", md: 480 }}
                    h={{ base: 56, sm: 58, md: 62, lg: 64, xl: 68, "2xl": 72 }}
                    align={"center"}
                    px={{ base: 12, md: 14, xl: 16 }}
                    mb={{ base: 12, md: 40 }}
                    gap={{ base: 12 }}
                >
                    <Text
                        fz={{ base: 14, md: 16, lg: 17, xl: 18, "2xl": 20 }}
                        fw={500} flex={1} lineClamp={1}
                        miw={0}
                    >
                        {referralLink}
                    </Text>

                    <Box w={120} ta={"right"}>
                        <ButtonCopy
                            text={referralLink}
                            copiedSection={(
                                <>
                                    <Image
                                        src={tickIcon}
                                        alt="copy icon"
                                        className="w-6 mr-2"
                                    />
                                    Copied
                                </>
                            )}
                            h={40}
                            px={16}
                            fz={{ base: 16 }} fw={600}
                            c={"white"}
                            className='rounded-lg hover:bg-[#2036B5] transition-all duration-200'
                        >
                            Copy
                        </ButtonCopy>
                    </Box>

                    <Button bg={"#FFFFFF"} h={40} p={8} className='rounded-lg hover:bg-[#F7F7FC] transition-all duration-200' onClick={handleRefLink}>
                        <ShareIcon w={24} h={24} />
                    </Button>
                </Flex>

                <Flex gap={{ base: 8, md: 10, xl: 12 }} direction={"column"}>
                    <Text
                        c={"#4D5053"}
                        fz={{ base: 14, md: 16, lg: 17, xl: 18, "2xl": 20 }}
                        lh={1.2}
                        ta={{ base: "center", md: "unset" }}
                    >
                        Spread the Love
                    </Text>

                    <Flex direction={"column"} gap={{ base: 8, md: 16 }}>
                        {pointSettings?.map((o, index) => {
                            return (
                                <Flex
                                    key={index}
                                    bg={{ base: "#F7F7FC", md: "white" }}
                                    w={{ base: "100%", md: 480 }}
                                    h={{ base: 40, md: 64 }}
                                    gap={{ base: 4, md: 6, lg: 8, xl: 10 }}
                                    align={"center"}
                                    justify={"space-between"}
                                    px={{ base: 8, md: 16 }}
                                    py={{ base: 8, md: 16 }}
                                    className='rounded-2xl cursor-pointer hover:bg-[#F7F7FC] transition-all duration-200'
                                    onClick={() => handleShare(o)}
                                >
                                    <Flex gap={8} align={"center"} h={"100%"}>
                                        {o.social?.icon && (
                                            <Image src={o.social?.icon} alt='social icon' width={32} height={32} className='h-full w-auto' />
                                        )}
                                        <Text fz={{ base: 14, md: 16 }} fw={500}>Share on {o.social?.name}</Text>
                                    </Flex>
                                    {!profile.userSocials.some((x) => x.socialId == o.socialId) && (
                                        <Text fz={{ base: 14, md: 16 }} fw={500}>
                                            +{o.point}
                                        </Text>
                                    )}
                                </Flex>
                            );
                        })}
                    </Flex>
                </Flex>


            </Box>
        </Box>
    );
}
