/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Flex, Text, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { debounce } from "lodash";
import { useMemo, useState } from "react";
import { WaitingTable } from "./_children/WaitingListTable";
import { LeaderboardTable } from "./_children/LeaderBoardTable";
import TabComponent from "@/components/tabs/TabComponent";

const tabList = [
    {
        key: "waitlist",
        component: WaitingTable,
        title: "Waitlist"
    },
    {
        key: "leaderboard",
        component: LeaderboardTable,
        title: "Leaderboard"
    },
];

export default function UserPage() {
    const [params, setParams] = useState({});
    const onSearch = useMemo(
        () => debounce((e: React.ChangeEvent<HTMLInputElement>) => setParams(prev => ({ ...prev, searchTerm: e.target.value })),
            600
        ), []);

    return (
        <div className="bg-white">
            <Flex justify={"space-between"} align={"center"} px={16}>
                <Flex direction={"column"} gap={4} py={12}>
                    <h2 className="font-semibold text-xl">Users</h2>
                    <Text fz={14} c={"#4D5053"} lh={1.4}>
                        User data of Folo and KNKY is syncing together.
                    </Text>
                </Flex>

                <TextInput
                    leftSectionPointerEvents="none"
                    bd={"1px solid #E7E7F8"}
                    w={346}
                    classNames={{
                        input: "pl-9 rounded-lg border-none"
                    }}
                    className="rounded-lg overflow-hidden"
                    onChange={onSearch}
                    leftSection={<IconSearch size={20} className="font-semibold text-[#4D5053]" />}
                    placeholder="Search user"
                />
            </Flex>
            <TabComponent data={tabList} />
        </div>
    );
}
