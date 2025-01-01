"use client";

import { IUSPManager } from "@/app/api/_entities";
import ElementAnimation from "@/components/animation/ElementAnimation";
import SectionButton from "@/components/buttons/SectionButton";
import { Box, Flex, Grid, Title } from "@mantine/core";
import { useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import React from "react";

const data = [
  {
    img: "/creator/verify/1.png",
    title: "Verified",
    subTitle:
      "We prioritise a safe, secure, and spam-free platform with no bots or ads. All publishing accounts are verified and identifiable, ensuring peace of mind for you, your collaborators, and your fans. ️✅",
    isShowButton: true,
    buttonLabel: "Get Verified",
    buttonLink: "https://knky.co",
  },
  {
    img: "/creator/verify/2.png",
    title: "ProCreator",
    subTitle:
      "Unlock exclusive tools, priority features, spending metrics, and advanced insights with KNKY ProCreator. Elevate your content, boost your growth, and stay ahead of the curve. 🚀",
    isShowButton: true,
    buttonLabel: "Discover ProCreator",
    buttonLink: "https://knky.co",
  },
] as IUSPManager[];

export default function Verify() {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.4 });

  return (
    <Box py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }} bg={"#F5F5F6"}>
      <Grid ref={scope} gutter={{ base: 16, md: 24 }} className="container">
        {data.map((o, index) => {
          return (
            <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
              <ElementAnimation
                className="w-full"
                initDelay={index * 200}
                isInView={isInView}
              >
                <Item o={o} index={index} />
              </ElementAnimation>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
}

const Item = ({ o, index }: { o: IUSPManager; index: number }) => {
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      // gap={{ base: 12, md: 16, lg: 24, xl: 32, "2xl": 40 }}
      bg={"white"}
      className="rounded-2xl md:rounded-[40px]"
    >
      <Box pos={"relative"} w={"100%"} className="aspect-[2]">
        <Image src={o.img} alt={o.title} fill />
      </Box>
      <Flex
        direction={"column"}
        py={{ base: 12, md: 16, lg: 24, xl: 32, "2xl": 40 }}
        px={{ base: 12, md: 16, lg: 20, xl: 22, "2xl": 24 }}
      >
        <Title
          order={3}
          fz={{ base: 20, sm: 28, lg: 34, xl: 40, "2xl": 48 }}
          c={"#131416"}
          fw={700}
          lh={1.4}
          mb={8}
        >
          {o.title}
        </Title>

        <Title
          order={5}
          fz={{ base: 14, sm: 16, lg: 18, xl: 20, "2xl": 24 }}
          c={"#272932"}
          fw={500}
          lh={1.4}
          mb={{ base: 16, md: 18 }}
          mih={{ base: 0, lg: 112, "2xl": 134 }}
        >
          {o.subTitle}
        </Title>

        <SectionButton
          show={o.isShowButton}
          title={o.buttonLabel}
          href={o.buttonLink}
          bg={index === 1 ? "#27B1FF" : "#AC1991"}
          fz={{ base: 15 }}
          fw={600}
          w={210}
        />
      </Flex>
    </Flex>
  );
};
