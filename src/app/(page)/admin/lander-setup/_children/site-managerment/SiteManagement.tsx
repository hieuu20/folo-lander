'use client';

import { Checkbox, Group, Stack, Text } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';

interface Section {
    _id: string;
    priority: number;
    title: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export function SiteManagement() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<Section[]>([]);

    const toggle = async (id: string, isActive: boolean) => {
        try {
            setLoading(true);
            await fetch(`/api/admin/section/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: id, isActive }),
            });

            setData((prev) => prev.map((item) => (item._id === id ? { ...item, isActive } : item)));
        } catch (err) {
            console.log({ err });
        } finally {
            setLoading(false);
        }
    };

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/admin/section');
            const resData = await res.json();

            if (resData.data.length) {
                setData(resData.data);
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (!data?.length) return <></>;

    return (
        <Stack gap={0} className="w-full text-[#131416]">
            {data.map((section, index) => (
                <Group
                    key={section._id}
                    className={`py-4 px-4 ${index % 2 !== 0 ? 'bg-[#F7F7FC]' : 'bg-white'}`}
                    bd={index % 2 !== 0 ? "1px solid #E7E7F8" : undefined}
                >
                    <Text size="sm" fw={500} w={'60%'}>
                        {section.title}
                    </Text>
                    <Checkbox
                        label={section.isActive ? 'Active' : 'In-active'}
                        checked={section.isActive}
                        onChange={() => toggle(section._id, !section.isActive)}
                        color="#376CEC"
                        className="pl-3 cursor-pointer font-medium"
                    />
                </Group>
            ))}
        </Stack>
    );
}
