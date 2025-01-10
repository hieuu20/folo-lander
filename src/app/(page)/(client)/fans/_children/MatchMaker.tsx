"use client";

import React from "react";
import imgTitle1 from "@public/match-maker/1/title.png";
import imgTitle2 from "@public/match-maker/2/title.png";
import imgTitle3 from "@public/match-maker/3/title.png";
import imgTitle4 from "@public/match-maker/4/title.png";
import { MatchMakerComponent } from "../../_shared/MatchMakerComponent";

const data = [
  {
    titleImg: imgTitle1,
    subTitle:
      "With Match, discover creators who match your mood, connect, chat, and bond with like-minded people. Whether it's a soulmate, KNKY companion, or just some fun, it’s all here! 😈",
    img: "/match-maker/1/img.png",
    bg: "#490089",
    video: "/match-maker/1/video.webm",
    videoMp4: "/match-maker/1/video.mp4",
  },
  {
    titleImg: imgTitle2,
    subTitle:
      "Enjoy endless fun with features like Spin the Wheel, Mystery Boxes, and KNKY Roulette, making it exciting for both creators and fans to discover content. 🎮",
    img: "/match-maker/2/img.png",
    bg: "#3D0171",
    video: "/match-maker/2/video.webm",
    videoMp4: "/match-maker/2/video.mp4",
  },
  {
    titleImg: imgTitle3,
    subTitle:
      "KNKY takes interactivity to the next level with ratings, roulette videos, live calls, custom requests, and the chance to connect with creators who share your passions. ❤️",
    img: "/match-maker/3/img1.png",
    bg: "#280349",
    video: "/match-maker/3/video.webm",
    videoMp4: "/match-maker/3/video.mp4",
  },
  {
    titleImg: imgTitle4,
    subTitle:
      "Shop till you drop on KNKY, where creators offer everything from bespoke items to auctions. With well-known stores and personalized products, there's never a dull moment! 🛍",
    img: "/match-maker/4/img.png",
    bg: "#1A022F",
    video: "/match-maker/4/video.webm",
    videoMp4: "/match-maker/4/video.mp4",
  },
];

export const MatchMaker = () => {
  return <MatchMakerComponent data={data} />;
};
