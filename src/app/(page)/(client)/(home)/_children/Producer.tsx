import React from "react";
import SectionContent from "./@shared/SectionContent";
import { IUSPManager } from "@/app/api/_entities";

interface Props {
  usps: IUSPManager[];
}

export function Producer(props: Props) {
  const { usps } = props;
  return (
    <SectionContent
      id="Producers"
      usp={usps[0]}
      rootProps={{
        bg: '#10011E'
      }}
      contentProps={{
        c: 'white'
      }}
    />
  );
}
