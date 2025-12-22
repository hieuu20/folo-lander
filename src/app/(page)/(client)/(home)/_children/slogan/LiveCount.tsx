import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";


export const LiveCount = ({ isInView }: { isInView: boolean }) => {
    const STEPS = [12, 24, 40, 28, 42, 54, 68];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let i = 0;

        const run = () => {
            if (i >= STEPS.length - 1) return;

            i++;
            setIndex(i);

            setTimeout(run, 400);
        };

        run();
    }, [STEPS.length, isInView]);

    // console.log({ index });

    return (
        <div
            className="w-fit h-fit"
        >
            {/* {!isInView && STEPS[0]} */}
            <AnimatePresence mode="wait">
                {isInView && STEPS.map((o, i) => {
                    if (i != index) return null;

                    return (
                        <motion.div
                            key={STEPS[index]}
                            initial={i > 0 && { y: '30%', opacity: 0 }}
                            animate={{ y: '0%', opacity: 1 }}
                            exit={{ y: '-30%', opacity: 0 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                        >
                            {STEPS[index]}
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};
