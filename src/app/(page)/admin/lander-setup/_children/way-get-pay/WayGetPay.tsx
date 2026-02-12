'use client';

import { WayGetPaid } from '@/types/wayGetPaid';
import { Checkbox, Group, Stack, Text } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import { Reorder, useDragControls } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

export function WayGetPay() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<WayGetPaid[]>([]);

    const toggle = async (id: string, isActive: boolean) => {
        try {
            setLoading(true);
            await fetch(`/api/admin/way-get-pay/${id}`, {
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

    const updatePriorities = useCallback(async (items: WayGetPaid[]) => {
        try {
            const priorityData = items.map((item, index) => ({
                _id: item._id,
                priority: index + 1,
            }));

            await fetch('/api/admin/way-get-pay', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(priorityData),
            });
        } catch (err) {
            console.log({ err });
        }
    }, []);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/admin/way-get-pay');
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

    const handleReorder = useCallback(
        (newData: WayGetPaid[]) => {
            setData(newData);
            // Debounce the API call to avoid calling it on every drag movement
            const timeoutId = setTimeout(() => {
                updatePriorities(newData);
            }, 500);

            return () => clearTimeout(timeoutId);
        },
        [updatePriorities],
    );

    if (!data?.length) return <></>;

    return (
        <Stack gap={0} className="w-full text-[#131416]">
            <Reorder.Group
                axis="y"
                values={data}
                onReorder={handleReorder}
                className="flex flex-col gap-0"
            >
                {data.map((section, index) => (
                    <SortableItem
                        key={section._id}
                        section={section}
                        index={index}
                        toggle={toggle}
                    />
                ))}
            </Reorder.Group>
        </Stack>
    );
}

function SortableItem({
    section,
    index,
    toggle,
}: {
    section: WayGetPaid;
    index: number;
    toggle: (id: string, active: boolean) => void;
}) {
    const controls = useDragControls();

    return (
        <Reorder.Item
            value={section}
            dragListener={false}
            dragControls={controls}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
            className="w-full relative"
        >
            <Group
                className={`py-4 px-4 ${index % 2 !== 0 ? 'bg-[#FAFAFA]' : 'bg-white'} border-b border-[#F7F7FC] hover:bg-gray-50 transition-colors duration-200 select-none`}
                wrap="nowrap"
            >
                <div
                    onPointerDown={(e) => controls.start(e)}
                    className="cursor-grab active:cursor-grabbing p-1 text-gray-400 hover:text-gray-600"
                >
                    <IconMenu2 size={20} />
                </div>

                <Text size="sm" fw={500} className="flex-1">
                    {section.title}
                </Text>
                <div className="w-[30%] flex-1">
                    <Checkbox
                        label={section.isActive ? 'Active' : 'In-active'}
                        checked={section.isActive}
                        onChange={() => toggle(section._id, !section.isActive)}
                        color="grape"
                        className="pl-3 cursor-pointer font-medium"
                    />
                </div>
            </Group>
        </Reorder.Item>
    );
}
