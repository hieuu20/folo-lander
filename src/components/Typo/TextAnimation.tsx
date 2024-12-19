"use client";

import { Flex, FlexProps } from "@mantine/core";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

interface Props {
  text: string;
  animationProps?: HTMLMotionProps<"span">;
  wordSpace?: FlexProps["gap"];
  initDelay?: number;
}
export default function TextAnimation({
  text,
  animationProps,
  wordSpace = 8,
  initDelay = 0,
}: Props) {
  let [delay] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), initDelay);
  }, [initDelay]);

  const delayDuration = useMemo(() => 0.5 / text.length, [text]);
  console.log({ initDelay });

  if (!isVisible) return <span className="invisible">{text}</span>;
  return (
    <Flex wrap={"wrap"} gap={wordSpace} className="gap-y-0">
      {text.split(" ").map((o, index) => {
        return (
          <motion.span key={index} className="flex flex-nowrap">
            {o.split("").map((x, i) => {
              delay += 1;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: delay * delayDuration,
                    duration: 0.4,
                    ease: "easeIn",
                  }}
                  style={{ display: "inline-block" }}
                  {...animationProps}
                >
                  {x}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </Flex>
  );
}
