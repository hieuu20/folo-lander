import { Box, Flex } from "@mantine/core";
import React from "react";

export function BannerImage() {

  return (
    <Box
      w={{ base: "100%", md: "50%" }}
      mt={{ base: "5%", sm: "2%" }}
      className="order-1 md:order-2"
    >
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
          <source src={"/creator/banner/main.webm"} type="video/mp4" />
        </video>
      </Flex>
    </Box>
  );
}
