import { IUSPManager } from "@/app/api/_entities";
import { Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import iconTick from "@public/gold-standard/tick-icon.svg";

interface Props {
  usps: IUSPManager[];
}

export function GoldStandard(props: Props) {
  const { usps } = props;
  const usp = usps[0];

  return (
    <Box w={"100%"} h={0} pos={"relative"}>
      <Box
        bg={"linear-gradient(180deg, #641CB6 0%, #250648 100%)"}
        w={"100%"}
        className="md:hidden rounded-t-2xl overflow-hidden translate-y-[-100%]"
      >
        <Box
          bg={"linear-gradient(180deg, #641CB6 0%, #250648 100%)"}
          className="container aspect-[1.23] sm:aspect-[1.6]"
        >
          {renderContent(usp)}
        </Box>
      </Box>

      <Box className="container hidden md:block translate-y-[-100%]">
        <Box w={"100%"} className="aspect-[4.2]">
          {renderContent(usp)}
        </Box>
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
      h={"100%"}
      pb={{ base: 0, md: "1%" }}
      align={{ base: "center" }}
      justify={"center"}
      gap={{ base: 16, sm: 24, md: 44, lg: 56, xl: 64, "2xl": 80 }}
      className="rounded-t-[40px]"
    >
      <Flex
        w={{ base: "42.5%", md: "16%" }}
        direction={"column"}
        align={"center"}
      >
        <Box
          pos={"relative"}
          w={{ base: "48%", md: "83%" }}
          className="aspect-square"
        >
          <Image src={usp.img} alt={usp.title} fill className="object-cover" />
        </Box>

        <Flex align={"center"} justify={"center"} gap={{ base: 4, md: 8 }}>
          <Text
            fz={{ base: 20, md: 22, xl: 24, "2xl": 30 }}
            lh={1.4}
            c={"white"}
            fw={{ base: 500, md: 700 }}
            className="whitespace-nowrap"
          >
            Your Business
          </Text>
          <Image
            src={iconTick}
            alt="tick icon"
            className="w-5 md:w-6 lg:w-8 xl:w-9 2xl:w-10 aspect-square"
          />
        </Flex>
      </Flex>

      <Flex
        direction={"column"}
        gap={{ base: 12, xl: 16 }}
        w={{ base: "100%", md: "52.5%" }}
        align={{ base: "center", md: "start" }}
      >
        <Title
          order={2}
          c={"white"}
          fz={{ base: 20, md: 28, lg: 36, xl: 44, "2xl": 48 }}
          lh={1.4}
          fw={{ base: 500, md: 700 }}
        >
          {usp.title}
        </Title>

        <Text
          c={"#FFFFFFB2"}
          fz={{ base: 16, md: 18, lg: 20, xl: 22, "2xl": 24 }}
          lh={1.4}
          fw={500}
          ta={{ base: "center", md: "start" }}
        >
          {usp.subTitle}
        </Text>
      </Flex>
    </Flex>
  );
};
