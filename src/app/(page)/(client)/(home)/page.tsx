import { Box } from "@mantine/core";
import React from "react";
import { HeadBanner, Match } from "./_children";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <Box>
      <HeadBanner />
      <Match />
    </Box>
  );
}
