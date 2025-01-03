import React from "react";
import SectionSlide from "../../_shared/SectionSlide";
import { IUSPManager } from "@/app/api/_entities";
import { Box } from "@mantine/core";

const usps: Partial<IUSPManager>[] = [
  {
    title: "🤑 20+ Revenue Streams",
    subTitle:
      "Offer multiple subscriptions and engage with fans through our interactive chat, video, voice, matching, requests and games features!",
    img: "/creator/feature/1.png",
  },
  {
    title: "🔥 Customised Services",
    subTitle:
      "Create unique services to elevate your fans' experience, deliver unforgettable moments, and maximise your earnings.",
    img: "/creator/feature/2.png",
  },
  {
    title: "🫦 Posting options",
    subTitle:
      "Share captivating content to highlight your niche/s. Whether it’s media, shop items, events, or livestreams, the possibilities are endless.",
    img: "/creator/feature/3.png",
  },
  {
    title: "🍑 Subs by Price and Niche",
    subTitle:
      "Create multiple channels and collabs tailored to each niche or price point, providing customised subscriptions and compelling upsells.",
    img: "/creator/feature/4.png",
  },
  {
    title: "👑 Pay-To-View",
    subTitle:
      "Share media up to 4k*, and connect with your audience through chats and stories. Unlock endless possibilities with Pay-To-View.",
    img: "/creator/feature/5.png",
  },
  {
    title: "🤟 Live & events",
    subTitle:
      "Easily go live or host ticketed events, pay-per-view streams, or intimate one-to-one sessions. Connect with your fans like never before!",
    img: "/creator/feature/6.png",
  },
  {
    title: "🧿 Get the insights",
    subTitle:
      "Effortlessly manage fans, track finances, and monitor performance to optimise your content and grow your success.",
    img: "/creator/feature/7.png",
  },
  {
    title: "🤩 Get Matched",
    subTitle:
      "A game-changing tool that connects you with fans seeking services and entertainment aligned with what you offer.",
    img: "/creator/feature/8.png",
  },
  {
    title: "🧿 Unlimited Vault",
    subTitle:
      "Upload your entire archive content from other platforms to keep your back catalogue ready to go. Effortlessly organise and reuse without limits.",
    img: "/creator/feature/9.png",
  },
  {
    title: "👙 Sell your own items",
    subTitle:
      "Boost your earnings with Stores! Offer fans a chance to own a piece of you by selling your items through fixed pricing or auction formats.",
    img: "/creator/feature/10.png",
  },
  {
    title: "😈 Collaborate",
    subTitle:
      "Take your creativity to the next level by collaborating with fellow creators on KNKY! Set up joint accounts to share revenues effortlessly.",
    img: "/creator/feature/11.png",
  },
  {
    title: "🤑 Games",
    subTitle:
      "Take your creativity to the next level by collaborating with fellow creators on KNKY! Set up joint accounts to share revenues effortlessly.",
    img: "/creator/feature/12.png",
  },
  {
    title: "🍭 Roulette",
    subTitle:
      "Take your creativity to the next level by collaborating with fellow creators on KNKY! Set up joint accounts to share revenues effortlessly.",
    img: "/creator/feature/13.png",
  },
  {
    title: "️💦 Fantasy",
    subTitle:
      "Take your creativity to the next level by collaborating with fellow creators on KNKY! Set up joint accounts to share revenues effortlessly.",
    img: "/creator/feature/14.png",
  },
];

export function Feature() {
  return (
    <Box
      id="WhyIsKnky"
      py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      bg={"#F5F5F6"}
    >
      <SectionSlide
        title="Let us show you what sets us apart.💰"
        subTitle="The first truly adults-only social creator marketplace where you’ll stand out, earn more with low fees, and enjoy unrivalled visibility. With unique tools, engaging games, and reliable pay-outs, it’s the one place where fans find exactly what they want, and where you can grow your business."
        usps={usps as IUSPManager[]}
        contentProps={{
          bg: "#fff",
        }}
        isShowButton={false}
      />
    </Box>
  );
}
