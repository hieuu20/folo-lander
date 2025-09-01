import React from 'react';
import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { IUnlimited } from '@/utils/unlimited';

interface Props {
    unlimited: IUnlimited;
    onOpenPopup: (unlimited: IUnlimited) => void;
}
export function UnlimitedItem({ unlimited, onOpenPopup }: Props) {

    return (
        <Box
            id={`unlimited-item-${unlimited.id}`}
            p={{ base: 8, md: 10 }}
            w={{ base: "50%", md: "20%" }}
            className='aspect-[0.83] md:aspect-[1.53043478261] cursor-pointer'
        >
            <Flex
                key={unlimited.id}
                direction={"column"}
                w={"100%"}
                h={"100%"}
                className='rounded-2xl group'
                justify={"center"}
                align={"center"}
                bg={"white"}
            >
                {!unlimited.title && (
                    <Text
                        fz={{ base: 15, "2xl": 16 }}
                        fw={700}
                        c={"#9554D6"}
                        lh={1.2}
                        ta={"center"}
                        className='uppercase'
                    >
                        <Link target='_blank' href={"/fans"}>
                            Discover fan <br /> features →
                        </Link>
                    </Text>
                )}

                {unlimited.title && (
                    <Flex
                        direction={"column"}
                        gap={0}
                        align={"center"}
                        onClick={() => onOpenPopup(unlimited)}
                    >
                        <Image src={unlimited.img} alt={unlimited.title} className='h-10 w-auto mb-3' />
                        <Text
                            fz={{ base: 15, "2xl": 16 }}
                            fw={600} lh={1.5}
                            c={"#131416"}
                            mb={4}
                        >
                            {unlimited.title}
                            <span
                                className="inline-block opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
                            >
                                →
                            </span>
                        </Text>
                        <Text c={"#4D5053"} fz={{ base: 12, "2xl": 13 }} lh={1.2} w={{ base: "90%" }} ta={"center"}>
                            {unlimited.description}
                        </Text>
                    </Flex>
                )}

                {unlimited.buttonTitle && unlimited.buttonLink && (
                    <Link href={unlimited.buttonLink} target='_blank' className='mt-2.5 2xl:mt-3 text-xs 2xl:text-[13px] text-[#AC1991] underline'>
                        {unlimited.buttonTitle}
                    </Link>
                )}
            </Flex>
        </Box>
    );
}
