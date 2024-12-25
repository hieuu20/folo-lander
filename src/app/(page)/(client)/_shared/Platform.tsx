"use client";

import { IUSPManager } from "@/app/api/_entities";
import TextAnimation from "@/components/animation/TextAnimation";
import SectionButton from "@/components/buttons/SectionButton";
import SectionTitle from "@/components/Typo/SectionTitle";
import { Box, Flex, Title } from "@mantine/core";
import Image from "next/image";
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
  ],
};

interface Props {
  usps: IUSPManager[];
  title: string;
}

export function Platform(props: Props) {
  const { usps, title } = props;

  return (
    <Box w={"100%"}>
      <Box className="container">
        <Flex
          direction={"column"}
          w={"100%"}
          justify={"center"}
          align={"center"}
          gap={{ base: 16, md: 20, lg: 24, xl: 32, "2xl": 40 }}
          py={{ base: 40, md: 48, lg: 60, xl: 72, '2xl': 80 }}
        >
          <SectionTitle c={"#131416"}>
            <TextAnimation text={title} rootProps={{ gap: { base: 6, md: 8, lg: 10, '2xl': 12 }, justify: 'center' }}/>
          </SectionTitle>

          <Box w={"100%"}>
            <Slider
              {...settings}
              className="[&_.slick-slide]:px-2 xl:[&_.slick-slide]:px-3"
            >
              {usps.map((usp, i) => (
                <SlideItem key={i} usp={usp as IUSPManager} />
              ))}
            </Slider>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

const SlideItem = ({ usp }: { usp: IUSPManager }) => {
  return (
    <Flex
      w={"100%"}
      direction={"column"}
      gap={{ base: 12, lg: 16 }}
      bd={"1px solid #EBEBEC"}
      pb={{ base: 16, lg: 20 }}
      className="rounded-2xl overflow-hidden"
    >
      <Box pos={"relative"} w={"100%"} className="aspect-[2]">
        <Image src={usp.img} alt={usp.title} fill className="object-cover" />
      </Box>

      <Flex direction={"column"} gap={8} px={{ base: 12, lg: 16 }}>
        <Title size={"h3"} fz={{ base: 20, lg: 22, xl: 24 }} lh={1.4} fw={700}>
          {usp.title}
        </Title>

        <Title
          size={"p"}
          fz={{ base: 14, lg: 26, xl: 18, "2xl": 20 }}
          lh={1.4}
          fw={400}
          mb={{ base: 4, lg: 8 }}
          h={{ base: 104, md: 125 }}
        >
          {usp.subTitle}
        </Title>

        <SectionButton
          show={usp.isShowButton}
          title={usp.buttonLabel}
          href={usp.buttonLink}
          w={210}
        />
      </Flex>
    </Flex>
  );
};
