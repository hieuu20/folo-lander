"use client";

import { Box, Text } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import AccountLevelFormPopup from './account-level/AccountLevelFormPopup';
import { AccountLevelTable } from './account-level/AccountLevelTable';
import { AccountLevel } from '@/types/accountLevel';


export function AccountLevelContainer() {
    const [data, setData] = useState<AccountLevel[]>([]);
    const [loading, setLoading] = useState(false);
    // const [deleteId, setDeleteId] = useState<string>();
    // const [deleting, setDeleting] = useState(false);

    const [account, setAccount] = useState<Partial<AccountLevel>>();

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/admin/account-level");
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

    // const onDelete = useCallback(() => {
    //     setDeleting(true);
    //     fetch(`/api/admin/reward/${deleteId}`, {
    //         method: 'DELETE',
    //     }).then(() => {
    //         setDeleting(false);
    //         setDeleteId(undefined);
    //         fetchData();
    //     });
    // }, [deleteId, fetchData]);

    return (
        <div className="border border-[#E7E7F8] bg-white border-t-0">
            <Box pl={16} pb={12}>
                <Text fz={14} c={"#4D5053"}>
                    Note: Reward images and APIs are setup in here. Data syncing with Upviral app.
                </Text>
                {/* <CreateButton
                    onClick={() => {
                        setAccount({
                            title: '',
                            mintPoint: 0,
                            isActive: true,
                            perks: []
                        });
                    }}
                /> */}
            </Box>
            <AccountLevelTable
                data={data}
                loading={loading}
                setRecordEdit={setAccount}
            />

            <AccountLevelFormPopup
                initialValue={account}
                opened={!!account}
                close={() => setAccount(undefined)}
                refresh={fetchData}
            />

            {/* <Popup
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
                    <span>Are you want to delete this account?</span>
                    <Flex justify="center" gap={16} className="mt-4">
                        <Button variant="outline" fw={600} onClick={() => setDeleteId(undefined)}>
                            Cancel
                        </Button>
                        <Button onClick={onDelete} fw={600} bg={"#376CEC"}>Yes</Button>
                    </Flex>
                </Flex>
            </Popup> */}
        </div>
    );
}
