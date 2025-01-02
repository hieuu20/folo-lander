import { IUSPManager } from "@/app/api/_entities";
import { Flex } from "@mantine/core";
import React from "react";
import { DeepConnectionImage, DeepConnectionText } from "./deep-connection";

interface Props {
  usp: IUSPManager;
}

export function DeepConnection({ usp }: Props) {
  return (
    <Flex
      id="Connections"
      direction={"column"}
      w={'100%'}
      py={{ base: 40, md: 48, lg: 60, xl: 72, '2xl': 80 }}
      gap={{ base: 24, md: 36, xl: 40 }}
      className="scroll-mt-[64px] md:scroll-mt-[72px]"
    >
      <DeepConnectionText usp={usp} />
      <DeepConnectionImage />
    </Flex>
  );
}

