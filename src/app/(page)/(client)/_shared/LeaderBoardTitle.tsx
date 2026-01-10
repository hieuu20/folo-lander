import { Flex, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function LeaderBoardTitle() {
    return (
        <Flex direction={"column"} gap={{ base: 12, md: 16 }} w={{ base: "90%", md: "100%"}} mx={"auto"}>
            <Title order={3} fz={{ base: 32, sm: 36, md: 40, lg: 45, xl: 50, "2xl": 56 }} lh={1.2} c={"#131416"} fw={600} ta={{ base: "center", md: "unset" }}>
                Join the community, share and earn.
            </Title>
            <Text fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }} c={"#4D5053"} lh={1.4} ta={{ base: "center", md: "unset" }}>
                Earn 100 points per fan, 200 points per creator, 300 per brand who signup from your referral link.
                <Link href={"/"} className='underline ml-1'>
                    Read more
                </Link>
            </Text>
        </Flex>
    );
}
