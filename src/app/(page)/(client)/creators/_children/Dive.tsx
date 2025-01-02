"use client";

import { Box, Flex, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import diveTitle from "@public/creator/dive/title.png";
import vectorIcon from "@public/creator/dive/vector.svg";
import ElementAnimation from "@/components/animation/ElementAnimation";
import { useAnimate, useInView } from "framer-motion";
import TextAnimation from "@/components/animation/TextAnimation";

export function Dive() {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.5 });

  return (
    <Box w={"100%"} bg={"#F5F5F6"}>
      <Flex
        ref={scope}
        direction={"column"}
        pt={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
        gap={{ base: 24, sm: 32, md: 40, lg: 46, xl: 52, "2xl": 60 }}
        className="container"
        align={"center"}
      >
        <ElementAnimation
          isInView={isInView}
          className="relative w-[86%] sm:w-[54%] md:w-[48.8%] aspect-[1.81]"
        >
          <Image
            src={diveTitle}
            alt="dive title"
            fill
            className="object-cover"
          />
        </ElementAnimation>
        <Flex
          direction={"column"}
          gap={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
        >
          <Title
            pos={"relative"}
            order={4}
            fw={600}
            fz={{ base: 30, sm: 40, md: 50, lg: 58, xl: 66, "2xl": 78 }}
            c={"#272932"}
            lh={1.3}
            px={{ base: 0, sm: 40, md: 50, lg: 60, xl: 70, "2xl": 80 }}
            ta={"center"}
          >
            {/* Dive into the world’s most innovative adult content platform, where
            creativity meets{" "}
            <span className="text-[#29A81E] relative inline-block">
              profitability
            </span> */}
            <TextAnimation
              isInView={isInView}
              text="Dive into the world’s most innovative adult content platform, where creativity meets profitability."
              rootProps={{
                justify: "center",
                gap: { base: 7, sm: 8, md: 9, lg: 10, xl: 12, "2xl": 14 },
              }}
              initDelay={400}
              textColor={{ index: 12, color: "#29A81E" }}
              textIcon={{
                index: 12,
                icon: (
                  <ElementAnimation
                    isInView={isInView}
                    initDelay={1400}
                    className="absolute inline bottom-[-30%] right-[4%] w-full scale-[1.4] aspect-[12.54]"
                  >
                    <Image
                      src={vectorIcon}
                      alt="vector icon"
                      fill
                      className=""
                    />
                  </ElementAnimation>
                ),
              }}
            />{" "}
          </Title>

          <Title
            pos={"relative"}
            order={5}
            fw={600}
            fz={{ base: 14, sm: 16, md: 20, lg: 22, xl: 26, "2xl": 32 }}
            c={"#272932"}
            lh={1.4}
            px={{ base: 0, sm: 40, md: 50, lg: 60, xl: 70, "2xl": 80 }}
          >
            <TextAnimation
              isInView={isInView}
              text="Transparent fixed fees at 5%, with 95% creator pay-outs, less 15% processing fees*."
              rootProps={{
                justify: "center",
              }}
              initDelay={1700}
            />
          </Title>
        </Flex>
      </Flex>
    </Box>
  );
}
