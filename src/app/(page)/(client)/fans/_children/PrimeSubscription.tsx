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
    >
      <PrimeImage />

      <PrimeText
        usp={
          {
            title: "Prime Subscription",
            subTitle:
              "Unlock KNKY Prime for just $14.99! Get access to every Creator and dive into a world of endless excitement. Whether you're new or experienced, your adventure starts here!",
            isShowButton: true,
            buttonLabel: "Discover Prime",
            buttonLink: "https://beta.knky.co/",
          } as IUSPManager
        }
      />
    </Flex>
  );
}
