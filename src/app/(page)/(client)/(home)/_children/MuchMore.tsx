import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';
import { More, moreList } from '@/utils';
import { useBrowserWidth } from '@/hooks';

export function MuchMore() {
    const main = useRef(null);
    const [ctnPadding, setCtnPadding] = useState(0);

    const { width } = useBrowserWidth();

    useEffect(() => {
        const containerEl = document.querySelector(".container");
        if (containerEl) {
            const styles = window.getComputedStyle(containerEl);
            const paddingLeft = parseFloat(styles.paddingLeft);
            const marginLeft = parseFloat(styles.marginLeft);
            setCtnPadding(paddingLeft + marginLeft);
        }
    }, []);

    useGSAP(
        () => {
            const step = window.innerHeight;
            const endValue = step * 7;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    pin: true,
                    start: 'top top',
                    end: `+=${endValue}`,
                    markers: false,
                    scrub: true,
                },
            });

            tl.fromTo("#more-text",
                {
                    x: 0
                },
                {
                    x: -(window.innerWidth * 0.225 * (moreList.length - 0.5)),
                    duration: 1
                }
            );

            tl.fromTo("#track",
                {
                    x: 0
                },
                {
                    x: -(window.innerWidth * 0.225 * (moreList.length - 0.5)),
                    duration: 1
                },
                "<"
            );
        },
        {
            scope: main,
        }
    );

    return (
        <Box id='MuchMore' w={"100%"} bg={"white"} h={"800vh"}>
            <Box
                ref={main}
                h={"100vh"}
                w={"100%"}
            >
                <Flex
                    h={"100%"}
                    w={"100%"}
                    align={"center"}
                    pl={ctnPadding}
                    justify={"space-between"}
                >
                    <Flex id='more-text' direction={"column"} gap={{ base: 16 }} w={"36%"} >
                        <Text fz={{ base: 56 }} fw={600} c={"#131416"} lh={1.2}>
                            And much more
                        </Text>

                        <Text fz={{ base: 28 }} fw={500} c={"#4D5053"} lh={1.2}>
                            A growing set of tools designed to support creators, brands, and users to help you grow.
                        </Text>
                    </Flex>

                    <Box w={"56%"}>
                        <Flex align={"center"} w={"fit-content"} gap={24} id='track'>
                            {moreList.map((o, index) => {
                                return (
                                    <MoreItem key={index} item={o} width={width * 0.225} />
                                );
                            })}
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}


const MoreItem = ({ item, width }: { item: More, width: number }) => {
    return (
        <Flex
            direction={"column"}
            justify={"space-between"}
            w={width}
            bg={item.backgroundRadiant || item.backgroundColor || undefined}
            style={{
                backgroundImage: item.backgroundImg ? `url('${item.backgroundImg}')` : undefined
            }}
            p={{ base: 24 }}
            className='rounded-[40px] aspect-[0.60408921933] overflow-hidden bg-no-repeat bg-cover'
        >
            <Flex direction={"column"} gap={{ base: 12 }}>
                <Text fz={{ base: 24, md: 32 }} c={item.titleColor} fw={600} lh={1.2}>
                    {item.title}
                </Text>

                <Text fz={{ base: 16, md: 20 }} c={item.dscColor} mb={{ base: 12 }} lh={1.2}>
                    {item.description}
                </Text>
            </Flex>

            <Box
                w={item.larger ? "calc(100% + 24px)" : "100%"}
                pos={"relative"}
                bottom={item.absolute?.bottom ? -24 : 0}
                right={item.absolute?.right ? 0 : 0}
            >
                <Image src={item.img} alt={item.title} className='w-full h-auto' />
            </Box>

        </Flex>
    );
};