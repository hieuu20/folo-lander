import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import img from '@public/fan-banner/image_animation/screen_user.webp';

export function BannerUser() {
  return (
    <motion.div
      transition={{
        duration: 1,
        ease: [0, 0.51, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className="relative w-full flex justify-center rounded-lg md:rounded-xl mb-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0, 0.51, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="w-full z-10"
      >
        <Image
          className="w-full"
          src={img}
          alt="banner img"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.51, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="absolute bottom-[-5%] right-[5%] w-[70%]"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/fan-banner/image_animation/shadow_img.png"
          alt=""
        />
      </motion.div>

      <motion.div
        animate={{ y: 30, x: -10, scale: 1.2 }}
        transition={{
          ease: "linear",
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[50%] right-[-15%] w-[80px]"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/fan-banner/image_animation/laugh_img.png"
          alt=""
        />
      </motion.div>

      <motion.div
        animate={{ y: 30, x: 5 }}
        transition={{
          ease: "linear",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-[10%] left-[5%] w-[35%] z-10"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/fan-banner/image_animation/banana_img.png"
          alt=""
        />
      </motion.div>

      <motion.div
        animate={{ y: 30, x: -10 }}
        transition={{
          ease: "linear",
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[10%] right-[-5%] w-[30%]"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/fan-banner/image_animation/lip_img.png"
          alt=""
        />
      </motion.div>

      <motion.div
        animate={{ x: 20 }}
        transition={{
          ease: "linear",
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[40%] left-[-10%] w-[15%]"
      >
        <Image
          width={100}
          height={100}
          src="/fan-banner/image_animation/tired_img.png"
          alt=""
        />
      </motion.div>

      <motion.div
        animate={{ y: 30, x: -10 }}
        transition={{
          ease: "circIn",
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 right-[5%] w-[17%] z-10"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/fan-banner/image_animation/heart_img.png"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}
