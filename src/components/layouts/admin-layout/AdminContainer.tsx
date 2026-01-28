"use client";

import { useDisclosure } from "@/hooks";
import { AppShell } from "@mantine/core";
import React from "react";
import { AdminSidebar } from "./AdminSidebar";

export function AdminContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <React.Fragment>
            <AppShell
                padding="md"
                navbar={{
                    width: opened ? 316 : 64,
                    breakpoint: 'sm',
                }}
                bg={"#F0F0FC"}
            >
                <AdminSidebar opened={opened} toggle={toggle} />
                <AppShell.Main 
                    bg={"#F0F0FC"}
                    // p={16}
                >
                    {children}
                </AppShell.Main>
            </AppShell>
        </React.Fragment>
    );
}

