"use client";

import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import imgTitle1 from "@public/creator/match-maker/1/title.png";
import imgTitle2 from "@public/creator/match-maker/2/title.png";
import imgTitle3 from "@public/creator/match-maker/3/title.png";
import { Box, Flex, Text } from "@mantine/core";
import { twMerge } from "tailwind-merge";

const data = [
  {
    titleImg: imgTitle1,
    subTitle:
      "It's like Tinder for creators! Fans can find and match with you based on kinks and interests, whether it's the GF experience or a niche. Match makes connecting fun, familiar, and easy! 😈",
    img: "/match-maker/1/img.png",
    bg: "#490089",
  },
  {
    titleImg: imgTitle2,
    subTitle:
      "Let fans enjoy the fun, whether you're online or offline, with our gamification features. It makes purchasing content and services easy and engaging 24/7, boosting your AVO. 🎮",
    img: "/creator/match-maker/2/img.png",
    bg: "#3D0171",
  },
  {
    titleImg: imgTitle3,
    subTitle:
      "KNKY is built on two core values: quality connections and revenue. We offer seven ways to be discovered and matched, along with over twenty revenue streams, driving sales and earnings like no other platform. 🤑",
    img: "/match-maker/2/img.png",
    bg: "#280349",
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
          ['sticky', 'top-[12%]', 'md:top-[16%]'].forEach((o) => {
            section.classList.add(o);
          });

        } else {
          ['sticky', 'top-[12%]', 'md:top-[16%]'].forEach((o) => {
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
      id="MatchMaker"
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
            pos={'relative'}
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
            className={twMerge('match-maker-item rounded-3xl sm:rounded-[40px]')}
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
            {/* <video 
              controls 
              preload="auto"
              playsInline
              autoPlay
              muted
              className="w-full sm:w-[30%] aspect-[0.92]"
            >
              <source src="https://instagram.fdad1-4.fna.fbcdn.net/o1/v/t16/f2/m82/AQNbyk7J1Mgq5UNZEvL3ByKgcqdNdWFAYNdtPu_wT_lGUV1ZYKeD2HnyJUP-wLHUsUzY6R-k43MInUIx4UjG-EIU2oBLIfhELmImZjM.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=instagram.fdad1-4.fna.fbcdn.net&_nc_cat=103&_nc_oc=AdhB_46kMU9yPBiuUbCjFc_89mQnNzOJV142If0TRi4yYfn6oCWnmfYhtWOGIzu9WS8&vs=701053705425309_3273571108&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8zMDQ1NTBGRUI2MzkzMURFMEMwNDI0NkI1NDk4RDZBMF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJZ2lieGh2cl9uMWs1a0NBTUtPVjZ0aG5ScE5icV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvSYm7DIg8A%2FFQIoAkMzLBdATB64UeuFHxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYAPDZs_dXeErIuSqZnkzaxphf5xB0LgFP_4pgrr-0XSmQ&oe=677228E8&_nc_sid=1d576d" type="video/mp4" />
            </video> */}
          </Flex>
        );
      })}
    </Flex>
  );
};
