"use client";

import { Box, Text } from '@mantine/core';
import React from 'react';
import TabComponent from '@/components/tabs/TabComponent';
import { Rewards } from './Rewards';
import { Perk } from '@/types/perk';
import { UserPerk } from '@/types/userPerk';
import { MyReward } from './MyReward';
import { useApp } from '@/app/context/AppContext';

interface Props {
    perks: Perk[];
    userPerks: UserPerk[];
}

export function ProfileRewardContainer({ perks, userPerks }: Props) {
    const { profile } = useApp();

    if (!profile) {
        return <></>;
    }

    return (
        <Box p={{ md: 16 }} bg={"#F0F0FC"} >
            <Box bg={"white"} mih={"96vh"}>
                <Box p={{ base: 16 }}>
                    <Text fw={600} fz={{ base: 20 }} mb={4}>
                        Rewards
                    </Text>
                    <Text c="#4D5053" fz={{ base: 14 }}>
                        You can get perks by using your credit points or buy with credit card.
                    </Text>
                </Box>

                <TabComponent data={[
                    {
                        key: "rewards_list",
                        title: "Rewards list",
                        component: () => <Rewards perks={perks} profile={profile} userPerks={userPerks} />,
                    },
                    {
                        key: "claimed_purchased",
                        title: "Claimed & Purchased",
                        component: () => <MyReward profile={profile} userPerks={userPerks} />,
                    },
                ]} />
            </Box>
        </Box>
    );
}
