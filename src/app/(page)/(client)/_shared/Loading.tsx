/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import lottie from 'lottie-web';
import { Box } from "@mantine/core";

export function Loading({ children }: PropsWithChildren) {
    const [done, setDone] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const logoRef = useRef<any>(null);

    useEffect(() => {
        let timeout1: NodeJS.Timeout;

        const handleLoad = async () => {
            await lottie.loadAnimation({
                container: logoRef.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: '/json/loading.json',
            });

            timeout1 = setTimeout(() => {
                setDone(true);
            }, 2.7 * 1000);
        };
        handleLoad();
        // if (document.readyState === 'complete') {
        //     handleLoad();
        // } else {
        //     window.addEventListener('load', handleLoad);
        // }

        return () => {
            clearTimeout(timeout1);
        };
    }, []);

    return (
        <Box bg={"white"} w={"100vw"}>
            <AnimatePresence>
                {!done && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "linear", delay: 0 }}
                        style={{
                            height: "100vh"
                        }}
                        className="flex w-screen fixed top-0 left-0 bg-white justify-center items-center z-20"
                    >
                        <Box ref={logoRef} className="w-[90%] md:w-[32%] top-[-14.4vh] md:top-[-1vh] lg:top-[-2.1vh] h-auto relative" />
                    </motion.div>
                )}
            </AnimatePresence>
            {done && children}
        </Box>
    );
}
