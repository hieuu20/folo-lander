/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import TabComponent, { TabItem } from '@/components/tabs/TabComponent';
import { Flex } from '@mantine/core';
import {
    Faqs,
    FeatureCreator,
    PartnerSide,
    PeopleSay,
    SiteManagement,
    TrackingSetting,
    WayGetPay,
} from './_children';

const tabList: TabItem[] = [
    {
        key: 'site_management',
        component: SiteManagement,
        title: 'Site management',
    },
    {
        key: 'ways_get_paid',
        component: WayGetPay,
        title: 'Ways get Paid',
    },
    {
        key: 'featured_creators',
        component: FeatureCreator,
        title: 'Featured creators',
    },
    {
        key: 'partners_slide',
        component: PartnerSide,
        title: 'Partners slide',
    },
    {
        key: 'people_say',
        component: PeopleSay,
        title: 'People say',
    },
    {
        key: 'news',
        component: () => <></>,
        title: 'News',
    },
    {
        key: 'faq',
        component: Faqs,
        title: 'FAQs',
    },
    {
        key: 'tracking_setup',
        component: TrackingSetting,
        title: 'Tracking setup',
    },
];

export default function SettingPage() {
    return (
        <div className="bg-white">
            <Flex justify={'space-between'} align={'center'} px={16}>
                <Flex direction={'column'} gap={4} py={12}>
                    <h2 className="font-semibold text-xl">Lander setup</h2>
                </Flex>
            </Flex>

            <TabComponent data={tabList} />
        </div>
    );
}
