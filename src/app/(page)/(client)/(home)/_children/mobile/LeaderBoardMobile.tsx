import { Box, Flex } from '@mantine/core';
import React from 'react';
import LeaderBoardTable from '../leaderboard/LeaderBoardTable';
import LeaderBoardTitle from '../leaderboard/LeaderBoardTitle';
import LoginForm from '../../../_shared/LoginForm';
import LeaderBoardCount from '../leaderboard/LeaderBoardCount';
import { PointSetting } from '@/types/pointSetting';
import { Role } from '@/types/role';

interface Props {
    pointSettings: PointSetting[]
    roles: Role[]
}

export function LeaderBoardMobile({ roles }: Props) {
    return (
        <Box w={"100%"} py={{ base: 40 }}>
            <Flex direction={"column"} gap={24} className='container'>
                <LeaderBoardTitle />
                <LeaderBoardTable />
                <LoginForm roles={roles} />
                <LeaderBoardCount />
            </Flex>
        </Box>
    );
}
