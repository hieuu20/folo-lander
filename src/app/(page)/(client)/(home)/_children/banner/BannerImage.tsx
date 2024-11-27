"use client";

import { Box, Flex } from "@mantine/core";
import React from "react";
import bannerIcon from "@public/banner/icon.png";
import bannerIconBg from "@public/banner/bg-icon.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerImage() {
  return (
    <Flex w={'100%'} justify={'center'} pos={'relative'}>
      <Box
        w={{ base: "60%", md: "30%" }}
        className="aspect-square"
      >
        <Image src={bannerIconBg} alt="banner icon bg" fill className="z-0" />
      </Box>

      <Box
        w={{ base: "42%", md: "19%" }}
        pos={'relative'}
        className="aspect-square"
      >
        <Image src={bannerIcon} alt="banner icon bg" fill className="z-10" />
      </Box>
      

    </Flex>
  );
}
