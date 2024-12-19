import { Box } from "@mantine/core";
import React from "react";
import { MainBanner, Match } from "./_children";

export default function Home() {
  return (
    <Box>
      <MainBanner />
      <Match />
    </Box>
  );
}
