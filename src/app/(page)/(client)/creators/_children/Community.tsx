"use client";

import React from "react";
import { IUSPManager } from "@/app/api/_entities";

import { Box, Flex, Title } from "@mantine/core";
import SectionTitle from "@/components/Typo/SectionTitle";
import SectionButton from "@/components/buttons/SectionButton";
import Image from "next/image";
import TextAnimation from "@/components/animation/TextAnimation";
import { useAnimate, useInView } from "framer-motion";
import ElementAnimation from "@/components/animation/ElementAnimation";
// import { useBrowserWidth } from "@/hooks";

interface Props {
  usp: IUSPManager;
}

export function Community({ usp }: Props) {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.3 });

  // const { isMb } = useBrowserWidth();

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
                <TextAnimation 
                  text={usp.title} 
                  rootProps={{ gap: { base: 6, md: 8, lg: 10, "2xl": 12 } }}
                  isInView={isInView}
                />
              </SectionTitle>

              <Title
                order={2}
                fz={{ base: 40, sm: 44, md: 48, lg: 52, xl: 58, "2xl": 64 }}
                fw={700}
                lh={1.32}
              >
                <TextAnimation
                  text={usp.subTitle}
                  isInView={isInView}
                  initDelay={600}
                  rootProps={{
                    gap: { base: 8, sm: 9, md: 10, lg: 12, xl: 14, "2xl": 16 },
                    justify: { base: "center", sm: "start" },
                  }}
                  textColor={{ index: 5, color: "#7A29CC" }}
                />
              </Title>
                
              <ElementAnimation isInView={isInView} initDelay={1200} >
                <SectionButton
                  show={usp.isShowButton}
                  title={usp.buttonLabel}
                  href={usp.buttonLink}
                  mt={{ base: 4, md: 8 }}
                />
              </ElementAnimation>
            </Flex>
          </Box>

          <ElementAnimation 
            isInView={isInView} 
            initDelay={1400} 
            className="relative w-full md:w-1/2 aspect-[0.887] order-1 md:order-2 rounded-lg md:rounded-[40px] overflow-hidden"
          >
            <Image
              src={usp.img}
              alt={usp.title}
              fill
              className="object-cover"
            />
          </ElementAnimation>
        </Flex>
      </Box>
    </Box>
  );
}
