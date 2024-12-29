import { IUSPManager } from "@/app/api/_entities";
import SectionButton from "@/components/buttons/SectionButton";
import SectionSubTitle from "@/components/Typo/SectionSubTitle";
import SectionTitle from "@/components/Typo/SectionTitle";
import { Box, BoxProps, Flex, FlexProps } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface Props {
  rootProps?: BoxProps;
  contentProps?: FlexProps;
  imageProps?: FlexProps;
  usp: IUSPManager;
  id?: string;
}

export default function SectionContent(props: Props) {
  const { rootProps, contentProps, imageProps, usp, id } = props;
  return (
    <Box w={"100%"} {...rootProps} id={id} className="scroll-mt-16 md:scroll-mt-[72px] ">
      <Box className="container">
        <Flex
          direction={{ base: "column", md: "row" }}
          w={"100%"}
          justify={"center"}
          align={"center"}
          gap={{ base: 24, sm: 40, md: 0 }}
          py={{ base: 40, md: 48, lg: 60, xl: 72, '2xl': 80 }}
        >
          <Box w={{ base: "100%", md: "50%" }} className="order-2 md:order-1">
            <Flex
              direction={"column"}
              gap={{ base: 12, lg: 16 }}
              w={{ base: "100%", md: "84%" }}
              align={{ base: "center", md: "start" }}
              {...contentProps}
            >
              <SectionTitle ta={{ base: "center", md: "left" }}>
                {usp.title}
              </SectionTitle>

              <SectionSubTitle mb={8} ta={{ base: "center", md: "left" }} className="whitespace-pre-line">
                {usp.subTitle}
              </SectionSubTitle>

              <SectionButton
                show={usp.isShowButton}
                title={usp.buttonLabel}
                href={usp.buttonLink}
              />
            </Flex>
          </Box>

          <Flex
            pos={"relative"}
            w={{ base: "100%", md: "50%" }}
            className="aspect-[1.165] order-1 md:order-2"
            {...imageProps}
          >
            <Image
              src={usp.img}
              alt={usp.title}
              fill
              className="object-cover"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
