import { Box, Flex } from '@mantine/core';
import React from 'react';
import LeaderBoardTable from '../../../_shared/LeaderBoardTable';
import LeaderBoardTitle from '../../../_shared/LeaderBoardTitle';
import LoginForm from '../../../_shared/LoginForm';
import LeaderBoardCount from '../../../_shared/LeaderBoardCount';

export function LeaderBoardMobile() {
    return (
        <Box w={"100%"} py={{ base: 40 }}>
            <Flex direction={"column"} gap={24} className='container'>
                <LeaderBoardTitle />
                <LeaderBoardTable />
                <LoginForm />
                <LeaderBoardCount />
            </Flex>
        </Box>
    );
}
