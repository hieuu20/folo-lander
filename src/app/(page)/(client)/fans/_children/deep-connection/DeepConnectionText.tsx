"use client";

import { IUSPManager } from "@/app/api/_entities";
import TextAnimation from "@/components/animation/TextAnimation";
import SectionButton from "@/components/buttons/SectionButton";
import SectionSubTitle from "@/components/Typo/SectionSubTitle";
import SectionTitle from "@/components/Typo/SectionTitle";
import { Box, Flex } from "@mantine/core";
import { useAnimate, useInView } from "framer-motion";
import React from "react";

interface Props {
  usp: IUSPManager;
}

export function DeepConnectionText({ usp }: Props) {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.5 });

  return (
    <Box className="container">
      <Flex
        ref={scope}
        w={{ base: "100%", md: "72%" }}
        mx={"auto"}
        direction={"column"}
        align={"center"}
        gap={8}
      >
        <SectionTitle c={"#131416"} ta={"center"}>
          <TextAnimation
            text={usp.title}
            rootProps={{ gap: { base: 6, md: 8, lg: 10, "2xl": 12 }, justify: "center" }}
            isInView={isInView}
          />
        </SectionTitle>

        <SectionSubTitle ta={"center"} c={{ base: "#4D5053", md: "#272932" }}>
          <TextAnimation
            text={usp.subTitle}
            initDelay={800}
            rootProps={{
              justify: "center",
            }}
            isInView={isInView}
          />
        </SectionSubTitle>

        {usp.isShowButton && (
          <SectionButton
            w={{ base: 180, md: 210 }}
            h={{ base: 40 }}
            fz={{ base: 14, md: 16 }}
            px={0}
            mt={{ base: 16 }}
            fw={600}
            className="rounded-lg"
            title={usp.buttonLabel}
            href={usp.buttonLink}
            show={true}
          />
        )}
      </Flex>
    </Box>
  );
}
