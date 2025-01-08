"use client";

import ElementAnimation from "@/components/animation/ElementAnimation";
import { useBrowserWidth } from "@/hooks";
import { Connection } from "@/utils/constants";
import { Box, Flex, Grid, Text, Title } from "@mantine/core";
import { useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import Slider from "react-slick";

interface Props {
  connections: Connection[];
}

export function DeepConnectionImage({ connections }: Props) {
  const { isMb } = useBrowserWidth();

  if (isMb) {
    return <Mobile connections={connections} />;
  }

  return <Pc connections={connections} />;
}

const Pc = ({ connections }: Props) => {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.4 });

  return (
    <Box className="container">
      <Grid ref={scope} gutter={{ base: 16, md: 24 }} >
        {connections.map((o, index) => {
          return (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <ElementAnimation className="w-full" initDelay={index * 200} isInView={isInView} >
                <Item data={o} />
              </ElementAnimation>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

const Mobile = ({ connections }: Props) => {
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
        {connections.slice(0, 5).map((o, i) => (
          <SlideItem key={i} data={[o, connections.slice(-4)[i] ?? null]}/>
        ))}
      </Slider>
    </Flex>
  );
};

const SlideItem = ({ data }: { data: [Connection, Connection | null] }) => {
  return (
    <Flex w={"100%"} direction={"column"} gap={16}>
      <Item data={data[0]} />
      <Item data={data[1]} />
    </Flex>
  );
};

const Item = ({ data }: { data: Connection | null }) => {
  if(!data) return (
    <Box w={'100%'}/>
  );

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
