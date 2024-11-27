import React from "react";
import SectionSlide from "./@shared/SectionSlide";
import { IUSPManager } from "@/app/api/_entities";

interface Props {
  usps: IUSPManager[];
}

export default function StoreFeature({ usps }: Props) {
  return (
    <SectionSlide
      title="Easily Track Every Detail."
      usps={usps}
      contentProps={{
        bd: '1px solid #EBEBEC'
      }}
      buttonLabel="Build my own store"
      buttonLink="https://beta.knky.co/login/store"
    />
  );
}
