import { Flex, Paper, Table, Text } from '@mantine/core';
import React from 'react';
import premiumIcon from "@public/icons/premium-tick.svg";
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { useBrowserWidth } from '@/hooks';

const list = [
    {
        id: "us***",
        point: 1323,
        rewards: [
            {
                icon: premiumIcon,
                title: "Free",
                color: "#7A29CC14"
            },
            {
                icon: "🌱",
                title: "Badge",
                color: "#19A50D14"
            },
            {
                icon: "🌱",
                title: "Abc",
                color: "#19A50D14"
            },
        ]
    },
    {
        id: "us***",
        point: 1323,
        rewards: [
            {
                icon: premiumIcon,
                title: "Free",
                color: "#7A29CC14"
            },
            {
                icon: "🌱",
                title: "Badge",
                color: "#19A50D14"
            },
            {
                icon: "🌱",
                title: "Abc",
                color: "#19A50D14"
            },
        ]
    },
    {
        id: "us***",
        point: 1323,
        rewards: [
            {
                icon: premiumIcon,
                title: "Free",
                color: "#7A29CC14"
            },
            {
                icon: "🌱",
                title: "Badge",
                color: "#19A50D14"
            },
            {
                icon: "🌱",
                title: "Abc",
                color: "#19A50D14"
            },
        ]
    },
    {
        id: "us***",
        point: 1323,
        rewards: [
            {
                icon: premiumIcon,
                title: "Free",
                color: "#7A29CC14"
            },
            {
                icon: "🌱",
                title: "Badge",
                color: "#19A50D14"
            },
        ]
    },
    {
        id: "us***",
        point: 1323,
        rewards: [
            {
                icon: premiumIcon,
                title: "Free",
                color: "#7A29CC14"
            },
            {
                icon: "🌱",
                title: "Badge",
                color: "#19A50D14"
            },
        ]
    },
    {
        id: "us***",
        point: 1323,
        rewards: [
            {
                icon: premiumIcon,
                title: "Free",
                color: "#7A29CC14"
            },
            {
                icon: "🌱",
                title: "Badge",
                color: "#19A50D14"
            },
        ]
    },
    {
        id: "us***",
        point: 1323,
        rewards: [
            {
                icon: premiumIcon,
                title: "Free",
                color: "#7A29CC14"
            },
            {
                icon: "🌱",
                title: "Badge",
                color: "#19A50D14"
            },
            {
                icon: "🌱",
                title: "Abc",
                color: "#19A50D14"
            },
        ]
    },
    {
        id: "us***",
        point: 1323,
        rewards: [
            {
                icon: premiumIcon,
                title: "Free",
                color: "#7A29CC14"
            },
            {
                icon: "🌱",
                title: "Badge",
                color: "#19A50D14"
            },
            {
                icon: "🌱",
                title: "Abc",
                color: "#19A50D14"
            },
        ]
    },

];

const getTopClass = (index: number) => {
    if (index == 0) {
        return "top1-gradient-text";
    }
    if (index == 1) {
        return "top2-gradient-text";
    }
    if (index == 2) {
        return "top3-gradient-text";
    }
};

export default function LeaderBoardTable() {
    const { isMb } = useBrowserWidth();

    return (
        <Paper bd={"1px solid #E7E7F8"} className='rounded-3xl overflow-hidden'>
            <Table w={"100%"}>
                <Table.Thead>
                    <Table.Tr fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }}>
                        <Table.Th c={"#4D5053"} fw={400} ta={{ base: "unset", md: "center" }} px={16} py={{ base: 8, md: 10, xl: 12 }} className='border-r-[1px] border-solid border-[#E7E7F8]'>Top</Table.Th>
                        {!isMb && (
                            <Table.Th c={"#4D5053"} fw={400} ta={{ base: "unset", md: "center" }} px={16} py={{ base: 8, md: 10, xl: 12 }} className='border-r-[1px] border-solid border-[#E7E7F8]'>Power points</Table.Th>
                        )}
                        <Table.Th c={"#4D5053"} fw={400} ta={{ base: "unset", md: "center" }} px={16} py={{ base: 8, md: 10, xl: 12 }}>Rewards</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {list.map((o, index) => {
                        return (
                            <Table.Tr key={index} fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }} fw={500} className='border-t-[1px] border-solid border-[#E7E7F8]'>
                                <Table.Td w={{ base: "34%", md: "24.2%" }} px={16} py={{ base: 10, xl: 20 }} className='border-r-[1px] border-solid border-[#E7E7F8]'>
                                    <Text
                                        fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }} fw={500}
                                        className={twMerge(getTopClass(index), "flex gap-3 flex-wrap flex-col md:flex-row w-full items-start md:justify-center")}
                                    >
                                        <span className={twMerge(getTopClass(index), index <= 2 && "font-black")}>{index + 1}</span>
                                        {o.id}
                                        {isMb && (
                                            <Text
                                                fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }} fw={500}
                                                className={twMerge(getTopClass(index))}
                                            >
                                                {o.point}
                                            </Text>
                                        )}
                                    </Text>
                                </Table.Td>
                                {!isMb && (
                                    <Table.Td w={"22.2%"} py={{ base: 10, xl: 20 }} align='center' className='border-r-[1px] border-solid border-[#E7E7F8]'>
                                        <Text
                                            fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }} fw={500}
                                            className={twMerge(getTopClass(index), "flex gap-1 w-fit")}
                                        >
                                            {o.point}
                                        </Text>
                                    </Table.Td>
                                )}
                                <Table.Td py={{ base: 10, md: 16, xl: 20 }} px={16}>
                                    <Flex gap={12} w={"100%"} wrap={"wrap"} justify={{ base: "unset", md: "center" }}>
                                        {o.rewards.map((x, i) => {
                                            return (
                                                <Flex
                                                    key={i} gap={2} bg={x.color} p={4} pr={8} align={"center"}
                                                    fz={{ base: 14, md: 16 }}
                                                    fw={500} c={"#131416"}
                                                    className='rounded-lg'
                                                >
                                                    {typeof x.icon == "string" ? (
                                                        <span>{x.icon}</span>
                                                    ) : (
                                                        <Image src={x.icon} alt='reward icon' width={28} height={28} className='w-5 md:w-6 xl:w-7 h-auto' />
                                                    )}

                                                    <Text fw={500} fz={{ base: 14, md: 16 }}>
                                                        {x.title}
                                                    </Text>
                                                </Flex>
                                            );
                                        })}
                                    </Flex>
                                </Table.Td>
                            </Table.Tr>
                        );
                    })}
                </Table.Tbody>
            </Table>
        </Paper>
    );
}
