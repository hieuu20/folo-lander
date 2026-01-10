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
import { INews } from "@/app/api/_entities";
import News from "./News";
import { Footer, Header } from "@/components/layouts";
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
import NewsMobile from "./mobile/NewsMobile";
import { LeaderBoardMobile } from "./mobile/LeaderBoardMobile";
import { LeaderBoard } from "./LeaderBoard";

interface Props {
    news: INews[],
}
export default function Container(props: Props) {
    const { width } = useBrowserWidth();
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';

        const timeoutId = setTimeout(() => {
            document.documentElement.style.overflow = '';
            document.body.style.touchAction = '';
            document.body.style.overflow = '';
        }, loadingTime * 1000 * 2.5);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

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

const Mobile = ({ news }: Props) => {
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
        <>
            <Header />
            <Box id="smooth-wrapper" ref={main}>
                <Box
                    id="smooth-content"
                    className=''
                    style={{
                        backgroundColor: "#fff"
                    }}
                >
                    <BannerMobile />
                    <LeaderBoardMobile />
                    <SloganMobile />
                    <MuchMoreMobile />
                    <BeSeenMobile />
                    {/* <NewsMobile news={news} /> */}
                    <FooterMobile />
                </Box>
            </Box>
        </>
    );
};

const Desktop = ({ news }: Props) => {
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

    return (
        <>
            <Header />

            <Box id="smooth-wrapper" ref={main}>
                <Box
                    id="smooth-content"
                    className=''
                    style={{
                        backgroundColor: "#fff"
                    }}
                >
                    <BannerPc />
                    <LeaderBoard />
                    <Slogan />
                    <MuchMore />
                    <BeSeen />
                    {/* <News news={news} /> */}
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

// const Tablet = ({ news }: Props) => {
//     const main = useRef<any>();
//     const smoother = useRef<ScrollSmoother>();

//     useGSAP(
//         () => {
//             // smoother.current = ScrollSmoother.create({
//             //   smooth: 0,
//             //   effects: true,
//             //   smoothTouch: 0.5,
//             //   ignoreMobileResize: true,
//             //   normalizeScroll: true
//             // });
//         },
//         {
//             scope: main,
//         }
//     );

//     return (
//         <Box id="smooth-wrapper" ref={main}>
//             <Box
//                 id="smooth-content"
//                 className='bg-contain bg-repeat'
//                 style={{
//                     backgroundImage: "url('/version-3/banner/bg-mb.webp')",
//                     backgroundColor: "#0A0014"
//                 }}
//             >
//                 {/* <BannerTablet idols={idols} /> */}
//                 <UnlimitedMobile />
//                 <MoreMobile />
//                 <GrowthMobile news={news} />
//                 {/* <News news={news} /> */}
//                 <Footer />
//             </Box>
//         </Box>
//     );
// };