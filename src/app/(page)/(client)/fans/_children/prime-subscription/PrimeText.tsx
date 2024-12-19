import { IUSPManager } from "@/app/api/_entities";
import SectionButton from "@/components/buttons/SectionButton";
import SectionSubTitle from "@/components/Typo/SectionSubTitle";
import SectionTitle from "@/components/Typo/SectionTitle";
import { Box, Flex } from "@mantine/core";
import React from "react";

interface Props {
  usp: IUSPManager;
}
export function PrimeText({ usp }: Props) {
  return (
    <Box className="container">
      <Flex
        w={{ base: "100%", md: "50%" }}
        mx={"auto"}
        direction={"column"}
        align={"center"}
        gap={8}
      >
        <SectionTitle c={"#131416"} ta={"center"}>
          {usp.title}
        </SectionTitle>

        <SectionSubTitle c={{ base: "#4D5053", md: "#272932" }} ta={"center"}>
          {usp.subTitle}
        </SectionSubTitle>

        <Flex
          w={{ base: "100%", md: "fit-content" }}
          gap={{ base: 0, sm: 16 }}
          justify={{ base: "space-between", sm: "center" }}
          mt={{ base: 16 }}
        >
          <SectionButton
            show={usp.isShowButton}
            title={usp.buttonLabel}
            href={usp.buttonLink}
            w={{ base: "48.2%", sm: 210 }}
            h={{ base: 40 }}
            fz={{ base: 14, md: 16 }}
            px={0}
            fw={600}
          />

          <SectionButton
            show={true}
            title={"Try on Beta"}
            href={"Try on Beta"}
            w={{ base: "48.2%", sm: 210 }}
            h={{ base: 40 }}
            fz={{ base: 14, sm: 16 }}
            px={0}
            bg={"white"}
            c={"#131416"}
            bd={"1px solid #131416"}
            fw={600}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
