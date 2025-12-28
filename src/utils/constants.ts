import avatar1 from "@public/slogan/feature/2/avatar1.png";
import avatar2 from "@public/slogan/feature/2/avatar2.png";
import avatar3 from "@public/slogan/feature/2/avatar3.png";
import avatar4 from "@public/slogan/feature/2/avatar4.png";
import avatar5 from "@public/slogan/feature/2/avatar5.png";
import avatar6 from "@public/slogan/feature/2/avatar6.png";
import avatar7 from "@public/slogan/feature/2/avatar7.png";
import avatar8 from "@public/slogan/feature/2/avatar8.png";

import muchMore1 from "@public/much-more/1.webp";
import muchMore2 from "@public/much-more/2.webp";
import muchMore3 from "@public/much-more/3.webp";
import muchMore4 from "@public/much-more/4.webp";
import muchMore5 from "@public/much-more/5.webp";
import muchMore6 from "@public/much-more/6.webp";
import muchMore7 from "@public/much-more/7.webp";

import proTick from "@public/icons/pro-tick.svg";
import premiumTick from "@public/icons/premium-tick.svg";
import blackTick from "@public/icons/black-tick.svg";
import { StaticImageData } from "next/image";

export const HEADER_HEIGHT_MB = "64";

export const HEADER_HEIGHT_PC = "80";

export const CARTS_KEY = "carts";

export const STORAGE_KEY = {
  COOKIE_SETTING: "COOKIE_SETTING",
  APP_INSTALLED: "APP_INSTALLED",
  CARTS: "CARTS",
};

export const loadingTime = 1.2;

export const TIME_FORMAT = "HH:mm MMM DD,YYYY";
export const DATE_FORMAT = "DD MMM, YYYY";

export const TEXT_ANIMATION_DELAY = 0.02;

export const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const partnerOptions = [
  {
    label: "Wholesalers",
    value: "Wholesalers",
  },
  {
    label: "Retailers",
    value: "Retailers",
  },
  {
    label: "Festivals",
    value: "Festivals",
  },
  {
    label: "Activations",
    value: "Activations",
  },
  {
    label: "Shows",
    value: "Shows",
  },
  {
    label: "Press",
    value: "Press",
  },
  {
    label: "Custom items",
    value: "Custom items",
  },
  {
    label: "Something else",
    value: "Something else",
  },
];

export const headerItem = [
  {
    title: "Fans",
    keyActive: "Fans",
    href: "/fans",
  },
  {
    title: "Creators",
    keyActive: "Creators",
    href: "/creators",
  },
];

export const fanHeaderItem = [
  {
    title: "Why KNKY?",
    keyActive: "why",
    href: "#Introduction",
  },
  {
    title: "Prime",
    keyActive: "Creators",
    href: "#Prime",
  },
  {
    title: "Features",
    keyActive: "Features",
    href: "#Features",
  },
  // {
  //     title: 'MatchMaker',
  //     keyActive: 'Creators',
  //     href: '#MatchMaker',
  // },
  {
    title: "Connections",
    keyActive: "Connections",
    href: "#Connections",
  },
  {
    title: "FAQs",
    keyActive: "Creators",
    href: "#FAQs",
  },
];

export const creatorHeaderItem = [
  {
    title: "Why KNKY?",
    keyActive: "Why",
    href: "#WhyIsKnky",
  },
  {
    title: "Earning Est",
    keyActive: "Earning",
    href: "#Earning",
  },
  {
    title: "Features",
    keyActive: "Features",
    href: "#Connections",
  },
  {
    title: "ProCreator",
    keyActive: "ProCreator",
    href: "#ProCreator",
  },
  {
    title: "FAQs",
    keyActive: "FAQs",
    href: "#FAQs",
  },
];

export interface ICategoryParent {
  key: number;
  title: string;
}
export const categoryParents: ICategoryParent[] = [
  {
    key: 1,
    title: "Beverages",
  },
  {
    key: 2,
    title: "Accessoires",
  },
  {
    key: 3,
    title: "Merch",
  },
];

export interface Cmt {
  avatar: StaticImageData;
  name: string;
  text: string;
  icons: StaticImageData[];
}
export const cmts: Cmt[] = [
  {
    avatar: avatar1,
    name: "Naka Cuto",
    text: "Thanks! Just text you~",
    icons: [proTick],
  },
  {
    avatar: avatar2,
    name: "Khalim",
    text: "It looks perfect! 🔥🔥🔥",
    icons: [blackTick, premiumTick],
  },
  {
    avatar: avatar3,
    name: "Cristina",
    text: "Do you have a pink one?",
    icons: [blackTick],
  },
  {
    avatar: avatar4,
    name: "Leonie Casha",
    text: "65% discount. What’s a deal 💋🥳",
    icons: [blackTick, premiumTick],
  },
  {
    avatar: avatar5,
    name: "Sandra",
    text: "Does it suitable for runner?",
    icons: [proTick],
  },
  {
    avatar: avatar6,
    name: "Khalim",
    text: "How many sizes does it come in?",
    icons: [blackTick, premiumTick],
  },
  {
    avatar: avatar7,
    name: "Kimme",
    text: "🤩🤩🤩",
    icons: [blackTick],
  },
  {
    avatar: avatar8,
    name: "Annie",
    text: "Love it 😘",
    icons: [blackTick, premiumTick],
  },
];

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
    title: "Live, Sales and Events.",
    description:
      "Host live streams, live sales, and ticketed events built to engage and convert.",
    img: muchMore4,
    backgroundColor: "#2C3086",
    titleColor: "#fff",
    dscColor: "#FFFFFFCC",
    absolute: { bottom: true, right: false },
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
];
