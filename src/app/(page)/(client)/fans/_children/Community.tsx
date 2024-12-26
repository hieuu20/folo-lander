"use client";

import React, { useEffect, useMemo } from "react";
import { useAnimate, useInView } from "framer-motion";
import Image from "next/image";

import community_1 from "@public/community/1.png";
import community_2 from "@public/community/2.png";
import community_3 from "@public/community/3.png";
import community_4 from "@public/community/4.png";
import community_5 from "@public/community/5.png";
import community_6 from "@public/community/6.png";
import community_7 from "@public/community/7.png";
import community_8 from "@public/community/8.png";

import { IUSPManager } from "@/app/api/_entities";
import SectionButton from "@/components/buttons/SectionButton";
import { twMerge } from "tailwind-merge";
import { Box, Flex, Text, Title } from "@mantine/core";
import SectionTitle from "@/components/Typo/SectionTitle";
import TextAnimation from "@/components/animation/TextAnimation";
import ElementAnimation from "@/components/animation/ElementAnimation";

interface Props {
  usp: IUSPManager;
}

export function Community({ usp }: Props) {
  const [scope_1, animate_1] = useAnimate();
  const [scope_2, animate_2] = useAnimate();
  const [scope_3, animate_3] = useAnimate();
  const [scope_4, animate_4] = useAnimate();
  const [scope_5, animate_5] = useAnimate();
  const [scope_6, animate_6] = useAnimate();
  const [scope_7, animate_7] = useAnimate();
  const [scope_8, animate_8] = useAnimate();
  const [scope_9, animate_9] = useAnimate();

  const isInView = useInView(scope_9);

  const communityImageTop = useMemo(
    () => [
      {
        className:
          "z-0 w-[39.2%] md:w-[29.6%] left-[-16%] md:left-0 top-[24vh] md:top-0",
        photo: community_1,
        y: "-38vh",
        ref: scope_1,
        animate: animate_1,
        name: "Steve",
      },
      {
        className:
          "z-[2] w-[39.2%] md:w-[29.6%] left-[16%] md:left-[24%] top-[38vh] md:top-[12vh]",
        photo: community_2,
        y: "-55vh",
        ref: scope_2,
        animate: animate_2,
        name: "MissT",
      },
      {
        className:
          "z-0 w-[39.2%] md:w-[29.6%] left-[48%] md:left-[46%] top-[22vh] md:top-0",
        photo: community_3,
        y: "-31vh",
        ref: scope_3,
        animate: animate_3,
        name: "Annie",
      },
      {
        className:
          "z-[2] w-[39.2%] md:w-[29.6%] left-[80%] md:left-[70%] top-[38vh] md:top-[12vh]",
        photo: community_4,
        y: "-55vh",
        ref: scope_4,
        animate: animate_4,
        name: "Adam",
      },
    ],
    [
      animate_1,
      animate_2,
      animate_3,
      animate_4,
      scope_1,
      scope_2,
      scope_3,
      scope_4,
    ]
  );

  const communityImageBottom = useMemo(
    () => [
      {
        className:
          "z-0 w-[39.2%] md:w-[29.6%] left-[-16%] md:left-0 bottom-[26vh] md:bottom-0",
        photo: community_5,
        y: "42vh",
        ref: scope_5,
        animate: animate_5,
        zIndex: 10,
        name: "Leona",
      },
      {
        className:
          "z-[1] w-[39.2%] md:w-[29.6%] left-[16%] md:left-[24%] bottom-[36vh] md:bottom-[12vh]",
        photo: community_6,
        y: "44vh",
        ref: scope_6,
        animate: animate_6,
        zIndex: 11,
        name: "Chris",
      },
      {
        className:
          "z-0 w-[39.2%] md:w-[29.6%] left-[48%] md:left-[46%] bottom-[30vh] md:bottom-0",
        photo: community_7,
        y: "48vh",
        ref: scope_7,
        animate: animate_7,
        zIndex: 10,
        name: "Lex",
      },
      {
        className:
          "z-[1] w-[39.2%] md:w-[29.6%] left-[80%] md:left-[70%] bottom-[36vh] md:bottom-[12vh]",
        photo: community_8,
        y: "48vh",
        ref: scope_8,
        animate: animate_8,
        zIndex: 11,
        name: "Stacey",
      },
    ],
    [
      animate_5,
      animate_6,
      animate_7,
      animate_8,
      scope_5,
      scope_6,
      scope_7,
      scope_8,
    ]
  );

  useEffect(() => {
    if (isInView) {
      communityImageTop?.map((v) => {
        v?.animate(
          v?.ref.current,
          { y: v?.y },
          { ease: "linear", duration: 0.6, delay: 0.3 }
        );
      });
      communityImageBottom?.map((v) => {
        v?.animate(
          v?.ref.current,
          { y: v?.y },
          { ease: "linear", duration: 0.6, delay: 0.3 }
        );
      });
      animate_9(
        scope_9.current,
        {
          opacity: 1,
        },
        { ease: "linear", duration: 0.6, delay: 0.3 }
      );
    }
  }, [animate_9, communityImageBottom, communityImageTop, isInView, scope_9]);

  return (
    <Box h={{ base: "116vh", md: "150vh" }} bg={"#10011E"} w={"100%"}>
      <Box h={"100%"} className="max-md:w-full md:container">
        <Flex
          w={"100%"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          pos={"relative"}
        >
          <Flex
            direction={"column"}
            wrap={"wrap"}
            h={"100%"}
            w={"100%"}
            pos={"absolute"}
            top={0}
            left={0}
            className="overflow-hidden"
          >
            <Box pos={"relative"} w={"100%"} h={"50%"} className="z-10">
              {communityImageTop?.map((v, index) => (
                <Box
                  ref={v?.ref}
                  pos={"absolute"}
                  className={twMerge(
                    "rounded-lg overflow-hidden aspect-[0.74]",
                    v?.className ?? ""
                  )}
                  key={index}
                >
                  <Image
                    src={v?.photo}
                    alt={v.name}
                    fill
                    className="object-cover"
                  />
                </Box>
              ))}
            </Box>

            <Box pos={"relative"} w={"100%"} h={"50%"}>
              {communityImageBottom?.map((v, index) => (
                <Box
                  pos={"absolute"}
                  className={twMerge(
                    "rounded-lg overflow-hidden aspect-[0.74]",
                    v?.className ?? ""
                  )}
                  key={index}
                  ref={v?.ref}
                >
                  <Image
                    src={v?.photo}
                    alt={v.name}
                    fill
                    className="object-cover"
                  />
                </Box>
              ))}
            </Box>
          </Flex>
          <Flex
            ref={scope_9}
            direction={"column"}
            align={"center"}
            pos={"relative"}
            w={{ base: "100%", xl: "84%" }}
            style={{
              opacity: 0,
            }}
            gap={{ base: 4, md: 8 }}
            c={"white"}
            className="z-10"
          >
            <SectionTitle c={"white"} ta={"center"}>
              <TextAnimation
                text={"🌟 Our Community"}
                rootProps={{
                  gap: { base: 6, md: 8, lg: 10, "2xl": 12 },
                  justify: "center",
                }}
                isInView={isInView}
                initDelay={1000}
              />
            </SectionTitle>

            <Title
              order={2}
              fz={{ base: 40, md: 56, lg: 72, xl: 88, "2xl": 104 }}
              fw={700}
              lh={1.32}
              ta={"center"}
            >
              <TextAnimation
                text="Discover, experience, and interact with"
                isInView={isInView}
                initDelay={1400}
                rootProps={{
                  gap: { base: 8, md: 10, lg: 12, xl: 14, "2xl": 16 },
                  justify: "center",
                }}
              />{" "}
              <Text
                span={true}
                fz={{ base: 40, md: 56, lg: 72, xl: 88, "2xl": 104 }}
                fw={700}
                lh={1.375}
                ta={"center"}
                c={"#7A29CC"}
              >
                <TextAnimation
                  text="Amazing Creators."
                  isInView={isInView}
                  initDelay={1900}
                  rootProps={{
                    gap: { base: 8, md: 10, lg: 12, xl: 14, "2xl": 16 },
                    justify: "center",
                  }}
                />
              </Text>{" "}
              <TextAnimation
                text="Be part of the KNKY revolution!"
                isInView={isInView}
                initDelay={2300}
                rootProps={{
                  gap: { base: 8, md: 10, lg: 12, xl: 14, "2xl": 16 },
                  justify: "center",
                }}
              />
            </Title>
            {usp.isShowButton && (
              <ElementAnimation isInView={isInView} initDelay={2800}>
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
              </ElementAnimation>
            )}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
