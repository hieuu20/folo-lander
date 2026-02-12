/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Text } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { Feature1 } from './feature/Feature1';
import { Feature2 } from './feature/Feature2';
import { Feature3 } from './feature/Feature3';
import { Feature4 } from './feature/Feature4';
import { Feature5 } from './feature/Feature5';
import { Feature6 } from './feature/Feature6';
import { AnimatePresence, motion } from 'framer-motion';


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

export function Feature() {
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

  const handleClick = (index: number) => {
    if (activeIndex == index) return;
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
      <Flex mih={"100vh"} justify={"space-between"} className='container'>
        <Flex w={{ base: "100%", md: "40%" }} direction={"column"}>
          {list.map((o, index) => {
            const isActive = activeIndex == index;
            return (
              <Flex
                key={index} py={{ base: 24 }}
                className='hover:bg-gray-50 transition-all duration-200 cursor-pointer rounded-lg'
                onClick={() => handleClick(index)}
              >
                {isActive && (
                  <Flex direction={"column"} gap={16}>
                    <Text c={"#131416"} fz={{ base: 48 }} fw={600}>
                      {o.title}
                    </Text>

                    <Text fz={{ base: 22 }} fw={500} c={"#4D5053"}>
                      {o.description}
                    </Text>

                    <Box h={{ base: 6 }} bg={"#E7E7F8"} className="relative overflow-hidden">
                      <motion.div
                        key={progressKey}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: DURATION / 1000, ease: "linear" }}
                        className="h-full bg-black"
                      />
                    </Box>
                  </Flex>
                )}

                {!isActive && (
                  <Text fz={{ base: 24 }} fw={600} c={"#4D5053"}>
                    {o.title}
                  </Text>
                )}
              </Flex>
            );
          })}
        </Flex>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className='w-[45%]'
          >
            {list[activeIndex].component()}
          </motion.div>
        </AnimatePresence>
      </Flex>
    </Box>
  );
}
