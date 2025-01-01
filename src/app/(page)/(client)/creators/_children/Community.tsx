"use client";

import React from "react";
import { IUSPManager } from "@/app/api/_entities";

import { Box, Flex, Title } from "@mantine/core";
import SectionTitle from "@/components/Typo/SectionTitle";
import SectionButton from "@/components/buttons/SectionButton";
import Image from "next/image";
import TextAnimation from "@/components/animation/TextAnimation";
import { useAnimate, useInView } from "framer-motion";

interface Props {
  usp: IUSPManager;
}

export function Community({ usp }: Props) {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.3 });

  return (
    <Box ref={scope} w={"100%"} className="scroll-mt-16 md:scroll-mt-[72px] ">
      <Box className="container">
        <Flex
          direction={{ base: "column", md: "row" }}
          w={"100%"}
          justify={"center"}
          align={"center"}
          gap={{ base: 24, sm: 40, md: 0 }}
          py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
        >
          <Box w={{ base: "100%", md: "50%" }} className="order-2 md:order-1">
            <Flex
              direction={"column"}
              gap={{ base: 12, lg: 16 }}
              w={{ base: "100%", md: "84%" }}
              align={{ base: "center", md: "start" }}
            >
              <SectionTitle ta={{ base: "center", md: "left" }}>
                {usp.title}
              </SectionTitle>

              <Title
                order={2}
                fz={{ base: 40, sm: 44, md: 48, lg: 52, xl: 58, "2xl": 64 }}
                fw={700}
                lh={1.32}
              >
                <TextAnimation
                  text="Join the KNKY community and reach new fans effortlessly."
                  isInView={isInView}
                  initDelay={1400}
                  rootProps={{
                    gap: { base: 8, sm: 9, md: 10, lg: 12, xl: 14, "2xl": 16 },
                    justify: { base: "center", sm: "start" },
                  }}
                  textColor={{ index: 5, color: "#7A29CC" }}
                />
              </Title>

              <SectionButton
                show={usp.isShowButton}
                title={usp.buttonLabel}
                href={usp.buttonLink}
                mt={{ base: 4, md: 8 }}
              />
            </Flex>
          </Box>

          <Flex
            pos={"relative"}
            w={{ base: "100%", md: "50%" }}
            className="aspect-[0.887] order-1 md:order-2 rounded-lg md:rounded-[40px] overflow-hidden"
          >
            <Image
              src={usp.img}
              alt={usp.title}
              fill
              className="object-cover"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
