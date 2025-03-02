import { Box } from "@mantine/core";
import React from "react";
import {
  Community,
  Dive,
  Feature,
  MatchMaker,
  PrimeSubscription,
} from "./_children";
import {
  EarningEstModel,
  FAQModel,
  IEarningEst,
  IFaq,
  ISection,
  IUSPManager,
  SectionModel,
  USPManagerModel,
} from "@/app/api/_entities";
import { SubBanner } from "../_shared/SubBanner";
import { Platform } from "../_shared/Platform";
import { Faq } from "../_shared/Faq";
import { SECTION_TYPE } from "@/utils";
import { connectDB } from "@/app/api/_db";
import { YourEarn } from "./_children/YourEarn";
import Verify from "./_children/Verify";
import { DeepConnection } from "../fans/_children/DeepConnection";
import { Banner } from "../_shared/Banner";

export const dynamic = "force-dynamic";

export default async function Page() {
  await connectDB();
  const [sectionsResponse, uspsResponse, faqsResponse, earningEstResponse] =
    await Promise.all([
      SectionModel.find({ type: SECTION_TYPE.CREATOR, enable: true })
        .sort({
          priority: 1,
        })
        .lean(),
      USPManagerModel.find({ type: SECTION_TYPE.CREATOR, enable: true })
        .sort({
          priority: 1,
        })
        .lean(),
      FAQModel.find({ type: SECTION_TYPE.CREATOR })
        .sort({
          priority: 1,
        })
        .lean(),
      EarningEstModel.findOne({}),
    ]);

  const sections = JSON.parse(JSON.stringify(sectionsResponse)) as ISection[];
  const usps = JSON.parse(JSON.stringify(uspsResponse)) as IUSPManager[];
  const faqs = JSON.parse(JSON.stringify(faqsResponse)) as IFaq[];
  const earningEst = JSON.parse(
    JSON.stringify(earningEstResponse)
  ) as IEarningEst;

  return (
    <Box>
      {sections.map((section, index) => {
        const currentUsps = usps.filter((u) => u.sectionId == section._id);
        switch (section.title) {
          case "Header Banner":
            return (
              <Banner
                key={index}
                usp={{
                  ...currentUsps[0],
                  videoWebm: "/creator/banner/main.webm",
                }}
                isCreator={true}
              />
            );

          case "Notication":
            return <SubBanner key={index} usps={currentUsps} />;
          case "Dive":
            return <Dive key={index} usps={currentUsps} />;

          case "Creator Features":
            return <Feature key={index} usps={currentUsps} />;

          case "Earning Estimate":
            return (
              <YourEarn
                key={index}
                usp={currentUsps[0]}
                earningEst={earningEst}
              />
            );

          case "Match":
            return <MatchMaker key={index} usps={currentUsps} />;

          case "Connections":
            return <DeepConnection key={index} usps={currentUsps} />;

          case "Prime Subscription":
            return <PrimeSubscription key={index} usps={currentUsps} />;

          case "Pro Creator":
            return <Verify key={index} usps={currentUsps} />;

          case "Our Community":
            return <Community key={index} usp={currentUsps[0]} />;

          case "FAQ’s":
            return (
              <Faq
                key={index}
                title={currentUsps[0].title}
                subTitle={currentUsps[0].subTitle}
                faqs={faqs}
              />
            );

          case "Other Opportunities":
            return <Platform key={index} usps={currentUsps} />;

          default:
            return null;
        }
      })}
    </Box>
  );
}
