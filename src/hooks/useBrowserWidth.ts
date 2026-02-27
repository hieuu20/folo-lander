'use client';
import React, { useCallback, useEffect, useState } from 'react';

export function useBrowserWidth() {
    const isClient = typeof window !== "undefined";
    const getWidth = useCallback(() => (isClient ? window.innerWidth : 0), []);

    const [width, setWidth] = useState<number>(getWidth);

    useEffect(() => {
        if (!isClient) return;
        const onResize = () => {
            setWidth(getWidth());
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [isClient, getWidth]);

    const isMb = React.useMemo(() => width <= 768, [width]);
    return {
        width,
        isMb,
    };
}
