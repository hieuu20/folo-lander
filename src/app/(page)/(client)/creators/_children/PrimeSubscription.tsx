import { Flex } from "@mantine/core";
import React from "react";
import { PrimeImage, PrimeText } from "./prime-subscription";
import { IUSPManager } from "@/app/api/_entities";

export function PrimeSubscription() {
  return (
    <Flex
      id="Prime"
      direction={"column"}
      gap={{ base: 24, md: 36, xl: 40 }}
      w={"100%"}
      bg={"#F5F5F6"}
      py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      className="scroll-mt-[72px]"
    >
      <PrimeImage />
      <PrimeText
        usp={
          {
            title: "Creator Prime Subscription",
            subTitle:
              "Unlock the fan experience with KNKY Prime for just $14.99! Discover other creators, explore new trends, find inspiration, or simply enjoy co-creators' content in stunning 4K resolution for endless excitement.",
            isShowButton: true,
            buttonLabel: "Buy Creator Prime",
            buttonLink: "https://knky.co/fresh/",
          } as IUSPManager
        }
      />
    </Flex>
  );
}
