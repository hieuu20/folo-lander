/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Flex } from "@mantine/core";
import TabComponent from "@/components/tabs/TabComponent";
import { RewardContainer } from "./_children";
import { AccountLevelContainer } from "./_children/AccountLevelContainer";
import { PerkContainer } from "./_children/PerkContainer";
import { PointSettingUi } from "./_children/PointSetting";

const tabList = [
    {
        key: "leaderboard_reward",
        component: RewardContainer,
        title: "Leaderboard rewards APIs"
    },
    {
        key: "account_level",
        component: AccountLevelContainer,
        title: "Account levels"
    },
    {
        key: "perks_shop",
        component: PerkContainer,
        title: "Perks shop"
    },
    {
        key: "setup_points",
        component: PointSettingUi,
        title: "Setup points"
    },
];


export default function RewardPage() {
    return (
        <div className="bg-white min-h-screen">
            <Flex justify={"space-between"} align={"center"} px={16}>
                <Flex direction={"column"} gap={4} py={12}>
                    <h2 className="font-semibold text-xl">Leaderboard and rewards</h2>
                </Flex>
            </Flex>

            <TabComponent data={tabList} />
        </div>
    );
}
