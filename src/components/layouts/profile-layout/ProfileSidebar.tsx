"use client";

import { AppShell, Box, Flex, Group, Stack, Text } from "@mantine/core";
import React, { useCallback } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import sidebar1 from "@public/admin/sidebar/home.svg";
import sidebar2 from "@public/admin/sidebar/gift.svg";
import sidebar3 from "@public/profile/refer.svg";
import sidebar4 from "@public/admin/sidebar/profile.svg";
import sidebarActive1 from "@public/admin/sidebar/home-active.svg";
import sidebarActive2 from "@public/admin/sidebar/gift-active.svg";
import sidebarActive3 from "@public/profile/refer-active.svg";
import sidebarActive4 from "@public/profile/profile-active.svg";
import banner from "@public/profile/banner-image.webp";
// import logoutIcon from "@public/admin/sidebar/Logout.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useApp } from "@/app/context/AppContext";
import logoutIcon from "@public/icons/logout.svg";

import avatar from "@public/profile/avatar.svg";
import pointIcon from "@public/icons/point-icon.svg";
import logo from "@public/profile/logo.svg";

import flag1 from "@public/footer/flag-1.png";
import flag2 from "@public/footer/flag-2.png";

const sidebarList = [
  {
    icon: sidebar1,
    activeIcon: sidebarActive1,
    label: "Dashboard",
    href: "/profile/dashboard",
  },
  {
    icon: sidebar2,
    activeIcon: sidebarActive2,
    label: "Rewards",
    href: "/profile/rewards"
  },
  {
    icon: sidebar3,
    activeIcon: sidebarActive3,
    label: "Refer to Earn",
    href: "/profile/refer-to-earn"
  },
  {
    icon: sidebar4,
    activeIcon: sidebarActive4,
    label: "My profile",
    href: "/profile/detail"
  }
];


export function ProfileSidebar() {
  const { profile } = useApp();
  const pathname = usePathname();
  const router = useRouter();

  const currenYear = new Date().getFullYear();

  const onLogout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "PUT" });
    location.reload();
    router.replace("/");
  }, [router]);

  return (
    <AppShell.Navbar className="transition-all duration-300 ease-in-out h-screen" c={"#131416"}>
      <Flex w={"100%"} px={20} py={16} align={"center"} justify={"space-between"}>
        <Group gap={8}>
          <Image src={avatar} alt="avatar" className="w-10 h-auto" />
          <div>
            <Text fz={{ base: 14 }} fw={500} lh={1.4}>
              Username
            </Text>
            <Text fz={13} c="#4D5053">
              {profile?.email}
            </Text>
          </div>
        </Group>

        <Flex
          bd={"1px solid #E7E7F8"}
          h={36} w={97} px={12}
          py={6} bg={"#F7F7FC"}
          justify={"space-between"}
          align={"center"}
          className="rounded-2xl"
        >
          <Text fz={{ base: 16 }} fw={700} flex={1} ta={"center"}>{profile?.point}</Text>
          <Image src={pointIcon} alt="pointIcon" className="w-5 h-auto" />
        </Flex>
      </Flex>

      <Flex direction={"column"} mt={12}>
        {sidebarList.map((o, index) => {
          const isActive = pathname == o.href;
          const isLast = index == sidebarList.length - 1;
          return (
            <Link key={index} href={o.href} className={twMerge("relative w-full px-3 py-1")}>
              {isActive && (
                <Box pos={"absolute"} top={0} left={0} h={"100%"} w={4} bg={"#131416"} />
              )}
              <Flex
                py={8}
                pt={isLast ? 16 : 8}
                gap={8}
                align={"center"}
                className={twMerge(
                  "hover:bg-[#F7F7FC] transition-all duration-200 rounded-lg",
                  isLast && "border-t-[1px] border-solid border-[#E7E7F8]"
                )}
                px={8}
              >
                <Image src={isActive ? o.activeIcon : o.icon} alt="sidebar icon" className="w-7 h-7" />
                <Text c={isActive ? "#131416" : "#4D5053"} fw={isActive ? 700 : 400} fz={18} className="whitespace-nowrap transition-all duration-150">{o.label}</Text>
              </Flex>
            </Link>
          );
        })}
      </Flex>

      <Box p={12}>
        <Link href={"https://knky.co/fresh"} target="_blank">
          <Image src={banner} alt="banner" className="w-full h-auto object-cover" />
        </Link>
      </Box>

      <Box px={20} py={12} mt={"auto"} className="border-t-[1px] border-[#E7E7F8]">
        <Stack gap={24}>
          <Flex
            gap={8} fz={18} c={"#4D5053"} className="cursor-pointer"
            onClick={onLogout}
          >
            <Image src={logoutIcon} alt="logoutIcon" className="w-7 h-7" />
            Logout
          </Flex>

          <Flex direction={"column"}>
            <Text fz={8} c={"#4D5053"} mb={2}>
              All rights reserved. © {currenYear}
            </Text>

            <Text fz={8} c={"#4D5053"} mb={4} className="flex items-center gap-[2px]">
              FOLO® and <Image src={logo} alt="smallLogo" className="h-3 w-auto -mt-0.5" />
              logos are registered trademarks.
            </Text>

            <Text fz={7} c={"#4D5053"} className="flex items-center gap-[2px]">
              Social Commerce UK Ltd <Image src={flag1} alt="flag 1" className="h-[7px] w-auto inline" />
              71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.UK
            </Text>

            <Text fz={7} c={"#4D5053"} className="flex items-center gap-[2px]">
              Social Commerce EU Ltd <Image src={flag2} alt="flag 2" className="h-[7px] w-auto inline" />
              4th Floor, Agios Nikolaos, Kamares, 6037 Larnaca.Cyprus.EU
            </Text>
          </Flex>

        </Stack>
      </Box>
    </AppShell.Navbar>
  );
}
