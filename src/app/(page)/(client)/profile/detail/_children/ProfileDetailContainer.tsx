"use client";

import { Box, SimpleGrid } from '@mantine/core';
import React from 'react';
import { AccountInfo } from './AccountInfo';
import { ChangePassword } from './ChangePassword';
import { useApp } from '@/app/context/AppContext';

export function ProfileDetailContainer() {
    const { profile } = useApp();

    if (!profile) {
        return <></>;
    }

    return (
        <Box w={"100%"} p={{ md: 16 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 0, md: 16 }}>
                <AccountInfo profile={profile} />

                <ChangePassword />
            </SimpleGrid>
        </Box>
    );
}
