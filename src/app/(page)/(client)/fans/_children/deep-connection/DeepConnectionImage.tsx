"use client";

import { Box, Flex, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

const data = [
  {
    img: "/connection/1.png",
    title: "Video Call",
    description:
      "Connect face-to-face with creators for a personalised and intimate experience. Share unforgettable moments in real-time!",
    bg: "#EEFAED",
  },
  {
    img: "/connection/2.png",
    title: "Ratings",
    description:
      "Receive personalised ratings, whether honest, complimentary, or a little cheeky for those naughty men and women out there!",
    bg: "#E9F7FF",
  },
  {
    img: "/connection/3.png",
    title: "Call",
    description:
      "Speak directly with creators for one-on-one conversations. Perfect for private chats, consultations, or just connecting!",
    bg: "#F9F4F8",
  },
  {
    img: "/connection/4.png",
    title: "Roulette",
    description:
      "Think of it as Omegle, but for KNKY folk, connect randomly with creators. Spin the wheel of surprise and discover who’s waiting for you!",
    bg: "#F5F5F6",
  },
  {
    img: "/connection/5.png",
    title: "Spin the Wheel",
    description:
      "Turn fun into rewards! Creators set the stakes, and fans spin to win exclusive content or unique experiences.",
    bg: "#FFF9E8",
  },
  {
    img: "/connection/6.png",
    title: "Make a Request",
    description:
      "Tailor your experience by submitting custom requests to creators. They bring your requests and ideas to life!",
    bg: "#EEFAED",
  },
  {
    img: "/connection/7.png",
    title: "Fantasy",
    description:
      "Dive into your wildest dreams, design your ultimate fantasy and invite creators to bid on bringing it to life, like Freelancer for adults.",
    bg: "#F9EDFF",
  },
  {
    img: "/connection/8.png",
    title: "Match",
    description:
      "Find your perfect connection! Swipe through creators who match your kinks, interests, and preferences.",
    bg: "#F9EDFF",
  },
  {
    img: "/connection/9.png",
    title: "And +1,000 Custom Services",
    description:
      "Explore a world of endless possibilities. With thousands of personalised services, there’s something for everyone.",
    bg: "#FFF9E8",
  },
];

export function DeepConnectionImage() {
  return (
    <Grid gutter={{ base: 16, md: 24 }}>
      {data.map((o, index) => {
        return (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Flex
              w={"100%"}
              direction={"column"}
              gap={{ base: 8 }}
              bg={o.bg}
              p={{ base: 16, md: 20, xl: 24 }}
              className="rounded-2xl 2xl:rounded-3xl overflow-hidden"
            >
              <Box
                pos={"relative"}
                w={{ base: 48, md: 54, lg: 58, xl: 60, "2xl": 64 }}
                mb={8}
                className="aspect-square"
              >
                <Image
                  src={o.img}
                  alt={o.title}
                  fill
                  className="object-cover"
                />
              </Box>
              <Title
                order={4}
                fz={{ base: 20, md: 22, "2xl": 24 }}
                fw={600}
                c={"#131416"}
                lh={1.4}
              >
                {o.title}
              </Title>
              <Text
                c={"#4D5053"}
                fz={{ base: 14, md: 16, xl: 18, "2xl": 20 }}
                fw={600}
                lh={1.4}
                mih={{ base: 100 }}
              >
                {o.description}
              </Text>
            </Flex>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
