
import React from "react";

import Container from "./_children/Container";
import { getAllNews } from "@/service";
import { getAllRole } from "@/service/role";
import { getPointSetting } from "@/service/pointSetting";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [news, roles, pointSettings] = await Promise.all([
    getAllNews(),
    getAllRole(),
    getPointSetting()
  ]);


  return (
    <Container news={news} roles={roles} pointSettings={pointSettings} />
  );
}
