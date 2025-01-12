import React from "react";
import SectionSlide from "../../_shared/SectionSlide";
import { IUSPManager } from "@/app/api/_entities";
import { Box } from "@mantine/core";

interface Props {
  usps: IUSPManager[];
}

export function Introduction({ usps }: Props) {
  return (
    <Box id="Introduction" py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}>
      <SectionSlide
        title={usps[0].title}
        subTitle={usps[0].subTitle}
        usps={usps.slice(1)}
        contentProps={{
          bd: "1px solid #EBEBEC",
        }}
        isShowButton={false}
      />
    </Box>
  );
}
