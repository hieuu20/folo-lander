
import React from "react";

import Container from "./_children/Container";
import { INews, NewsModel } from "@/app/api/_entities";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [newsResponse] = await Promise.all([
    NewsModel.find({ status: true }).sort({ priority: 1 }).lean(),
  ]);

  const news = JSON.parse(JSON.stringify(newsResponse)) as INews[];

  return (
    <Container news={news} />
  );
}
