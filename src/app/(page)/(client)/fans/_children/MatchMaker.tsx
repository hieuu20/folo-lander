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
      "With Match, discover creators who match your mood, connect, chat, and bond with like-minded people. Whether it's a soulmate, KNKY companion, or just some fun, it’s all here! 😈",
    img: "/match-maker/1/img.png",
    bg: "#490089",
    video: "/match-maker/1/video.mp4",
  },
  {
    titleImg: imgTitle2,
    subTitle:
      "Enjoy endless fun with features like Spin the Wheel, Mystery Boxes, and KNKY Roulette, making it exciting for both creators and fans to discover content. 🎮",
    img: "/match-maker/2/img.png",
    bg: "#3D0171",
    video: "/match-maker/2/video.mp4",
  },
  {
    titleImg: imgTitle3,
    subTitle:
      "KNKY takes interactivity to the next level with ratings, roulette videos, live calls, custom requests, and the chance to connect with creators who share your passions. ❤️",
    img: "/match-maker/3/img1.png",
    bg: "#280349",
    video: "/match-maker/3/video.mp4",
  },
  {
    titleImg: imgTitle4,
    subTitle:
      "Shop till you drop on KNKY, where creators offer everything from bespoke items to auctions. With well-known stores and personalized products, there's never a dull moment! 🛍",
    img: "/match-maker/4/img.png",
    bg: "#1A022F",
    video: "/match-maker/4/video.mp4",
  },
];

export const MatchMaker = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".match-maker-item");

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const topThreshold = viewportHeight * 1.6;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= topThreshold) {
          ["sticky", "top-[12%]", "md:top-[16%]"].forEach((o) => {
            section.classList.add(o);
          });
        } else {
          ["sticky", "top-[12%]", "md:top-[16%]"].forEach((o) => {
            section.classList.remove(o);
          });
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
      id="Features"
      w={"100%"}
      px={{ base: 0, sm: 16, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      // py={{ base: 0, sm: 16, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      direction={"column"}
      gap={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      className="scroll-mt-[72px]"
    >
      {data.map((o, index) => {
        return (
          <Flex
            key={index}
            pos={"relative"}
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
              zIndex: index,
            }}
            className={twMerge(
              "match-maker-item rounded-3xl sm:rounded-[40px]"
            )}
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
            {/* <Box
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
            </Box> */}
            <video
              preload="auto"
              playsInline
              autoPlay
              loop
              muted
              className="w-full sm:w-[32%] aspect-[0.92] rounded-3xl md:rounded-[40px]"
            >
              <source src={o.video} type="video/mp4" />
            </video> 
          </Flex>
        );
      })}
    </Flex>
  );
};
