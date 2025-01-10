"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Box, Flex, Text } from "@mantine/core";
import { twMerge } from "tailwind-merge";

export interface MatchMakerItem {
  titleImg: StaticImageData;
  subTitle: string;
  img: string;
  bg: string;
  video?: string;
  videoMp4?: string;
}

export const MatchMakerComponent = ({ data }: { data: MatchMakerItem[] }) => {
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
            {o.video ? (
              <Box
                w={{ base: "100%", sm: "32%" }}
                className="aspect-[0.92]"
              >
                {/* <VideoPlayer src={o.video} /> */}
                <video
                  preload="auto"
                  playsInline
                  autoPlay
                  loop
                  muted
                  className="w-full h-full rounded-3xl md:rounded-[40px]"
                >
                  <source src={o.video} type="video/webm" />
                  <source src={o.videoMp4} type="video/mp4" />
                </video>
              </Box>
            ) : (
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
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};
