"use client";

import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import imgTitle1 from "@public/match-maker/1/title.png";
import imgTitle2 from "@public/match-maker/2/title.png";
import imgTitle3 from "@public/match-maker/3/title.png";
import imgTitle4 from "@public/match-maker/4/title.png";
import { Box, Flex, Text } from "@mantine/core";
import { twMerge } from "tailwind-merge";

const data = [
  {
    titleImg: imgTitle1,
    subTitle:
      "KNKY isn’t just for creators—it’s for you too! With MatchMaker, you can match, chat, and connect with like-minded people. Find your soulmate, a KNKY companion, or just some fun!",
    img: "/match-maker/1/img.png",
    bg: "#490089",
  },
  {
    titleImg: imgTitle2,
    subTitle:
      "KNKY isn’t just for creators—it’s for you too! With MatchMaker, you can match, chat, and connect with like-minded people. Find your soulmate, a KNKY companion, or just some fun!",
    img: "/match-maker/2/img.png",
    bg: "#3D0171",
  },
  {
    titleImg: imgTitle3,
    subTitle:
      "KNKY isn’t just for creators—it’s for you too! With MatchMaker, you can match, chat, and connect with like-minded people. Find your soulmate, a KNKY companion, or just some fun!",
    img: "/match-maker/3/img.png",
    bg: "#280349",
  },
  {
    titleImg: imgTitle4,
    subTitle:
      "KNKY isn’t just for creators—it’s for you too! With MatchMaker, you can match, chat, and connect with like-minded people. Find your soulmate, a KNKY companion, or just some fun!",
    img: "/match-maker/3/img.png",
    bg: "#1A022F",
  },
];

export const Test: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const topThreshold = viewportHeight * 1.6;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= topThreshold) {
          section.classList.add("sticky");
        } else {
          section.classList.remove("sticky");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      id="MatchMaker"
      w={"100%"}
      px={{ base: 0, sm: 16, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      py={{ base: 0, sm: 16, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      direction={"column"}
      gap={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      className="scroll-mt-[72px]"
    >
      {data.map((o, index) => {
        return (
          <Flex
            key={index}
            bg={o.bg}
            w={"100%"}
            pr={{ base: 16, md: 20, lg: 22, xl: 28, "2xl": 32 }}
            pl={{ base: 16, md: 32, lg: 40, xl: 52, "2xl": 64 }}
            py={{ base: 40, "2xl": 48 }}
            direction={{ base: "column", sm: "row" }}
            align={{ base: "center" }}
            justify={{ base: "space-between" }}
            gap={{ base: 24, sm: 0 }}
            style={{
              zIndex: index
            }}
            className={twMerge('section sm:rounded-[40px]')}
          >
            <Flex
              direction={"column"}
              w={{ base: "100%", sm: "60%", xl: "54%" }}
              gap={{ base: 8, sm: 16, md: 20, lg: 26, xl: 34, "2xl": 40 }}
              align={{ base: "center", sm: "start" }}
            >
              <Box
                h={{ base: 76, md: 88, lg: 100, xl: 112, "2xl": 150 }}
                w={"fit-content"}
              >
                <Image
                  src={o.titleImg}
                  alt={o.subTitle}
                  className="h-full w-auto"
                />
              </Box>
              <Text
                c={"white"}
                fw={{ base: 500, md: 600 }}
                fz={{ base: 14, sm: 16, md: 18, lg: 20, xl: 24, "2xl": 30 }}
                ta={{ base: "center", sm: "left" }}
              >
                {o.subTitle}
              </Text>
            </Flex>
            <Box
              pos={"relative"}
              w={{ base: "100%", sm: "36%" }}
              className="aspect-[0.92]"
            >
              <Image
                src={o.img}
                alt="img match maker"
                fill
                className="object-cover"
              />
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
