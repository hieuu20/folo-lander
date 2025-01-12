'use client';

import React from "react";
import SectionSlide from "../../_shared/SectionSlide";
import { IUSPManager } from "@/app/api/_entities";
import { Box } from "@mantine/core";

interface Props {
  usps: IUSPManager[]
}
export function Feature({ usps }: Props) {
  return (
    <Box
      id="WhyIsKnky"
      py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      bg={"#F5F5F6"}
    >
      <SectionSlide
        title={usps[0].title}
        subTitle={usps[0].subTitle}
        usps={usps.slice(1)}
        contentProps={{
          bg: "#fff",
        }}
        isShowButton={false}
      />
    </Box>
  );
}
