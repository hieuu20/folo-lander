"use client";

import { IUSPManager } from "@/app/api/_entities";
import { Box, BoxProps, Flex, FlexProps, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { twMerge } from "tailwind-merge";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import SectionButton from "@/components/buttons/SectionButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={twMerge(
        className,
        "w-[36px] md:w-[40px] lg:w-[48px] 2xl:w-[56px] h-[36px] md:h-[40px] lg:h-[48px] 2xl:h-[56px]"
      )}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <IconChevronLeft color="#000" width={'100%'} height={'100%'} />
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={twMerge(
        className,
        "w-[36px] md:w-[40px] lg:w-[48px] 2xl:w-[56px] h-[36px] md:h-[40px] lg:h-[48px] 2xl:h-[56px]"
      )}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <IconChevronRight color="#000" width={'100%'} height={'100%'}/>
    </Box>
  );
};

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  draggable: true,
  autoplay: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface Props {
  rootProps?: BoxProps;
  contentProps?: FlexProps;
  classer?: {
    root?: string;
    content?: string;
    slide?: string;
  }
  usps: IUSPManager[];
  title: string;
  buttonLabel: string;
  buttonLink: string;
}

export default function SectionSlide(props: Props) {
  const { rootProps, contentProps, usps, title, classer, buttonLabel, buttonLink } = props;

  return (
    <Box w={'100%'} {...rootProps} className={classer?.root}>
      <Box className="container" pb={{ base: 48, lg: 60, xl: 80 }}>
        <Flex
          direction={"column"}
          w={"100%"}
          justify={"center"}
          align={"center"}
          py={{ base: 16, sm: 20, lg: 24, xl: 48 }}
          gap={{ base: 24 }}
          className={twMerge('rounded-[40px]', classer?.content)}
          {...contentProps}
        >
          <Title
            size={"h4"}
            fz={{ base: 24, md: 28, lg: 36, xl: 42, "2xl": 48 }}
            lh={1.4}
            fw={700}
            ta={'center'}
          >
            {title}
          </Title>

          <Box w={"100%"} px={{ base: 24, lg: 32, xl: 38, "2xl": 44 }}>
            <Slider {...settings} className={twMerge('[&_.slick-arrow]:before:hidden', classer?.slide)}>
              {usps.map((usp, index) => {
                return <SlideItem key={index} usp={usp} />;
              })}
            </Slider>
          </Box>

          <SectionButton
            w={{ base: 210 }}
            h={{ base: 40 }}
            fz={{ base: 14, md: 16 }}
            px={0}
            className="font-medium rounded-lg"
            title={buttonLabel}
            href={buttonLink}
            show={true}
          />
        </Flex>
      </Box>
    </Box>
  );
}

const SlideItem = ({ usp }: { usp: IUSPManager }) => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      gap={{ base: 16, lg: 24 }}
      pb={{base: 12, md: 16, lg: 20, xl: 24}}
    >
      <Box pos={"relative"} w={{base: '64%', sm: "48%"}} className="aspect-square">
        <Image src={usp.img} alt={usp.title} fill className="object-cover" />
      </Box>

      <Flex
        direction={"column"}
        gap={8}
        px={{ base: 16, lg: 20, xl: 28 }}
        align={"center"}
      >
        <Title size={"h3"} fz={{ base: 20, lg: 22, xl: 24 }} lh={1.4} fw={600} ta={'center'}>
          {usp.title}
        </Title>

        <Title
          size={"h5"}
          fz={{ base: 14, lg: 16, xl: 18, "2xl": 20 }}
          lh={1.4}
          fw={400}
          ta={"center"}
          className="whitespace-pre-line"
        >
          {usp.subTitle}
        </Title>
      </Flex>
    </Flex>
  );
};
