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
import { ICreatorIdol } from "@/app/api/_entities/creatorIdol";
import { INews } from "@/app/api/_entities";
import News from "./News";
import { BannerTablet } from "./tablet/BannerTablet";
import { Footer } from "@/components/layouts";
import { Loading } from "../../_shared/Loading";
import { Slogan } from "./Slogan";
import { MuchMore } from "./MuchMore";
import { BeSeen } from "./BeSeen";
import { BannerPc } from "./BannerPc";
import { SloganMobile } from "./mobile/SloganMobile";
import { MuchMoreMobile } from "./mobile/MuchMoreMobile";
import { FooterMobile } from "./mobile/FooterMobile";
import { BeSeenMobile } from "./mobile/BeSeenMobile";
import { loadingTime } from "@/utils";

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

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden';
    //     document.documentElement.style.overflow = 'hidden';
    //     document.body.style.touchAction = 'none';

    //     const timeoutId = setTimeout(() => {
    //         document.documentElement.style.overflow = '';
    //         document.body.style.touchAction = '';
    //         document.body.style.overflow = '';
    //     }, loadingTime * 1000 * 2.5);

    //     return () => clearTimeout(timeoutId);
    // }, [pathname]);

    const render = () => {
        if (width == 0) return null;

        if (width < 992) {
            return <Mobile {...props} />;
        }

        // if (width < 1240) {
        //     <Tablet {...props} />;
        // }

        return <Desktop {...props} />;
    };

    return (
        <>
            <Loading />
            {render()}
        </>
    );
}

const Mobile = ({ idols, news }: Props) => {
    const main = useRef<any>();
    const smoother = useRef<ScrollSmoother>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    backgroundColor: "#fff"
                }}
            >
                {/* <BannerMobile />
                <SloganMobile /> */}
                <MuchMoreMobile />
                <BeSeenMobile />
                <News news={news} />
                <FooterMobile />
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
                smooth: 2,
                effects: true,
            });
        },
        { scope: main, }
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box id="smooth-wrapper" ref={main}>
            <Box
                id="smooth-content"
                className=''
                style={{
                    backgroundColor: "#fff"
                }}
            >
                <BannerPc />
                <Slogan />
                <MuchMore />
                <BeSeen />
                <News news={news} />
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