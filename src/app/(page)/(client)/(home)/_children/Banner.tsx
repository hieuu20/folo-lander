import { Box, Flex } from "@mantine/core";
import React from "react";
import BannerText from "./banner/BannerText";
import BannerImage from "./banner/BannerImage";
import { IUSPManager } from "@/app/api/_entities";
import bgPc from "@public/banner/bg-pc.png";
import bgMb from "@public/banner/bg-mb.png";
import Image from "next/image";

interface Props {
  usps: IUSPManager[];
}

export function Banner({ usps }: Props) {
  return (
    <Box
      w={"100%"}
      pos={"relative"}
      className="aspect-[0.42] sm:aspect-[0.6] md:aspect-[1.43]"
    >
      <Box pos={"absolute"} w={"100%"} h={"100%"} top={0} left={0} bg={'black'}>
        {/* <Image
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
        /> */}
      </Box>
      <Box
        className="container"
        pos={'relative'}
        h={"100%"}
      >
        <Flex
          direction={{ base: "column" }}
          gap={{ base: 54, lg: 24 }}
          align={"center"}
          justify={{ base: "center", lg: "space-between" }}
          w={'100%'}
        >
          <BannerImage />
          <BannerText usp={usps[0]} />
        </Flex>
      </Box>
    </Box>
  );
}
