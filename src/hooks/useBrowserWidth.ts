'use client';
import React, { useEffect, useState } from 'react';

export function useBrowserWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const onResize = () => {
            setWidth(screen.width);
        };

        onResize();

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const isMb = React.useMemo(() => width <= 768, [width]);
    return {
        width,
        isMb,
    };
}
