/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Box, Flex, Text } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Feature1 } from './feature/Feature1';
import { Feature2 } from './feature/Feature2';
import { Feature3 } from './feature/Feature3';
import { Feature4 } from './feature/Feature4';
import { Feature5 } from './feature/Feature5';
import { Feature6 } from './feature/Feature6';

const DURATION = 5000; // 5s

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

export function Feature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const controls = useAnimation();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const remainingRef = useRef<number>(DURATION);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // ===============================
  // CLEAR TIMER
  // ===============================
  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // ===============================
  // NEXT SLIDE
  // ===============================
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % list.length);
  }, []);

  // ===============================
  // START PROGRESS
  // ===============================
  const startProgress = useCallback(
    (duration: number) => {
      clearTimer();

      remainingRef.current = duration;
      startTimeRef.current = Date.now();

      controls.start({
        width: "100%",
        transition: {
          duration: duration / 1000,
          ease: "linear",
        },
      });

      timeoutRef.current = setTimeout(() => {
        controls.set({ width: "0%" });
        nextSlide();
      }, duration);
    },
    [controls, nextSlide]
  );

  // ===============================
  // PAUSE
  // ===============================
  const pause = () => {
    if (!timeoutRef.current) return;

    clearTimer();

    const elapsed = Date.now() - startTimeRef.current;
    remainingRef.current = remainingRef.current - elapsed;

    controls.stop();
  };

  // ===============================
  // RESUME
  // ===============================
  const resume = () => {
    if (remainingRef.current <= 0) return;

    startTimeRef.current = Date.now();

    controls.start({
      width: "100%",
      transition: {
        duration: remainingRef.current / 1000,
        ease: "linear",
      },
    });

    timeoutRef.current = setTimeout(() => {
      controls.set({ width: "0%" });
      nextSlide();
    }, remainingRef.current);
  };

  // ===============================
  // WHEN ACTIVE INDEX CHANGES
  // ===============================
  useEffect(() => {
    if (!isInView) return;

    controls.set({ width: "0%" });
    startProgress(DURATION);

    return clearTimer;
  }, [activeIndex, isInView, startProgress, controls]);

  // ===============================
  // CLEANUP
  // ===============================
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  // ===============================
  // HANDLE CLICK
  // ===============================
  const handleClick = (index: number) => {
    if (index === activeIndex) return;

    clearTimer();
    controls.stop();
    controls.set({ width: "0%" });

    remainingRef.current = DURATION;

    setActiveIndex(index);
  };

  return (
    <Box
      className='rounded-t-[24px] overflow-hidden z-10 relative'
      bg={"white"}
      py={{ base: 40, md: 60, xl: 90 }}
      mt={-24}
    >
      <Flex ref={containerRef} justify={"space-between"} className='container'>
        <Flex w={{ base: "100%", md: "40%" }} direction={"column"}>
          {list.map((o, index) => {
            const isActive = activeIndex == index;
            return (
              <Flex
                key={index} py={{ base: 12 }}
              >
                {isActive && (
                  <Flex
                    direction={"column"}
                    gap={16}
                    py={12}
                    onMouseEnter={() => {
                      setIsPaused(true);
                      pause();
                    }}
                    onMouseLeave={() => {
                      setIsPaused(false);
                      resume();
                    }}
                  >
                    <Flex direction={"column"} h={{ base: 120 }} gap={16}>
                      <Text c={"#131416"} fz={{ base: 30 }} fw={600}>
                        {o.title}
                      </Text>

                      <Text fz={{ base: 20 }} fw={500} c={"#4D5053"}>
                        {o.description}
                      </Text>
                    </Flex>

                    <Box h={6} bg="#E7E7F8" className="relative overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={controls}
                        className="h-full bg-black"
                      />
                    </Box>
                  </Flex>
                )}

                {!isActive && (
                  <Box
                    p={12}
                    w={"100%"}
                    onClick={() => handleClick(index)}
                    pos={"relative"}
                    left={-12}
                    className='hover:bg-gray-50 transition-all duration-200 cursor-pointer rounded-2xl'
                  >
                    <Text fz={{ base: 22 }} fw={600} c={"#4D5053"}>
                      {o.title}
                    </Text>
                  </Box>
                )}
              </Flex>
            );
          })}
        </Flex>

        {/* <AnimatePresence mode="wait">
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
        </AnimatePresence> */}
        <Box pos={"relative"} w={"45%"}>
          {list.map((o, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={activeIndex == index ? { opacity: 1 } : { opacity: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className='w-full h-full top-0 left-0 absolute'
              >
                {o.component()}
              </motion.div>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
}