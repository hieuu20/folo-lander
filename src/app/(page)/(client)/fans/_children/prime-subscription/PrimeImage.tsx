"use client";

import { Box, BoxProps, Flex, Grid } from "@mantine/core";
import { motion, useAnimate, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
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
import Image, { StaticImageData } from "next/image";

export function PrimeImage() {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.4 });

  return (
    <Flex
      ref={scope}
      w={{ base: "100%" }}
      direction={"column"}
      gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}
    >
      <Top isInView={isInView} />
      <Bottom isInView={isInView} />
    </Flex>
  );
}

const Top = ({ isInView }: { isInView: boolean }) => {
  return (
    <Grid gutter={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}>
      <Grid.Col span={6} className="overflow-hidden flex justify-end">
        <Flex
          w={"fit-content"}
          gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}
        >
          <Item
            img={top1}
            x={"-50vw"}
            w={{ base: 130, md: 180, xl: 236 }}
            className="aspect-[1.76]"
            duration={1.6}
            delay={1}
            isInView={isInView}
          />
          <Item
            img={top2}
            x={"-50vw"}
            w={{ base: 200, md: 280, xl: 361 }}
            className="aspect-[2.694]"
            duration={1.6}
            delay={0.5}
            isInView={isInView}
          />
          <Item
            img={top3}
            x={"-50vw"}
            w={{ base: 130, md: 180, xl: 236 }}
            className="aspect-[1.76]"
            duration={1.6}
            isInView={isInView}
          />
        </Flex>
      </Grid.Col>
      <Grid.Col span={6} className="overflow-hidden">
        <Flex
          w={"fit-content"}
          gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}
        >
          <Item
            img={top4}
            x={"50vw"}
            w={{ base: 86, md: 110, xl: 156 }}
            className="aspect-[1.164]"
            duration={1.6}
            isInView={isInView}
          />
          <Item
            img={top5}
            x={"50vw"}
            w={{ base: 130, md: 180, xl: 236 }}
            className="aspect-[1.76]"
            duration={1.6}
            delay={0.5}
            isInView={isInView}
          />
          <Item
            img={top6}
            x={"50vw"}
            w={{ base: 220, md: 320, xl: 438 }}
            className="aspect-[3.268]"
            duration={1.6}
            delay={1}
            isInView={isInView}
          />
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

const Bottom = ({ isInView }: { isInView: boolean }) => {
  return (
    <Flex gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}>
      <Flex
        gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}
        flex={1}
        justify={"end"}
        className="overflow-hidden"
      >
        <Item
          img={bot1}
          x={"-50vw"}
          w={{ base: 284, md: 360, xl: 515 }}
          className="aspect-[1.463]"
          duration={1.5}
          delay={0.4}
          isInView={isInView}
        />
        <Item
          img={bot2}
          x={"-50vw"}
          w={{ base: 130, md: 180, xl: 236 }}
          className="aspect-[0.67]"
          duration={1.5}
          isInView={isInView}
        />
      </Flex>
      <Box
        pos={"relative"}
        w={{ base: 324, md: 420, xl: 582 }}
        className="aspect-[1.653]"
      >
        <Image src={bot3} alt="prime image" fill className="object-cover" />
      </Box>
      <Flex
        gap={{ base: 8, sm: 10, lg: 12, xl: 14, "2xl": 16 }}
        flex={1}
        className="overflow-hidden"
      >
        <Item
          img={bot4}
          x={"50vw"}
          w={{ base: 130, md: 180, xl: 236 }}
          className="aspect-[0.67]"
          duration={1.5}
          isInView={isInView}
        />
        <Item
          img={bot5}
          x={"50vw"}
          w={{ base: 284, md: 360, xl: 515 }}
          className="aspect-[1.463]"
          duration={1.5}
          delay={0.4}
          isInView={isInView}
        />
      </Flex>
    </Flex>
  );
};

const Item = ({
  img,
  x,
  duration = 1.8,
  delay = 0,
  isInView,
  ...rootProps
}: {
  img: StaticImageData;
  x: string | number;
  duration?: number;
  isInView: boolean;
  delay?: number;
} & BoxProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div>
      <motion.div
        initial={{ x: x }}
        animate={hasAnimated ? { x: 0 } : { x: x }}
        transition={{
          delay: delay,
          ease: "easeInOut",
          duration: duration,
        }}
      >
        <Box pos={"relative"} {...rootProps}>
          <Image src={img} alt="prime image" fill className="object-cover" />
        </Box>
      </motion.div>
    </div>
  );
};
