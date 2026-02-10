
import React from "react";

import Container from "./_children/Container";
import { getAllNews } from "@/service";
import { getAllRole } from "@/service/role";
import { getPointSetting } from "@/service/pointSetting";
import { getRewards } from "@/service/reward";
import { getSections } from "@/service/section";
import { getWaygetPaids } from "@/service/wayGetPaid";
import { getPeopleSays } from "@/service/peopleSay";
import { getFeaturedCreators } from "@/service/featuredCreator";
import { getFaqs } from "@/service/faq";
import { getPartnerSlides } from "@/service/partnerSlide";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [news, roles, pointSettings, rewards, sections, wayGetPaids, peopleSays, featuredCreators, faqs, partnerSlides] = await Promise.all([
    getAllNews(),
    getAllRole(),
    getPointSetting(),
    getRewards(),
    getSections(),
    getWaygetPaids(),
    getPeopleSays(),
    getFeaturedCreators(),
    getFaqs(),
    getPartnerSlides()
  ]);

  // console.log({ news, roles, pointSettings, rewards, sections, wayGetPaids, peopleSays, featuredCreators, faqs, partnerSlides });


  return (
    <Container 
      news={news} 
      roles={roles} 
      pointSettings={pointSettings} 
      rewards={rewards} 
      partnerSlides={partnerSlides}
      featuredCreators={featuredCreators}
      sections={sections}
      faqs={faqs}
      peopleSays={peopleSays}
      wayGetPaids={wayGetPaids}
    />
  );
}
