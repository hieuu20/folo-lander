import { Box } from "@mantine/core";
import React from "react";
import {
  Community,
  DeepConnection,
  FanBanner,
  Introduction,
  MatchMaker,
  PrimeSubscription,
} from "./_children";
import { FAQModel, IFaq, IUSPManager } from "@/app/api/_entities";
import { SubBanner } from "../_shared/SubBanner";
import { Platform } from "../_shared/Platform";
import { Faq } from "../_shared/Faq";
import { SECTION_TYPE } from "@/utils";
import { connectDB } from "@/app/api/_db";
// import { SECTION_TYPE } from "@/utils";
// import { CompareTableModel, SectionModel, USPManagerModel } from "@/app/api/_entities";
// import { SECTION_TYPE } from "@/utils/enum";

export default async function Page() {
  await connectDB();
  const [
    // sectionsResponse,
    // uspsResponse,
    faqsResponse,
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
    FAQModel.find({ type: SECTION_TYPE.USER })
      .sort({
        priority: 1,
      })
      .lean(),
  ]);

  // const sections = JSON.parse(JSON.stringify(sectionsResponse));
  // const usps = JSON.parse(JSON.stringify(uspsResponse));
  const faqs = JSON.parse(JSON.stringify(faqsResponse)) as IFaq[];

  // console.log({sections, usps, faqs});

  const bannerUsps = [
    {
      title: "Step into KNKY!",
      subTitle:
        "Your ultimate destination to connect with creators, uncover unique stores, and meet like-minded individuals for truly unforgettable experiences, only on KNKY. 😉",
      isShowButton: true,
      buttonLabel: "Try Beta now",
      buttonLink: "https://knky.co/fresh/",
    },
  ];

  const notifyUsps = [
    {
      title: "Enjoy FREE Prime Access on Us!",
      subTitle:
        "Join KNKY’s beta and enjoy a month of free content from all creators. Claim your Prime badge, unlock exclusive features, and shape the platform with your feedback. Plus, earn 5% lifetime earnings from creator referrals. Don’t miss out—secure your perks now!",
      isShowButton: true,
      buttonLabel: "Join Beta now",
      buttonLink: "https://knky.co/fresh/",
      img: "/fan-notify/1.png",
    },
  ];

  const platforms = [
    {
      title: "Become a Creator",
      subTitle:
        "Join a revolutionary adult platform today. Sign up in minutes to unlock earning potential, unmatched visibility, the most advanced monetisation tools, and low fees.",
      img: "/fan-platform/1.png",
      isShowButton: true,
      buttonLabel: "Discover",
      buttonLink: "/creators",
    },
    {
      title: "MatchMaker",
      subTitle:
        "Find your perfect match, spark connections, and dive into conversations with like-minded people. Whether you're looking for a soulmate, a KNKY companion, or just a bit of fun, it’s all here! 😈",
      img: "/fan-platform/2.png",
      isShowButton: true,
      buttonLabel: "Coming soon",
      buttonLink: "/",
    },
    {
      title: "Prime Subscription",
      subTitle:
        "Get access to every Creator and dive into a world of endless excitement. Whether you're new or experienced, your adventure starts here!",
      img: "/fan-platform/3.png",
      isShowButton: true,
      buttonLabel: "Coming soon",
      buttonLink: "/",
    },
  ] as IUSPManager[];

  return (
    <Box>
      <FanBanner usps={bannerUsps as IUSPManager[]} />
      <SubBanner usps={notifyUsps as IUSPManager[]} />
      {/* <Test /> */}
      <Introduction />
      <PrimeSubscription />
      <MatchMaker />
      <DeepConnection
        usp={
          {
            title: "Deep Connections",
            subTitle:
              "Chat, call, and play! KNKY lets you and your favourite creators unlock a world of endless possibilities with exclusive free and premium features like no other.",
            isShowButton: false,
          } as IUSPManager
        }
      />
      <Community
        usp={
          {
            isShowButton: true,
            buttonLabel: "Try Beta now",
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
