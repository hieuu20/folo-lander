"use client";

import { Box, BoxProps, Flex, Grid } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";
import top1 from "@public/prime-subscription/top-1.png";
import top2 from "@public/prime-subscription/top-2.png";
import top3 from "@public/prime-subscription/top-3.png";
import top4 from "@public/prime-subscription/top-4.png";
import top5 from "@public/prime-subscription/top-5.png";
import top6 from "@public/prime-subscription/top-6.png";
import bot1 from "@public/prime-subscription/bot-1.png";
import bot2 from "@public/prime-subscription/bot-2.png";
import bot3 from "@public/prime-subscription/bot-3.png";
import bot4 from "@public/prime-subscription/bot-4.png";
import bot5 from "@public/prime-subscription/bot-5.png";
import bot6 from "@public/prime-subscription/bot-6.png";
import Image, { StaticImageData } from "next/image";

export function PrimeImage() {
  return (
    <Flex
      w={{ base: "100%" }}
      direction={"column"}
      gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}
    >
      <Top />
    </Flex>
  );
}

const Top = () => {
  return (
    <Grid gutter={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}>
      <Grid.Col span={6} className="overflow-hidden flex justify-end">
        <Flex
          w={"fit-content"}
          gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}
        >
          <Item
            img={top1}
            x={"-100vw"}
            w={{ base: 130, md: 180, xl: 236 }}
            className="aspect-[1.76]"
          />
          <Item
            img={top2}
            x={"-100vw"}
            w={{ base: 200, md: 280, xl: 361 }}
            className="aspect-[2.694]"
          />
          <Item
            img={top3}
            x={"-100vw"}
            w={{ base: 130, md: 180, xl: 236 }}
            className="aspect-[1.76]"
          />
        </Flex>
      </Grid.Col>
      {/* <Grid.Col span={6} className="overflow-hidden">
        <Flex
          w={"fit-content"}
          gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}
        >
          <Item
            img={top4}
            x={"100vw"}
            w={{ base: 86, md: 110, xl: 156 }}
            className="aspect-[1.164]"
          />
          <Item
            img={top5}
            x={"100vw"}
            w={{ base: 130, md: 180, xl: 236 }}
            className="aspect-[1.76]"
          />
          <Item
            img={top6}
            x={"100vw"}
            w={{ base: 220, md: 320, xl: 438 }}
            className="aspect-[3.268]"
          />
        </Flex>
      </Grid.Col> */}
    </Grid>
  );
};

const Item = ({
  img,
  x,
  ...rootProps
}: {
  img: StaticImageData;
  x: string | number;
} & BoxProps) => {
  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      // viewport={{ once: true }}

      // initial={{ x: -300, y: 0 }}
      // whileInView={{ x: 0, y: 0 }}
      // viewport={{ amount: 0.25, once: true }}
      // transition={{
      //   ease: "circIn",
      //   duration: 0.9,
      // }}
    >
      <Box pos={"relative"} {...rootProps}>
        <Image src={img} alt="prime image" fill className="object-cover" />
      </Box>
    </motion.div>
  );
};
