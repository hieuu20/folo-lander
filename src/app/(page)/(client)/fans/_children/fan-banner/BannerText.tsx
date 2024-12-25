import { IUSPManager } from "@/app/api/_entities";
import SectionButton from "@/components/buttons/SectionButton";
import TextAnimation from "@/components/animation/TextAnimation";
import { Flex, Title } from "@mantine/core";
import React from "react";
import ElementAnimation from "@/components/animation/ElementAnimation";

interface Props {
  usp: IUSPManager;
}

export default function BannerText({ usp }: Props) {
  return (
    <Flex
      direction={"column"}
      w={{ base: "100%", md: "50%" }}
      align={{ base: "center", md: "start" }}
      className="order-2 md:order-1"
      pt={{ base: 0, md: "5%" }}
    >
      <Title
        order={1}
        fz={{ base: 30, md: 40, lg: 56, xl: 72, "2xl": 80 }}
        lh={1.5}
        fw={700}
        c={"white"}
        mb={{ base: 8 }}
        ta={{ base: "center", lg: "left" }}
      >
        {/* {usp.title} */}
        <TextAnimation
          text={usp.title}
          rootProps={{
            gap: { base: 8, md: 10, lg: 12, xl: 14, "2xl": 16 },
            justify: { base: "center", md: "start" },
          }}
        />
      </Title>
      <Title
        order={4}
        fz={{ base: 16, md: 20, lg: 24, xl: 28, "2xl": 32 }}
        lh={1.4}
        c={{ base: "#FFFFFFB2", md: "white" }}
        fw={500}
        mb={{ base: 24, md: 28, lg: 32, xl: 36, "2xl": 40 }}
        ta={{ base: "center", lg: "left" }}
      >
        <TextAnimation
          text={usp.subTitle}
          initDelay={usp.title.length * 28}
          rootProps={{
            justify: { base: "center", md: "start" },
          }}
        />
      </Title>

      <Flex
        w={{ base: "100%", md: "fit-content" }}
        gap={{ base: 0, sm: 16 }}
        justify={{ base: "space-between", sm: "center" }}
      >
        <ElementAnimation initDelay={1200} className="w-[48.2%] sm:w-[210px]">
          <SectionButton
            show={usp.isShowButton}
            title={usp.buttonLabel}
            href={usp.buttonLink}
            w={{ base: "100%" }}
            h={{ base: 40 }}
            fz={{ base: 14, md: 16 }}
            px={0}
            fw={600}
          />
        </ElementAnimation>

        <ElementAnimation initDelay={1500} className="w-[48.2%] sm:w-[210px]">
          <SectionButton
            show={true}
            title={"I’m a Creator"}
            href={"/creators"}
            w={{ base: "100%" }}
            h={{ base: 40 }}
            fz={{ base: 14, sm: 16 }}
            px={0}
            bg={"transparent"}
            bd={"1px solid #fff"}
            fw={600}
          />
        </ElementAnimation>
      </Flex>
    </Flex>
  );
}
