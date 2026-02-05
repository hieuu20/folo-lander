import { useApp } from '@/app/context/AppContext';
import { ButtonCopy } from '@/components/buttons/ButtonCopy';
import { Box, Button, Flex, Text, Title } from '@mantine/core';
import React, { useCallback } from 'react';
import tickIcon from "@public/icons/tick.svg";
import shareIcon from "@public/icons/share.svg";
import Image from 'next/image';

export default function LeaderBoardTitle() {
    const { profile } = useApp();

    console.log({ profile });

    const referralLink = `${window.location.origin}?ref=${profile?.referralCode}`;

    const handleRefLink = useCallback(async () => {
        await navigator.share({
            title: "Join Folo with me today!",
            text: "Join Folo with me today!",
            url: referralLink,
        });
    }, [referralLink]);

    return (
        <Flex direction={"column"} gap={{ base: 12, md: 16 }} w={{ base: "100%", md: "100%" }} mx={"auto"} mt={{ base: 16 }}>
            <Title order={3} fz={{ base: 32, sm: 36, md: 40, lg: 45, xl: 50, "2xl": 56 }} lh={1.2} c={"#131416"} fw={600} ta={{ base: "center", md: "unset" }}>
                {profile ? "Leaderboard" : "Join, share and earn"}
            </Title>
            <Text fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }} c={"#4D5053"} lh={1.4} ta={{ base: "center", md: "unset" }}>
                Earn 100 points per fan, 200 points per creator, 300 per brand who signup from your referral link.
            </Text>
            {profile && (
                <Flex
                    bg={"#F7F7FC"}
                    className='rounded-2xl'
                    w={"100%"}
                    h={{ base: 56, sm: 58, md: 62, lg: 64, xl: 68, "2xl": 72 }}
                    align={"center"}
                    px={{ base: 12, md: 14, xl: 16 }}
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
                            bg={"#435EFB"}
                            className='rounded-lg transition-all duration-200'
                        >
                            Copy
                        </ButtonCopy>
                    </Box>

                    <Button bg={"#FFFFFF"} h={40} p={8} className='rounded-lg hover:opacity-60 transition-all duration-200' onClick={handleRefLink}>
                        <Image src={shareIcon} alt='shareIcon' className='w-6 h-auto' />
                    </Button>
                </Flex>
            )}
        </Flex>
    );
}
