/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mantine/core";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useBrowserWidth } from "@/hooks";

import { usePathname } from "next/navigation";
import { BannerMobile } from "./mobile/BannerMoblie";
import { UnlimitedMobile } from "./mobile/UnlimitedMobile";
import { GrowthMobile } from "./mobile/GrowthMobile";
import { MoreMobile } from "./mobile/MoreMobile";
import { Footer } from "./Footer";
import { BannerPc } from "./BannerPc";
import { Unlimited } from "./Unlimited";
import { Growth } from "./Growth";
import { More } from "./More";
import { ICreatorIdol } from "@/app/api/_entities/creatorIdol";
import { INews } from "@/app/api/_entities";
import News from "./News";

interface Props {
    idols: ICreatorIdol[],
    news: INews[],
}
export default function Container(props: Props) {
    const { isMb } = useBrowserWidth();
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {!isMb && <Desktop {...props} />}
            {isMb && <Mobile {...props} />}
        </>
    );
}

const Mobile = ({ idols, news }: Props) => {
    const main = useRef<any>();
    const smoother = useRef<ScrollSmoother>();

    useGSAP(
        () => {
            // smoother.current = ScrollSmoother.create({
            //   smooth: 0,
            //   effects: true,
            //   smoothTouch: 0.5,
            //   ignoreMobileResize: true,
            //   normalizeScroll: true
            // });
        },
        {
            scope: main,
        }
    );

    return (
        <Box id="smooth-wrapper" ref={main}>
            <Box
                id="smooth-content"
                className='bg-contain bg-repeat'
                style={{
                    backgroundImage: "url('/version-3/banner/bg-mb.webp')",
                    backgroundColor: "#0A0014"
                }}
            >
                <BannerMobile />
                <UnlimitedMobile />
                <GrowthMobile idols={idols} />
                <MoreMobile />
                <News news={news} />
                <Footer />
            </Box>
        </Box>
    );
};

const Desktop = ({ idols, news }: Props) => {
    const main = useRef<any>();
    const smoother = useRef<ScrollSmoother>();

    useGSAP(
        () => {
            smoother.current = ScrollSmoother.create({
                smooth: 1,
                effects: true,
            });
        },
        {
            scope: main,
        }
    );
    return (
        <Box id="smooth-wrapper" ref={main}>
            <Box
                id="smooth-content"
                className='bg-contain bg-repeat'
                style={{
                    backgroundImage: "url('/version-3/banner/bg-pc.webp')",
                    backgroundColor: "#0A0014"
                }}
            >
                <BannerPc idols={idols} />
                <Unlimited />
                <More />
                <Growth idols={idols} news={news} />
                <Footer />
            </Box>
        </Box>
    );
};
