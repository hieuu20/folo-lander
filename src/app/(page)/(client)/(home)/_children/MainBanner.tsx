import { Box, Flex } from "@mantine/core";
import React from "react";
import BannerText from "./main-banner/BannerText";
import BannerImage from "./main-banner/BannerImage";
import bgPc from "@public/banner/bg-pc.png";
import bgMb from "@public/banner/bg-mb.png";
import Image from "next/image";

export function MainBanner() {
  return (
    <Box
      w={"100%"}
      pos={"relative"}
      className="aspect-[0.47] sm:aspect-[0.6] md:aspect-[1.92] overflow-hidden"
    >
      <Box pos={"absolute"} w={"100%"} h={"100%"} top={0} left={0} bg={"black"}>
        <Image
          src={bgPc}
          alt="banner background"
          fill
          className="object-cover hidden md:block"
        />

        <Image
          src={bgMb}
          alt="banner background"
          fill
          className="object-cover md:hidden"
        />
      </Box>
      <Flex direction={"column"} w={"100%"} h={"100%"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 40, lg: 24 }}
          align={"center"}
          justify={{ base: "start", lg: "space-between" }}
          flex={1}
          // pos={"relative"}
          className="container"
        >
          <BannerText />
          <BannerImage />
        </Flex>
      </Flex>
    </Box>
  );
}
