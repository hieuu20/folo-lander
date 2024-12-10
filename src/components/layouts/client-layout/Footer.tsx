"use client";

import footerLogo from "@public/icons/footer-logo.svg";
import facebookIcon from "@public/icons/facebook.svg";
import xIcon from "@public/icons/x.svg";
import instagramIcon from "@public/icons/instagram.svg";
import tiktokIcon from "@public/icons/tiktok.svg";
import { Box, Flex, Grid, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import footerPay1 from "@public/footer/1.svg";
import footerPay2 from "@public/footer/2.svg";
import footerPay3 from "@public/footer/3.svg";
import footerPay4 from "@public/footer/4.svg";
import footerPay5 from "@public/footer/5.svg";

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
];

const footerList = [
  {
    title: "General",
    children: [
      {
        title: "Community Guidelines",
        href: "https://beta.knky.co/articles/community-guidelines",
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
        href: "https://beta.knky.co/articles/terms-of-service",
      },
      {
        title: "Contact Us",
        href: "mailto:support@knky.com",
      },
      {
        title: "Blog",
        href: "https://beta.knky.co/fresh",
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
        href: "https://beta.knky.co/platform-plans",
      },
      {
        title: "Terms of Service",
        href: "https://beta.knky.co/articles/terms-of-service",
      },
      {
        title: "Fans & Purchasing Terms",
        href: "https://beta.knky.co/articles/additional-terms-for-fans-buying-creator-content",
      },
      {
        title: "Creator & Collaborator Terms",
        href: "https://beta.knky.co/articles/additional-terms-for-creators-and-collaborators",
      },
    ],
  },
  {
    title: "For Business",
    children: [
      {
        title: "Business Account",
        href: "/",
      },
      {
        title: "Business Terms",
        href: "https://beta.knky.co/articles/terms-of-service",
      },
      {
        title: "Agencies Account",
        href: "https://agency.knky.co/",
      },
      {
        title: "Agency Terms",
        href: "https://beta.knky.co/articles/terms-of-service",
      },
    ],
  },
  {
    title: "Polices",
    children: [
      {
        title: "Content Moderation Policy",
        href: "https://beta.knky.co/articles/content-moderation-and-protection-policy",
      },
      {
        title: "USC 2257",
        href: "https://beta.knky.co/articles/usc-2257",
      },
      {
        title: "Privacy Policy",
        href: "https://beta.knky.co/articles/privacy-policy",
      },
      {
        title: "Cookie Policy",
        href: "https://beta.knky.co/articles/cookie-policy",
      },
      {
        title: "Complaint Policy",
        href: "https://beta.knky.co/articles/complaint-policy",
      },
      {
        title: "DMCA",
        href: "https://beta.knky.co/articles/dmca-takedown-policy",
      },
    ],
  },
];

const footerPays = [footerPay1, footerPay2, footerPay3, footerPay4, footerPay5];

export async function Footer() {
  return (
    <footer>
      <Box className="container" py={{ base: 48, lg: 60, xl: 80 }}>
        <Flex direction={"column"} gap={{ base: 32, md: 38, xl: 44 }}>
          <Flex direction={{ base: "column", lg: "row" }}>
            <Flex
              direction={"column"}
              mb={6}
              w={{ base: "100%", lg: "32%" }}
              gap={{ base: 18, lg: 20, xl: 22, "2xl": 24 }}
            >
              <Box
                pos={"relative"}
                w={{ base: 158, md: 180, lg: 200, xl: 240, "2xl": 264 }}
                className="aspect-[4]"
              >
                <Image src={footerLogo} alt="footer logo" fill />
              </Box>
              <Flex gap={16}>
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
                      />
                    </Link>
                  );
                })}
              </Flex>
            </Flex>

            <Grid
              w={{ base: "100%", lg: "70%" }}
              gutter={16}
              mt={{ base: 24, lg: 0 }}
            >
              {footerList.map((f, index) => {
                return (
                  <Grid.Col
                    key={index}
                    span={{ base: 12, md: 6, lg: 4, xl: 3 }}
                    pr={16}
                    mb={{ base: 24 }}
                  >
                    <Flex
                      w={"100%"}
                      direction={"column"}
                      gap={{ base: 8, lg: 12 }}
                    >
                      <Text c={"#4D5053"} fz={14} lh={1.4}>
                        {f.title}
                      </Text>

                      {f.children.map((child, index) => {
                        return (
                          <a
                            key={index}
                            href={child.href}
                            target="blank"
                            rel="nofollow"
                            className="text-[#131416] text-base font-medium"
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
          </Flex>

          <Flex w={"100%"} justify={"center"}>
            <Text ta={"center"} fz={14} c={"#6b7280"}>
              © 2024 KNKY® | Social Commerce Ltd. Registered in England and
              Wales | 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ,
              United Kingdom
            </Text>
          </Flex>
        </Flex>

        <Grid w={{ base: "100%", md: 460 }} mt={32} gutter={{ base: 16 }} mx={'auto'}>
          {footerPays.map((o, index) => {
            return (
              <Grid.Col span={2.4} key={index}>
                <Box w={"100%"} pos={"relative"} className="aspect-[2.47]">
                  <Image src={o} alt="pay item" fill className="object-cover" />
                </Box>
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </footer>
  );
}
