"use client";

import { Box, Flex } from "@mantine/core";
import React from "react";
import { IUSPManager } from "@/app/api/_entities";
import bgPc from "@public/fan-banner/bg-pc.png";
import bgMb from "@public/fan-banner/bg-mb.png";
import Image from "next/image";
import BannerText from "./fan-banner/BannerText";
import dynamic from 'next/dynamic';
const BannerImage = dynamic(() => import('./fan-banner/BannerImage'), { ssr: false });

interface Props {
  usps: IUSPManager[];
}

export function FanBanner({ usps }: Props) {
  return (
    <Box
      w={"100%"}
      pos={"relative"}
      className="aspect-[0.328] sm:aspect-[0.5] md:aspect-[1.4]"
    >
      <Box pos={"absolute"} w={"100%"} h={"100%"} top={0} left={0}>
        <Image
          src={bgPc}
          alt="banner background"
          fill
          className="object-cover hidden sm:block"
        />

        <Image
          src={bgMb}
          alt="banner background"
          fill
          className="object-cover sm:hidden"
        />
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 54, lg: 24 }}
        h={"100%"}
        pos={'relative'}
        className="container"
        pt={{ base: "0", md: "10%", '2xl': '12%' }}
      >
        <BannerText usp={usps[0]} />
        <BannerImage />
      </Flex>
    </Box>
  );
}
