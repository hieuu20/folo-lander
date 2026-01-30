import { formatNumber } from '@/utils';
import { Flex, Text, Tooltip } from '@mantine/core';
import React from 'react';
import tooltipIcon from "@public/icons/info.svg";
import Image from 'next/image';

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
        number: 3231231,
        tooltipContent: "Credits committed"
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
                            {formatNumber(o.number)}
                        </Text>

                        <Flex gap={{ base: 6, md: 8 }}>
                            <Text fz={{ base: 16, sm: 18, md: 22, lg: 24, xl: 26, "2xl": 28 }} c={"#4D5053"} fw={500} lh={1.2}>
                                {o.title}
                            </Text>
                            {o.tooltipContent && (
                                <Tooltip label="Tooltip" className='cursor-pointer'>
                                    <Image src={tooltipIcon} alt='tooltipIcon' className='w-5 md:w-7 h-auto' />
                                </Tooltip>
                            )}
                        </Flex>
                    </Flex>
                );
            })}
        </Flex>
    );
}
