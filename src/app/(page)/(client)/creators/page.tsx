import { Box } from "@mantine/core";
import React from "react";
import {
  Community,
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
import { creatorConnections, SECTION_TYPE } from "@/utils";
import { connectDB } from "@/app/api/_db";
import { YourEarn } from "./_children/YourEarn";
import Verify from "./_children/Verify";
import { DeepConnection } from "../fans/_children/DeepConnection";
import { Banner, BannerInfo } from "../_shared/Banner";
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

  const bannerUsp = {
    title: "There’s nothing else like KNKY.",
    subTitle:
      "The game-changer social adult platform you’ve been begging for! Unmatched value and cutting-edge features tailored to you! 🚀",
    isShowButton: true,
    buttonLabel: "Try Beta now",
    buttonLink: "https://knky.co/fresh/",
    videoWebm: '/creator/banner/main.webm',
    videoMp4: '/fan-banner/phone.mp4',
  } as BannerInfo;

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
      title: "Pro Creators",
      subTitle:
        "Unlock exclusive tools, priority features, spending metrics, and advanced insights with KNKY ProCreator. Elevate your content, boost your growth, and stay ahead of the curve. 🚀",
      img: "/creator/platform/2.png",
      isShowButton: true,
      buttonLabel: "Coming soon",
      buttonLink: "https://agency.knky.co/",
    },
    {
      title: "Prime Subscription",
      subTitle:
        "Get access to every Creator and dive into a world of endless excitement. Whether you're new or experienced, your adventure starts here!",
      img: "/creator/platform/3.png",
      isShowButton: true,
      buttonLabel: "Coming soon",
      buttonLink: "https://business.knky.co/",
    },
  ] as IUSPManager[];

  return (
    <Box>
      <Banner usp={bannerUsp} isCreator={true} />

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
      <DeepConnection
        usp={
          {
            title: "Create Long-Lasting Connections",
            subTitle:
              "Chat, call, and create! KNKY gives you the tools to connect with your audience and offer exclusive free and premium services like no other.",
            isShowButton: false,
          } as IUSPManager
        }
        connections={creatorConnections}
      />
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
