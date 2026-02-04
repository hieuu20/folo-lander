
import React from "react";

import Container from "./_children/Container";
import { getAllNews } from "@/service";
import { getAllRole } from "@/service/role";
import { getPointSetting } from "@/service/pointSetting";
import { getRewards } from "@/service/reward";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [news, roles, pointSettings, rewards] = await Promise.all([
    getAllNews(),
    getAllRole(),
    getPointSetting(),
    getRewards()
  ]);

  return (
    <Container news={news} roles={roles} pointSettings={pointSettings} rewards={rewards} />
  );
}
