import { Title, TitleProps } from "@mantine/core";
import React from "react";

export default function SectionSubTitle(props: TitleProps) {
  return (
    <Title
      size={"h4"}
      fz={{ base: 16, lg: 18, xl: 22, "2xl": 24 }}
      lh={1.4}
      fw={500}
      {...props}
    />
  );
}
