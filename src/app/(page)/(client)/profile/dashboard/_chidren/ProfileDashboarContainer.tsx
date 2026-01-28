'use client';

import React from "react";
import {
    Box,
    Flex,
    Text,
    Card,
    Grid,
} from '@mantine/core';
import { DashboardHeader } from "./DashboardHeader";
import { DashboardTier } from "./DashboardTier";
import { EarningHistories } from "./EarningHistory";
import { IUser } from "@/types/user";
import { AccountLevel } from "@/types/accountLevel";
import infoIcon from "@public/icons/info.svg";
import Image from "next/image";
import { EarningHistory } from "@/types/earningHistory";

export const dynamic = "force-dynamic";

interface Props {
    profile: IUser,
    accountLevels: AccountLevel[];
    earningHistories: EarningHistory[];
}
export function ProfileDashboardContainer({ profile, accountLevels, earningHistories }: Props) {
    return (
        <Box className="bg-white min-h-screen">
            <DashboardHeader profile={profile} />

            <Box px={{ base: 16, md: 32 }} pb={60}>
                <DashboardTier accountLevels={accountLevels} profile={profile} />
                <CreditSummary profile={profile} />
                <EarningHistories earningHistories={earningHistories} />
            </Box>
        </Box>
    );
}


function CreditSummary({ profile }: { profile: IUser }) {
    return (
        <Card radius={16} mt={40} p="lg" bg={"#F7F7FC"}>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Flex direction="column" align="center">
                        <Text fw={700} fz={{ base: 30 }}>
                            {profile.totalpoint}
                        </Text>
                        <Text fz={16} fw={500} c="#4D5053">
                            My Total Credit Points
                        </Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Flex direction="column" align="center">
                        <Text fw={700} fz={{ base: 30 }}>
                            0
                        </Text>
                        <Text fz={16} fw={500} c="#4D5053" className="flex items-center gap-1.5">
                            My Total Tokens Allocation
                            <Image src={infoIcon} alt="infoIcon" width={20} height={20} />
                        </Text>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Card>
    );
}

