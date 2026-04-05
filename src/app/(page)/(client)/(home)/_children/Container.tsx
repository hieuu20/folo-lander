/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box } from "@mantine/core";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { useBrowserWidth } from "@/hooks";

import { useRouter, useSearchParams } from "next/navigation";
// import { BannerMobile } from "./mobile/BannerMoblie";
import { Footer, Header } from "@/components/layouts";
import { FooterMobile } from "./mobile/FooterMobile";
import { setLocalStorage } from "@/utils";
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
import { useInView } from "framer-motion";
import { LoadingDesktop, LoadingMobile } from "../../_shared/Loading";

const LeaderBoardMobile = dynamic(() => import("./mobile/LeaderBoardMobile").then((mod) => mod.LeaderBoardMobile));
const LeaderBoard = dynamic(() => import("./LeaderBoard").then((mod) => mod.LeaderBoard));
const LeaderBoardCount = dynamic(() => import("./LeaderBoardCount"));
const Ai = dynamic(() => import("./Ai").then((mod) => mod.Ai));
const Feature = dynamic(() => import("./Feature").then((mod) => mod.Feature));
const FeatureMobile = dynamic(() => import("./mobile/FeatureMobile").then((mod) => mod.FeatureMobile));
const MuchMore = dynamic(() => import("./MuchMore").then((mod) => mod.MuchMore));
const Limit = dynamic(() => import("./Limit").then((mod) => mod.Limit));
const LimitMobile = dynamic(() => import("./mobile/LimitMobile").then((mod) => mod.LimitMobile));
const FeaturedCreator = dynamic(() => import("./FeaturedCreator").then((mod) => mod.FeaturedCreator));
const EarningEstimate = dynamic(() => import("./EarningEstimate").then((mod) => mod.EarningEstimate));
const PartnerSlider = dynamic(() => import("./PartnerSlider").then((mod) => mod.PartnerSlider));
const PeopleSay = dynamic(() => import("./PeopleSay").then((mod) => mod.PeopleSay));
const News = dynamic(() => import("./News").then((mod) => mod.News));
const Faq = dynamic(() => import("./Faq").then((mod) => mod.Faq));
const ReferFriend = dynamic(() => import("./ReferFriend"));

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
    const searchParams = useSearchParams();
    const router = useRouter();

    const render = () => {
        if (width == 0) return null;

        if (width < 768) {
            return <Mobile {...props} />;
        }

        if (width < 1200) {
            return <Tablet {...props} />;
        }

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
    const leaderboardSection = sections.find(o => o.title == "Leaderboard");

    return (
        <LoadingMobile>
            <Header />
            {sections.map((o) => {
                return (
                    // <LazySection key={index}>
                    <>
                        {renderMobileSection({
                            sectionTitle: o.title,
                            leaderboardPhase: leaderboardSection?.phase || 1,
                            news,
                            pointSettings,
                            roles,
                            rewards,
                            wayGetPaids,
                            faqs,
                            partnerSlides,
                            peopleSays,
                            featuredCreators,
                        })}
                    </>
                    // </LazySection>
                );
            })}
            <FooterMobile roles={roles} />
        </LoadingMobile>
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

    const leaderboardSection = sections.find(o => o.title == "Leaderboard");

    return (
        <Box id="smooth-wrapper" ref={main}>
            <Box
                id="smooth-content"
                className=''
                style={{
                    backgroundColor: "#fff"
                }}
            >
                <LoadingDesktop>
                    <Header />
                    {sections.map((o) => {
                        return (
                            <>
                                {renderDesktopSection({
                                    sectionTitle: o.title,
                                    leaderboardPhase: leaderboardSection?.phase || 1,
                                    news,
                                    pointSettings,
                                    roles,
                                    rewards,
                                    wayGetPaids,
                                    faqs,
                                    partnerSlides,
                                    peopleSays,
                                    featuredCreators,
                                })}
                            </>
                        );
                    })}
                    <Footer roles={roles} />
                </LoadingDesktop>
            </Box>
        </Box>
    );
};

const Tablet = ({
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

    const leaderboardSection = sections.find(o => o.title == "Leaderboard");

    return (
        <LoadingDesktop>
            <Header />
            {sections.map((o, index) => {
                return (
                    <LazySection key={index}>
                        {renderMobileSection({
                            sectionTitle: o.title,
                            leaderboardPhase: leaderboardSection?.phase || 1,
                            news,
                            pointSettings,
                            roles,
                            rewards,
                            wayGetPaids,
                            faqs,
                            partnerSlides,
                            peopleSays,
                            featuredCreators,
                        })}
                    </LazySection>
                );
            })}
            <Footer roles={roles} />
        </LoadingDesktop>
    );
};

interface SectionRendererProps {
    sectionTitle: string;
    leaderboardPhase: number;
    news: INews[];
    roles: Role[];
    pointSettings: PointSetting[];
    rewards: Reward[];
    wayGetPaids: WayGetPaid[];
    peopleSays: IPeopleSay[];
    featuredCreators: IFeaturedCreator[];
    faqs: IFaq[];
    partnerSlides: PartnerSlide[];
}

const renderMobileSection = ({
    sectionTitle,
    leaderboardPhase,
    news,
    roles,
    pointSettings,
    rewards,
    wayGetPaids,
    peopleSays,
    featuredCreators,
    faqs,
    partnerSlides,
}: SectionRendererProps) => {
    const listMobile: Record<string, React.JSX.Element> = {
        "Leaderboard": <LeaderBoardMobile pointSettings={pointSettings} roles={roles} rewards={rewards} phase={leaderboardPhase} />,
        "User counters": <LeaderBoardCount />,
        "Faster, Simpler and Smarter": <Ai />,
        "Key USPS": <FeatureMobile />,
        "More ways to get paid": <MuchMore wayGetPaids={wayGetPaids} />,
        "Creating without limits": <LimitMobile />,
        "Featured creators": <FeaturedCreator featuredCreators={featuredCreators} />,
        "Earning estimation": <EarningEstimate />,
        "Partners": <PartnerSlider partnerSlides={partnerSlides} />,
        "People say": <PeopleSay peopleSays={peopleSays} />,
        "News": <News news={news} />,
        "FAQs": <Faq faqs={faqs} />,
        "Refer your friends": <ReferFriend />
    };

    return listMobile[sectionTitle] || null;
};

const renderDesktopSection = ({
    sectionTitle,
    leaderboardPhase,
    news,
    roles,
    pointSettings,
    rewards,
    wayGetPaids,
    peopleSays,
    featuredCreators,
    faqs,
    partnerSlides,
}: SectionRendererProps) => {
    const listDesktop: Record<string, React.JSX.Element> = {
        "Leaderboard": <LeaderBoard pointSettings={pointSettings} roles={roles} rewards={rewards} phase={leaderboardPhase} />,
        "User counters": <LeaderBoardCount />,
        "Faster, Simpler and Smarter": <Ai />,
        "Key USPS": <Feature />,
        "More ways to get paid": <MuchMore wayGetPaids={wayGetPaids} />,
        "Creating without limits": <Limit />,
        "Featured creators": <FeaturedCreator featuredCreators={featuredCreators} />,
        "Earning estimation": <EarningEstimate />,
        "Partners": <PartnerSlider partnerSlides={partnerSlides} />,
        "People say": <PeopleSay peopleSays={peopleSays} />,
        "News": <News news={news} />,
        "FAQs": <Faq faqs={faqs} />,
        "Refer your friends": <ReferFriend />
    };

    return listDesktop[sectionTitle] || null;
};

const LazySection = ({
    children,
    minHeight = 320,
}: {
    children: React.ReactNode;
    minHeight?: number;
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        amount: 0,
        margin: "300px 0px",
        once: true,
    });
    const [hasEnteredView, setHasEnteredView] = useState(false);

    useEffect(() => {
        if (isInView) {
            setHasEnteredView(true);
        }
    }, [isInView]);

    return (
        <Box ref={ref} mih={hasEnteredView ? undefined : minHeight}>
            {hasEnteredView ? children : null}
        </Box>
    );
};
