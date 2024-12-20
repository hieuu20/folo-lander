"use client";

import { IFaq } from "@/app/api/_entities";
import TextAnimation from "@/components/animation/TextAnimation";
import SectionSubTitle from "@/components/Typo/SectionSubTitle";
import SectionTitle from "@/components/Typo/SectionTitle";
import { Accordion, Flex, Text, Title } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React from "react";

interface Props {
  title: string;
  description: string;
  faqs: IFaq[];
}
export function Faq({ title, description, faqs }: Props) {
  console.log({ faqs });
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={{ base: 16, md: 0 }}
      py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      className="container"
    >
      <Flex
        direction={"column"}
        w={{ base: "100%", md: "50%" }}
        gap={{ base: 12, md: 14, xl: 16 }}
        align={{ base: "center", md: "start" }}
      >
        <SectionTitle>
          <TextAnimation
            text={title}
            rootProps={{ gap: { base: 8, md: 10, xl: 12 } }}
          />
        </SectionTitle>
        <SectionSubTitle>
          <TextAnimation
            text={description}
            initDelay={700}
          />
        </SectionSubTitle>
      </Flex>

      <Flex direction={"column"} w={{ base: "100%", md: "50%" }}>
        <Accordion
          chevronPosition="right"
          variant="contained"
          chevronSize={32}
          className="[&_.mantine-Accordion-chevron_svg]:w-8 [&_.mantine-Accordion-chevron_svg]:h-8"
        >
          {faqs.map((faq, index) => {
            return (
              <Accordion.Item
                value={String(index)}
                key={index}
                bg={"white"}
                mb={{ base: 16 }}
                bd={"1px solid #EBEBEC"}
                className="rounded-lg"
              >
                <Accordion.Control px={{ base: 16 }} py={{ base: 4, md: 0 }}>
                  <Title
                    order={4}
                    fz={{ base: 16, md: 18, lg: 20, xl: 22, "2xl": 24 }}
                    fw={{ base: 500, md: 600 }}
                    c={"#131416"}
                    lh={1.5}
                  >
                    {faq.question}
                  </Title>
                </Accordion.Control>
                <Accordion.Panel className="[&_.mantine-Accordion-content]:pt-0">
                  <Text
                    fz={{ base: 16, md: 18, xl: 20 }}
                    fw={500}
                    c={"#131416"}
                  >
                    {faq.answer}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
        <Flex justify={"center"} gap={40}>
          <IconChevronLeft className="w-8 md:w-9 h-8 md:h-9" color="#ccc" />
          <IconChevronRight className="w-8 md:w-9 h-8 md:h-9" color="#ccc" />
        </Flex>
      </Flex>
    </Flex>
  );
}
