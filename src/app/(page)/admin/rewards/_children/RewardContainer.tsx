"use client";

import { CreateButton } from '@/components/buttons/CreateButton';
import { Button, Flex, LoadingOverlay } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import { RewardTable } from './reward/RewardTable';
import { Reward } from '@/types/reward';
import RewardFormPopup from './reward/RewardFormPopup';
import { Popup } from '@/components/Popups/Popup';


export function RewardContainer() {
    const [rewards, setRewards] = useState<Reward[]>([]);
    const [loading, setLoading] = useState(false);
    const [deleteId, setDeleteId] = useState<string>();
    const [deleting, setDeleting] = useState(false);

    const [reward, setReward] = useState<Partial<Reward>>();

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/admin/reward");
            const resData = await res.json();

            if (resData.data.length) {
                setRewards(resData.data);
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

    const onDelete = useCallback(() => {
        setDeleting(true);
        fetch(`/api/admin/reward/${deleteId}`, {
            method: 'DELETE',
        }).then(() => {
            setDeleting(false);
            setDeleteId(undefined);
            fetchData();
        });
    }, [deleteId, fetchData]);

    return (
        <div className="border border-[#E7E7F8] bg-white border-t-0">
            <Flex  px={16} py={12} justify={"flex-end"}>
                <CreateButton
                    onClick={() => {
                        setReward({
                            name: '',
                            icon: '',
                            isActive: true
                        });
                    }}
                />
            </Flex>
            <RewardTable
                rewards={rewards}
                loading={loading}
                setRewardEdit={setReward}
                setDeleteId={setDeleteId}
            />

            <RewardFormPopup
                initialValue={reward}
                opened={!!reward}
                close={() => setReward(undefined)}
                refresh={fetchData}
            />

            <Popup
                opened={!!deleteId}
                onClose={() => setDeleteId(undefined)}
                title={"Delete reward"}
            >
                <Flex pos="relative" direction="column" align="center">
                    <LoadingOverlay
                        visible={deleting}
                        zIndex={1000}
                        overlayProps={{ radius: 'sm', blur: 2 }}
                    />
                    <span>Are you want to delete this reward?</span>
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
