import { IUSPManager } from "@/app/api/_entities";
import SectionButton from "@/components/buttons/SectionButton";
import { Flex, Title } from "@mantine/core";
import React from "react";

interface Props {
  usp: IUSPManager;
}

export default function BannerText({ usp }: Props) {
  return (
    <Flex
      direction={"column"}
      top={"50%"}
      left={"50%"}
      w={{ base: "100%" }}
      align={"center"}
    >
      <Title
        size={"h1"}
        fz={{ base: 30, md: 40, lg: 56, xl: 72, "2xl": 80 }}
        lh={1.4}
        fw={700}
        c={"white"}
        mb={{ base: 12, lg: 16 }}
        ta={{ base: "center" }}
      >
        {usp.title}
      </Title>

      <Title
        size={"h2"}
        fz={{ base: 16, md: 20, lg: 24, xl: 28, "2xl": 32 }}
        lh={1.4}
        c={"white"}
        fw={500}
        mb={{ base: 16, lg: 32 }}
        ta={{ base: "center" }}
      >
        {usp.subTitle}
      </Title>

      <Flex
        w={{ base: "100%", md: "fit-content" }}
        gap={{ base: 0, sm: 16 }}
        justify={{ base: "space-between", sm: "center" }}
      >
        <SectionButton
          show={usp.isShowButton}
          title={usp.buttonLabel}
          href={usp.buttonLink}
          w={{ base: "48.2%", sm: 210 }}
          h={{ base: 40 }}
          fz={{ base: 14, md: 16 }}
          px={0}
          className="font-medium"
        />

        <SectionButton
          show={true}
          title={"I’m a Creator"}
          href={"https://lander.knky.co/creators"}
          w={{ base: "48.2%", sm: 210 }}
          h={{ base: 40 }}
          fz={{ base: 14, sm: 16 }}
          px={0}
          bg={"transparent"}
          bd={"1px solid #fff"}
          className="font-medium"
        />
      </Flex>
    </Flex>
  );
}
