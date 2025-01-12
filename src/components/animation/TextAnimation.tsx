"use client";

import { Flex, FlexProps } from "@mantine/core";
import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useMemo, useState } from "react";

interface Props {
  text: string;
  rootProps?: FlexProps;
  initDelay?: number;
  isInView: boolean;
  textColor?: { index: number; color: string };
  textIcon?: { index: number; icon: ReactNode };
}
export default function TextAnimation({
  text='',
  rootProps = {},
  initDelay = 0,
  isInView,
  textColor,
  textIcon
}: Props) {
  let [delay] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const delayDuration = useMemo(() => 0.5 / text.length, [text]);

  return (
    <Flex wrap={"wrap"} {...{ gap: 6, ...rootProps }} className="gap-y-0">
      {text.split(" ").map((o, index) => {
        return (
          <motion.span
            key={index}
            className="flex flex-nowrap relative"
            style={{
              color:
                !!textColor && textColor.index === index
                  ? textColor.color
                  : undefined,
            }}
          >
            {Array.from(o).map((x, i) => {
              delay += 1;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{
                    delay: delay * delayDuration + initDelay / 1000,
                    duration: 0.4,
                    ease: "linear",
                  }}
                  style={{ display: "inline-block" }}
                >
                  {x}
                </motion.span>
              );
            })}
            {
              !!textIcon && textIcon.index === index && (
                textIcon.icon
              )
            }
          </motion.span>
        );
      })}
    </Flex>
  );
}
