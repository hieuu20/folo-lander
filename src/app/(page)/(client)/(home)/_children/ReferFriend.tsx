import SectionButton from '@/components/buttons/SectionButton';
import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import bgPc from "@public/faq/bg-pc.webp";
import bgMb from "@public/faq/bg-mb.webp";
import gsap from "gsap";

export default function ReferFriend() {
  const scrollToLeaderboard = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#Leaderboard",
        autoKill: false,
      },
      ease: "power2.out",
    });
  };


  return (
    <Box
      pt={{ base: 40 }} pb={{ base: 80, md: 120 }}
      px={{ base: 16 }}
      bg={"#F7F7FC"}
    >
      <Flex
        w={{ base: "100%", lg: "80%", "2xl": 1160 }}
        direction={{ base: "column", md: "row" }}
        mx={"auto"}
        gap={{ base: 40 }}
        pos={"relative"}
        justify={"center"}
        align={"center"}
        className='aspect-[1.25182481752] md:aspect-[6.44444444444]'
        px={{ base: 32, lg: 0 }}
      >
        <Image src={bgPc} alt='bg' fill className='object-cover hidden md:inline-block' />
        <Image src={bgMb} alt='bg' fill className='object-cover md:hidden' />
        <Text fz={{ base: 32, lg: 34 }} fw={700} c={"#131416"} lh={1.2} pos={"relative"} ta={"center"}>
          Refer Creators and your friends to earn 15% value.
        </Text>

        <SectionButton
          title='Invite friends now →'
          fz={{ base: 16, sm: 18, lg: 20 }}
          fw={600}
          c={"white"}
          w={{ base: 180, md: 224 }}
          h={{ base: 40, md: 52 }}
          px={0}
          onClick={scrollToLeaderboard}
        />
      </Flex>
    </Box>

  );
}
