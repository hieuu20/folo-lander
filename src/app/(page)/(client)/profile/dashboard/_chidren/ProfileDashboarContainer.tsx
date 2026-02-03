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
import { formatNumber } from "@/utils";

export const dynamic = "force-dynamic";

interface Props {
    profile: IUser,
    accountLevels: AccountLevel[];
    earningHistories: EarningHistory[];
}
export function ProfileDashboardContainer({ profile, accountLevels, earningHistories }: Props) {
    // const [loading, setLoading] = useState(true);

    return (
        <Box pos={"relative"} className="bg-white min-h-screen">

            {/* {loading && (
                <Box pos={"absolute"} top={0} left={0} w={"100%"} h={"100vh"} bg={"white"}>
                    <div className="dots-3"></div>
                </Box>
            )} */}

            <DashboardHeader profile={profile} />
            <Box
                px={{ base: 16, md: 32 }}
                pb={{ base: 60 }}
                pt={{ base: 16, md: 24 }}
                mt={{ base: -16, md: -24 }}
                className="rounded-t-3xl z-[10]"
                bg={"white"}
            >
                <DashboardTier accountLevels={accountLevels} profile={profile} />
                <CreditSummary profile={profile} />
                <EarningHistories earningHistories={earningHistories} />
            </Box>
        </Box>
    );
}


function CreditSummary({ profile }: { profile: IUser }) {
    return (
        <Card radius={16} mt={40} px={24} py={32} bg={"#F7F7FC"}>
            <Grid gutter={{ base: 24 }}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Flex direction="column" align="center">
                        <Text fw={700} fz={{ base: 30 }}>
                            {formatNumber(profile.totalpoint)}
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

