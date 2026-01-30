"use client";

import { Tabs } from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export interface TabItem {
    key: string;
    component: () => JSX.Element;
    title: string;
}


interface Props {
    data: TabItem[]
}
export default function TabComponent({ data }: Props) {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const router = useRouter();

    const [active, setActive] = useState(data[0].key);

    useEffect(() => {
        if (tab) {
            setActive(tab);
        }
    }, [tab]);

    return (
        <Tabs
            color="black"
            value={active}
            onChange={(e) => {
                const params = new URLSearchParams(searchParams.toString());
                params.set("tab", e!);
                router.push(`?${params.toString()}`, { scroll: false });
            }}
        >
            <Tabs.List>
                {data.map((o) => {
                    return (
                        <Tabs.Tab
                            key={o.key}
                            value={o.key}
                            fw={active == o.key ? 600 : 400}
                            className="border-b-[3px]"
                        >
                            {o.title}
                        </Tabs.Tab>
                    );
                })}
            </Tabs.List>

            {data.map((o) => {
                return (
                    <Tabs.Panel key={o.key} value={o.key} >
                        {o.component()}
                    </Tabs.Panel>
                );
            })}
        </Tabs>
    );
}
