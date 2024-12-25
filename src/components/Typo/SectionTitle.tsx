import { Title, TitleProps } from "@mantine/core";
import React from "react";

export default function SectionTitle(props: TitleProps) {
  return (
    <Title
      order={2}
      fz={{ base: 30, sm: 32, md: 36, lg: 40, xl: 44, "2xl": 48 }}
      lh={1.4}
      fw={700}
      {...props}
    />
  );
}
