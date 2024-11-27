import { Title, TitleProps } from "@mantine/core";
import React from "react";

export default function SectionTitle(props: TitleProps) {
  return (
    <Title
      size={"h4"}
      fz={{ base: 30, lg: 40, xl: 44, "2xl": 48 }}
      lh={1.4}
      fw={700}
      {...props}
    />
  );
}
