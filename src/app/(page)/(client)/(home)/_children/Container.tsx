/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mantine/core";
import React, { useEffect, useRef } from "react";
import { useBrowserWidth } from "@/hooks";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BannerMobile } from "./mobile/BannerMoblie";
import { Footer, Header } from "@/components/layouts";
import { Loading } from "../../_shared/Loading";
import { MuchMore } from "./MuchMore";
import { BannerPc } from "./BannerPc";
import { FooterMobile } from "./mobile/FooterMobile";
import { loadingTime, setLocalStorage } from "@/utils";
import { LeaderBoardMobile } from "./mobile/LeaderBoardMobile";
import { LeaderBoard } from "./LeaderBoard";
import { Role } from "@/types/role";
import { PointSetting } from "@/types/pointSetting";
import ScrollToTop from "../../_shared/ScrollToTop";
import { Reward } from "@/types/reward";
import { INews } from "@/types/news";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { WayGetPaid } from "@/types/wayGetPaid";
import { IPeopleSay } from "@/types/peopleSay";
import { IFeaturedCreator } from "@/types/featuredCreator";
import { IFaq } from "@/types/faq";
import { PartnerSlide } from "@/types/partnerSlide";
import { Section } from "@/types/section";
import { FeaturedCreator } from "./FeaturedCreator";
import { EarningEstimate } from "./EarningEstimate";
import { PartnerSlider } from "./PartnerSlider";
import { PeopleSay } from "./PeopleSay";
import { News } from "./News";
import { Faq } from "./Faq";
import { Feature } from "./Feature";
import { Ai } from "./Ai";
import { FeatureMobile } from "./mobile/FeatureMobile";
import LeaderBoardCount from "./LeaderBoardCount";
import ReferFriend from "./ReferFriend";
import { JoinWaitList } from "./JoinWaitList";

interface Props {
    news: INews[];
    roles: Role[];
    pointSettings: PointSetting[];
    rewards: Reward[];
    wayGetPaids: WayGetPaid[];
    peopleSays: IPeopleSay[];
    featuredCreators: IFeaturedCreator[];
    faqs: IFaq[];
    partnerSlides: PartnerSlide[];
    sections: Section[];
}
export default function Container(props: Props) {
    const { width } = useBrowserWidth();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

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

        if (width < 768) {
            return <Mobile {...props} />;
        }

        // if (width < 1240) {
        //     <Tablet {...props} />;
        // }

        return <Desktop {...props} />;
    };

    useEffect(() => {
        const refCode = searchParams.get('ref');
        if (refCode) {
            setLocalStorage("referralCode", refCode);
            router.replace("/");
        }
    }, [router, searchParams]);

    return (
        <>
            <Loading />
            <ScrollToTop />

            {render()}
        </>
    );
}

const Mobile = ({
    news,
    pointSettings,
    roles,
    rewards,
    wayGetPaids,
    faqs,
    partnerSlides,
    peopleSays,
    featuredCreators,
    sections
}: Props) => {

    const listMobile: Record<string, React.JSX.Element> = {
        "Leaderboard": <LeaderBoardMobile pointSettings={pointSettings} roles={roles} rewards={rewards} />,
        "User counters": <LeaderBoardCount />,
        "Join wait list": <JoinWaitList roles={roles} />,
        "Faster, Simpler and Smarter": <Ai />,
        "Key USPS": <FeatureMobile />,
        "More ways to get paid": <MuchMore wayGetPaids={wayGetPaids} />,
        "Featured creators": <FeaturedCreator featuredCreators={featuredCreators} />,
        "Earning estimation": <EarningEstimate />,
        "Partners": <PartnerSlider partnerSlides={partnerSlides} />,
        "People say": <PeopleSay peopleSays={peopleSays} />,
        "News": <News news={news} />,
        "FAQs": <Faq faqs={faqs} />,
        "Refer your friends": <ReferFriend />
    };

    return (
        <>
            <Header />
            <Box id="smooth-wrapper">
                <Box
                    id="smooth-content"
                    className=''
                    style={{
                        backgroundColor: "#fff"
                    }}
                >
                    {/* <BannerMobile />
                    <LeaderBoardMobile pointSettings={pointSettings} roles={roles} rewards={rewards} />
                    <Ai />
                    <FeatureMobile />
                    <MuchMore wayGetPaids={wayGetPaids} />
                    <FeaturedCreator featuredCreators={featuredCreators} />
                    <EarningEstimate />
                    <PartnerSlider partnerSlides={partnerSlides} />
                    <PeopleSay peopleSays={peopleSays} />
                    <News news={news} />
                    <Faq faqs={faqs} />
                    <FooterMobile /> */}

                    <BannerMobile />
                    {sections.map((o, index) => {
                        return (
                            <React.Fragment key={index}>
                                {listMobile[o.title]}
                            </React.Fragment>
                        );
                    })}
                    <FooterMobile roles={roles}/>
                </Box>
            </Box>
        </>
    );
};

const Desktop = ({
    news,
    pointSettings,
    roles,
    rewards,
    wayGetPaids,
    faqs,
    partnerSlides,
    peopleSays,
    featuredCreators,
    sections
}: Props) => {
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

    const listDesktop: Record<string, React.JSX.Element> = {
        "Leaderboard": <LeaderBoard pointSettings={pointSettings} roles={roles} rewards={rewards} />,
        "User counters": <LeaderBoardCount />,
        "Join wait list": <JoinWaitList roles={roles} />,
        "Faster, Simpler and Smarter": <Ai />,
        "Key USPS": <Feature />,
        "More ways to get paid": <MuchMore wayGetPaids={wayGetPaids} />,
        "Featured creators": <FeaturedCreator featuredCreators={featuredCreators} />,
        "Earning estimation": <EarningEstimate />,
        "Partners": <PartnerSlider partnerSlides={partnerSlides} />,
        "People say": <PeopleSay peopleSays={peopleSays} />,
        "News": <News news={news} />,
        "FAQs": <Faq faqs={faqs} />,
        "Refer your friends": <ReferFriend />
    };
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
                    {/* <BannerPc />
                    <LeaderBoard pointSettings={pointSettings} roles={roles} rewards={rewards} />
                    <Ai />
                    <Feature />
                    <MuchMore wayGetPaids={wayGetPaids} />
                    <FeaturedCreator featuredCreators={featuredCreators} />
                    <EarningEstimate />
                    <PartnerSlider partnerSlides={partnerSlides} />
                    <PeopleSay peopleSays={peopleSays} />
                    <News news={news} />
                    <Faq faqs={faqs} /> */}


                    <BannerPc />
                    {sections.map((o, index) => {
                        return (
                            <React.Fragment key={index}>
                                {listDesktop[o.title]}
                            </React.Fragment>
                        );
                    })}
                    <Footer roles={roles} />
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