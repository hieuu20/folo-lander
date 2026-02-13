/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { INews } from '@/types/news';
import React, { useCallback, useEffect, useState } from 'react';
import { NewFormPopup } from './NewFormPopup';
import { Reorder, useDragControls } from 'framer-motion';
import { ActionIcon, Button, Checkbox, Flex, Group, LoadingOverlay, Menu, Stack, Switch, Text } from '@mantine/core';
import { CreateButton } from '@/components/buttons/CreateButton';
import { twMerge } from 'tailwind-merge';
import { IconDots, IconEdit, IconMenu2, IconTrash } from '@tabler/icons-react';
import Image from 'next/image';
import { Popup } from '@/components/Popups/Popup';
import { formatTime } from '@/utils';
import dayjs from 'dayjs';

export default function NewsContainer() {
    const [data, setData] = useState<INews[]>([]);
    const [loading, setLoading] = useState(false);

    const [deleteId, setDeleteId] = useState<string>();
    const [deleting, setDeleting] = useState(false);

    const [news, setNews] = useState<Partial<INews>>();

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/admin/news");
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

    const toggle = async (id: string, isActive: boolean) => {
        try {
            setLoading(true);
            await fetch(`/api/admin/news/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: id, isActive }),
            });

            setData((prev) => prev.map((item) => (item._id == id ? { ...item, isActive } : item)));
        } catch (err) {
            console.log({ err });
        } finally {
            setLoading(false);
        }
    };

    const updatePriorities = useCallback(async (items: INews[]) => {
        try {
            const priorityData = items.map((item, index) => ({
                _id: item._id,
                priority: index + 1,
                title: item.title
            }));

            await fetch('/api/admin/news', {
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

    const handleReorder = useCallback(
        (newData: INews[]) => {
            setData(newData);
            const timeoutId = setTimeout(() => {
                updatePriorities(newData);
            }, 500);

            return () => clearTimeout(timeoutId);
        },
        [updatePriorities],
    );

    const handleEdit = (creator: INews) => {
        setNews(creator);
    };

    const onDelete = useCallback(() => {
        setDeleting(true);
        fetch(`/api/admin/news/${deleteId}`, {
            method: 'DELETE',
        }).then(() => {
            setDeleting(false);
            setDeleteId(undefined);
            fetchData();
        });
    }, [deleteId, fetchData]);

    return (
        <div className="border border-[#E7E7F8] bg-white border-t-0">
            <Flex justify="space-between" align="center" p={16}>
                {/* <Switch
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                /> */}
                <Text />
                <CreateButton
                    onClick={() => {
                        setNews({
                            content: "",
                            isActive: true,
                            title: "",
                            thumb: "",
                            priority: data.length + 1,
                            hasLink: false,
                            buttonLink: "",
                            buttonLabel: "",
                            slug: "",
                            date: dayjs().toISOString()
                        });
                    }}
                />
            </Flex>

            <Reorder.Group
                axis="y"
                values={data}
                onReorder={handleReorder}
                className="flex flex-col gap-0"
            >
                {data?.map((o, index) => (
                    <SortableItem
                        key={o._id}
                        news={o}
                        index={index}
                        toggle={toggle}
                        onEdit={handleEdit}
                        setDeleteId={setDeleteId}
                    />
                ))}
            </Reorder.Group>

            <NewFormPopup
                initialValue={news}
                opened={!!news}
                close={() => setNews(undefined)}
                refresh={fetchData}
            />

            <Popup
                opened={!!deleteId}
                onClose={() => setDeleteId(undefined)}
                title={"Delete news"}
            >
                <Flex pos="relative" direction="column" align="center">
                    <LoadingOverlay
                        visible={deleting}
                        zIndex={1000}
                        overlayProps={{ radius: 'sm', blur: 2 }}
                    />
                    <span>Are you want to delete this news?</span>
                    <Flex justify="center" gap={16} className="mt-4">
                        <Button variant="outline" fw={600} onClick={() => setDeleteId(undefined)}>
                            Cancel
                        </Button>
                        <Button onClick={onDelete} fw={600} bg={"#376CEC"}>Yes</Button>
                    </Flex>
                </Flex>
            </Popup>
        </div>
    );
}


function SortableItem({
    news,
    index,
    toggle,
    onEdit,
    setDeleteId,
}: {
    news: INews;
    index: number;
    toggle: (id: string, active: boolean) => void;
    onEdit: (creator: INews) => void;
    setDeleteId: (id: string) => void;
}) {
    const controls = useDragControls();

    return (
        <Reorder.Item
            value={news}
            dragListener={false}
            dragControls={controls}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
            className={twMerge("w-full relative", index % 2 != 0 && "border border-[#E7E7F8]")}
        >
            <Group
                className={`py-3 px-4 ${index % 2 !== 0 ? 'bg-[#F7F7FC]' : 'bg-white'} border-b border-[#F7F7FC] hover:bg-gray-50 transition-colors duration-200 select-none`}
                wrap="nowrap"
                justify="space-between"

            >
                <Group gap={12} wrap="nowrap" className="flex-1">
                    <div
                        onPointerDown={(e) => controls.start(e)}
                        className="cursor-grab active:cursor-grabbing p-1 text-gray-400 hover:text-gray-600"
                    >
                        <IconMenu2 size={20} />
                    </div>

                    <Flex align={"center"}>
                        <Image
                            src={news.thumb}
                            alt="Partner logo"
                            width={100}
                            height={100}
                            className="h-[64px] w-[160px] object-contain"
                        />

                        <Stack gap={4}>
                            <Text fz={13} c={"#4D5053"}>{formatTime(news.date)}</Text>

                            <Text fz={14} fw={500}>{news.title}</Text>
                        </Stack>
                    </Flex>
                </Group>

                <Group gap={16} wrap="nowrap" justify="space-between" w="30%">
                    <Checkbox
                        label={news.isActive ? 'Active' : 'In-active'}
                        checked={news.isActive}
                        onChange={() => toggle(news._id, !news.isActive)}
                        color="#376CEC"
                        styles={{
                            label: { paddingLeft: 8, fontWeight: 500 },
                        }}
                    />

                    <Menu shadow="md" width={160} position="bottom-end">
                        <Menu.Target>
                            <ActionIcon variant="subtle" c="#131416">
                                <IconDots size={18} />
                            </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown className="rounded-lg">
                            <Menu.Item
                                leftSection={<IconEdit size={20} />}
                                fw={500}
                                fz={14}
                                c="#131416"
                                onClick={() => onEdit(news)}
                            >
                                Edit
                            </Menu.Item>
                            <Menu.Item
                                color="#F11E11"
                                leftSection={<IconTrash size={20} />}
                                fw={500}
                                fz={14}
                                onClick={() => setDeleteId(news._id)}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Group>
        </Reorder.Item>
    );
}
