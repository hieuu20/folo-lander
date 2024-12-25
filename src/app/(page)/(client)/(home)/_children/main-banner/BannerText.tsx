import SectionButton from "@/components/buttons/SectionButton";
import { Flex, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import creatorIcon from "@public/icons/creator-icon.svg";
import fanIcon from "@public/icons/fan-icon.svg";

export default function BannerText() {
  return (
    <Flex
      direction={"column"}
      w={{ base: "100%", md: "48%" }}
      h={{ base: "56%", md: "100%" }}
      align={{ base: "start" }}
      justify={"center"}
      pos={"relative"}
    >
      <Title
        size={"h1"}
        fz={{ base: 40, sm: 44, md: 48, lg: 64, xl: 72, "2xl": 80 }}
        lh={1.4}
        fw={700}
        c={"white"}
        w={"100%"}
        mb={{ base: 8, md: 12, "2xl": 16 }}
        ta={{ base: "left", sm: "center", md: "start" }}
      >
        Let’s get KNKY®
      </Title>

      <Title
        order={2}
        fz={{ base: 16, sm: 18, md: 20, lg: 24, xl: 28, "2xl": 32 }}
        lh={1.4}
        c={"white"}
        fw={500}
        mb={{ base: 16, sm: 18, md: 20, lg: 24, xl: 28, "2xl": 32 }}
        ta={{ base: "left", sm: "center", md: "start" }}
      >
        A private, secure, and feature-rich social adult platform designed to
        Create, Consume, and Discover people, content, and experiences. 😘
      </Title>

      <Flex
        w={{ base: "100%", md: "fit-content" }}
        gap={{ base: 0, sm: 24 }}
        justify={{ base: "space-between", sm: "center", md: "start" }}
      >
        <SectionButton
          show={true}
          title={"For Creators"}
          href={"/creators"}
          w={{ base: "48.2%", sm: 210, lg: 240, xl: 250, "2xl": 260 }}
          h={{ base: 40, sm: 42, md: 44, lg: 48, "2xl": 50 }}
          fz={{ base: 16, md: 20, lg: 22 }}
          px={0}
          bg={"#27B1FF"}
          fw={600}
          icon={
            <Image
              src={creatorIcon}
              alt="creator icon"
              className="w-6 md:w-8 aspect-square mr-3"
            />
          }
        />

        <SectionButton
          show={true}
          title={"For Fans"}
          href={"/fans"}
          w={{ base: "48.2%", sm: 210, lg: 240, xl: 250, "2xl": 260 }}
          h={{ base: 40, sm: 42, md: 44, lg: 48, "2xl": 50 }}
          fz={{ base: 16, md: 20, lg: 22 }}
          fw={600}
          px={0}
          bg={"#AC1991"}
          icon={
            <Image
              src={fanIcon}
              alt="creator icon"
              className="w-6 md:w-8 aspect-square mr-3"
            />
          }
        />
      </Flex>
    </Flex>
  );
}
