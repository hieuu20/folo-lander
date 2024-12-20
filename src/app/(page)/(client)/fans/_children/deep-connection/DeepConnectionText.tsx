import { IUSPManager } from "@/app/api/_entities";
import TextAnimation from "@/components/animation/TextAnimation";
import SectionButton from "@/components/buttons/SectionButton";
import SectionSubTitle from "@/components/Typo/SectionSubTitle";
import SectionTitle from "@/components/Typo/SectionTitle";
import { Flex } from "@mantine/core";
import React from "react";

interface Props {
  usp: IUSPManager;
}

export function DeepConnectionText({ usp }: Props) {
  return (
    <Flex
      w={{ base: "100%", md: "72%" }}
      mx={"auto"}
      direction={"column"}
      align={"center"}
      gap={8}
    >
      <SectionTitle c={"#131416"} ta={"center"}>
        {/* {usp.title} */}
        <TextAnimation text={usp.title} rootProps={{ gap: {base: 8, md: 10, xl: 12} }} />
      </SectionTitle>

      <SectionSubTitle ta={"center"} c={{ base: "#4D5053", md: "#272932" }}>
        {/* {usp.subTitle} */}
        <TextAnimation 
          text={usp.subTitle} 
          initDelay={800} 
          rootProps={{
            justify: 'center'
          }}
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
  );
}
