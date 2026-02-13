/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { CreateButton } from '@/components/buttons/CreateButton';
import { IPeopleSay } from '@/types/peopleSay';
import { notify } from '@/utils/notify';
import { ActionIcon, Button, Checkbox, Flex, Group, LoadingOverlay, Menu, Stack, Text } from '@mantine/core';
import { IconDots, IconEdit, IconMenu2, IconTrash } from '@tabler/icons-react';
import { Reorder, useDragControls } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import PeopleSayFormPopup from './PeopleSayFormPopup';
import { Popup } from '@/components/Popups/Popup';
import { twMerge } from 'tailwind-merge';

export function PeopleSay() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<IPeopleSay[]>([]);
    const [popupOpened, setPopupOpened] = useState(false);
    const [selectedCreator, setSelectedCreator] = useState<Partial<IPeopleSay> | undefined>(
        undefined,
    );

    const [deleteId, setDeleteId] = useState<string>();
    const [deleting, setDeleting] = useState(false);

    const toggle = async (id: string, isActive: boolean) => {
        try {
            setLoading(true);
            await fetch(`/api/admin/people-say/${id}`, {
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

    const updatePriorities = useCallback(async (items: IPeopleSay[]) => {
        try {
            const priorityData = items.map((item, index) => ({
                _id: item._id,
                priority: index + 1,
            }));

            await fetch('/api/admin/people-say', {
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
            const res = await fetch('/api/admin/people-say');
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
        (newData: IPeopleSay[]) => {
            setData(newData);
            // Debounce the API call to avoid calling it on every drag movement
            const timeoutId = setTimeout(() => {
                updatePriorities(newData);
            }, 500);

            return () => clearTimeout(timeoutId);
        },
        [updatePriorities],
    );

    const handleCreate = () => {
        setSelectedCreator(undefined);
        setPopupOpened(true);
    };

    const handleEdit = (creator: IPeopleSay) => {
        setSelectedCreator(creator);
        setPopupOpened(true);
    };

    const handleDelete = async () => {
        try {
            setDeleting(true);
            await fetch(`/api/admin/people-say/${deleteId}`, {
                method: 'DELETE',
            });
            fetchData();
        } catch (err) {
            notify.error('Delete fail');
        } finally {
            setDeleting(false);
            setDeleteId(undefined);
        }
    };

    const closePopup = () => {
        setPopupOpened(false);
        setSelectedCreator(undefined);
    };

    if (!data?.length) return <></>;

    return (
        <Stack gap={0} className="w-full text-[#131416]">
            <Stack justify="flex-end" align="flex-end" p={16}>
                <CreateButton onClick={handleCreate} />
            </Stack>
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
                        onEdit={handleEdit}
                        setDeleteId={setDeleteId}
                    />
                ))}
            </Reorder.Group>

            <PeopleSayFormPopup
                opened={popupOpened}
                close={closePopup}
                initialValue={selectedCreator}
                refresh={fetchData}
            />

            <Popup
                opened={!!deleteId}
                onClose={() => setDeleteId(undefined)}
                title={"Delete feedback"}
            >
                <Flex pos="relative" direction="column" align="center">
                    <LoadingOverlay
                        visible={deleting}
                        zIndex={1000}
                        overlayProps={{ radius: 'sm', blur: 2 }}
                    />
                    <span>Are you want to delete this feedback?</span>
                    <Flex justify="center" gap={16} className="mt-4">
                        <Button variant="outline" fw={600} onClick={() => setDeleteId(undefined)}>
                            Cancel
                        </Button>
                        <Button onClick={handleDelete} fw={600} bg={"#376CEC"}>Yes</Button>
                    </Flex>
                </Flex>
            </Popup>
        </Stack>
    );
}

function SortableItem({
    section,
    index,
    toggle,
    onEdit,
    setDeleteId,
}: {
    section: IPeopleSay;
    index: number;
    toggle: (id: string, active: boolean) => void;
    onEdit: (creator: IPeopleSay) => void;
    setDeleteId: (id: string) => void;
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
            className={twMerge("w-full relative", index % 2 != 0 && "border border-[#E7E7F8]")}
        >
            <Group
                className={`py-3 px-4 ${index % 2 !== 0 ? 'bg-[#F7F7FC]' : 'bg-white'} hover:bg-gray-50 transition-colors duration-200 select-none`}
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

                    <Text size="sm" fw={400} maw="500px" className="text-[#131416] line-clamp-2">
                        {section.feedback}
                    </Text>
                </Group>

                <Group gap={16} wrap="nowrap" justify="space-between" w={'40%'}>
                    <Checkbox
                        label={section.isActive ? 'Active' : 'In-active'}
                        checked={section.isActive}
                        onChange={() => toggle(section._id, !section.isActive)}
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
                                onClick={() => onEdit(section)}
                            >
                                Edit
                            </Menu.Item>
                            <Menu.Item
                                color="#F11E11"
                                leftSection={<IconTrash size={20} />}
                                fw={500}
                                fz={14}
                                onClick={() => setDeleteId(section._id)}
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
