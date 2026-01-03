'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTop() {
    const pathname = usePathname();

    // useLayoutEffect(() => {
    //     console.log("run");
    //     window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // }, [pathname]);

    useEffect(() => {
        console.log("run");
        window.scrollTo(0, 0);

        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 600);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
