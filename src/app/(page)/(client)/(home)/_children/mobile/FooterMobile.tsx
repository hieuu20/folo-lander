/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import ellip1 from "@public/footer/ellip1.webp";
import ellip2 from "@public/footer/ellip2.webp";
import ellip3 from "@public/footer/ellip3.webp";

import xma from "@public/footer/xma.webp";

import smallLogo from "@public/footer/logo.svg";

import flag1 from "@public/footer/flag-1.png";
import flag2 from "@public/footer/flag-2.png";

import { motion, useInView } from "framer-motion";

import { PropsWithChildren, useRef } from "react";
import Marquee from "react-fast-marquee";
import { footerList, footerPays, socials, TokenAnimation } from "@/components/layouts/client-layout/Footer";
import { useDisclosure } from "@/hooks";
import { SignupPopup } from "@/components/Popups";
import { EmailWaitingListInput } from "../../../_shared/EmailWaitingListInput";


const delayStep = 0.2;

export function FooterMobile() {
    const currenYear = new Date().getFullYear();
    const [opened, { open, close }] = useDisclosure();

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <footer id="footer" className="bg-white overflow-hidden rounded-t-[18px] relative w-full aspect-[0.2408477842] -top-6 pt-6">
            <BackgroundAnimation />

            <FadeInAni isInView={isInView} y={500} delay={delayStep * 3} classname="h-[20%] w-full absolute top-0 left-0 flex justify-center">
                <Image src={ellip3} alt='elipse' className='w-auto h-full object-cover ' />
            </FadeInAni>

            <FadeInAni isInView={isInView} y={500} delay={delayStep * 4} classname="h-[32%] w-full absolute top-0 left-0 flex justify-center">
                <Image src={ellip2} alt='elipse' className='w-auto h-full object-cover ' />
            </FadeInAni>

            <FadeInAni isInView={isInView} y={500} delay={delayStep * 5} classname="h-[45%] w-full absolute top-0 left-0 flex justify-center">
                <Image src={ellip1} alt='elipse' className='w-auto h-full object-cover ' />
            </FadeInAni>

            <Link
                href={"https://www.xbiz.com/news/292013/2025-euro-xma-winners-announced"}
                target="_blank"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[23.2%]"
            >
                <Image src={xma} alt="xma" className="w-full h-auto object-cover" />
            </Link>

            <Box className="container" ref={ref}>
                <Flex pos={"relative"} w={"100%"} mt={{ base: 137, md: 80 }} direction={"column"} align={"center"}>

                    <Flex direction={"column"} gap={{ base: 32 }} align={"center"} mb={{ base: 48 }}>
                        <Text ta={"center"} fz={{ base: 40 }} fw={600} c={"white"} lh={1.2}>
                            <FadeInAni isInView={isInView} >
                                The You Platform.
                            </FadeInAni>

                            <FadeInAni isInView={isInView} delay={delayStep}>
                                For Everyone.
                            </FadeInAni>
                        </Text>

                        <FadeInAni isInView={isInView} delay={delayStep * 2}>
                            <EmailWaitingListInput />
                        </FadeInAni>
                    </Flex>

                    <Flex gap={{ base: 12 }} mb={{ base: 48 }}>
                        {socials.map((s, index) => {
                            return (
                                <FadeInAni key={index} isInView={isInView} delay={index * (delayStep / 2) + delayStep * 3}>
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
                                            className="w-9 md:w-11 xl:w-12 aspect-square"
                                        />
                                    </Link>
                                </FadeInAni>
                            );
                        })}
                    </Flex>

                    <Flex direction={"column"} w={{ base: "fit-content" }} align={"center"} gap={{ base: 24 }} mb={{ base: 70 }}>
                        {footerList.map((f, index) => {
                            return (
                                <FadeInAni key={index} isInView={isInView} delay={index * (delayStep / 2) + delayStep * 5}>
                                    <Flex
                                        justify={{ base: "center", md: index == 0 ? "unset" : (index == 1 ? "center" : "flex-end") }}
                                        w={{ base: "fit-content" }}
                                    >
                                        <Flex
                                            w={"fit-content"}
                                            direction={"column"}
                                            gap={{ base: 4, md: 6, xl: 8 }}
                                            align={{ base: "center" }}
                                        >
                                            <Text c={"#FFFFFF99"} fz={{ base: 14, md: 14, lg: 15, xl: 16 }} lh={1.5} mb={6}>
                                                {f.title}
                                            </Text>

                                            {f.children.map((child, index) => {
                                                return (
                                                    <a
                                                        key={index}
                                                        href={child.href}
                                                        target="blank"
                                                        rel="nofollow"
                                                        className="mb-1.5 group relative w-fit text-white text-base md:text-lg xl:text-xl font-medium leading-[1.4] text-center whitespace-nowrap"
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
                                </FadeInAni>
                            );
                        })}
                    </Flex>

                    <FadeInAni isInView={isInView} delay={delayStep * 6}>
                        <Flex w={{ base: "100%" }} gap={{ base: 48 }} mb={{ base: 58 }}>
                            <Marquee
                                direction="right"
                                speed={30}
                                delay={5}
                                play={true}
                                className=""
                                pauseOnHover
                            >
                                {footerPays.map((o, i) => {
                                    return (
                                        <Box key={i} h={{ base: 40 }} px={24}>
                                            <Image src={o} alt="payment" className="h-full w-auto" />
                                        </Box>
                                    );
                                })}
                            </Marquee>
                        </Flex>
                    </FadeInAni>


                    <FadeInAni delay={0}>
                        <Flex direction={"column"} gap={{ base: 4, md: 6, xl: 8 }} align={{ base: "center" }} mb={{ base: 120 }}>
                            <Text
                                fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }}
                                ta={"center"}
                                fw={500}
                                lh={1.4}
                                c={"#D7D7F0"}
                                className="flex flex-col items-center"
                            >
                                All rights reserved. © {currenYear} FOLO® <br />
                                <span className="flex gap-1 items-center">
                                    and <Image src={smallLogo} alt="smallLogo" className="h-4 md:h-5 lg:h-6 2xl:h-7 w-auto" />
                                    logos are registered trademarks.
                                </span>

                            </Text>

                            <Text
                                fz={{ base: 8, sm: 9, md: 10, lg: 11, xl: 12, "2xl": 13 }}
                                c={"#DDDDF4"}
                                lh={1.375}
                                ta={{ base: "center", md: "right" }}
                                lts={-0.2}
                                fw={400}
                            >
                                <Flex gap={2} align={"center"} justify={{ base: "center", md: "flex-end" }}>
                                    Social Commerce UK Ltd <Image src={flag1} alt="flag 1" className="h-3 md:h-[14px] lg:h-[15px] 2xl:h-4 w-auto inline" />
                                    | 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.UK
                                </Flex>

                                <Flex gap={2} align={"center"} justify={{ base: "center", md: "flex-end" }}>
                                    Social Commerce EU Ltd  <Image src={flag2} alt="flag 2" className="h-3 md:h-[14px] lg:h-[15px] 2xl:h-4 w-auto inline" /> 4th Floor, Agios Nikolaos, Kamares , 6037 Larnaca. Cyprus
                                </Flex>
                            </Text>
                        </Flex>
                    </FadeInAni>

                    <Box w={200} h={176}>
                        <TokenAnimation />
                    </Box>

                    {/* <SignupPopup opened={opened} close={close} /> */}
                </Flex>
            </Box>
        </footer >
    );
}


const FadeInAni = ({ classname, isInView, children, delay = 0, y = 100 }: PropsWithChildren<{ classname?: string, delay?: number, isInView?: boolean, y?: number }>) => {
    return (
        <motion.div
            initial={{
                y: y, opacity: 0
            }}
            animate={isInView && { y: 0, opacity: 1 }}
            whileInView={!isInView ? { y: 0, opacity: 1 } : {}}
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
            {/* {Array.from({ length: 50 }).map((o, index) => {
                return (
                    <BackgroundAnimation key={index} index={index} />
                );
            })} */}
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
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const compRef = useRef<any>(null);
//     useEffect(() => {
//         const animation = lottie.loadAnimation({
//             container: compRef.current,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: '/json/comp1.json',
//         });

//         return () => animation.destroy(); // Cleanup khi unmount component
//     }, []);

//     return (
//         <div className="relative w-full h-full">
//             <motion.div
//                 // initial={{ x: "-50%", y: "-50%" }}
//                 // animate={{
//                 //   y: ["-60%", "-45%" , "-60%"]
//                 // }}

//                 transition={{
//                     duration: 4,
//                     ease: "linear",
//                     repeat: Infinity
//                 }}
//                 className="w-[70%] aspect-[0.86046511627] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//             >
//                 <Image
//                     src={token}
//                     alt="coin"
//                     className="w-full h-full object-cover"
//                 />
//             </motion.div>

//             <div ref={compRef} className="w-full h-full top-[-9.8vh] md:top-[-2.1vh] relative" />
//         </div>
//     );
// };