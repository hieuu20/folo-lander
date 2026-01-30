"use client";

import { CreateButton } from '@/components/buttons/CreateButton';
import { Button, Flex, LoadingOverlay } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import { Perk } from '@/types/perk';
import PerkFormPopup from './perk/PerkFormPopup';
import { PerkTable } from './perk/PerkTable';
import { Popup } from '@/components/Popups/Popup';


export function PerkContainer() {
    const [data, setData] = useState<Perk[]>([]);
    const [loading, setLoading] = useState(false);
    const [deleteId, setDeleteId] = useState<string>();
    const [deleting, setDeleting] = useState(false);

    const [account, setAccount] = useState<Partial<Perk>>();

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/admin/perk");
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

    const onDelete = useCallback(() => {
        setDeleting(true);
        fetch(`/api/admin/perk/${deleteId}`, {
            method: 'DELETE',
        }).then(() => {
            setDeleting(false);
            setDeleteId(undefined);
            fetchData();
        });
    }, [deleteId, fetchData]);

    return (
        <div className="border border-[#E7E7F8] bg-white border-t-0">
            <Flex justify={"flex-end"} align={"center"} px={16} py={12}>
                <CreateButton
                    onClick={() => {
                        setAccount({
                            priority: data.length + 1,
                            thumb: "",
                            title: "",
                            description: "",
                            pointToClaim: 0,
                            priceToBuy: 0,
                            isActive: true,
                        });
                    }}
                />
            </Flex>
            <PerkTable
                data={data}
                loading={loading}
                setRecordEdit={setAccount}
                setDeleteId={setDeleteId}
            />

            <PerkFormPopup
                initialValue={account}
                opened={!!account}
                close={() => setAccount(undefined)}
                refresh={fetchData}
            />

            <Popup
                opened={!!deleteId}
                onClose={() => setDeleteId(undefined)}
                title={"Delete perk"}
            >
                <Flex pos="relative" direction="column" align="center">
                    <LoadingOverlay
                        visible={deleting}
                        zIndex={1000}
                        overlayProps={{ radius: 'sm', blur: 2 }}
                    />
                    <span>Are you want to delete this perk?</span>
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
