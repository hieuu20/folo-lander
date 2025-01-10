"use client";

import React from "react";
import imgTitle1 from "@public/creator/match-maker/1/title.png";
import imgTitle2 from "@public/creator/match-maker/2/title.png";
import imgTitle3 from "@public/creator/match-maker/3/title.png";
import imgTitle4 from "@public/creator/match-maker/4/title.png";
import { MatchMakerComponent } from "../../_shared/MatchMakerComponent";

const data = [
  {
    titleImg: imgTitle1,
    subTitle:
      "It's like Tinder for creators! Fans can find and match with you based on kinks and interests, whether it's the GF experience or a niche. Match makes connecting fun, familiar, and easy! 😈",
    img: "/creator/match-maker/1/img.png",
    video: "/creator/match-maker/1/video.webm",
    bg: "#490089",
    videoMp4: "/match-maker/1/video.mp4",
  },
  {
    titleImg: imgTitle2,
    subTitle:
      "Let fans enjoy the fun, whether you're online or offline, with our gamification features. It makes purchasing content and services easy and engaging 24/7, boosting your AVO. 🎮",
    img: "/creator/match-maker/2/img.png",
    video: "/creator/match-maker/2/video.webm",
    bg: "#3D0171",
    videoMp4: "/creator/match-maker/2/video.mp4",
  },
  {
    titleImg: imgTitle3,
    subTitle:
      "KNKY takes interactivity to the next level with ratings, roulette videos, live calls, custom requests, and the chance to connect with creators who share your passions. ❤️",
    img: "/creator/match-maker/3/img.png",
    video: "/creator/match-maker/3/video.webm",
    bg: "#280349",
    videoMp4: "/match-maker/3/video.mp4",
  },
  {
    titleImg: imgTitle4,
    subTitle:
      "KNKY is built on two core values: quality connections and revenue. We offer seven ways to be discovered and matched, along with over twenty revenue streams, driving sales and earnings like no other platform. 🤑",
    img: "/creator/match-maker/4/img.png",
    // video: "/creator/match-maker/3/video.webm",
    bg: "#1A022F",
  },
];

export const MatchMaker = () => {
  return <MatchMakerComponent data={data} />;
};