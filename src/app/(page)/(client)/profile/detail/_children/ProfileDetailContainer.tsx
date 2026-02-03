"use client";

import { IUser } from '@/types/user';
import { Box, SimpleGrid } from '@mantine/core';
import React from 'react';
import { AccountInfo } from './AccountInfo';
import { ChangePassword } from './ChangePassword';

interface Props {
    profile: IUser;
}

export function ProfileDetailContainer({ profile }: Props) {
    return (
        <Box w={"100%"} p={{ md: 16 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 0, md: 16 }}>
                <AccountInfo profile={profile} />

                <ChangePassword />
            </SimpleGrid>
        </Box>
    );
}
