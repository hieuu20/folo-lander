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
    <Box w={"100%"} pos={"relative"} className="aspect-[0.454] sm:aspect-[0.58] md:aspect-[1.4]">
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
      <Box
        className="container"
        pos={"relative"}
        h={"100%"}
        pt={{ base: "20%", md: "8%" }}
      >
        <Flex
          direction={{ base: "column" }}
          gap={{ base: 16, md: 24 }}
          align={"center"}
          justify={"center"}
          w={"100%"}
        >
          <BannerImage />
          <BannerText usp={usps[0]} />
        </Flex>
      </Box>
    </Box>
  );
}
