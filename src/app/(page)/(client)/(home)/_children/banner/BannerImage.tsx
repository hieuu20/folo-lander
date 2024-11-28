"use client";

import { Box } from "@mantine/core";
import React from "react";
import bannerIcon from "@public/banner/icon.png";
import bannerIconBg from "@public/banner/bg-icon.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerImage() {
  return (
    <Box
      w={{ base: "46%", md: "19.2%" }}
      className="aspect-square"
      pos={"relative"}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: [1, 2, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-14%] left-0 w-full h-full z-0"
      >
        <Image
          src={bannerIconBg}
          alt="banner icon bg"
          fill
          className=" object-cover"
        />
      </motion.div>
      <Image
        src={bannerIcon}
        alt="banner icon bg"
        fill
        className="z-10 object-cover "
      />
    </Box>
  );
}
