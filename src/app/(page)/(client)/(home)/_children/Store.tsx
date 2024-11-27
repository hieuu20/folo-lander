import React from "react";
import SectionContent from "./@shared/SectionContent";
import { IUSPManager } from "@/app/api/_entities";

interface Props {
  usps: IUSPManager[];
}

export function Store({ usps }: Props) {
  return (
    <SectionContent
      id="Stores"
      usp={usps[0]}
      contentProps={{c: '#131416'}}
    />
  );
}
