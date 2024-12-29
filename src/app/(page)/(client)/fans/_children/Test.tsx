"use client";

import React from "react";

export const Test: React.FC = () => {
  return (
    <video
      controls
      // preload="metadata"
      autoPlay={true}
      className="w-full sm:w-[30%] aspect-[0.92]"
    >
      <source src="/match-maker/1/final2.mp4" type="video/mp4" />
    </video>
  );
};
