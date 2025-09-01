import img1 from "@public/version-3/unlimited/1.png";
import img2 from "@public/version-3/unlimited/2.png";
import img3 from "@public/version-3/unlimited/3.png";
import img4 from "@public/version-3/unlimited/4.png";
import img5 from "@public/version-3/unlimited/5.png";
import img6 from "@public/version-3/unlimited/6.png";
import img7 from "@public/version-3/unlimited/7.png";
import img8 from "@public/version-3/unlimited/8.png";
import img9 from "@public/version-3/unlimited/9.png";
import img10 from "@public/version-3/unlimited/10.png";
import img11 from "@public/version-3/unlimited/11.png";
import img12 from "@public/version-3/unlimited/12.png";
import img13 from "@public/version-3/unlimited/13.png";
import img14 from "@public/version-3/unlimited/14.png";

import popupImg1 from "@public/version-3/unlimited/popup/1.webp";
import popupImg2 from "@public/version-3/unlimited/popup/2.webp";
import popupImg3 from "@public/version-3/unlimited/popup/3.webp";
import popupImg4 from "@public/version-3/unlimited/popup/4.webp";
import popupImg5 from "@public/version-3/unlimited/popup/5.webp";
import popupImg6 from "@public/version-3/unlimited/popup/6.webp";
import popupImg7 from "@public/version-3/unlimited/popup/7.webp";
import popupImg8 from "@public/version-3/unlimited/popup/8.webp";
import popupImg9 from "@public/version-3/unlimited/popup/9.webp";
import popupImg10 from "@public/version-3/unlimited/popup/10.webp";
import popupImg11 from "@public/version-3/unlimited/popup/11.webp";
import popupImg12 from "@public/version-3/unlimited/popup/12.webp";
import popupImg13 from "@public/version-3/unlimited/popup/13.webp";
import popupImg14 from "@public/version-3/unlimited/popup/14.webp";
import { StaticImageData } from "next/image";

export interface IUnlimited {
  id: number;
  img: StaticImageData;

  title: string;
  description: string;
  buttonTitle?: string;
  buttonLink?: string;

  popupTitle: string;
  popupDescription: string;
  popupButtonTitle: string;
  popupButtonLink: string;
  popupImg: StaticImageData;
  popupButtonColor?: string;

  x: string | number;
  y: string;
  rotate: number;
  priority: number;
}

export const unlimitedList: IUnlimited[] = [
  {
    id: 1,
    img: img1,
    title: "Subscription",
    description: "Create multiple channels and collab profiles.",

    popupTitle: "Subscription",
    popupDescription:
      "Multi-level subscriptions for every niche and price point. Build custom channels and collabs with upsells that keep fans engaged.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg1,

    x: "-80%",
    y: "60%",
    rotate: -10,
    priority: 1,
  },
  {
    id: 2,
    img: img2,
    title: "Messaging",
    description: "Get closer with private 1-on-1 chats.",

    popupTitle: "Messaging",
    popupDescription:
      "Chat, share media, and calls all while monetising every interaction. Personalised conversations that build loyalty and revenue.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg2,

    x: "-40%",
    y: "30%",
    rotate: -5,
    priority: 1,
  },
  {
    id: 3,
    img: img3,
    title: "Pay to View",
    description: "Lock content behind a paywall",

    popupTitle: "Pay to View",
    popupDescription:
      "Share content in up to 4K with flexible pricing. Unlock clips, stories, and drops with instant pay-per-view access.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg3,

    x: 0,
    y: "50%",
    rotate: 0,
    priority: 1,
  },
  {
    id: 4,
    img: img4,
    title: "Live",
    description: "Stream live and connect with fans in real time",

    popupTitle: "Live & Events",
    popupDescription:
      "Host ticketed lives, streams, and private sessions. Sell digital or physical items while connecting in real time.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg4,

    x: "40%",
    y: "30%",
    rotate: 5,
    priority: 1,
  },
  {
    id: 5,
    img: img5,
    title: "Services",
    description: "Connect with calls, video, requests and more.",

    popupTitle: "Services",
    popupDescription:
      "Offer custom services, ratings, and one-to-one calls or requests. Create experiences fans can’t get anywhere else.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg5,

    x: "80%",
    y: "60%",
    rotate: 10,
    priority: 1,
  },
  {
    id: 6,
    img: img6,
    title: "Shop",
    description: "Sell your products, merch, or extras.",

    popupTitle: "Shopping",
    popupDescription:
      "Sell new and used products in one place. From merch to custom goods, everything you need to earn more.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg6,

    x: "-80%",
    y: "60%",
    rotate: -10,
    priority: 1,
  },
  {
    id: 7,
    img: img7,
    title: "Play",
    description: "Keep fans engaged with unique services.",

    popupTitle: "Play",
    popupDescription:
      "Engage fans with interactive games, roulettes, and fantasy. Turn fun into revenue with unique ways to play.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg7,

    x: "-40%",
    y: "30%",
    rotate: -5,
    priority: 1,
  },
  {
    id: 8,
    img: img8,
    title: "Advanced Analysis",
    description: "Track your growth with insights that matter",

    popupTitle: "Advanced Analytics",
    popupDescription:
      "Track sales, fans, and performance with ease. Insights that help you grow faster, optimise, and scale smarter.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg8,

    x: "0%",
    y: "75%",
    rotate: 0,
    priority: 1,
  },
  {
    id: 9,
    img: img9,
    title: "MatchMaker",
    description: "Match with Creators and like minded people.",
    buttonTitle: "How it works →",
    buttonLink: "https://match.knky.co/",

    popupTitle: "Matchmaker",
    popupDescription:
      "A discovery tool that connects fans with the right creators and like minded people. Matches services and content with what they want.",
    popupButtonTitle: "Join Match →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg9,
    popupButtonColor: "linear-gradient(180deg, #DB5BF0 0%, #7A29CC 100%)",

    x: "40%",
    y: "30%",
    rotate: 5,
    priority: 1,
  },
  {
    id: 10,
    img: img10,
    title: "Prime",
    description: "Reach prime members and create unique offers.",
    buttonTitle: "Prime details →",
    buttonLink: "https://prime.knky.co/",

    popupTitle: "Prime",
    popupDescription:
      "Helps fans discover creators, explore new trends, and enjoy content in stunning 4K without time wasted.",
    popupButtonTitle: "Go Prime →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg10,
    popupButtonColor: "#7A29CC",

    x: "80%",
    y: "60%",
    rotate: 10,
    priority: 1,
  },
  {
    id: 11,
    img: img11,
    title: "ProCreator",
    description: "Unlock advanced tools built for serious creators.",
    buttonTitle: "See more →",
    buttonLink: "https://pro.knky.co/",

    popupTitle: "Pro Creator",
    popupDescription:
      "Tools designed for serious creators ready to scale. Everything you need to grow, manage, and increase earnings.",
    popupButtonTitle: "Go Pro →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg11,
    popupButtonColor: "#31A9FF",

    x: "-80%",
    y: "60%",
    rotate: -10,
    priority: 1,
  },
  {
    id: 12,
    img: img12,
    title: "Business",
    description: "Scale your brand with dedicated business features.",
    buttonTitle: "See more →",
    buttonLink: "https://business.knky.co/",

    popupTitle: "Business",
    popupDescription:
      "Dedicated accounts for stores, producers, and brands. Manage sales, services, and campaigns in one platform.",
    popupButtonTitle: "Join Business  →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg12,
    popupButtonColor: "#F1AD00",

    x: "-40%",
    y: "30%",
    rotate: -5,
    priority: 1,
  },
  {
    id: 13,
    img: img13,
    title: "Cash",
    description: "Web3 rewards and  payments with KNKY Cash.",
    buttonTitle: "See more →",
    buttonLink: "https://knky.cash/",

    popupTitle: "Cash",
    popupDescription:
      "Revolutionizing the economy with WEB3 & AI-powered features focused on user rewards, setting the stage for a bold new era today!",
    popupButtonTitle: "Get FREE Airdrop →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg13,

    x: 0,
    y: "100%",
    rotate: 0,
    priority: 1,
  },
  {
    id: 14,
    img: img14,
    title: "AI",
    description: "Use AI tools to boost, analyse, and streamline.",

    popupTitle: "AI",
    popupDescription:
      "Smarter feeds, discovery, and engagement powered by AI. Personalised experiences that grow fans and revenue.",
    popupButtonTitle: "Join KNKY →",
    popupButtonLink: "http://knky.co/",
    popupImg: popupImg14,

    x: "40%",
    y: "30%",
    rotate: 5,
    priority: 1,
  },
  {
    id: 15,
    img: img14,
    title: "",
    description: "",

    popupTitle: "",
    popupDescription: "",
    popupButtonTitle: "",
    popupButtonLink: "",
    popupImg: popupImg4,

    x: "80%",
    y: "60%",
    rotate: 10,
    priority: 1,
  },
];
