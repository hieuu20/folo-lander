import { Perk } from '@/types/perk';
import { IUser } from '@/types/user';
import { Box, Button, Flex, Stack, Text } from '@mantine/core';
import { IconCreditCard } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    perk: Perk;
    profile: IUser;
}
export function RewardItem({ perk, profile }: Props) {
    const isDisable = profile.point < perk.pointToClaim;
    return (
        <Box bd={"1px solid #E7E7F8"} className="rounded-lg overflow-hidden">
            <Image src={perk.thumb} alt='perk thumb' width={100} height={100} className='w-full aspect-[2.02366863905] object-cover' />
            <Flex direction="column" p={{ base: 16 }} gap={12}>
                <Stack gap={4}>
                    <Text fw={600} fz={{ base: 16 }} lh={1.4}>
                        {perk.title}
                    </Text>
                    <Text c="#4D5053" fz={{ base: 14 }} lh={1.4}>
                        {perk.description}
                    </Text>
                </Stack>

                <Button
                    bg={isDisable ? "#C6CBD0" : "#435EFB"}
                    disabled={isDisable}
                    h={40}
                    fz={{ base: 16 }}
                    fw={600}
                    className={twMerge("rounded-lg", !isDisable && "hover:scale-[1.03] transition-all duration-300")}
                >
                    Claim with {perk.pointToClaim}
                </Button>

                <Button
                    leftSection={<IconCreditCard size={18} />}
                    h={40}
                    bg={"white"}
                    c="#131416"
                    fz={{ base: 16 }}
                    fw={600}
                    bd={"1px solid #E7E7F8"}
                    className="hover:scale-[1.03] transition-all duration-300 rounded-lg"
                >
                    Buy with ${perk.priceToBuy}
                </Button>
            </Flex>
        </Box>
    );
}
