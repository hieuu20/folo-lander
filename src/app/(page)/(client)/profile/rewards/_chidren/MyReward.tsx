import { IUser } from '@/types/user';
import { UserPerk, UserPerkType } from '@/types/userPerk';
import { formatTime } from '@/utils';
import { Box, Flex, SimpleGrid, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useCallback } from 'react';

interface Props {
    profile: IUser;
    userPerks: UserPerk[];
}
export function MyReward({ userPerks }: Props) {
    return (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={16} p={{ base: 16 }} pt={{ base: 6 }}>
            {userPerks.map((item, index) => (
                <RewardItem key={index} userPerk={item} />
            ))}
        </SimpleGrid>
    );
}


function RewardItem({ userPerk }: { userPerk: UserPerk; }) {

    const getPrice = useCallback(() => {
        if (userPerk.type == UserPerkType.CLAIM) {
            return userPerk.value + " points";
        }

        return `$${userPerk.value}`;
    }, [userPerk]);

    return (
        <Box bd={"1px solid #E7E7F8"} className="rounded-lg overflow-hidden">
            <Image
                src={userPerk.perk.thumb}
                alt='perk thumb'
                width={100} height={100}
                className='w-full aspect-[2.02366863905] object-cover'
            />

            <Flex direction="column" p={{ base: 16 }} gap={12}>
                <Stack gap={4}>
                    <Text fw={600} fz={{ base: 16 }} lh={1.4}>
                        {userPerk.perk.title}
                    </Text>
                    <Text c="#4D5053" fz={{ base: 14 }} lh={1.4}>
                        {userPerk.perk.description}
                    </Text>
                </Stack>

                <Stack gap={4}>
                    <Text fz={{ base: 14 }} lh={1.4} c={"#4D5053"}>
                        Claimed at: {formatTime(userPerk.createdAt)}
                    </Text>
                    <Text c="#4D5053" fz={{ base: 14 }} lh={1.4}>
                        Paid: {getPrice()}
                    </Text>
                </Stack>

            </Flex>
        </Box>
    );
}