import { Box, Flex } from '@mantine/core';
import React from 'react';
import LeaderBoardTable from '../../_shared/LeaderBoardTable';
import LeaderBoardTitle from '../../_shared/LeaderBoardTitle';
import LoginForm from '../../_shared/LoginForm';
import LeaderBoardCount from '../../_shared/LeaderBoardCount';

export function LeaderBoard() {
    return (
        <Box w={"100%"} py={{ base: 80 }}>
            <Flex justify={"space-between"} className='container'>
                <Box w={"56.25%"}>
                    <LeaderBoardTable />
                </Box>

                <Flex direction={"column"} gap={40} w={"40%"}>
                    <LeaderBoardTitle />
                    <LoginForm />
                </Flex>
            </Flex>
            <LeaderBoardCount />
        </Box>
    );
}
