"use client";

import { Box, Flex } from "@mantine/core";
import React, { useRef } from 'react';
import { BannerUser } from "./BannerUser";
// import lottie from 'lottie-web';
// import animationData from '@public/fan-banner/fan-animation.json';


export default function BannerImage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const container = useRef<any>(null);

  // useEffect(() => {
  //   const animation = lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg', // canvas html
  //     loop: true,
  //     autoplay: true,
  //     path: '/lottie/lips.json',
  //     assetsPath: '/animation-image/',
  //   });

  //   return () => animation.destroy();
  // }, []);
  return (
    <Box w={{ base: "100%", md: "50%" }} className="order-1 md:order-2">
      <Flex
        ref={container}
        pos={'relative'}
        // w={{ base: "84%" }}
        w={{ base: "62%" }}
        direction={"column"}
        align={"center"}
        mx={"auto"}
        gap={4}
        className="aspect-[0.7656]"
      >
        {/* <Image
          src={img}
          alt="fan banner img"
          fill
          className="object-cover"
        /> */}
        <BannerUser />
      </Flex>
    </Box>
  );
}
