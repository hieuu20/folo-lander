import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import img from "@public/creator/community_creator/comunity_main.png";

export function BannerCreator() {
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
        <Image className="w-full h-auto" src={img} alt="" />
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
        className="absolute bottom-[-5%] right-[5%] w-[70%] z-0"
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
        animate={{ x: 10, scale: 1.4 }}
        transition={{
          ease: "linear",
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-[40%] right-[-7%] w-[80px]"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/creator/community_creator/community_coin.png"
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
          src="/creator/community_creator/community_bkn.png"
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
        className="absolute top-[20%] right-[7%] w-[10%]"
      >
        <Image
          width={100}
          height={100}
          src="/creator/community_creator/community_coin.png"
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
        className="absolute top-[20%] left-[-10%] w-[25%]"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/creator/community_creator/community_ticket.png"
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
        className="absolute top-[50%] left-[-5%] w-[35%]"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/creator/community_creator/community_kCoin.png"
          alt=""
        />
      </motion.div>

      <motion.div
        animate={{ y: 20, x: 10 }}
        transition={{
          ease: "linear",
          duration: 1.4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-[20%] right-[10%] w-[35%] rounded-md shadow-2xl z-10"
      >
        <Image
          className="w-full"
          width={100}
          height={100}
          src="/creator/community_creator/community_chart.png"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}
