import React from "react";
import SectionSlide from "./@shared/SectionSlide";
import { IUSPManager } from "@/app/api/_entities";

interface Props {
  usps: IUSPManager[];
}

export default function ProducerFeature(props: Props) {
  const { usps } = props;
  return (
    <SectionSlide
      title="Easy Chatter Management"
      usps={usps}
      rootProps={{
        bg: '#10011E'
      }}
      contentProps={{
        c: 'white',
        bd: '1px solid #FFFFFF66'
      }}
      classer={{
        slide: '[&_.slick-arrow_svg]:stroke-white'
      }}
      buttonLabel="Create Producer account"
      buttonLink="https://beta.knky.co/login/production"
    />
  );
}
