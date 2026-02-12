/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Text } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Feature1 } from '../feature/Feature1';
import { Feature2 } from '../feature/Feature2';
import { Feature3 } from '../feature/Feature3';
import { Feature4 } from '../feature/Feature4';
import { Feature5 } from '../feature/Feature5';
import { Feature6 } from '../feature/Feature6';
import Image from 'next/image';
import right from "@public/news/arrow-right.svg";
import left from "@public/news/arrow-left.svg";
import { twMerge } from 'tailwind-merge';


const list = [
  {
    title: "Conversations Upgraded.",
    description: "From instant messages to video calls, built to engage, track, and monetise.",
    component: Feature1
  },
  {
    title: "The Open Marketplace.",
    description: "Products, services, subscriptions, and live selling - all in one open marketplace.",
    component: Feature2
  },
  {
    title: "Don’t Fake It. Scale It Authentically",
    description: "Our Ai co-pilot flags high-value fans, filters noise, and helps you reply faster.",
    component: Feature3
  },
  {
    title: "Build Meaningful Relationships",
    description: "Channels help you build a loyal community and deliver premium value and services to your subscribers.",
    component: Feature4
  },
  {
    title: "Where Brands and Creators Connect",
    description: "Match with brands, feature products in your content, and turn collaborations into meaningfull revenue.",
    component: Feature5
  },
  {
    title: "Turn Attention Into Earnings",
    description: "Monetise content through engagement-based view share pool. You post, we pay.",
    component: Feature6
  }
];

const DURATION = 5000;

export function FeatureMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % list.length);
      setProgressKey((prev) => prev + 1);
    }, DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const onPrev = () => {
    let index = activeIndex - 1;

    if (activeIndex == 0) index = list.length - 1;

    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    startTimer();
  };

  const onNext = () => {
    let index = activeIndex + 1;
    if (activeIndex == list.length - 1) index = 0;

    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    startTimer();
  };

  return (
    <Box
      className='rounded-t-[24px] overflow-hidden z-10 relative'
      bg={"white"}
      py={{ base: 40, md: 60, xl: 80 }}
      mt={-24}
    >
      <Flex direction={"column"} className='container'>
        <Flex pos={"relative"} w={"100%"} align={"center"} className='aspect-[0.93]'>
          {list.map((o, index) => {
            return (
              <Box
                key={index} pos={"absolute"} top={0} left={0} w={"100%"} h={"fit-content"}
                className={twMerge(
                  activeIndex == index ? "block" : "hidden",
                  "transition-all duration-200"
                )}
              >
                {o.component()}
              </Box>
            );
          })}
        </Flex>

        <Flex
          py={{ base: 24 }}
          className='rounded-lg'
        >
          <Flex direction={"column"} gap={12}>
            <Text c={"#131416"} fz={{ base: 32 }} fw={700} ta={"center"}>
              {list[activeIndex].title}
            </Text>

            <Text fz={{ base: 16 }} fw={500} c={"#4D5053"} ta={"center"}>
              {list[activeIndex].description}
            </Text>
          </Flex>
        </Flex>

        <Box h={{ base: 6 }} bg={"#E7E7F8"} className="relative overflow-hidden" mb={12}>
          <motion.div
            key={progressKey}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: DURATION / 1000, ease: "linear" }}
            className="h-full bg-black"
          />
        </Box>

        <Flex gap={24} w={"100%"} justify={"center"} className={""}>
          <Image src={left} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={onPrev} />
          <Image src={right} alt='left arrow' className='w-8 md:w-10 h-auto cursor-pointer' onClick={onNext} />
        </Flex>
      </Flex>
    </Box>
  );
}
