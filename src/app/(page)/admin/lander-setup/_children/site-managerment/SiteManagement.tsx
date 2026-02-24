'use client';

import { Section } from '@/types/section';
import { Box, Checkbox, Group, Select, Stack, Text } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';

export function SiteManagement() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<Section[]>([]);

    const update = useCallback(async (values: Section) => {
        try {
            setLoading(true);
            await fetch(`/api/admin/section/${values._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            setData((prev) => prev.map((item) => (item._id === values._id ? values : item)));
        } catch (err) {
            console.log({ err });
        } finally {
            setLoading(false);
        }
    }, []);

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
                    <Text size="sm" fw={500} w={'30%'}>
                        {section.title}
                    </Text>

                    <Box w={"30%"} ta={"left"}>
                        {section.phase && section.phaseOptions && (
                            <Select
                                w={155}
                                h={32}
                                // bd={"1px solid #E7E7F8"}
                                data={section.phaseOptions.map((o) => {
                                    return {
                                        label: `Phase ${o}`,
                                        value: o.toString()
                                    };
                                })}
                                defaultValue={section.phase.toString()}
                                onChange={(value) => {
                                    update({ ...section, phase: Number(value) });
                                }}
                                classNames={{
                                    input: "h-full w-full rounded-lg border border-[#E7E7F8] text-sm font-semibold"
                                }}
                                radius={8}
                            />
                        )}
                    </Box>
                    <Checkbox
                        label={section.isActive ? 'Active' : 'In-active'}
                        checked={section.isActive}
                        onChange={() => update({ ...section, isActive: !section.isActive })}
                        color="#376CEC"
                        className="pl-3 cursor-pointer font-medium"
                    />
                </Group>
            ))}
        </Stack>
    );
}
