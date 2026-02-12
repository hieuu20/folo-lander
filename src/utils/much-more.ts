import muchMore1 from "@public/much-more/1.webp";
import muchMore2 from "@public/much-more/2.webp";
import muchMore3 from "@public/much-more/3.webp";
import muchMore4 from "@public/much-more/4.webp";
import muchMore5 from "@public/much-more/5.webp";
import muchMore6 from "@public/much-more/6.webp";
import muchMore7 from "@public/much-more/7.webp";
import muchMore8 from "@public/much-more/8.webp";
import muchMore9 from "@public/much-more/9.png";
import muchMore9Mb from "@public/much-more/9-img-mb.png";

import muchMore9Icon from "@public/much-more/9-icon.png";
import button8Mb from "@public/much-more/8-bt-mb.png";
import button9Mb from "@public/much-more/9-bt-mb.png";

import button8Pc from "@public/much-more/8-bt-pc.png";
import button9Pc from "@public/much-more/9-bt-pc.png";

import { StaticImageData } from "next/image";

export interface More {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
  backgroundColor: string;
  titleColor: string;
  dscColor: string;
  backgroundRadiant?: string;
  backgroundImg?: string;
  absolute?: { bottom?: boolean; right?: boolean };
  larger?: boolean;
  isCommingSoon?: boolean;
  isAi?: boolean;
  icon?: StaticImageData;
  buttonImgPc?: StaticImageData;
  buttonImgMb?: StaticImageData;
  imgMb?: StaticImageData;
}

export const moreList: More[] = [
  {
    id: 1,
    title: "Subscriptions, made simple.",
    description:
      "Create flexible subscriptions with channels, collabs, and niche audiences.",
    img: muchMore1,
    backgroundColor: "#E6F3FF",
    titleColor: "#131416",
    dscColor: "#4D5053",
  },
  {
    id: 2,
    title: "Public and Private Price Plans.",
    description:
      "Reward your biggest fans with exclusive deals and private access.",
    img: muchMore2,
    backgroundColor: "#D0CBFF",
    titleColor: "#131416",
    dscColor: "#4D5053",
  },
  {
    id: 3,
    title: "Pay-To-View Experiences.",
    description:
      "Monetize individual posts, drops, or premium exclusives on your terms.",
    img: muchMore3,
    backgroundColor: "#171916",
    titleColor: "#fff",
    dscColor: "#FFFFFFCC",
    absolute: { bottom: true, right: false },
  },
  {
    id: 4,
    title: "The Platform for Everyone.",
    description:
      "Express every side of you, with controls that let fans choose their experience.",
    img: muchMore4,
    backgroundColor: "#2C3086",
    titleColor: "#fff",
    dscColor: "#FFFFFFCC",
    larger: true,
    absolute: { bottom: false, right: true },
  },
  {
    id: 5,
    title: "Collaboration, Reimagined",
    description:
      "Why just tag your partners when you can share content, products, and revenue.",
    img: muchMore5,
    backgroundColor: "",
    titleColor: "#fff",
    dscColor: "#FFFFFFCC",
    backgroundImg: "/much-more/bg5.webp",
  },
  {
    id: 6,
    title: "Create your own Services",
    description:
      "Offer paid calls, messaging, ratings, and custom requests with flexible pricing options.",
    img: muchMore6,
    backgroundColor: "#2F5DCB",
    titleColor: "#fff",
    dscColor: "#FFFFFFCC",
    absolute: { bottom: true, right: false },
  },
  {
    id: 7,
    title: "Value Added Features",
    description:
      "No third parties – just powerful tools and benefits for creators, brands and users.",
    img: muchMore7,
    backgroundColor: "",
    titleColor: "#fff",
    dscColor: "#FFFFFFCC",
    backgroundRadiant: "linear-gradient(180deg, #376CEC 28.81%, #CADAFF 100%)",
    absolute: { bottom: true, right: true },
    larger: true,
  },
  {
    id: 8,
    title: "Anti Screenshot",
    description:
      "Prevents screenshots and screen recordings to protect your content.",
    img: muchMore8,
    backgroundColor: "",
    titleColor: "#fff",
    dscColor: "#FFFFFFCC",
    backgroundImg: "/much-more/bg8.webp",
    isCommingSoon: true,
    buttonImgPc: button8Pc,
    buttonImgMb: button8Mb,
    absolute: { bottom: true, right: false },
  },

  {
    id: 9,
    title: "AI-Driven Affiliate",
    description:
      "AI promotes brand products in your public content - you earned % view-share.",
    img: muchMore9,
    backgroundColor: "",
    titleColor: "#fff",
    dscColor: "#FFFFFFCC",
    backgroundImg: "/much-more/bg9.webp",
    isCommingSoon: true,
    buttonImgPc: button9Pc,
    buttonImgMb: button9Mb,
    icon: muchMore9Icon,
    isAi: true,
    imgMb: muchMore9Mb,
  },
];
