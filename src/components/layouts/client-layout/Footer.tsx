/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import lottie from 'lottie-web';

import footerPay1 from "@public/footer/payment/1.png";
import footerPay2 from "@public/footer/payment/2.png";
import footerPay3 from "@public/footer/payment/3.png";
import footerPay4 from "@public/footer/payment/4.png";
// import footerPay5 from "@public/footer/payment/5.png";
// import footerPay6 from "@public/footer/payment/6.png";

import social1 from "@public/footer/socials/1.svg";
import social2 from "@public/footer/socials/2.svg";
import social3 from "@public/footer/socials/3.svg";
import social4 from "@public/footer/socials/4.svg";
import social5 from "@public/footer/socials/5.svg";
import social6 from "@public/footer/socials/6.svg";
import social7 from "@public/footer/socials/7.svg";

import ellip1 from "@public/footer/ellip1.webp";
import ellip2 from "@public/footer/ellip2.webp";
import ellip3 from "@public/footer/ellip3.webp";

import xmaLogo from "@public/footer/xma-logo.webp";
import xmaBg from "@public/footer/xma-bg.webp";

import smallLogo from "@public/footer/logo.svg";

import flag1 from "@public/footer/flag-1.png";
import flag2 from "@public/footer/flag-2.png";

import SectionButton from "@/components/buttons/SectionButton";
import { motion, useInView } from "framer-motion";

import token from "@public/footer/token.webp";
import { PropsWithChildren, useEffect, useRef } from "react";
import { isNil } from "lodash";

export const socials = [
  {
    icon: social1,
    href: "https://facebook.com/folo",
  },
  {
    icon: social2,
    href: "https://twitter.com/folo",
  },
  {
    icon: social3,
    href: "https://www.instagram.com/folo",
  },
  {
    icon: social4,
    href: "https://www.tiktok.com/@folo",
  },
  {
    icon: social5,
    href: "https://www.reddit.com/user/letsgetknky/",
  },
  {
    icon: social6,
    href: "https://bsky.app/profile/folo.bsky.social",
  },
  {
    icon: social7,
    href: "https://t.me/folo",
  },
];

export const footerList = [
  {
    title: "General",
    children: [
      {
        title: "Community Guidelines",
        href: "https://knky.co/articles/community-guidelines",
      },
      {
        title: "Help Centre",
        href: "https://help.knky.co/en/",
      },
      {
        title: "Feedback Center",
        href: "https://app.getacute.io/v/knky",
      },
      {
        title: "Terms of Service",
        href: "https://knky.co/articles/terms-of-service",
      },
      {
        title: "Contact Us",
        href: "mailto:support@knky.com",
      },
      {
        title: "Blog",
        href: "https://knky.co/fresh/",
      },
    ],
  },
  {
    title: "For Creators & Fans",
    children: [
      {
        title: "About KNKY",
        href: "https://lander.knky.co/",
      },
      {
        title: "Premium Plans",
        href: "https://knky.co/platform-plans",
      },
      {
        title: "Fans & Purchasing Terms",
        href: "https://knky.co/articles/additional-terms-for-fans-buying-creator-content",
      },
      {
        title: "Creator & Collaborator Terms",
        href: "https://knky.co/articles/additional-terms-for-creators-and-collaborators",
      },
    ],
  },
  {
    title: "T&C docs",
    children: [
      {
        title: "Content Moderation Policy",
        href: "https://knky.co/articles/content-moderation-and-protection-policy",
      },
      {
        title: "USC 2257",
        href: "https://knky.co/articles/usc-2257",
      },
      {
        title: "Privacy Policy",
        href: "https://knky.co/articles/privacy-policy",
      },
      {
        title: "Cookie Policy",
        href: "https://knky.co/articles/cookie-policy",
      },
      {
        title: "Complaint Policy",
        href: "https://knky.co/articles/complaint-policy",
      },
      {
        title: "DMCA",
        href: "https://knky.co/articles/dmca-takedown-policy",
      },
    ],
  },
];

export const footerPays = [
  footerPay1,
  footerPay2,
  footerPay3,
  footerPay4,
  // footerPay5,
  // footerPay6
];

const delayStep = 0.3;

export function Footer() {
  const currenYear = new Date().getFullYear();

  const ref = useRef(null);

  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <footer id="footer" className="bg-white overflow-hidden rounded-t-[24px] relative w-full aspect-[1.05340160936] -top-6 pt-6">
      <BackgroundAnimation />

      <FadeInAni isInView={isInView} y={500} delay={delayStep * 3} classname="h-[30%] w-full absolute top-0 left-0 flex justify-center">
        <Image src={ellip3} alt='elipse' className='w-auto h-full object-cover ' />
      </FadeInAni>

      <FadeInAni isInView={isInView} y={500} delay={delayStep * 4} classname="h-[42%] w-full absolute top-0 left-0 flex justify-center">
        <Image src={ellip2} alt='elipse' className='w-auto h-full object-cover ' />
      </FadeInAni>

      <FadeInAni isInView={isInView} y={500} delay={delayStep * 5} classname="h-[55%] w-full absolute top-0 left-0 flex justify-center">
        <Image src={ellip1} alt='elipse' className='w-auto h-full object-cover ' />
      </FadeInAni>

      <Link
        href={"https://www.xbiz.com/news/292013/2025-euro-xma-winners-announced"}
        target="_blank"
        className="absolute top-0 left-[2%] w-[10.4%] aspect-[0.74137931034] group cursor-pointer z-10"
      >
        <Image src={xmaBg} alt="xmaBg" className="w-full h-full object-cover" />
        <Image src={xmaLogo} alt="xmaLogo" className="w-full h-auto object-cover absolute left-0 top-[4%] group-hover:scale-105 transition-all duration-300" />
      </Link>

      <Box className="container" ref={ref}>
        <Flex pos={"relative"} w={"100%"} mt={{ base: 136, md: 80 }} direction={"column"} align={"center"}>
          <Flex pos={"absolute"} top={0} right={0} direction={"column"} gap={{ base: 24 }}>
            {socials.map((s, index) => {
              return (
                <FadeInAni key={index} isInView={isInView} y={150} delay={index * (delayStep / 1.5)}>
                  <Link
                    href={s.href}
                    rel="nofollow"
                    target="blank"
                    className="hover:opacity-70 transition-all duration-200"
                  >
                    <Image
                      src={s.icon}
                      alt="social icons"
                      width={40}
                      height={40}
                      className="w-10 md:w-11 xl:w-12 aspect-square"
                    />
                  </Link>
                </FadeInAni>
              );
            })}
          </Flex>

          <Flex direction={"column"} gap={{ base: 32 }} align={"center"} mb={{ base: 120 }}>
            <Text ta={"center"} fz={{ base: 72 }} fw={600} c={"white"} lh={1.2}>
              <FadeInAni isInView={isInView} >
                The You Platform.
              </FadeInAni>

              <FadeInAni isInView={isInView} delay={delayStep}>
                For Everyone.
              </FadeInAni>
            </Text>

            <FadeInAni isInView={isInView} delay={delayStep * 2}>
              <SectionButton
                show={true}
                title='Join the waitlist'
                w={{ base: 150 }}
                h={{ base: 40 }}
                fz={{ base: 16 }}
                c={"white"}
                fw={600}
                px={0}
                bg={"#376CEC"}
                href='https://knky.co'
              />
            </FadeInAni>
          </Flex>

          <FadeInAni isInView={isInView} delay={delayStep * 3}>
            <Flex w={{ base: "fit-content" }} gap={{ base: 80 }} mb={{ base: 100 }}>
              {footerList.map((f, index) => {
                return (
                  <Flex
                    key={index}
                    justify={{ base: "center", md: index == 0 ? "unset" : (index == 1 ? "center" : "flex-end") }}
                    w={{ base: "fit-content" }}
                  >
                    <Flex
                      w={"fit-content"}
                      direction={"column"}
                      gap={{ base: 4, md: 6, xl: 8 }}
                      align={{ base: "center" }}
                    >
                      <Text c={"#FFFFFF99"} fz={{ base: 13, md: 14, lg: 15, xl: 16 }} lh={1.5}>
                        {f.title}
                      </Text>

                      {f.children.map((child, index) => {
                        return (
                          <a
                            key={index}
                            href={child.href}
                            target="blank"
                            rel="nofollow"
                            className="group relative w-fit text-white text-base md:text-lg xl:text-xl font-medium leading-[1.4] text-center whitespace-nowrap"
                            onClick={
                              child.href.includes("mailto")
                                ? () => {
                                  window.location.href = child.href;
                                }
                                : undefined
                            }
                          >
                            {child.title}
                            <span className="absolute z-10 left-0 -bottom-0.5 h-[1.5px] w-0 bg-[#ccc] transition-all duration-300 group-hover:w-full"></span>
                          </a>
                        );
                      })}
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          </FadeInAni>

          <FadeInAni isInView={isInView} delay={delayStep * 4}>
            <Flex w={{ base: "fit-content" }} gap={{ base: 48 }} mb={{ base: 90 }}>
              {footerPays.map((o, index) => {
                return (
                  <Box key={index} h={{ base: 20, sm: 24, md: 30, lg: 34, xl: 36, "2xl": 40 }}>
                    <Image src={o} alt="payment" className="h-full w-auto" />
                  </Box>
                );
              })}
            </Flex>
          </FadeInAni>

          <FadeInAni delay={0}>
            <Flex direction={"column"} gap={{ base: 4, md: 6, xl: 8 }} align={{ base: "center" }} mb={{ base: 120 }}>
              <Text
                fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }}
                ta={"center"}
                fw={500}
                lh={1.4}
                c={"#FFFFFFCC"}
                className="gap-1.5 hidden md:flex items-center"
              >
                All rights reserved. © {currenYear} FOLO® and
                <Image src={smallLogo} alt="smallLogo" className="h-4 md:h-5 lg:h-6 2xl:h-7 w-auto" />
                logos are registered trademarks.
              </Text>

              <Text
                fz={{ base: 8, sm: 9, md: 10, lg: 11, xl: 12, "2xl": 13 }}
                c={"#FFFFFFCC"}
                lh={1.375}
                ta={{ base: "center", md: "right" }}
                lts={-0.2}
                fw={400}
              >
                <Flex gap={2} align={"center"} c={"#FFFFFFCC"} justify={{ base: "center", md: "flex-end" }}>
                  Social Commerce UK Ltd <Image src={flag1} alt="flag 1" className="h-3 md:h-[14px] lg:h-[15px] 2xl:h-4 w-auto inline" />
                  | 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.UK
                </Flex>

                <Flex gap={2} align={"center"} c={"#FFFFFFCC"} justify={{ base: "center", md: "flex-end" }}>
                  Social Commerce EU Ltd  <Image src={flag2} alt="flag 2" className="h-3 md:h-[14px] lg:h-[15px] 2xl:h-4 w-auto inline" /> 4th Floor, Agios Nikolaos, Kamares , 6037 Larnaca. Cyprus
                </Flex>
              </Text>
            </Flex>
          </FadeInAni>

          {/* <Image src={token} alt="token" className="w-[24%] h-auto object-cover" /> */}

          <Box w={330} h={290} mb={100}>
            <TokenAnimation />
          </Box>

        </Flex>
      </Box>
    </footer>
  );
}


const FadeInAni = ({ classname, isInView, children, delay = 0, y = 100 }: PropsWithChildren<{ classname?: string, delay?: number, isInView?: boolean, y?: number }>) => {
  return (
    <motion.div
      initial={{
        y: y, opacity: 0
      }}
      animate={isInView && { y: 0, opacity: 1 }}
      whileInView={isNil(isInView) ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.8,
        ease: "circOut",
        delay: delay
      }}
      className={classname}
    >
      {children}
    </motion.div>
  );
};

const BackgroundAnimation = () => {
  return (
    <>
      <video
        autoPlay={true}
        playsInline
        loop
        preload="auto"
        controls={false}
        muted={true}
        className="w-full h-full object-cover absolute top-0 left-0 object-bottom"
      >
        <source src={"/footer/layer.mov"} type="video/mp4" />
      </video>
    </>
  );
};

export const TokenAnimation = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const compRef = useRef<any>(null);
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: compRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/json/comp.json',
    });

    return () => animation.destroy(); // Cleanup khi unmount component
  }, []);

  return (
    <div className="relative w-full h-full">
      <motion.div
        animate={{
          y: ["0", "-20%", "0"]
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity
        }}
      >
        <Image
          src={token}
          alt="coin"
          className="object-cover w-[70%] aspect-[0.86046511627] absolute top-1/2 left-1/2 -translate-x-[47%] -translate-y-1/2"
        />

        <div ref={compRef} className="w-full h-full relative" />
      </motion.div>

      {/* <Image
        src={token}
        alt="coin"
        className="w-[90%] h-auto object-cover absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <CircularText /> */}

    </div>
  );
};

// $FOLO 🌕 COMING SOON 🚀 $FOLO 🌕 COMING SOON 🔥

const text = "$FOLO 🌕 COMING SOON 🚀 $FOLO 🌕 COMING SOON 🔥";

export function CircularText() {
  console.log({ test: text.repeat(20) });
  return (
    <svg
      width={240}
      height={320}
      viewBox="0 0 240 320"
      style={{ transform: "rotate(35deg)" }} // 👈 nghiêng cố định
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EEA2FF" />
          <stop offset="100%" stopColor="#376CEC" />
        </linearGradient>

        {/* Ellipse */}
        <path
          id="ellipsePath"
          d="
            M 120,160
            m -90,0
            a 90,130 0 1,1 180,0
            a 90,130 0 1,1 -180,0
          "
        />

        {/* Fade mask */}
        <linearGradient id="fadeMask" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="10%" stopColor="white" stopOpacity="1" />
          <stop offset="90%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <mask id="textFadeMask">
          <rect width="100%" height="100%" fill="url(#fadeMask)" />
        </mask>
      </defs>

      <text
        fontSize="20"
        fontWeight="900"
        letterSpacing="3"
        fill="url(#textGradient)"
        mask="url(#textFadeMask)"
      >
        <motion.textPath
          href="#ellipsePath"
          startOffset="0%"
          animate={{ startOffset: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {text.repeat(3)}
        </motion.textPath>
      </text>
    </svg>
  );
}






// background: linear-gradient(180deg, #EEA2FF 0%, #376CEC 100%);
