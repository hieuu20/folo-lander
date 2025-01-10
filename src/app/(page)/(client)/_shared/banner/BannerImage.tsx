"use client";

import useDevice from "@/hooks/useDevice";
import { Box, Flex } from "@mantine/core";
import React from "react";
import { BannerInfo } from "../Banner";
// import Image from "next/image";
// import phone from '@public/fan-banner/Phone.png';

interface Props {
  usp: BannerInfo;
  isCreator: boolean;
}

export function BannerImage({ usp }: Props) {
  const isIphone = useDevice();
  console.log({ isIphone });

  return (
    <Box
      w={{ base: "100%", md: "50%" }}
      mt={{ base: "5%", sm: "2%" }}
      className="order-1 md:order-2"
    >
      {!isIphone && (
        <Flex
          pos={"relative"}
          w={{ base: "56%" }}
          direction={"column"}
          align={"center"}
          mx={"auto"}
          gap={4}
          className="aspect-[0.7656]"
        >
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            className="w-full rounded-[36px] aspect-[0.524] scale-[2]"
          >
            <source src={usp.videoWebm} type="video/webm" />
          </video>
        </Flex>
      )}

      {isIphone && <RenderOnIphone usp={usp} isCreator={isCreator} />}
    </Box>
  );
}

const RenderOnIphone = ({ usp, isCreator }: Props) => {
  if(isCreator){
    return (
      <Ban
    )
  }
  // return (
  //   <Flex
  //     pos={"relative"}
  //     w={{ base: "56%" }}
  //     direction={"column"}
  //     align={"center"}
  //     mx={"auto"}
  //     gap={4}
  //     className="aspect-[0.7656]"
  //   >
  //     {/* <Image
  //       src={phone}
  //       alt="phone"
  //       className="absolute top-0 left-0 w-full h-auto object-cover -rotate-6"
  //     /> */}
  //     <video
  //       preload="auto"
  //       playsInline
  //       autoPlay
  //       loop
  //       muted
  //       className="absolute top-0 left-0 w-full rounded-[60px] h-auto -rotate-6"
  //     >
  //       <source src={usp.videoMp4} type="video/mp4" />
  //     </video>
  //   </Flex>
  // );
};
