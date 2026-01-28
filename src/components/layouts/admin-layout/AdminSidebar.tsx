"use client";

import { AppShell, Box, Flex, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import logo from "@public/admin/icons/logo.svg";
import Image from "next/image";
import sortIcon from "@public/admin/icons/Sort.svg";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import sidebar1 from "@public/admin/sidebar/Home.svg";
import sidebar2 from "@public/admin/sidebar/user.svg";
import sidebar3 from "@public/admin/sidebar/gift.svg";
import sidebar4 from "@public/admin/sidebar/setting.svg";
import sidebar5 from "@public/admin/sidebar/Profile.svg";
import sidebarActive1 from "@public/admin/sidebar/home-active.svg";
import sidebarActive2 from "@public/admin/sidebar/user-active.svg";
import sidebarActive3 from "@public/admin/sidebar/gift-active.svg";
import sidebarActive4 from "@public/admin/sidebar/setting-active.svg";
// import logoutIcon from "@public/admin/sidebar/Logout.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarList = [
  {
    icon: sidebar1,
    activeIcon: sidebarActive1,
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: sidebar2,
    activeIcon: sidebarActive2,
    label: "Users",
    href: "/admin/users"
  },
  {
    icon: sidebar3,
    activeIcon: sidebarActive3,
    label: "Rewards",
    href: "/admin/rewards"
  },
  {
    icon: sidebar4,
    activeIcon: sidebarActive4,
    label: "Lander setup",
    href: "/admin/lander-setup"
  },
  {
    icon: sidebar5,
    label: "My profile",
    href: "/admin/profile"
  }
];

interface Props {
  opened: boolean,
  toggle: () => void
}

export function AdminSidebar({ opened, toggle }: Props) {
  const pathname = usePathname();
  return (
    <AppShell.Navbar className="transition-all duration-300 ease-in-out">
      <Flex w={"100%"} bg={"black"} h={60} px={opened ? 20 : 14} align={"center"} justify={"center"}>
        <FadeELement condition={opened} className="flex-1">
          <Flex align={"center"} gap={4}>
            <Image src={logo} alt="logo" className="h-7 w-auto" />
            <Text fw={600} fz={16} c={"white"} className="whitespace-nowrap">Lander admin</Text>
          </Flex>
        </FadeELement>
        <Box p={4} onClick={toggle} className="cursor-pointer">
          <Image src={sortIcon} alt="sortIcon" className={twMerge("w-6 h-auto transition-all duration-300 ease-in-out", !opened && "rotate-180")} />
        </Box>
      </Flex>
      <Flex direction={"column"} mt={12}>
        {sidebarList.map((o, index) => {
          const isActive = pathname == o.href;

          return (
            <Link key={index} href={o.href} className={twMerge("relative w-full px-[18px] py-1")}>
              {isActive && (
                <Box pos={"absolute"} top={0} left={0} h={"100%"} w={4} bg={"#131416"} />
              )}
              <Flex
                py={8}
                gap={8}
                align={"center"}
                className={index == sidebarList.length - 1 ? "border-t-[1px] border-solid border-[#E7E7F8]" : ""}
              >
                <Image src={isActive ? o.activeIcon : o.icon} alt="sidebar icon" className="w-7 h-7" />
                <FadeELement condition={opened}>
                  <Text c={"#4D5053"} fw={isActive ? 700 : 400} fz={18} className="whitespace-nowrap transition-all duration-150">{o.label}</Text>
                </FadeELement>
              </Flex>

            </Link>
          );
        })}
      </Flex>
    </AppShell.Navbar>
  );
}


const FadeELement = ({ className, children, condition }: PropsWithChildren<{ className?: string, condition: boolean }>) => {
  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeInOut", }, }}
          transition={{
            animate: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};