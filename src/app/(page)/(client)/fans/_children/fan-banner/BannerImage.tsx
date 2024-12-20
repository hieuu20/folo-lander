"use client";

import { Box, Flex } from "@mantine/core";
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
// import animationData from '@public/fan-banner/fan-animation.json';


export default function BannerImage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const container = useRef<any>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg', // canvas html
      loop: true,
      autoplay: true,
      path: '/lottie/animation.json',
      // assetsPath: '/path/to/assets/',
    });

    return () => animation.destroy();
  }, []);
  return (
    <Box w={{ base: "100%", md: "50%" }} className="order-1 md:order-2">
      <Flex
        ref={container}
        w={{ base: "100%" }}
        direction={"column"}
        align={"center"}
        mx={"auto"}
        gap={4}
      />
    </Box>
  );
}
