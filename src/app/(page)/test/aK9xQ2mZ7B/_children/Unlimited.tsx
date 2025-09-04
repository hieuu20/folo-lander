"use client";

import { useBrowserWidth, useDisclosure } from '@/hooks';
import { Box, Button, Flex, Modal, Text, Title } from '@mantine/core';
import React, { useCallback, useRef, useState } from 'react';

import gsap from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';

import { groupBy } from 'lodash';
import { UnlimitedItem } from './unlimited/UnlimitedItem';

import arrowRight from "@public/version-3/unlimited/popup/arrow-right.svg";
import arrowLeft from "@public/version-3/unlimited/popup/arrow-left.svg";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IUnlimited, unlimitedList } from '@/utils/unlimited';

export function Unlimited() {
    const main = useRef(null);
    const [opened, { open, close }] = useDisclosure();
    const [unlimited, setUnlimited] = useState<IUnlimited>();

    const { isMb } = useBrowserWidth();
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    pin: true,
                    start: 'top top',
                    end: '+=1000',
                    markers: false,
                    scrub: true,
                },
            });

            const grouped = Object.values(groupBy(unlimitedList, 'priority'));

            grouped.map(arr => {
                arr.forEach((o) => {
                    tl.fromTo(
                        `#unlimited-item-${o.id}`,
                        { x: o.x, y: o.y, rotate: o.rotate },
                        { x: 0, y: 0, rotate: 0, duration: 0.1, ease: "power2.inOut" },
                        "<"
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
        <Box id='unlimited' h={2000} bg={"#F0F0FC"}>
            <Box ref={main} className='container-version3 z-10' bg={"#F0F0FC"}>
                <Box
                    pos={"relative"}
                    style={{
                        backgroundImage: isMb ? "url('/version-3/unlimited/bg-mb.webp')" : "url('/version-3/unlimited/bg-pc.webp')",
                        backgroundColor: "#F0F0FC"
                    }}
                    py={{ base: 104, md: 110, xl: 115, "2xl": 120 }}
                    className='bg-contain w-full aspect-[1.63148148148]'
                >
                    <Title
                        w={{ base: "100%" }}
                        px={16}
                        top={"11%"}
                        pos={"absolute"}
                        order={2}
                        fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                        c={"#131416"}
                        fw={900}
                        lh={1.2}
                        ta={"center"}
                    >
                        <motion.span
                            initial={{ y: "150%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: "easeIn"
                            }}
                            className="inline-block"
                        >
                            UNLIMITED POSSIBILITIES
                        </motion.span>
                    </Title>

                    <Flex wrap={"wrap"} w={"100%"} justify={"center"} pos={"absolute"} top={"25.4%"}>
                        {unlimitedList.map((o) => {
                            return <UnlimitedItem unlimited={o} key={o.id} onOpenPopup={onOpenPopup} />;
                        })}
                        <Flex pos={"absolute"}></Flex>
                    </Flex>
                </Box>

                {unlimited && (
                    <Modal
                        opened={opened}
                        onClose={close}
                        // w={{ base: "100%", md: 411 }}
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
