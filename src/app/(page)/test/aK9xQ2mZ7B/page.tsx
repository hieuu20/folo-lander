/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mantine/core";
import React, { useEffect, useRef } from "react";
import { BannerPc, Growth, More } from "./_children";
import { Unlimited } from "./_children/Unlimited";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useBrowserWidth } from "@/hooks";
import { Footer } from "./_children/Footer";
import { Header } from "./_children/Header";
import { BannerMobile } from "./_children/mobile/BannerMoblie";
import { UnlimitedMobile } from "./_children/mobile/UnlimitedMobile";
import { GrowthMobile } from "./_children/mobile/GrowthMobile";
import { MoreMobile } from "./_children/mobile/MoreMobile";
import { usePathname } from "next/navigation";


export default function Home() {
  const { isMb } = useBrowserWidth();
  const main = useRef<any>();
  const smoother = useRef<ScrollSmoother>();
  const pathname = usePathname();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
      });
    },
    {
      scope: main,
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box id="smooth-wrapper" ref={main}>
      <Box
        id="smooth-content"
        className='bg-contain bg-repeat'
        style={{
          backgroundImage: isMb ? "url('/version-3/banner/bg-mb.webp')" : "url('/version-3/banner/bg-pc.webp')",
          backgroundColor: "#0A0014"
        }}
      >
        {!isMb && <Desktop />}
        {isMb && <Mobile />}
        {/* <BannerPc />
        <Unlimited />
        <Growth />
        <More />
        <Footer /> */}
      </Box>
    </Box>
  );
}

const Mobile = () => {
  return (
    <Box
      id="smooth-content"
      className='bg-contain bg-repeat'
      style={{
        backgroundImage: "url('/version-3/banner/bg-mb.webp')",
        backgroundColor: "#0A0014"
      }}
    >
      <BannerMobile />
      {/* <Box h={1000} /> */}
      <UnlimitedMobile />
      <GrowthMobile />
      <MoreMobile />
      <Footer />
    </Box>
  );
};

const Desktop = () => {
  return (
    <>
      <BannerPc />
      <Unlimited />
      <Growth />
      <More />
      <Footer />
    </>
  );
};
