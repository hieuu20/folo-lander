/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useDisclosure } from '@/hooks';
import { Box, Button, Flex, Modal, Text, Title } from '@mantine/core';
import React, { useCallback, useRef, useState } from 'react';

import gsap from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';

import { groupBy } from 'lodash';

import arrowRight from "@public/version-3/unlimited/popup/arrow-right.svg";
import arrowLeft from "@public/version-3/unlimited/popup/arrow-left.svg";
import { motion, useAnimate } from 'framer-motion';
import Link from 'next/link';
import { IUnlimited, unlimitedList } from '@/utils/unlimited';

export function UnlimitedMobile() {
    const main = useRef(null);
    const [opened, { open, close }] = useDisclosure();
    const [unlimited, setUnlimited] = useState<IUnlimited>();

    const [scope] = useAnimate();

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top top',
                    end: 'bottom-=300 bottom',
                    markers: false,
                    scrub: true,
                    onLeave: () => {
                        console.log("ScrollTrigger leave");
                    },
                },
            });

            const grouped = Object.values(groupBy(unlimitedList, 'priority'));

            grouped.map(arr => {
                arr.slice(2).forEach((o, index) => {
                    const isLeft = index % 2 == 0;
                    const step = !isLeft ? index : index + 1;
                    tl.fromTo(
                        `#unlimited-item-${o.id}`,
                        { x: step * (isLeft ? -25 : 25), y: step * 15, rotate: (isLeft ? 12 : -12), },
                        { x: 0, y: 0, rotate: 0, duration: 1, ease: "power2.inOut" },
                        isLeft ? index == 0 ? undefined : "<+=0.1" : "<"
                    );
                });
            });
        },
        {
            scope: main,
        }
    );

    const onOpenPopup = useCallback((unlimited: IUnlimited) => {
        open();
        setUnlimited(unlimited);
    }, [open]);

    const onPrev = useCallback((id: number) => {
        if (id == 1) {
            setUnlimited(unlimitedList[unlimitedList.length - 2]);
            return;
        }
        return setUnlimited(unlimitedList[id - 2]);
    }, []);

    const onNext = useCallback((id: number) => {
        if (id == unlimitedList.length - 1) {
            setUnlimited(unlimitedList[0]);
            return;
        }
        return setUnlimited(unlimitedList[id]);
    }, []);

    return (
        <Box id='unlimited' bg={"#F0F0FC"} className='overflow-hidden'>
            <Box ref={main} className='container-version3 z-10' bg={"#F0F0FC"}>
                <Box
                    pos={"relative"}
                    style={{
                        backgroundImage: "url('/version-3/unlimited/bg-mb.webp')",
                        backgroundColor: "#F0F0FC"
                    }}
                    py={{ base: "20%", md: 110, xl: 115, "2xl": 120 }}

                    className='bg-contain w-full aspect-[1.63148148148]'
                >
                    <Title
                        w={{ base: "100%" }}
                        px={16}
                        top={"4%"}
                        pos={"absolute"}
                        order={2}
                        fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                        c={"#131416"}
                        fw={900}
                        lh={1.2}
                        ta={"center"}
                    >
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                            className="inline-block"
                        >
                            UNLIMITED POSSIBILITIES
                        </motion.span>
                    </Title>

                    <Flex
                        ref={scope}
                        wrap={"wrap"}
                        w={"100%"}
                        h={"fit-content"}
                        justify={"center"}
                        mt={{ base: "45.5%" }}
                    >
                        {unlimitedList.map((unlimited, index) => {
                            const isLeft = index % 2 == 0;
                            const step = !isLeft ? index - 1 : index;

                            return unlimited.title ? (
                                <Box
                                    key={unlimited.id}
                                    id={`unlimited-item-${unlimited.id}`}
                                    className='aspect-[0.83] md:aspect-[1.53043478261] cursor-pointer w-1/2 p-2 '
                                >
                                    <Flex
                                        key={unlimited.id}
                                        direction={"column"}
                                        w={"100%"}
                                        h={"100%"}
                                        className='rounded-2xl group'
                                        justify={"center"}
                                        align={"center"}
                                        bg={"white"}
                                    >
                                        <Flex
                                            direction={"column"}
                                            gap={0}
                                            align={"center"}
                                            onClick={() => onOpenPopup(unlimited)}
                                        >
                                            <Image src={unlimited.img} alt={unlimited.title} className='h-10 w-auto mb-3' />
                                            <Text
                                                fz={{ base: 15, "2xl": 16 }}
                                                fw={600} lh={1.5}
                                                c={"#131416"}
                                                mb={4}
                                            >
                                                {unlimited.title}
                                                <span
                                                    className="inline-block opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
                                                >
                                                    →
                                                </span>
                                            </Text>
                                            <Text c={"#4D5053"} fz={{ base: 12, "2xl": 13 }} lh={1.2} w={{ base: "90%" }} ta={"center"}>
                                                {unlimited.description}
                                            </Text>
                                        </Flex>

                                        {unlimited.buttonTitle && unlimited.buttonLink && (
                                            <Link href={unlimited.buttonLink} target='_blank' className='mt-2.5 2xl:mt-3 text-xs 2xl:text-[13px] text-[#AC1991] underline'>
                                                {unlimited.buttonTitle}
                                            </Link>
                                        )}
                                    </Flex>
                                </Box>
                            ) : (
                                <Text
                                    fz={{ base: 16 }}
                                    fw={700}
                                    c={"#9554D6"}
                                    lh={1.2}
                                    ta={"center"}
                                    className='uppercase'
                                    mt={{ base: 40 }}
                                >
                                    <Link target='_blank' href={"/fans"}>
                                        Discover fan <br /> features →
                                    </Link>
                                </Text>
                            );
                        })}
                    </Flex>
                </Box>
                {unlimited && (
                    <Modal
                        opened={opened}
                        onClose={close}
                        size={411}
                        centered={true}
                        classNames={{
                            header: "hidden",
                            body: "p-0"
                        }}
                    >
                        <Flex direction={"column"} align={"center"}>
                            <Image src={unlimited.popupImg} alt={unlimited.title} className='w-full h-auto object-cover' />
                            <Flex direction={"column"} align={"center"} p={{ base: 12, md: 16 }}>
                                <Text fz={{ base: 18, md: 20 }} c={"#131416"} fw={600} mb={4}>
                                    {unlimited.popupTitle}
                                </Text>
                                <Text w={"80%"} fz={{ base: 13, md: 14 }} ta={"center"} c={"#4D5053"} mb={{ base: 20, md: 24 }}>
                                    {unlimited.popupDescription}
                                </Text>

                                <Flex gap={{ base: 20, md: 24 }} justify={"center"} mb={{ base: 20, md: 24 }} className='cursor-pointer'>
                                    <Image
                                        src={arrowLeft}
                                        alt='arrow left'
                                        width={24}
                                        height={24}
                                        onClick={() => onPrev(unlimited.id)}
                                    />
                                    <Image
                                        src={arrowRight}
                                        alt='arrow left'
                                        width={24}
                                        height={24}
                                        onClick={() => onNext(unlimited.id)}
                                    />
                                </Flex>

                                <Flex justify={"space-between"} w={"100%"}>
                                    <Button
                                        w={"48%"}
                                        h={40}
                                        fz={{ base: 14, md: 16 }}
                                        c={"#131416"}
                                        fw={600}
                                        bd={"1px solid #E7E7F8"}
                                        className='rounded-lg'
                                        onClick={close}
                                    >
                                        Close
                                    </Button>

                                    <Button
                                        w={"48%"}
                                        h={40}
                                        c={"white"}
                                        fw={600}
                                        fz={{ base: 14, md: 16 }}
                                        style={{
                                            background: unlimited.popupButtonColor ? `${unlimited.popupButtonColor}` : "#AC1991"
                                        }}
                                        className='rounded-lg'
                                    >
                                        <Link href={unlimited.popupButtonLink} target='_blank' className='w-full'>
                                            {unlimited.popupButtonTitle}
                                        </Link>
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Modal>
                )}
            </Box>
        </Box>
    );
}
