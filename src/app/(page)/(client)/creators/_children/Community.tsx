"use client";

import React from "react";
import { IUSPManager } from "@/app/api/_entities";

import { Box, Flex, Text, Title } from "@mantine/core";
import SectionTitle from "@/components/Typo/SectionTitle";
import SectionSubTitle from "@/components/Typo/SectionSubTitle";
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

              <SectionSubTitle
                mb={8}
                ta={{ base: "center", md: "left" }}
                className="whitespace-pre-line"
              >
                {usp.subTitle}
              </SectionSubTitle>

              <Title
                order={2}
                fz={{ base: 40, sm: 48, md: 56, lg: 64, xl: 70, "2xl": 82 }}
                fw={700}
                lh={1.32}
                ta={"center"}
              >
                <TextAnimation
                  text="Join the KNKY community and"
                  isInView={isInView}
                  initDelay={1400}
                  rootProps={{
                    gap: { base: 8, sm: 9, md: 10, lg: 12, xl: 14, "2xl": 16 },
                    justify: "center",
                  }}
                />{" "}
                <Text
                  span={true}
                  fz={{ base: 40, sm: 48, md: 56, lg: 64, xl: 70, "2xl": 82 }}
                  fw={700}
                  lh={1.375}
                  ta={"center"}
                  c={"#7A29CC"}
                >
                  <TextAnimation
                    text="reach."
                    isInView={isInView}
                    initDelay={1900}
                    rootProps={{
                      gap: {
                        base: 8,
                        sm: 9,
                        md: 10,
                        lg: 12,
                        xl: 14,
                        "2xl": 16,
                      },
                      justify: "center",
                    }}
                  />
                </Text>{" "}
                <TextAnimation
                  text="new fans effortlessly."
                  isInView={isInView}
                  initDelay={2300}
                  rootProps={{
                    gap: { base: 8, sm: 9, md: 10, lg: 12, xl: 14, "2xl": 16 },
                    justify: "center",
                  }}
                />
              </Title>

              <SectionButton
                show={usp.isShowButton}
                title={usp.buttonLabel}
                href={usp.buttonLink}
              />
            </Flex>
          </Box>

          <Flex
            pos={"relative"}
            w={{ base: "100%", md: "50%" }}
            className="aspect-[1.165] order-1 md:order-2 rounded-lg md:rounded-[40px] overflow-hidden"
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
