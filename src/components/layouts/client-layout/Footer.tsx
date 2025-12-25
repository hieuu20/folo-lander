"use client";

import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

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

import xma from "@public/footer/xma.webp";

import smallLogo from "@public/footer/logo.svg";

import flag1 from "@public/footer/flag-1.png";
import flag2 from "@public/footer/flag-2.png";

import SectionButton from "@/components/buttons/SectionButton";
import { motion, useInView } from "framer-motion";

import token from "@public/footer/test.png";
import { PropsWithChildren, useRef } from "react";
import { isNil } from "lodash";

const socials = [
  {
    icon: social1,
    href: "https://facebook.com/folow",
  },
  {
    icon: social2,
    href: "https://twitter.com/folow",
  },
  {
    icon: social3,
    href: "https://www.instagram.com/folow",
  },
  {
    icon: social4,
    href: "https://www.tiktok.com/@folow",
  },
  {
    icon: social5,
    href: "https://www.reddit.com/user/letsgetknky/",
  },
  {
    icon: social6,
    href: "https://bsky.app/profile/folow.bsky.social",
  },
  {
    icon: social7,
    href: "https://t.me/folow",
  },
];

const footerList = [
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

const footerPays = [
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

  console.log({ isInView });

  return (
    <footer className="bg-white overflow-hidden rounded-t-[24px] relative w-full aspect-[1.05340160936] -top-6 pt-6">
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

      {/* <Image src={ellip3} alt='elipse' className='w-auto h-[30%] absolute top-0 left-1/2 -translate-x-1/2 object-cover' />
      <Image src={ellip2} alt='elipse' className='w-auto h-[42%] absolute top-0 left-1/2 -translate-x-1/2 object-cover' />
      <Image src={ellip1} alt='elipse' className='w-auto h-[55%] absolute top-0 left-1/2 -translate-x-1/2 object-cover' /> */}

      <Link
        href={"https://www.xbiz.com/news/292013/2025-euro-xma-winners-announced"}
        target="_blank"
        className="absolute top-0 left-[2%] w-[10.4%]"
      >
        <Image src={xma} alt="xma" className="w-full h-auto object-cover" />
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

          <Image src={token} alt="token" className="w-[24%] h-auto object-cover" />

          {/* <Box w={"24%"}>
            <TokenAnimation />
          </Box> */}

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

// const TokenAnimation = () => {
//   return (
//     <div className="relative w-[260px] h-[260px]">
//       {/* <Image
//         src={token}
//         alt="coin"
//         className="w-full h-full object-contain"
//       /> */}

//       <CircularText
//         text="COMING SOON 🔥 COMING SOON 🔥 COMING SOON 🔥 "
//         duration={14}
//       />
//     </div>
//   )
// }

// export function CircularText({
//   text,
//   size = 260,
//   duration = 12,
// }: {
//   text: string
//   size?: number
//   duration?: number
// }) {
//   const radius = size / 2 - 20

//   return (
//     <div
//       className="relative w-[260px] h-[260px]"
//       style={{
//         perspective: '800px',
//       }}
//     >
//       <motion.svg
//         width={260}
//         height={260}
//         viewBox="0 0 260 260"
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 14,
//           repeat: Infinity,
//           ease: 'linear',
//         }}
//         style={{
//           transformStyle: 'preserve-3d',
//           transform: 'rotateX(55deg) rotateZ(-25deg)',
//         }}
//         className="absolute inset-0"
//       >
//         <defs>
//           <path
//             id="circlePath"
//             d="
//           M 130,130
//           m -100,0
//           a 100,100 0 1,1 200,0
//           a 100,100 0 1,1 -200,0
//         "
//           />
//         </defs>

//         <text
//           fill="#7C6CFF"
//           fontSize="18"
//           fontWeight="600"
//           letterSpacing="4"
//         >
//           <textPath href="#circlePath">
//             COMING SOON 🔥 $FOLO 🔥 COMING SOON
//           </textPath>
//         </text>
//       </motion.svg>
//     </div>

//   )
// }