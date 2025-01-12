import { Flex } from "@mantine/core";
import React from "react";
import { PrimeImage, PrimeText } from "./prime-subscription";
import { IUSPManager } from "@/app/api/_entities";

interface Props {
  usps: IUSPManager[];
}

export function PrimeSubscription({ usps }: Props) {
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
        usp={usps[0]}
      />
    </Flex>
  );
}
