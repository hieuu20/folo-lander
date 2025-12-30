"use client";

import React, { useEffect, useRef, useState } from "react";

// import f from "@public/icons/loading/f.svg";
// import l from "@public/icons/loading/l.svg";
// import o from "@public/icons/loading/o.svg";
// import r from "@public/icons/loading/r.svg";
// import o1 from "@public/icons/loading/o-1.svg";
// import o2 from "@public/icons/loading/o-2.svg";
import { AnimatePresence, motion } from "framer-motion";
import lottie from 'lottie-web';
import { loadingTime } from "@/utils/constants";

export function Loading() {
    const [done, setDone] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const logoRef = useRef<any>(null);

    useEffect(() => {
        const handleLoad = () => {
            lottie.loadAnimation({
                container: logoRef.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: '/json/loading.json',
            });

            setTimeout(() => {
                setDone(true);
            }, loadingTime * 1000);
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
                            height: "100vh"
                        }}
                        className="flex w-screen fixed top-0 left-0 bg-white justify-center items-center z-20"
                    >
                        <div ref={logoRef} className="w-[90%] md:w-[32%] top-[-9.8vh] md:top-[-2.1vh] h-auto relative">

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
