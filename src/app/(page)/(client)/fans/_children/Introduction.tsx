import React from "react";
import SectionSlide from "../../_shared/SectionSlide";
import { IUSPManager } from "@/app/api/_entities";
import { Box } from "@mantine/core";

const usps: Partial<IUSPManager>[] = [
  {
    title: "👑 Channels & Collabs",
    subTitle:
      "Subscribe to any Creator’s free or premium channels and their collab profiles, mix & match your favourite content and creators.",
    img: "/introduction/1.png",
  },
  {
    title: "🤩 Match",
    subTitle:
      "Select a few ‘kinks’ to discover your favourite content with MatchTag or find and date like-minded people through MatchMaker.",
    img: "/introduction/2.png",
  },
  {
    title: "🍑 Watch Live & Private Events",
    subTitle:
      "From captivating live streams and intimate one-to-ones to thrilling pay-per-view shows, our creators are here to amaze you!",
    img: "/introduction/3.png",
  },
  {
    title: "💬 You got the Chat?",
    subTitle:
      "Enjoy endless fun with chat; send and receive voice notes, images, videos, and access premium services all in one place.",
    img: "/introduction/4.png",
  },
  {
    title: "🥵 Creator’s Services",
    subTitle:
      "Get direct access to video and audio calls, ratings, custom requests, and so much more to explore across the platform.",
    img: "/introduction/5.png",
  },
  {
    title: "Let the Games Begin",
    subTitle:
      "Do you like to play? So do we. Spin the wheel or open mystery boxes to win unique content and exclusive experiences.",
    img: "/introduction/6.png",
  },
  // {
  //   title: "🎲 Roulette",
  //   subTitle:
  //     "Do you like to play? So do we. Spin the wheel or open mystery boxes to win unique content and exclusive experiences.",
  //   img: "/introduction/6.png",
  // },
  {
    title: "Fantasy",
    subTitle:
      "Design your ultimate fantasy and let creators bring it to life by bidding on it. Choose one or many, it’s all in your control!",
    img: "/introduction/7.png",
  },
  {
    title: "😈 Private shopping",
    subTitle:
      "From digital content to physical products, we’ve got you covered! Shop direct with Creators and brands offering main stream products.",
    img: "/introduction/8.png",
  },
  {
    title: "😎 Private & secure",
    subTitle:
      "KNKY is built for safe, secure browsing. Be as bold as you want, or switch to 'anonymous mode' to hide your identity.",
    img: "/introduction/9.png",
  },
  {
    title: "🤑 Earn cash & rewards",
    subTitle:
      "Invite your favourite Creators to join KNKY and earn 5% of their total earnings (uncapped). Earn cash and rewards while having fun!",
    img: "/introduction/10.png",
  },
];

export function Introduction() {
  return (
    <Box id="Features" py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}>
      <SectionSlide
        title="What is KNKY?"
        subTitle="The first truly adult-only social, dating, and marketplace platform! Get what you want, when you want it. Register now (free, private, and secure) to be among the first to experience the KNKY revolution."
        usps={usps as IUSPManager[]}
        contentProps={{
          bd: "1px solid #EBEBEC",
        }}
        isShowButton={false}
      />
    </Box>
  );
}
