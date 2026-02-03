/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import { Perk } from '@/types/perk';
import { IUser } from '@/types/user';
import { Box, Button, Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { UserPerk, UserPerkType } from '@/types/userPerk';
import pointIcon from "@public/icons/point-icon.svg";
import pointDisableIcon from "@public/icons/point-icon-disable.png";
import { WalletIcon } from '@/components/icons/WalletIcon';
import { dispatchFetchProfile } from '@/utils/windowEvent';
import { SuccessPopup } from '@/components/Popups';
import { useDisclosure } from '@/hooks';

interface Props {
    perks: Perk[];
    profile: IUser;
    userPerks: UserPerk[];
}

export function Rewards({ perks, profile }: Props) {
    const [userPerks, setUserPerks] = useState<UserPerk[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/claim-reward?id=${profile._id}`);
            const resData = await res.json();

            if (resData.data) {
                setUserPerks(resData.data);
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setLoading(false);
        }
    }, [profile._id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={16} p={{ base: 16 }} pt={{ base: 16 }}>
            {perks.map((item) => (
                <RewardItem
                    key={item._id}
                    perk={item}
                    profile={profile}
                    userPerks={userPerks}
                    refresh={fetchData}
                    fetching={loading}
                />
            ))}
        </SimpleGrid>
    );
}

function RewardItem({ perk, profile, userPerks, refresh, fetching }: { perk: Perk, profile: IUser, userPerks: UserPerk[]; refresh: () => void; fetching: boolean }) {
    const isClamed = userPerks.some(o => o.perkId == perk._id);
    const isDisableClaim = profile.point < perk.pointToClaim || isClamed;
    // Claimed
    const [loading, setLoading] = useState(false);
    const [opened, { open, close }] = useDisclosure();

    const onClaim = useCallback(async () => {
        if (isDisableClaim) return;
        try {
            setLoading(true);
            const res = await fetch("/api/claim-reward", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    perkId: perk._id,
                    userId: profile?._id,
                    type: UserPerkType.CLAIM
                })
            });
            const resData = await res.json();

            console.log({ resData });
            if (resData?.data?._id) {
                open();
                refresh();
            }

        } catch (err) { } finally {
            setLoading(false);
            dispatchFetchProfile();
        }
    }, [isDisableClaim, open, perk._id, profile?._id, refresh]);

    return (
        <Box bd={"1px solid #E7E7F8"} className="rounded-lg overflow-hidden">
            <Image
                src={perk.thumb}
                alt='perk thumb'
                width={100} height={100}
                className='w-full aspect-[2.02366863905] object-cover'
            />

            <Flex direction="column" p={{ base: 16 }} gap={12}>
                <Stack gap={4}>
                    <Text fw={600} fz={{ base: 16 }} lh={1.4}>
                        {perk.title}
                    </Text>
                    <Text c="#4D5053" fz={{ base: 14 }} lh={1.4}>
                        {perk.description}
                    </Text>
                </Stack>

                <Button
                    bg={isDisableClaim ? "#C6CBD0" : "#435EFB"}
                    disabled={isDisableClaim}
                    h={40}
                    fz={{ base: 16 }}
                    fw={600}
                    c={isDisableClaim ? "#6E7174" : "white"}
                    onClick={onClaim}
                    loading={loading || fetching}
                    rightSection={
                        <Image src={isDisableClaim ? pointDisableIcon : pointIcon} alt='point icon' className='w-5 h-auto' />
                    }
                    className={twMerge("rounded-lg [&_.mantine-Button-section]:ml-1", !isDisableClaim && "hover:bg-[#2036B5] transition-all duration-300")}
                >
                    {isClamed ? "Clamed" : "Claim with"} {perk.pointToClaim}
                </Button>

                <Button
                    leftSection={<WalletIcon h={24} w={24} c={isClamed ? "#6E7174" : undefined} />}
                    h={40}
                    disabled={isClamed}
                    bg={isClamed ? "#C6CBD0" : "white"}
                    c={isClamed ? "#6E7174" : "#131416"}
                    fz={{ base: 16 }}
                    loading={fetching}
                    fw={600}
                    bd={"1px solid #E7E7F8"}
                    className={twMerge(!isClamed && "hover:opacity-70 transition-all duration-300", "rounded-lg")}
                >
                    Buy with ${perk.priceToBuy}
                </Button>

                <SuccessPopup opened={opened} close={close} title='Reward claimed successfully' size={336} />
            </Flex>
        </Box>
    );
}
