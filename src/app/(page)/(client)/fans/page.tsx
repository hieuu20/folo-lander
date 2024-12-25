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
import { IFaq, IUSPManager } from "@/app/api/_entities";
import { SubBanner } from "../_shared/SubBanner";
import { Platform } from "../_shared/Platform";
import { Faq } from "../_shared/Faq";
// import { Test } from "./_children/Test";
// import { SECTION_TYPE } from "@/utils";
// import { CompareTableModel, SectionModel, USPManagerModel } from "@/app/api/_entities";
// import { SECTION_TYPE } from "@/utils/enum";

export default async function Page() {
  // const [sectionsResponse, uspsResponse, faqsResponse ] = await Promise.all([
  //   SectionModel.find({ type: SECTION_TYPE.USER })
  //     .sort({
  //       priority: 1,
  //     })
  //     .lean(),
  //   USPManagerModel.find({ type: SECTION_TYPE.USER })
  //     .sort({
  //       priority: 1,
  //     })
  //     .lean(),
  //   FAQModel.find({ type: SECTION_TYPE.USER })
  //     .sort({
  //       priority: 1,
  //     })
  //     .lean(),
  // ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const sections = JSON.parse(JSON.stringify(sectionsResponse));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const usps = JSON.parse(JSON.stringify(uspsResponse));
  // const faqs = JSON.parse(JSON.stringify(faqsResponse)) as IFaq[];

  // console.log({sections, usps});

  const bannerUsps = [
    {
      title: "Social media made for adults.",
      subTitle:
        "Your ultimate destination to connect with creators, uncover unique stores, and meet like-minded individuals for truly unforgettable experiences. 😉",
      isShowButton: true,
      buttonLabel: "Try Beta now",
      buttonLink: "https://beta.knky.co/",
    },
  ];

  const notifyUsps = [
    {
      title: "Enjoy FREE Prime Access on Us!",
      subTitle:
        "Join KNKY’s beta and enjoy a month of free content from all creators. Claim your Prime badge, unlock exclusive features, and shape the platform with your feedback. Plus, earn 5% lifetime earnings from creator referrals. Don’t miss out—secure your perks now!",
      isShowButton: true,
      buttonLabel: "Join Beta now",
      buttonLink: "https://beta.knky.co/",
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
      title: "Grow your Agency",
      subTitle:
        "Take your business to the next level with innovative tools designed for seamless management of employees and creators. Simplify operations and maximise productivity.",
      img: "/fan-platform/2.png",
      isShowButton: true,
      buttonLabel: "Discover",
      buttonLink: "https://agency.knky.co/",
    },
    {
      title: "Business Account",
      subTitle:
        "Maximise your business potential with KNKY. Sell physical and digital products, connect with fans, and collaborate with creators to grow your reach and revenue.",
      img: "/fan-platform/3.png",
      isShowButton: true,
      buttonLabel: "Discover",
      buttonLink: "https://business.knky.co/",
    },
  ] as IUSPManager[];

  const faqs = [
    {
      question: "How to create an account on KNKY?",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever. /n When an unknown printer took a galley.",
    },
    {
      question: "How to create an account on KNKY?",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever. /n When an unknown printer took a galley.",
    },
    {
      question: "How to create an account on KNKY?",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever. /n When an unknown printer took a galley.",
    },
    {
      question: "How to create an account on KNKY?",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever. /n When an unknown printer took a galley.",
    },
    {
      question: "How to create an account on KNKY?",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever. /n When an unknown printer took a galley.",
    },
  ];

  return (
    <Box>
      <FanBanner usps={bannerUsps as IUSPManager[]} />
      {/* <Test /> */}
      <SubBanner usps={notifyUsps as IUSPManager[]} />
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
            buttonLink: "https://beta.knky.co/",
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
