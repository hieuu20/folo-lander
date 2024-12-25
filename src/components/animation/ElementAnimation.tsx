'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends PropsWithChildren {
    initDelay?: number;
    animationProps?: HTMLMotionProps<"div">;
    className?: string;
}

export default function ElementAnimation({ children, initDelay = 0, animationProps, className }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), initDelay);
    }, [initDelay]);

    if (!isVisible) return <div className="invisible">{children}</div>;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{
                delay: initDelay/2000,
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
