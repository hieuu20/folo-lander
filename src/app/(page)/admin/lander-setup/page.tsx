/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Flex } from "@mantine/core";
import { TrackingSetting } from "./_children";
import TabComponent, { TabItem } from "@/components/tabs/TabComponent";

const tabList: TabItem[] = [
    {
        key: "faq",
        component: () => <></>,
        title: "FAQs"
    },
    {
        key: "people_say",
        component: () => <></>,
        title: "People say"
    },
    {
        key: "partners_slide",
        component: () => <></>,
        title: "Partners slide"
    },
    {
        key: "featured_creators",
        component: () => <></>,
        title: "Featured creators"
    },
    {
        key: "news",
        component: () => <></>,
        title: "News"
    },
    {
        key: "tracking_setup",
        component: TrackingSetting,
        title: "Tracking setup"
    },
];


export default function SettingPage() {
    return (
        <div className="bg-white min-h-screen">
            <Flex justify={"space-between"} align={"center"} px={16}>
                <Flex direction={"column"} gap={4} py={12}>
                    <h2 className="font-semibold text-xl">Lander setup</h2>
                </Flex>
            </Flex>

            <TabComponent data={tabList} />
        </div>
    );
}
