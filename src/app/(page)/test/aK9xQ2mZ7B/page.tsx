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
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {!isMb && <Desktop />}
      {isMb && <Mobile />}
    </>
  );
}

const Mobile = () => {
  const main = useRef<any>();
  const smoother = useRef<ScrollSmoother>();

  useGSAP(
    () => {
      // smoother.current = ScrollSmoother.create({
      //   smooth: 0,
      //   effects: true,
      //   smoothTouch: 0.5,
      //   ignoreMobileResize: true,
      //   normalizeScroll: true
      // });
    },
    {
      scope: main,
    }
  );

  return (
    <Box id="smooth-wrapper" ref={main}>
      <Box
        id="smooth-content"
        className='bg-contain bg-repeat'
        style={{
          backgroundImage: "url('/version-3/banner/bg-mb.webp')",
          backgroundColor: "#0A0014"
        }}
      >
        <BannerMobile />
        <UnlimitedMobile />
        <GrowthMobile />
        <MoreMobile />
        <Footer />
      </Box>
    </Box>
  );
};

const Desktop = () => {
  const main = useRef<any>();
  const smoother = useRef<ScrollSmoother>();

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
  return (
    <Box id="smooth-wrapper" ref={main}>
      <Box
        id="smooth-content"
        className='bg-contain bg-repeat'
        style={{
          backgroundImage: "url('/version-3/banner/bg-pc.webp')",
          backgroundColor: "#0A0014"
        }}
      >
        <BannerPc />
        <Unlimited />
        <Growth />
        <More />
        <Footer />
      </Box>
    </Box>
  );
};
