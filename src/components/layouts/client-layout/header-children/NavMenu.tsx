"use client";

import { headerItem } from "@/utils/constants";
import { List } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

export function NavMenu() {
  const pathName = usePathname();

  if (pathName !== "/") return null;

  return (
    <List display={{base: 'none', lg: 'flex'}} className="flex-1 items-center justify-start gap-10">
      {headerItem.map((item) => {
        return (
          <List.Item
            key={item.title}
            className="text-hover text-xl 2xl:text-2xl text-white font-medium cursor-pointer whitespace-nowrap"
          >
            <Link
              href={item.href}
              className={twMerge(pathName === item.href && "border-b-2", 'text-white')}
            >
              <span className="">{item.title}</span>
            </Link>
          </List.Item>
        );
      })}
    </List>
  );
}
