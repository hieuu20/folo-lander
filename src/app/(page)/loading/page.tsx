"use client";

import { Flex } from "@mantine/core";
import React from "react";

import f from "@public/icons/loading/f.svg";
import l from "@public/icons/loading/l.svg";
import o from "@public/icons/loading/o.svg";
import r from "@public/icons/loading/r.svg";
import o1 from "@public/icons/loading/o-1.svg";
import o2 from "@public/icons/loading/o-2.svg";
import { motion } from "framer-motion";
import Image from "next/image";


export const dynamic = "force-dynamic";

export default async function Home() {

    return (
        <div className="flex w-full h-full bg-white justify-center items-center">
            <div className="flex items-baseline w-[12.9%] relative">
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "linear"
                    }}
                    className="w-[13.4%] mr-[1%]"
                >
                    <Image src={f} alt="f" className="w-full h-auto object-cover" />
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: "40%"
                    }}
                    animate={{
                        opacity: 1,
                        y: "0%"
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "linear",
                        delay: 0.4
                    }}
                    className="w-[35%] mr-[3%]"
                >
                    <Image src={o} alt="f" className="w-full h-auto object-cover" />
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: "40%"
                    }}
                    animate={{
                        opacity: 1,
                        y: "0%"
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "linear",
                        delay: 0.6
                    }}
                    className="w-[6.72%] mr-[3%]"
                >
                    <Image src={l} alt="f" className="w-full h-auto object-cover" />
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: "40%"
                    }}
                    animate={{
                        opacity: 1,
                        y: "0%"
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "linear",
                        delay: 0.8
                    }}
                    className="w-[35%]"
                >
                    <Image src={o} alt="f" className="w-full h-auto object-cover" />
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "linear",
                        delay: 1
                    }}
                    className="w-[8%] absolute top-[16%] right-0"
                >
                    <Image src={r} alt="f" className="w-full h-auto object-cover" />
                </motion.div>
            </div>
        </div>
    );
}
