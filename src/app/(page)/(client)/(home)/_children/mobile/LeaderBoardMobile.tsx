import { Box, Flex } from '@mantine/core';
import React from 'react';
import LeaderBoardTable from '../leaderboard/LeaderBoardTable';
import LeaderBoardTitle from '../leaderboard/LeaderBoardTitle';
import LoginForm from '../../../_shared/LoginForm';
import LeaderBoardCount from '../leaderboard/LeaderBoardCount';
import { PointSetting } from '@/types/pointSetting';
import { Role } from '@/types/role';
import bgMb from "@public/leaderboard/bg-mb.webp";
import Image from 'next/image';
import { useApp } from '@/app/context/AppContext';
import { SocialShare } from '../leaderboard/SocialShare';
import SectionButton from '@/components/buttons/SectionButton';
import { Reward } from '@/types/reward';


interface Props {
    pointSettings: PointSetting[];
    roles: Role[];
    rewards: Reward[];
}

export function LeaderBoardMobile({ roles, pointSettings, rewards }: Props) {
    const { profile } = useApp();

    return (
        <Box
            id='Leaderboard'
            w={"100%"}
            py={{ base: 40 }}
            // h={profile ? 1250 : 1550}
        >
            <Flex
                id='leaderboard-container'
                direction={"column"}
                gap={24}
                h={"fit-content"}
                className='container'
            >
                <Flex
                    w={"100%"}
                    pos={"relative"}
                    align={"center"} justify={"center"}
                    px={{ base: 16, }}
                    py={{ base: 40, }}
                    bd={"4px solid #f6f4f4"}
                    className='rounded-3xl overflow-hidden'
                >
                    <Image src={bgMb} alt='bgMb' fill className='object-cover' />

                    <Flex
                        pos={"relative"}
                        w={"100%"}
                        direction={"column"}
                        justify={"space-between"}
                        align={"center"}
                        gap={{ base: 24 }}
                    >
                        <LeaderBoardTitle />

                        {profile && (
                            <SocialShare pointSettings={pointSettings} />
                        )}

                        <LeaderBoardTable rewards={rewards} />

                        {profile && (
                            <SectionButton
                                show={true}
                                title='My dashboard'
                                className='rounded-lg'
                                fz={{ base: 16 }}
                                fw={600}
                                w={{ base: 150 }}
                                h={40}
                                px={0}
                                bg={"#131416"}
                                c={"white"}
                                mx={"auto"}
                                href='/profile'
                            />
                        )}

                        {!profile && (
                            <LoginForm roles={roles} />
                        )}

                    </Flex>

                </Flex>

                <LeaderBoardCount />
            </Flex>
        </Box>
    );
}
