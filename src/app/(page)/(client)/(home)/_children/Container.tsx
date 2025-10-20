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
import { BannerPc } from "./BannerPc";
import { Unlimited } from "./Unlimited";
import { More } from "./More";
import { ICreatorIdol } from "@/app/api/_entities/creatorIdol";
import { INews } from "@/app/api/_entities";
import News from "./News";
import { TimeToShine } from "./TimeToShine";
import { TimeToShineMobile } from "./mobile/TimeToShineMobile";
import { BannerTablet } from "./tablet/BannerTablet";
import { Footer } from "@/components/layouts";
import GrowthNews from "./GrowthNews";

interface Props {
    idols: ICreatorIdol[],
    news: INews[],
}
export default function Container(props: Props) {
    const { width } = useBrowserWidth();
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const render = () => {
        if (width < 992) {
            return <Mobile {...props} />;
        }

        if (width < 1240) {
            <Tablet {...props} />;
        }

        return <Desktop {...props} />;
    };

    return (
        <>
            {render()}
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
                className=''
                style={{
                    // backgroundImage: "url('/version-3/banner/bg-mb.webp')",
                    backgroundColor: "#0A0014"
                }}
            >
                <BannerMobile idols={idols} />
                <UnlimitedMobile />
                <MoreMobile />
                {/* <GrowthMobile news={news} /> */}
                {/* <Box
                    id='News'
                    w={{ base: "100%" }}
                    pos={"relative"}
                    className='aspect-[0.54]'
                > */}
                <News news={news} />
                {/* </Box> */}
                {/* <News news={news} /> */}
                <TimeToShineMobile />
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
                className=''
                style={{
                    // backgroundImage: "url('/version-3/banner/bg-pc.webp')",
                    backgroundColor: "#0A0014"
                }}
            >
                <BannerPc idols={idols} />
                <Unlimited />
                <More />
                {/* <Growth idols={idols} news={news} /> */}

                <News news={news} />
                <TimeToShine />
                <Footer />
            </Box>
        </Box>
    );
};

const Tablet = ({ idols, news }: Props) => {
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
                <BannerTablet idols={idols} />
                <UnlimitedMobile />
                <MoreMobile />
                <GrowthMobile news={news} />
                {/* <News news={news} /> */}
                <Footer />
            </Box>
        </Box>
    );
};