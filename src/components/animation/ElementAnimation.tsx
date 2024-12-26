"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends PropsWithChildren {
  initDelay?: number;
  animationProps?: HTMLMotionProps<"div">;
  className?: string;
  isInView: boolean;
}

export default function ElementAnimation({
  children,
  initDelay = 0,
  animationProps,
  className,
  isInView,
}: Props) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : {}}
      transition={{
        delay: initDelay / 1000,
        duration: 0.4,
        ease: "easeIn",
      }}
      {...animationProps}
      className={className}
    >
      {children}
    </motion.div>
  );
}
