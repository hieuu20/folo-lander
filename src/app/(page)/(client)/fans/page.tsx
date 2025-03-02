import { Box } from "@mantine/core";
import React from "react";
import {
  Community,
  DeepConnection,
  Introduction,
  MatchMaker,
  PrimeSubscription,
} from "./_children";
import {
  FAQModel,
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
import { Banner } from "../_shared/Banner";

export const dynamic = "force-dynamic";

export default async function Page() {
  await connectDB();
  const [sectionsResponse, uspsResponse, faqsResponse] = await Promise.all([
    SectionModel.find({ type: SECTION_TYPE.USER, enable: true })
      .sort({
        priority: 1,
      })
      .lean(),
    USPManagerModel.find({ type: SECTION_TYPE.USER, enable: true })
      .sort({
        priority: 1,
      })
      .lean(),
    FAQModel.find({ type: SECTION_TYPE.USER })
      .sort({
        priority: 1,
      })
      .lean(),
  ]);

  const sections = JSON.parse(JSON.stringify(sectionsResponse)) as ISection[];
  const usps = JSON.parse(JSON.stringify(uspsResponse)) as IUSPManager[];
  const faqs = JSON.parse(JSON.stringify(faqsResponse)) as IFaq[];

  // console.log({sections, usps});

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
                  videoWebm: "/fan-banner/main.webm",
                }}
              />
            );

          case "Notication":
            return <SubBanner key={index} usps={currentUsps} />;

          case "What is KNKY?":
            return <Introduction key={index} usps={currentUsps ?? []} />;

          case "Prime Subscription":
            return <PrimeSubscription key={index} usps={currentUsps ?? []} />;

          case "Match":
            return <MatchMaker key={index} usps={currentUsps} />;

          case "Deep Connections":
            return <DeepConnection key={index} usps={currentUsps ?? []} />;

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
