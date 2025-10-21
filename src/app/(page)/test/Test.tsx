/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import "@/styles/test.css";
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/dist/gsap';

export const Test = () => {
  const main = useRef<any>();
  const smoother = useRef<ScrollSmoother>();

  const scrollTo = () => {
    smoother.current?.scrollTo('.box-c', true, 'center center');
  };

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 4,
        effects: true,
      });
      // ScrollTrigger.create({
      //   trigger: '.box-c',
      //   pin: true,
      //   start: 'center center',
      //   end: '+=300',
      //   markers: false,
      // });
    },
    {
      scope: main,
    }
  );


  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <header className="header">
            <h1 className="title">GreenSock ScrollSmoother on a NextJS App</h1>
            <button className="button" onClick={scrollTo}>
              Jump to C
            </button>
          </header>
          <div className="box box-a" data-speed="0.5">
            a
          </div>
          <div className="box box-b" data-speed="0.8">
            b
          </div>
          <div className="box box-c" data-speed="1.5">
            c
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};
