/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { CreateButton } from '@/components/buttons/CreateButton';
import { PartnerSlide } from '@/types/partnerSlide';
import { notify } from '@/utils/notify';
import { Checkbox, Flex, Group, Stack, Text } from '@mantine/core';
import TrashIcon from '@public/icons/trash-icon.svg';
import { IconMenu2 } from '@tabler/icons-react';
import { Reorder, useDragControls } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import FeaturedCreatorFormPopup from './PartnerSideFormPopup';

export function PartnerSide() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<PartnerSlide[]>([]);
    const [popupOpened, setPopupOpened] = useState(false);
    const [selectedCreator, setSelectedCreator] = useState<Partial<PartnerSlide> | undefined>(
        undefined,
    );

    const toggle = async (id: string, isActive: boolean) => {
        try {
            setLoading(true);
            await fetch(`/api/admin/partner-side/${id}`, {
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

    const updatePriorities = useCallback(async (items: PartnerSlide[]) => {
        try {
            const priorityData = items.map((item, index) => ({
                _id: item._id,
                priority: index + 1,
            }));

            await fetch('/api/admin/partner-side', {
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
            const res = await fetch('/api/admin/partner-side');
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
        (newData: PartnerSlide[]) => {
            setData(newData);
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

    const handleEdit = (creator: PartnerSlide) => {
        setSelectedCreator(creator);
        setPopupOpened(true);
    };

    const handleDelete = async (id: string) => {
        try {
            setLoading(true);
            await fetch(`/api/admin/partner-side/${id}`, {
                method: 'DELETE',
            });
            fetchData();
        } catch (err) {
            notify.error('Delete fail');
        } finally {
            setLoading(false);
        }
    };

    const closePopup = () => {
        setPopupOpened(false);
        setSelectedCreator(undefined);
    };

    if (!data?.length) return <></>;

    return (
        <Stack gap={0} className="w-full text-[#131416]">
            <Flex justify="space-between" align="center" p={16}>
                <Text size="sm" fw={500} className="text-[#131416]">
                    *Note: Upload SVG files for the best display quality.
                </Text>{' '}
                <CreateButton onClick={handleCreate} />
            </Flex>
            <Reorder.Group
                axis="y"
                values={data}
                onReorder={handleReorder}
                className="flex flex-col gap-0"
            >
                {data?.map((section, index) => (
                    <SortableItem
                        key={section._id}
                        section={section}
                        index={index}
                        toggle={toggle}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </Reorder.Group>

            <FeaturedCreatorFormPopup
                opened={popupOpened}
                close={closePopup}
                initialValue={selectedCreator}
                refresh={fetchData}
            />
        </Stack>
    );
}

function SortableItem({
    section,
    index,
    toggle,
    onEdit,
    onDelete,
}: {
    section: PartnerSlide;
    index: number;
    toggle: (id: string, active: boolean) => void;
    onEdit: (creator: PartnerSlide) => void;
    onDelete: (id: string) => void;
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
                className={`py-3 px-4 ${index % 2 !== 0 ? 'bg-[#FAFAFA]' : 'bg-white'} border-b border-[#F7F7FC] hover:bg-gray-50 transition-colors duration-200 select-none`}
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

                    <Image
                        src={section.thumb}
                        alt="Partner logo"
                        width={100}
                        height={100}
                        className="h-[64px] w-[160px] object-contain"
                    />
                </Group>

                <Group gap={16} wrap="nowrap" justify="space-between" w="40%">
                    <Checkbox
                        label={section.isActive ? 'Active' : 'In-active'}
                        checked={section.isActive}
                        onChange={() => toggle(section._id, !section.isActive)}
                        color="grape"
                        styles={{
                            label: { paddingLeft: 8, fontWeight: 500 },
                        }}
                    />

                    <button
                        onClick={() => onDelete(section._id)}
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    >
                        <Image src={TrashIcon} alt="Trash" width={20} height={20} />
                    </button>
                </Group>
            </Group>
        </Reorder.Item>
    );
}
