import { Box, Flex, Stack } from '@mantine/core';
import React from 'react';
import LeaderBoardTable from './leaderboard/LeaderBoardTable';
import LeaderBoardTitle from './leaderboard/LeaderBoardTitle';
import LoginForm from '../../_shared/LoginForm';
import LeaderBoardCount from './leaderboard/LeaderBoardCount';
import { SocialShare } from './leaderboard/SocialShare';
import bgPc from "@public/leaderboard/bg-pc.webp";
import Image from 'next/image';
import { PointSetting } from '@/types/pointSetting';
import { Role } from '@/types/role';
import { useApp } from '@/app/context/AppContext';
import SectionButton from '@/components/buttons/SectionButton';

interface Props {
    pointSettings: PointSetting[];
    roles: Role[];
}

export function LeaderBoard({ pointSettings, roles }: Props) {
    const { profile } = useApp();

    return (
        <Box
            id='Leaderboard'
            w={"100%"}
            py={{ base: 80 }}
            h={925}
        >
            <Box className='container h-fit'>
                <Flex
                    w={"100%"}
                    pos={"relative"}
                    align={"center"} justify={"center"}
                    px={{ base: 16, md: 32, lg: 45, xl: 56 }}
                    py={{ base: 40, md: 60, xl: 76 }}
                    bd={"8px solid #f6f4f4"}
                    className='rounded-3xl md:rounded-[45px] lg:rounded-[56px] 2xl:rounded-[64px] overflow-hidden'
                >
                    <Image src={bgPc} alt='bgPc' fill className='object-cover' />

                    <Flex
                        pos={"relative"}
                        w={"100%"}
                        justify={"space-between"}
                        align={"center"}
                    >
                        <Box w={"58%"}>
                            <LeaderBoardTable />
                        </Box>

                        <Flex direction={"column"} w={"38%"} gap={{ base: 24 }}>
                            <LeaderBoardTitle />
                            {profile && (
                                <Stack gap={24}>
                                    <SocialShare pointSettings={pointSettings} />
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
                                </Stack>
                            )}

                            {!profile && (
                                <LoginForm roles={roles} />
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
            <LeaderBoardCount />
        </Box>
    );
}
