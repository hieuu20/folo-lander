"use client";

import { IFaq } from "@/app/api/_entities";
import ElementAnimation from "@/components/animation/ElementAnimation";
import TextAnimation from "@/components/animation/TextAnimation";
import SectionSubTitle from "@/components/Typo/SectionSubTitle";
import SectionTitle from "@/components/Typo/SectionTitle";
import { Accordion, Flex, Text, Title } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useAnimate, useInView } from "framer-motion";
import React from "react";

interface Props {
  title: string;
  description: string;
  faqs: IFaq[];
}
export function Faq({ title, description, faqs }: Props) {
  const [scope] = useAnimate();
  const isInView = useInView(scope, { amount: 0.3 });

  return (
    <Flex
      id="FAQs"
      ref={scope}
      direction={{ base: "column", md: "row" }}
      gap={{ base: 16, md: 0 }}
      py={{ base: 40, md: 48, lg: 60, xl: 72, "2xl": 80 }}
      className="container scroll-mt-[72px]"
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
            rootProps={{ gap: { base: 6, md: 8, lg: 10, "2xl": 12 } }}
            isInView={isInView}
          />
        </SectionTitle>
        <SectionSubTitle>
          <TextAnimation
            text={description}
            initDelay={1000}
            isInView={isInView}
            rootProps={{ justify: 'center'}}
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
              <ElementAnimation
                key={index}
                isInView={isInView}
                initDelay={index * 250 + 1500}
              >
                <Accordion.Item
                  value={String(index)}
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
              </ElementAnimation>
            );
          })}
        </Accordion>
        <ElementAnimation
          isInView={isInView}
          initDelay={1500 + faqs.length * 250}
          className="flex justify-center gap-10"
        >
          <IconChevronLeft className="w-8 md:w-9 h-8 md:h-9" color="#ccc" />
          <IconChevronRight className="w-8 md:w-9 h-8 md:h-9" color="#ccc" />
        </ElementAnimation>
      </Flex>
    </Flex>
  );
}
