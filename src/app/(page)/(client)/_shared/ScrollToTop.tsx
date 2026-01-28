'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);

        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 600);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
