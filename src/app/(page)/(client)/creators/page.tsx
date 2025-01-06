import { Box } from "@mantine/core";
import React from "react";
import {
  Community,
  CreatorBanner,
  Dive,
  Feature,
  MatchMaker,
  PrimeSubscription,
} from "./_children";
import {
  EarningEstModel,
  FAQModel,
  IEarningEst,
  IFaq,
  IUSPManager,
} from "@/app/api/_entities";
import { SubBanner } from "../_shared/SubBanner";
import { Platform } from "../_shared/Platform";
import { Faq } from "../_shared/Faq";
import { SECTION_TYPE } from "@/utils";
import { connectDB } from "@/app/api/_db";
import { YourEarn } from "./_children/YourEarn";
import Verify from "./_children/Verify";
// import { SECTION_TYPE } from "@/utils";
// import { CompareTableModel, SectionModel, USPManagerModel } from "@/app/api/_entities";
// import { SECTION_TYPE } from "@/utils/enum";

export default async function Page() {
  await connectDB();
  const [
    // sectionsResponse,
    // uspsResponse,
    faqsResponse,
    earningEstResponse,
  ] = await Promise.all([
    // SectionModel.find({ type: SECTION_TYPE.USER })
    //   .sort({
    //     priority: 1,
    //   })
    //   .lean(),
    // USPManagerModel.find({ type: SECTION_TYPE.USER })
    //   .sort({
    //     priority: 1,
    //   })
    //   .lean(),
    FAQModel.find({ type: SECTION_TYPE.CREATOR })
      .sort({
        priority: 1,
      })
      .lean(),
    EarningEstModel.findOne({}),
  ]);

  // const sections = JSON.parse(JSON.stringify(sectionsResponse));
  // const usps = JSON.parse(JSON.stringify(uspsResponse));
  const faqs = JSON.parse(JSON.stringify(faqsResponse)) as IFaq[];
  const earningEst = JSON.parse(
    JSON.stringify(earningEstResponse)
  ) as IEarningEst;

  // console.log({sections, usps, faqs});

  const bannerUsps = [
    {
      title: "There’s nothing else like KNKY.",
      subTitle:
        "The game-changer social adult platform you’ve been begging for! Unmatched value and cutting-edge features tailored to you! 🚀",
      isShowButton: true,
      buttonLabel: "Try Beta now",
      buttonLink: "https://knky.co/fresh/",
    },
  ];

  const notifyUsps = [
    {
      title: "1 Month Free – No Fees, Full Pro Access!",
      subTitle:
        "Try our Beta and enjoy 30 days risk-free with zero platform fees, full Pro Creator access, and a blue check. Earn 5% for life on Creator referrals, unlock exclusive features, and get personalised support from your account manager, all while shaping the platform to suit you!",
      isShowButton: true,
      buttonLabel: "Join Beta now",
      buttonLink: "https://knky.co/fresh/",
      img: "/creator/creator-notify/1.png",
    },
  ];

  const platforms = [
    {
      title: "Join us as a Fan",
      subTitle:
        "If your looking to find creators, niche matches, live events and rewards, then look no further!",
      img: "/creator/platform/1.png",
      // img: "/fan-platform/2.png",
      isShowButton: true,
      buttonLabel: "Discover",
      buttonLink: "/fans",
    },
    {
      title: "Grow your Agency",
      subTitle:
        "Take your business to the next level with innovative tools designed for seamless management of employees and creators. Simplify operations and maximise productivity.",
      img: "/creator/platform/2.png",
      isShowButton: true,
      buttonLabel: "Discover",
      buttonLink: "https://agency.knky.co/",
    },
    {
      title: "Business Account",
      subTitle:
        "Maximise your business potential with KNKY. Sell physical and digital products, connect with fans, and collaborate with creators to grow your reach and revenue.",
      img: "/creator/platform/3.png",
      isShowButton: true,
      buttonLabel: "Discover",
      buttonLink: "https://business.knky.co/",
    },
  ] as IUSPManager[];

  return (
    <Box>
      <CreatorBanner usps={bannerUsps as IUSPManager[]} />
      <SubBanner usps={notifyUsps as IUSPManager[]} />
      {/* <Test /> */}
      <Dive />
      <Feature />
      <YourEarn
        usp={
          {
            isShowButton: true,
            buttonLabel: "Join now",
            buttonLink: "https://knky.co/fresh",
          } as IUSPManager
        }
        earningEst={earningEst}
      />
      <MatchMaker />
      <PrimeSubscription />
      <Verify />
      <Community
        usp={
          {
            title: "🌟 Our community",
            subTitle:
              "Join the KNKY community and  reach new fans effortlessly.",
            img: "/creator/community/1.png",
            isShowButton: true,
            buttonLabel: "Join us today",
            buttonLink: "https://knky.co/fresh/",
          } as IUSPManager
        }
      />
      <Faq
        title="ℹ️ FAQ"
        description="Have questions? Find answers about KNKY here."
        faqs={faqs as IFaq[]}
      />
      <Platform
        usps={platforms}
        title="Looking for Other Opportunities on KNKY?"
      />
    </Box>
  );
}
