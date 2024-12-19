import { IUSPManager } from "@/app/api/_entities";
import SectionButton from "@/components/buttons/SectionButton";
import { Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface Props {
  usps: IUSPManager[];
}

export function SubBanner(props: Props) {
  const { usps } = props;
  const usp = usps[0];

  return (
    <Box w={"100%"} h={0} pos={"relative"}>
      <Box
        bg={"linear-gradient(180deg, #641CB6 0%, #250648 100%)"}
        w={"100%"}
        className="md:hidden rounded-t-2xl overflow-hidden translate-y-[-100%]"
      >
        <Box className="container">{renderContent(usp)}</Box>
      </Box>

      <Box className="container hidden md:block translate-y-[-100%]">
        <Box w={"100%"}>{renderContent(usp)}</Box>
      </Box>
    </Box>
  );
}

const renderContent = (usp: IUSPManager) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={"linear-gradient(180deg, #641CB6 0%, #250648 100%)"}
      w={"100%"}
      h={"fit-content"}
      align={{ base: "center" }}
      justify={"center"}
      gap={{ base: 16, sm: 24, md: 44, lg: 56, xl: 64, "2xl": 80 }}
      className="rounded-t-[40px]"
      px={{ base: 0, md: "5.2%" }}
      pb={{ base: 40, md: "5.2%" }}
      // pt={{ base: 40, md: 44, lg: 48, "2xl": 56 }}
      pt={{ base: 40, md: "3%" }}
    >
      <Box
        pos={"relative"}
        w={{ base: "31.4%", md: "18%" }}
        className="aspect-square"
      >
        <Image src={usp.img} alt={usp.title} fill className="object-cover" />
      </Box>

      <Flex
        direction={"column"}
        gap={{ base: 8, md: 12, "2xl": 16 }}
        flex={1}
        align={{ base: "center", md: "start" }}
      >
        <Title
          order={2}
          c={"white"}
          fz={{ base: 20, md: 24, lg: 32, xl: 36, "2xl": 40 }}
          lh={1.4}
          fw={{ base: 500, md: 600 }}
        >
          {usp.title}
        </Title>

        <Text
          c={"#FFFFFFB2"}
          fz={{ base: 16, md: 18, xl: 20, "2xl": 24 }}
          lh={1.4}
          fw={500}
          ta={{ base: "center", md: "start" }}
        >
          {usp.subTitle}
        </Text>

        {usp.isShowButton && (
          <SectionButton
            w={{ base: 180, md: 210 }}
            h={{ base: 40 }}
            fz={{ base: 14, md: 16 }}
            px={0}
            mt={{ base: 8 }}
            fw={600}
            className="rounded-lg"
            title={usp.buttonLabel}
            href={usp.buttonLink}
            show={true}
          />
        )}
      </Flex>
    </Flex>
  );
};
