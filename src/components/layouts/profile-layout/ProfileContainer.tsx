"use client";

import { AppShell, Flex } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { ProfileSidebar } from "./ProfileSidebar";
import { useDisclosure } from "@/hooks";
import { MenuIcon } from "@/components/icons/MenuIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import pointIcon from "@public/icons/point-icon.png";
import Image from "next/image";
import { useApp } from "@/app/context/AppContext";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { usePathname } from "next/navigation";

export function ProfileContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [opened, { toggle, close }] = useDisclosure(false);
    const { profile } = useApp();
    const pathname = usePathname();
    const [isChangeColor, setIsChangeColor] = useState(false);

    useEffect(() => {
        close();
        if (pathname != '/profile/dashboard') {
            setIsChangeColor(true);
            return;
        }

        const elm = document.getElementById("dashboard-header")?.getBoundingClientRect();
        const onScroll = () => {
            setIsChangeColor(window.scrollY >= (elm?.height || 300));
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [close, pathname]);

    return (
        <React.Fragment>
            <AppShell
                padding="0"
                navbar={{
                    width: 316,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
                header={{
                    height: { base: 60, sm: 0 },
                }}
                bg={{ base: "white", md: "#F0F0FC" }}
            >
                <AppShell.Header
                    hiddenFrom="sm"
                    h={60}
                    bg={!isChangeColor ? "transparent" : "white"}
                    bd={"none"}
                    zIndex={1}
                >
                    <Flex
                        pos={"relative"}
                        px={{ base: 16 }}
                        justify={"space-between"}
                        align={"center"}
                        h={"100%"}
                    >
                        {opened ? (
                            <CloseIcon c={!isChangeColor ? "white" : undefined} onClick={toggle} />
                        ) : (
                            <MenuIcon c={!isChangeColor ? "white" : undefined} onClick={toggle} />
                        )}

                        <LogoIcon c={!isChangeColor ? "white" : undefined} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                        <Flex
                            px={12} py={6}
                            bd={"1px solid #E7E7F8"}
                            bg={"#F7F7FC"}
                            fz={16}
                            fw={700}
                            gap={8}
                            className="rounded-2xl"
                        >
                            {profile?.point}
                            <Image src={pointIcon} alt="pointIcon" className="w-5 h-auto" />
                        </Flex>
                    </Flex>
                </AppShell.Header>

                <AppShell.Navbar
                    className="h-screen"
                    c={"#131416"}
                >
                    <ProfileSidebar />
                </AppShell.Navbar>

                <AppShell.Main
                    bg={{ base: "white", md: "#F0F0FC" }}
                >
                    {children}
                </AppShell.Main>
            </AppShell>
        </React.Fragment>
    );
}

