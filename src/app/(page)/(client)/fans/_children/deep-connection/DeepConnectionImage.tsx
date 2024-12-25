"use client";

import ElementAnimation from "@/components/animation/ElementAnimation";
import { useBrowserWidth } from "@/hooks";
import { Box, Flex, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import React, { useMemo } from "react";
import Slider from "react-slick";

interface Connection {
  img: string;
  title: string;
  description: string;
  bg: string;
}

const data: Connection[] = [
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
  const { isMb } = useBrowserWidth();

  if (isMb) {
    return <Mobile />;
  }

  return <Pc />;
}

const Pc = () => {
  return (
    <Box className="container">
      <Grid gutter={{ base: 16, md: 24 }}>
        {data.map((o, index) => {
          return (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <ElementAnimation className="w-full" initDelay={index * 200}>
                <Item data={o} />
              </ElementAnimation>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

const Mobile = () => {
  const settings = useMemo(() => {
    return {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2.1,
      slidesToScroll: 2,
      initialSlide: 0,
      draggable: true,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 1.9,
            slidesToScroll: 1.9,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1.16,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }, []);

  return (
    <Flex w={"100%"} pl={16} direction={"column"} gap={16}>
      <Slider
        {...settings}
        className="[&_.slick-slide]:px-2 xl:[&_.slick-slide]:px-3"
      >
        {data.slice(0, 5).map((o, i) => (
          <Item key={i} data={o} />
        ))}
      </Slider>

      <Slider
        {...settings}
        className="[&_.slick-slide]:px-2 xl:[&_.slick-slide]:px-3"
      >
        {data.slice(-4).map((o, i) => (
          <Item key={i} data={o} />
        ))}
      </Slider>
    </Flex>
  );
};

const Item = ({ data }: { data: Connection }) => {
  return (
    <Flex
      w={"100%"}
      direction={"column"}
      gap={{ base: 8 }}
      bg={data.bg}
      p={{ base: 16, md: 20, xl: 24 }}
      className="rounded-2xl 2xl:rounded-3xl overflow-hidden"
    >
      <Box
        pos={"relative"}
        w={{ base: 48, md: 54, lg: 58, xl: 60, "2xl": 64 }}
        mb={8}
        className="aspect-square"
      >
        <Image src={data.img} alt={data.title} fill className="object-cover" />
      </Box>
      <Title
        order={4}
        fz={{ base: 20, md: 22, "2xl": 24 }}
        fw={600}
        c={"#131416"}
        lh={1.4}
        lineClamp={1}
      >
        {data.title}
      </Title>
      <Text
        c={"#4D5053"}
        fz={{ base: 14, md: 16, xl: 18, "2xl": 20 }}
        fw={600}
        lh={1.4}
        mih={{ base: 78, sm: 64, md: 70, xl: 100, "2xl": 100 }}
      >
        {data.description}
      </Text>
    </Flex>
  );
};
