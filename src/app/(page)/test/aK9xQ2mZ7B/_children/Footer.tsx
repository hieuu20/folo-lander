"use client";

import footerLogo from "@public/version-3/icons/logo.webp";
import facebookIcon from "@public/version-3/footer/socials/1.svg";
import xIcon from "@public/version-3/footer/socials/2.svg";
import instagramIcon from "@public/version-3/footer/socials/3.svg";
import tiktokIcon from "@public/version-3/footer/socials/4.svg";
import redditIcon from "@public/version-3/footer/socials/5.svg";
import blueSkyIcon from "@public/version-3/footer/socials/6.svg";
import TelegramIcon from "@public/version-3/footer/socials/7.svg";
import { Box, Flex, Grid, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import footerPay1 from "@public/version-3/footer/payments/1.png";
import footerPay2 from "@public/version-3/footer/payments/2.png";
import footerPay3 from "@public/version-3/footer/payments/3.png";
import footerPay4 from "@public/version-3/footer/payments/4.png";
import footerPay5 from "@public/version-3/footer/payments/5.png";

import xmaIcon from "@public/version-3/footer/xma.webp";
import { motion } from "framer-motion";

const socials = [
    {
        icon: facebookIcon,
        href: "https://facebook.com/knkyco",
    },
    {
        icon: xIcon,
        href: "https://twitter.com/knkyco",
    },
    {
        icon: instagramIcon,
        href: "https://www.instagram.com/knkyco",
    },
    {
        icon: tiktokIcon,
        href: "https://www.tiktok.com/@knkyco",
    },
    {
        icon: redditIcon,
        href: "https://www.reddit.com/user/letsgetknky/",
    },
    {
        icon: blueSkyIcon,
        href: "https://bsky.app/profile/knkyco.bsky.social",
    },
    {
        icon: TelegramIcon,
        href: "https://t.me/knkyco",
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
    footerPay5
];

export function Footer() {
    const currenYear = new Date().getFullYear();
    return (
        <footer className="bg-[#160328]">
            <Box
                className="container-version3"
                pt={{ base: 48, md: 56, lg: 64, xl: 72, "2xl": 80 }}
                pb={{ base: 48, md: 38 }}
            >
                <Box>
                    <Flex
                        justify={"space-between"}
                        align={"center"}
                        w={"100%"}
                        mb={{ base: 48, sm: 60, md: 80, lg: 90, xl: 104, "2xl": 120 }}
                    >
                        <Flex direction={"column"} gap={{ base: 24 }}>
                            <Box w={{ base: 260, sm: 300, md: 340, lg: 370, xl: 400, "2xl": 420 }}>
                                <Image src={footerLogo} alt="footerLogo" className="w-full h-auto" />
                            </Box>
                            <Flex
                                wrap={"wrap"}
                                gap={{ base: 8, md: 10, xl: 12 }}
                            >
                                {socials.map((s, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={s.href}
                                            rel="nofollow"
                                            target="blank"
                                        >
                                            <Image
                                                src={s.icon}
                                                alt="social icons"
                                                width={40}
                                                height={40}
                                                className="w-10 md:w-11 xl:w-12 aspect-square"
                                            />
                                        </Link>
                                    );
                                })}
                            </Flex>
                        </Flex>

                        <Flex
                            direction={"column"}
                            align={"flex-end"}
                            className="hidden md:flex"
                            gap={{ base: 12, md: 16, xl: 24 }}
                        >
                            <Text
                                px={16}
                                fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                                c={"white"}
                                fw={900}
                                lh={0.8}
                                className='overflow-hidden'
                            >
                                <motion.span
                                    initial={{ y: "65%", rotateX: -70 }}
                                    whileInView={{ y: 0, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "linear"
                                    }}
                                    className="inline-block"
                                >
                                    TIME TO SHINE.
                                </motion.span>
                            </Text>
                            <Text
                                px={16}
                                fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                                c={"white"}
                                fw={900}
                                lh={0.8}
                                className='overflow-hidden'
                            >
                                <motion.span
                                    initial={{ y: "65%", rotateX: -70 }}
                                    whileInView={{ y: 0, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "linear"
                                    }}
                                    className="inline-block"
                                >
                                    TIME FOR KNKY.
                                </motion.span>
                            </Text>
                        </Flex>
                    </Flex>

                    <Grid
                        w={{ base: "100%" }}
                        gutter={48}
                        mb={{ base: 48, md: 56, lg: 64, xl: 72, "2xl": 80 }}
                    >
                        {footerList.map((f, index) => {
                            return (
                                <Grid.Col
                                    key={index}
                                    span={{ base: 12, lg: 4 }}
                                >
                                    <Flex
                                        w={"100%"}
                                        direction={"column"}
                                        gap={{ base: 4, md: 6, xl: 8 }}
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
                                                    className="text-white text-base md:text-lg xl:text-xl font-medium leading-[1.4] hover:opacity-80"
                                                    onClick={
                                                        child.href.includes("mailto")
                                                            ? () => {
                                                                window.location.href = child.href;
                                                            }
                                                            : undefined
                                                    }
                                                >
                                                    {child.title}
                                                </a>
                                            );
                                        })}
                                    </Flex>
                                </Grid.Col>
                            );
                        })}
                    </Grid>

                    <Flex
                        justify={"center"}
                        gap={{ base: 16, sm: 22, md: 32, lg: 37, xl: 43, "2xl": 48 }}
                        mb={{ base: 48, md: 56, lg: 64, xl: 72, "2xl": 80 }}
                    >
                        {footerPays.map((o, index) => {
                            return (
                                <Box key={index} h={{ base: 20, sm: 24, md: 30, lg: 34, xl: 36, "2xl": 40 }}>
                                    <Image src={o} alt="payment" className="h-full w-auto" />
                                </Box>
                            );
                        })}
                    </Flex>

                    <Flex
                        direction={"column"}
                        fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                        lh={1.2}
                        fw={900}
                        c={"white"}
                        align={"center"}
                        mb={{ base: 48, md: 56, lg: 64, xl: 72, "2xl": 80 }}
                        className="md:hidden"
                    >
                        <span>TIME TO SHINE.</span>
                        <span>TIME FOR KNKY.</span>
                    </Flex>

                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify={{ base: "center", md: "space-between" }}
                        align={{ base: "center", md: "flex-end" }}
                        gap={{ base: 14 }}
                    >
                        <Image src={xmaIcon} alt="xma icon" className="w-[114px] md:w-[118px] 2xl:w-[122px] h-auto" />
                        <Flex direction={"column"} gap={{ base: 4, md: 6, xl: 8 }}>
                            <Text fz={{ base: 14, sm: 15, md: 16, lg: 17, xl: 18, "2xl": 20 }} ta={"center"} fw={500} c={"#FFFFFF99"}>
                                All rights reserved. © {currenYear} KNKY® and ♾️® logos are registered trademarks.
                            </Text>

                            <Text
                                fz={{ base: 8, sm: 9, md: 10, lg: 11, xl: 12, "2xl": 13 }}
                                c={"#6D6177"}
                                lh={1.375}
                                ta={{ base: "center", md: "right" }}
                                lts={-0.1}
                                fw={400}
                            >
                                Social Commerce UK Ltd 🇬🇧 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ. UK <br />
                                Social Commerce EU Ltd  🇪🇺 4th Floor, Agios Nikolaos, Kamares , 6037 Larnaca. Cyprus
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </footer>
    );
}
