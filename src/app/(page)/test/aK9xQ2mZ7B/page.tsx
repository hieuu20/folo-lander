
import React, { useEffect, useRef } from "react";

import Container from "./_children/Container";
import { connectDB } from "@/app/api/_db";
import { CreatorIdolModel, ICreatorIdol } from "@/app/api/_entities/creatorIdol";
import { INews, NewsModel } from "@/app/api/_entities";


export default async function Home() {
  await connectDB();
  const [idolResponse, newsResponse] = await Promise.all([
    CreatorIdolModel.find({}).sort({ priority: 1 }).lean(),
    NewsModel.find({}).sort({ priority: 1 }).lean(),
  ]);

  const idols = JSON.parse(JSON.stringify(idolResponse)) as ICreatorIdol[];
  const news = JSON.parse(JSON.stringify(newsResponse)) as INews[];

  return (
    <Container idols={idols} news={news} />
  );
}
