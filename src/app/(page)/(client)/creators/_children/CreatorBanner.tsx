"use client";

import { Box, Flex } from "@mantine/core";
import React from "react";
import { IUSPManager } from "@/app/api/_entities";
import bgPc from "@public/fan-banner/bg-pc.png";
import bgMb from "@public/fan-banner/bg-mb.png";
import Image from "next/image";
import { BannerImage, BannerText } from "./creator-banner";

interface Props {
  usps: IUSPManager[];
}

export function CreatorBanner({ usps }: Props) {
  return (
    <Box
      w={"100%"}
      pos={"relative"}
      mah={{ "2xl": 1500 }}
      className="aspect-[0.3] sm:aspect-[0.46] md:aspect-[1.2] lg:aspect-[1.26] 2xl:aspect-[1.22]"
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
        id="Banner"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 48, sm: 56 }}
        h={"100%"}
        pos={"relative"}
        className="container"
        pt={{ base: 72, md: 80, lg: 90, "2xl": 100 }}
      >
        <BannerText usp={usps[0]} />
        <BannerImage />
      </Flex>
    </Box>
  );
}
