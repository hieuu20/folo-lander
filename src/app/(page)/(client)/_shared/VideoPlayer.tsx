"use client";

import React from "react";

interface Props {
  src: string;
}

export function VideoPlayer({ src }: Props) {

    return (
      <video
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
        className="w-full h-full"
      >
        <source src={src} type="video/webm" />
      </video>
    );
}
