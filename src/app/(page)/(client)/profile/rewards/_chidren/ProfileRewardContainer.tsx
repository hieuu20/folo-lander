"use client";

import { Box, Text } from '@mantine/core';
import React from 'react';
import TabComponent from '@/components/tabs/TabComponent';
import { Rewards } from './Rewards';
import { Perk } from '@/types/perk';
import { IUser } from '@/types/user';
import { UserPerk } from '@/types/userPerk';
import { MyReward } from './MyReward';

interface Props {
    perks: Perk[];
    profile: IUser;
    userPerks: UserPerk[];
}

export function ProfileRewardContainer({ perks, profile, userPerks }: Props) {
    // const [userPerks, setUserPerks] = useState(userPerks);

    return (
        <Box p={{ md: 16 }} bg={"#F0F0FC"}>
            <Box bg={"white"}>
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
