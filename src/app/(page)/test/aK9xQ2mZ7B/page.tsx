/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mantine/core";
import React, { useRef } from "react";
import { BannerPc, Growth, More } from "./_children";
import { BannerMobile } from "./_children/BannerMoblie";
import { Unlimited } from "./_children/Unlimited";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useBrowserWidth } from "@/hooks";
import { Footer } from "./_children/Footer";
import { Header } from "./_children/Header";


export default function Home() {
  const { isMb } = useBrowserWidth();
  const main = useRef<any>();
  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 2,
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
        className='bg-contain bg-repeat hidden md:block'
        style={{
          backgroundImage: isMb ? "url('/version-3/banner/bg-mb.webp')" : "url('/version-3/banner/bg-pc.webp')",
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
}
