"use client";

import { Box } from "@mantine/core";
import React from "react";
import manImg from "@public/banner/man.png";
import girlImg from "@public/banner/girl.png";
import hornLeft from "@public/banner/horn-left.svg";
import hornRight from "@public/banner/horn-right.png";
import wingLeft from "@public/banner/wing-left.svg";
import wingRight from "@public/banner/wing-right.svg";
import ellipseIcon from "@public/banner/ellipse.png";
import tailIcon from "@public/banner/tail.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerImage() {
  return (
    <Box
      w={{ base: "120vw", sm: '100vw', md: "52vw" }}
      pos={"absolute"}
      right={{ base: '-2%', sm: 0}}
      bottom={0}
      className="aspect-[1.1]"
    >
      <Box
        pos={"absolute"}
        bottom={0}
        right={"3%"}
        w={"90%"}
        className="aspect-[1.13]"
      >
        <Image src={manImg} alt="man" fill className="object-cover" />
      </Box>
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[15%] top-[15.2%] left-[37%] aspect-[4.5]"
      >
        <Image
          src={ellipseIcon}
          alt="ellipse Icon"
          fill
          className="object-cover"
        />
      </motion.div>

      <Box
        pos={"absolute"}
        w={"8%"}
        top={"18%"}
        left={"64%"}
        className="aspect-[0.66]"
      >
        <Image
          src={hornLeft}
          alt="horn left Icon"
          fill
          className="object-cover"
        />
      </Box>

      <Box
        pos={"absolute"}
        w={"8%"}
        top={"18%"}
        left={"75%"}
        className="aspect-[0.66]"
      >
        <Image
          src={hornRight}
          alt="horn right Icon"
          fill
          className="object-cover"
        />
      </Box>

      <Box
        pos={"absolute"}
        w={"30%"}
        bottom={"7.4%"}
        left={"16.4%"}
        className="aspect-[1.37]"
      >
        <Image
          src={tailIcon}
          alt="tail left Icon"
          fill
          className="object-cover"
        />
      </Box>

      {/* style 2 */}
      <motion.div
        animate={{
          scaleX: [1.1, 0.9, 1.1], // Bóp méo cánh theo chiều dọc
          rotate: [0, -3, 0], // Xoay nhẹ cánh
          transition: {
            duration: 1.6,
            repeat: Infinity,
            repeatType: "mirror", // Lặp ngược
            ease: [0.42, 0, 0.58, 1],
          },
        }}
        className="absolute w-[29%] top-[46%] left-[40%] aspect-[0.67] origin-right"
      >
        <Image
          src={wingLeft}
          alt="wing left Icon"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        animate={{
          scaleX: [1.1, 0.8, 1.1], // Bóp méo cánh theo chiều dọc
          rotate: [0, -3, 0], // Xoay nhẹ cánh
          transition: {
            duration: 1.6,
            repeat: Infinity,
            repeatType: "mirror", // Lặp ngược
            ease: [0.42, 0, 0.58, 1],
          },
        }}
        className="absolute w-[29%] top-[45%] right-[-6%] aspect-[0.67] origin-left"
      >
        <Image
          src={wingRight}
          alt="wing right Icon"
          fill
          className="object-cover"
        />
      </motion.div>

      <Box
        pos={"absolute"}
        bottom={0}
        right={"2%"}
        w={"68%"}
        className="aspect-square"
      >
        <Image src={girlImg} alt="girl" fill className="object-cover" />
      </Box>
    </Box>
  );
}
