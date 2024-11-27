import { connectDB } from "@/app/api/_db";
import { Box } from "@mantine/core";
import React from "react";
import { Banner } from "./_children";
import { Platform } from "./_children/Platform";
import { ISection, IUSPManager, SectionModel, USPManagerModel } from "@/app/api/_entities";
import { SECTION_TYPE } from "@/utils/enum";
import StoreFeature from "./_children/StoreFeature";
import { Store } from "./_children/Store";
import { Producer } from "./_children/Producer";
import ProducerFeature from "./_children/ProducerFeature";
import { GoldStandard } from "./_children/GoldStandard";

export default async function Home() {
  await connectDB();

  const [sectionRes, uspRes] = await Promise.all([
    SectionModel.find({ type: SECTION_TYPE.BUSINESS, enable: true })
      .sort({
        priority: 1,
      })
      .lean(),
    USPManagerModel.find({ type: SECTION_TYPE.BUSINESS, enable: true })
      .sort({
        priority: 1,
      })
      .lean(),
  ]);

  const sections = JSON.parse(JSON.stringify(sectionRes)) as ISection[];
  const usps = JSON.parse(JSON.stringify(uspRes)) as IUSPManager[];

  const getComponent = (section: ISection) => {
    const us = usps.filter(u => u.sectionId === section._id);

    switch(section.title){
      case 'Header banner': 
        return <Banner key={section._id} usps={us} />;
      case 'The Gold Standard': 
        return <GoldStandard key={section._id} usps={us} />;
      case 'Store Account': 
        return <Store key={section._id} usps={us} />;
      case 'Store Account Features': 
        return <StoreFeature key={section._id} usps={us} />;
      case 'Producer Account': 
        return <Producer key={section._id} usps={us} />;
      case 'Producer Account Features': 
        return <ProducerFeature key={section._id} usps={us} />;
      case 'Other Opportunities on KNKY': 
        return <Platform key={section._id} usps={us} />;
    }
  };

  return (
    <Box>
      {sections.map((section) => {
        return getComponent(section);
      })}
    </Box>
  );
}
