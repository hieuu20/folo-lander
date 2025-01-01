"use client";

import React, { useState, useMemo } from "react";
import { useAnimate, useInView } from "framer-motion";
import { IEarningEst, IUSPManager } from "@/app/api/_entities";
import { formatToPrice } from "@/utils";
import { Box, Flex, Grid, Input, Slider, Text } from "@mantine/core";
import SectionButton from "@/components/buttons/SectionButton";
import { useBrowserWidth } from "@/hooks";
import SectionTitle from "@/components/Typo/SectionTitle";
import TextAnimation from "@/components/animation/TextAnimation";
import ElementAnimation from "@/components/animation/ElementAnimation";
import SectionSubTitle from "@/components/Typo/SectionSubTitle";

interface IDataSlider {
  key: number;
  title: string;
  name: "demand" | "subscribe" | "follower";
  min: number;
  max: number;
  unit?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function nFormatter(num: number, digits: any) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

interface Props {
  usp: IUSPManager;
  earningEst: IEarningEst;
}

const listUnits = [
  {
    key: 1,
    value: "$",
  },
  {
    key: 2,
    value: "£",
  },
  {
    key: 3,
    value: "€",
  },
];

export const YourEarn = ({ usp, earningEst }: Props) => {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.6 });
  const { isMb } = useBrowserWidth();

  const [follower, setFollower] = useState(0);
  const [subscribe, setSubscribe] = useState(0);
  const [demand, setDemand] = useState(0);
  const [unit, setUnit] = useState("$");

  const dataSlider: IDataSlider[] = useMemo(() => {
    return [
      {
        key: 1,
        title: "Your Followers",
        name: "follower",
        min: 0,
        max: earningEst?.followers || 10000,
      },
      {
        key: 2,
        title: "Monthly Subscription Price?",
        name: "subscribe",
        min: earningEst?.monthlySubPriceFrom || 0,
        max: earningEst?.monthlySubPriceTo || 10000,
        unit,
      },
      {
        key: 3,
        title: "On demand  / Shop items",
        name: "demand",
        min: earningEst?.shopItemValueFrom || 0,
        max: earningEst?.shopItemValueTo || 10000,
        unit,
      },
    ];
  }, [
    earningEst?.followers,
    earningEst?.monthlySubPriceFrom,
    earningEst?.monthlySubPriceTo,
    earningEst?.shopItemValueFrom,
    earningEst?.shopItemValueTo,
    unit,
  ]);

  const handleOnChange = (
    val: number,
    name: "demand" | "subscribe" | "follower"
  ) => {
    if (name === "demand") {
      setDemand(val);
    }
    if (name === "subscribe") {
      setSubscribe(val);
    }
    if (name === "follower") {
      setFollower(val);
    }
  };

  const hasChoose = () => {
    return (!!follower && !!subscribe) || (!!follower && !!demand);
  };

  const IncomeCalculation = (
    follower: number,
    subscriber: number,
    demand: number
  ) => {
    let incomeFrom = 0;
    let incomeTo = 0;
    if (!!follower && !!subscriber && !!demand) {
      incomeFrom = (follower / 100) * subscriber * demand;
      incomeTo = (follower * subscriber * demand * 5) / 100;
    } else if (!!follower && !!subscriber) {
      incomeFrom = (follower / 100) * subscriber;
      incomeTo = (follower * subscriber * 5) / 100;
    } else if (!!follower && !!demand) {
      incomeFrom = (follower / 100) * demand;
      incomeTo = (follower * demand * 5) / 100;
    }
    return {
      incomeFrom: `${unit} ${formatToPrice(Math.floor(incomeFrom))}`,
      incomeTo: `${unit} ${formatToPrice(Math.floor(incomeTo))}`,
    };
  };

  if (!dataSlider?.[0]) return null;
  return (
    <Box
      ref={scope}
      py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      // bg={"radial-gradient(50% 50% at 50% 50%, rgba(110, 24, 191, 0.7) 0%, rgba(18, 2, 32, 0) 100%)"}
      bg={"#340B62"}
      className="container"
    >
      <Grid gutter={{ base: 16, md: 40, xl: 80 }}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          {isMb && <TitleEarn isInView={isInView} />}
          <Flex direction={"column"} w={"100%"} mt={{ base: 16, sm: 0 }}>
            {dataSlider?.map((v, index) => (
              <ElementAnimation
                key={v.key}
                className="w-full"
                initDelay={index * 150}
                isInView={isInView}
              >
                <SlideItem
                  v={v}
                  setUnit={setUnit}
                  unit={unit}
                  setFollower={setFollower}
                  setSubscribe={setSubscribe}
                  setDemand={setDemand}
                  follower={follower}
                  subscribe={subscribe}
                  demand={demand}
                  handleOnChange={handleOnChange}
                />
              </ElementAnimation>
            ))}
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Flex
            direction={"column"}
            align={{ base: "center", sm: "start" }}
            w={"100%"}
            gap={{ base: 16, md: 24 }}
          >
            {!isMb && <TitleEarn isInView={isInView} initDelay={600} />}
            {!hasChoose() ? (
              <SectionSubTitle c={"white"}>
                <TextAnimation
                  isInView={isInView}
                  text="Change the controls to see estimated results."
                  initDelay={900}
                  rootProps={{
                    justify: { base: "center", sm: "start" },
                  }}
                />
              </SectionSubTitle>
            ) : (
              <div className="flex flex-col">
                <h3 className="text-3xl lg:text-4xl 2xl:text-[40px] text-white">
                  You could earn between{" "}
                  <span className="text-[#FFB800]">
                    {IncomeCalculation(follower, subscribe, demand).incomeFrom}
                  </span>{" "}
                  and{" "}
                  <span className="text-[#FFB800]">
                    {IncomeCalculation(follower, subscribe, demand).incomeTo}
                  </span>{" "}
                  per month*
                </h3>
                <p className="text-sm md:text-[15px] lg:text-base mt-5 md:w-[90%] text-[#FFFFFFB2]">
                  *Based on estimate of between 1% and 5% of your followers
                  subscribing. Earnings are net of platform fees.
                </p>
                <p className="text-[13px] md:text-[15px] lg:text-base mt-3 md:w-[90%] text-[#FFFFFFB2]">
                  Monthly subscriptions can include profiles, channels & groups.
                </p>
                <p className="text-[13px] md:text-[15px] lg:text-base mt-3 md:w-[90%] text-[#FFFFFFB2]">
                  On demand / Shop items include approximate figures for
                  additional features on the platform such as pay per view,
                  requests, live streams, events, shops, auctions and tips.
                </p>
              </div>
            )}
            <ElementAnimation initDelay={1200} isInView={isInView}>
              <SectionButton
                show={usp.isShowButton}
                title={usp.buttonLabel}
                href={usp.buttonLink}
                bg={"#FFB800"}
                w={210}
                c={"#131416"}
                fw={600}
              />
            </ElementAnimation>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

interface ChildProps {
  isMb?: boolean;
  isInView: boolean;
  initDelay?: number;
}

const TitleEarn = ({ isInView, initDelay = 0 }: ChildProps) => {
  return (
    <SectionTitle c={"#fff"}>
      <TextAnimation
        text={"🤔 How Much 🧀 You Can Make on KNKY?"}
        rootProps={{
          gap: { base: 6, md: 8, lg: 10, "2xl": 12 },
          justify: { base: "center", sm: "start" },
        }}
        isInView={isInView}
        initDelay={initDelay}
      />
    </SectionTitle>
  );
};

interface SlideItemProps {
  v: IDataSlider;
  setUnit: (value: React.SetStateAction<string>) => void;
  unit: string;
  setFollower: (value: React.SetStateAction<number>) => void;
  setSubscribe: (value: React.SetStateAction<number>) => void;
  setDemand: (value: React.SetStateAction<number>) => void;
  follower: number;
  subscribe: number;
  demand: number;
  handleOnChange: (
    val: number,
    name: "demand" | "subscribe" | "follower"
  ) => void;
}

const SlideItem = ({
  v,
  setUnit,
  unit,
  setFollower,
  setSubscribe,
  setDemand,
  follower,
  subscribe,
  demand,
  handleOnChange,
}: SlideItemProps) => {
  return (
    <Box
      w={"100%"}
      key={v?.key}
      my={{ base: 8, md: 16 }}
      p={{ base: 16, md: 24 }}
      bg={"#FFFFFF"}
      className="rounded-2xl md:rounded-[40px]"
    >
      <div className="flex justify-between">
        <h5 className="text-base md:text-lg xl:text-2xl font-semibold">
          {v?.title}
        </h5>

        <div className="flex items-center">
          {v?.key == 2 && (
            <div className="mx-2 bg-[#EBEBEC] px-1 rounded-[2px] min-w-[56px]">
              {listUnits?.map((v) => (
                <span
                  key={v?.key}
                  onClick={() => setUnit(v?.value)}
                  className={`px-[2px] mx-[1px] cursor-pointer rounded-[2px] ${
                    v?.value == unit
                      ? "bg-[#AC1991] text-[white]"
                      : "bg-[white]"
                  }`}
                >
                  {v?.value}
                </span>
              ))}
            </div>
          )}
          <Input
            size="small"
            bd={"1px solid #EBEBEC"}
            py={4}
            pl={8}
            w={{ base: 80, md: 90 }}
            fw={500}
            onChange={(e) => {
              const number = +e.target.value.split(",").join("");
              if (typeof number === "number" && number <= v?.max) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                v?.key == 1
                  ? setFollower(number)
                  : v?.key == 2
                  ? setSubscribe(number)
                  : setDemand(number);
              }
            }}
            value={formatToPrice(
              v?.key == 1 ? follower : v?.key == 2 ? subscribe : demand
            )}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="my-3 mt-6 md:my-3 md:mt-10 flex justify-center items-center">
        <p className="px-3 text-base md:text-lg xl:text-2xl font-semibold flex">
          <span> {v?.unit && unit}</span>
          <span>{nFormatter(v?.min, 1)} </span>
        </p>
        <Slider
          w={"100%"}
          min={v?.min}
          max={v?.max}
          color="#ac1991"
          size={"md"}
          onChange={(val) => {
            handleOnChange(val, v?.name);
          }}
          value={v?.key == 1 ? follower : v?.key == 2 ? subscribe : demand}
          styles={{
            thumb: {
              backgroundColor: "#ac1991",
              width: 32,
              height: 32,
              border: "4px solid #fff",
            },
            markLabel: {
              background: "#fff",
            },
          }}
          label={(value: number) => {
            return (
              <Text
                fz={{ base: 16, sm: 18, md: 20, xl: 22, "2xl": 24 }}
                c={"#AC1991"}
                fw={600}
                lh={1.5}
              >
                {v.unit ?? unit} {nFormatter(value, 1)}
              </Text>
            );
          }}
        />
        <p className="px-3 text-base md:text-lg xl:text-2xl font-semibold flex">
          <span> {v?.unit && unit}</span>
          <span> {nFormatter(v?.max, 1)}</span>
        </p>
      </div>
    </Box>
  );
};
