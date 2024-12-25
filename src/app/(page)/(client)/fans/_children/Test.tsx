"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Test() {

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLDivElement>(".section");

    sections.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "+=300",
          scrub: true,
          pin: true,
          markers: false,
        },
        zIndex: sections.length - index,
      });
    });
  }, []);

  return (
    <div className="relative h-[1500px]">
      <div className="section h-[500px] bg-red-500 flex items-center justify-center text-white text-3xl font-bold">
        Section 1
      </div>
      <div className="section h-[500px] bg-green-500 flex items-center justify-center text-white text-3xl font-bold">
        Section 2
      </div>
      <div className="section h-[500px] bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
        Section 3
      </div>
    </div>
  );
}
