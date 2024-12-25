"use client";

import { Flex, FlexProps } from "@mantine/core";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

interface Props {
  text: string;
  animationProps?: HTMLMotionProps<"span">;
  rootProps?: FlexProps;
  initDelay?: number;
}
export default function TextAnimation({
  text,
  animationProps,
  rootProps = {},
  initDelay = 0,
}: Props) {
  let [delay] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), initDelay);
  }, [initDelay]);

  const delayDuration = useMemo(() => 0.5 / text.length, [text]);

  if (!isVisible)
    return (
      <Flex
        wrap={"wrap"}
        {...{ gap: { base: 6 }, ...rootProps }}
        className="gap-y-0 invisible"
      >
        {text.split(" ").map((o, index) => {
          return <span key={index}>{o}</span>;
        })}
      </Flex>
    );
  return (
    <Flex wrap={"wrap"} {...{ gap: 8, ...rootProps }} className="gap-y-0">
      {text.split(" ").map((o, index) => {
        return (
          <motion.span key={index} className="flex flex-nowrap">
            {Array.from(o).map((x, i) => {
              console.log(x);
              delay += 1;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{
                    delay: delay * delayDuration,
                    duration: 0.4,
                    ease: "linear",
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
