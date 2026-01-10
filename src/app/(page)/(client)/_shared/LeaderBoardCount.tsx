import { Flex, Text } from '@mantine/core';
import React from 'react';

const list = [
    {
        title: "Fans waiting",
        number: 11271
    },
    {
        title: "Creators onboard",
        number: 312
    },
    {
        title: "Credits committed",
        number: 3231231
    }
];


export default function LeaderBoardCount() {
    return (
        <Flex
            className="container"
            pt={{ base: 24, md: 40, xl: 80 }}
            align={"center"}
            direction={{ base: "column", md: "unset" }}
            justify={{ base: "center" }}
            gap={{ base: 40, md: "15%" }}
        >
            {list.map((o, index) => {
                return (
                    <Flex key={index} direction={"column"} gap={{ base: 4, md: 10, xl: 16 }} align={"center"}>
                        <Text fz={{ base: 30, sm: 34, md: 40, lg: 45, xl: 50, "2xl": 56 }} c={"#131416"} fw={700} lh={1.2}>
                            {o.number}
                        </Text>

                        <Text fz={{ base: 16, sm: 18, md: 22, lg: 24, xl: 26, "2xl": 28 }} c={"#4D5053"} fw={500} lh={1.2}>
                            {o.title}
                        </Text>
                    </Flex>
                );
            })}
        </Flex>
    );
}
