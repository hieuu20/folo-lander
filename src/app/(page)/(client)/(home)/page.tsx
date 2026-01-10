
import React from "react";

import Container from "./_children/Container";
import { INews, NewsModel } from "@/app/api/_entities";
import { getAllNews } from "@/service";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [news] = await Promise.all([
    getAllNews()
  ]);

  console.log({ news })


  return (
    <Container news={news} />
  );
}
