import React from "react";
import SectionSlide from "./@shared/SectionSlide";
import { IUSPManager } from "@/app/api/_entities";
import { Flex } from "@mantine/core";

const usps: Partial<IUSPManager>[] = [
  {
    title: "🤩 Match",
    subTitle:
      "No more endless searching! Find your favourite content with MatchTag and connect with real, like-minded people using MatchMaker!",
    img: "/match/1.png",
  },
  {
    title: "🤟 Shows",
    subTitle:
      "Shows that will blow your mind! Create, discover or enjoy private events, live streams, one-on-ones, and pay-per-view.",
    img: "/match/2.png",
  },
  {
    title: " 👑 Channels",
    subTitle:
      "There’s no end to the number of free and premium channels available to every KNKY Creator – so more ‘kinks’ and fun for everyone!",
    img: "/match/3.png",
  },
  {
    title: "👙 Shop",
    subTitle:
      "Browse or create customised shopping channels and auctions for both digital content and physical products.",
    img: "/match/4.png",
  },
  {
    title: "🥵 Engage",
    subTitle:
      "Interact with your favourite Creators to explore their one-of-a-kind experiences. Connect via chat, video calls, and exclusive content!",
    img: "/match/5.png",
  },
  {
    title: "😈 Collaborations",
    subTitle:
      "When Creators join forces, great things can happen! Create and enjoy collaborated content, streams, events, shops, and more!",
    img: "/match/6.png",
  },
];

export function Match() {
  return (
    <Flex w={"100%"} bg={'#1a032f'}>
      <Flex w={"100%"} bg={'white'} pt={{base: 24, }} className="md:rounded-t-[36px] 2xl:rounded-t-[40px]">
        <SectionSlide
          title="Discover ground-breaking features."
          usps={usps as IUSPManager[]}
          contentProps={{}}
          buttonLabel="Build your Agency now!"
          buttonLink="register"
        />
      </Flex>
    </Flex>
  );
}
