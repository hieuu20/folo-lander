"use client";

import { AppShell } from "@mantine/core";
import React from "react";
import { ProfileSidebar } from "./ProfileSidebar";

export function ProfileContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <React.Fragment>
            <AppShell
                padding="md"
                navbar={{
                    width: 316,
                    breakpoint: 'sm',
                }}
                bg={"#F0F0FC"}
            >
                <ProfileSidebar />
                <AppShell.Main 
                    bg={"#F0F0FC"}
                    // p={16}
                    p={0}
                    pl={316}
                >
                    {children}
                </AppShell.Main>
            </AppShell>
        </React.Fragment>
    );
}

