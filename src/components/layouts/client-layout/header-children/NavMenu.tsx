"use client";

import { creatorHeaderItem, fanHeaderItem, headerItem } from "@/utils/constants";
import { List } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export function NavMenu() {
  const pathName = usePathname();

  const navbar = useMemo(() => {
    if(pathName.startsWith("/fans")){
      return fanHeaderItem;
    }

    if(pathName.startsWith("/creators")){
      return creatorHeaderItem;
    }

    return headerItem;
  }, [pathName]);


  return (
    <List display={{base: 'none', lg: 'flex'}} className="flex-1 items-center justify-start gap-10">
      {navbar.map((item) => {
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
