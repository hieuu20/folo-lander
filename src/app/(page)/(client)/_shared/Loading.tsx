"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";

import f from "@public/icons/loading/f.svg";
import l from "@public/icons/loading/l.svg";
import o from "@public/icons/loading/o.svg";
import r from "@public/icons/loading/r.svg";
import o1 from "@public/icons/loading/o-1.svg";
import o2 from "@public/icons/loading/o-2.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function Loading() {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setDone(true), 1200);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <>
            <AnimatePresence>
                {!done && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "linear", delay: 1.4 }}
                        style={{
                            height: window.innerHeight
                        }}
                        className="flex w-full fixed top-0 left-0 bg-white justify-center items-center z-20"
                    >
                        <div className="w-[48%] md:w-[17%] top-[-3.8%] left-[-3%] md:left-[-1.05%] md:top-[-1.3%] h-fit relative">
                            <div className="flex items-baseline w-full relative">
                                <FadeOutAni className="w-[13.4%] mr-[1%]">
                                    <Image src={f} alt="f" className="w-full h-auto object-cover" />
                                </FadeOutAni>

                                <FadeOutAni className="w-[35%] mr-[3%]">
                                    <Image src={o} alt="o" className="w-full h-auto object-cover" />
                                </FadeOutAni>

                                <motion.div
                                    initial={{ x: 0, rotate: 90 }}
                                    animate={{ x: "38%", y: "-1.5%", rotate: 0 }}
                                    transition={{ duration: 0.6, ease: "easeIn", delay: 1 }}
                                    className="w-[35%] absolute bottom-0 left-[14.2%] aspect-square"
                                >
                                    <Image src={o1} alt="o" className="w-full h-auto object-cover" />
                                </motion.div>

                                <FadeOutAni className="w-[6.72%] mr-[3%]">
                                    <Image src={l} alt="l" className="w-full h-auto object-cover" />
                                </FadeOutAni>

                                <FadeOutAni className="w-[35%]">
                                    <Image src={o} alt="o" className="w-full h-auto object-cover" />
                                </FadeOutAni>

                                <motion.div
                                    initial={{ x: 0, rotate: 90 }}
                                    animate={{ x: "-35%", y: "-1.5%", rotate: 0 }}
                                    transition={{ duration: 0.6, ease: "easeIn", delay: 1 }}
                                    className="w-[35%] absolute bottom-0 left-[62%] h-fit"
                                >
                                    <Image src={o2} alt="o" className="w-full h-auto object-cover" />
                                </motion.div>

                                <motion.div
                                    initial={{ x: 0 }}
                                    animate={{ x: "-136%" }}
                                    transition={{ duration: 0.6, ease: "easeIn", delay: 1 }}
                                    className="w-[8%] absolute top-[13%] right-[2%]"
                                >
                                    <Image src={r} alt="r" className="w-full h-auto object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


const FadeOutAni = ({ className, children }: PropsWithChildren<{ className: string }>) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};