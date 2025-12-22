import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';

import bg from "@public/be-seen/img.webp";

const list = ["Be Seen.", "Be Engaging.", "Be Profitable."];

export function BeSeen() {
    const main = useRef(null);

    useGSAP(
        () => {

            const step = window.innerHeight;
            const endValue = step * 4;

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

            tl.fromTo("#beSeen-image",
                {
                    clipPath: "inset(0 50% 0 50%)"
                },
                {
                    clipPath: "inset(0 0% 0 0%)",
                    duration: 1,
                    ease: "power2.out"
                }
            );

            list.forEach((o, index) => {
                if (index > 0) {
                    tl.fromTo(
                        `#be-${index}`,
                        { autoAlpha: 0 },
                        { autoAlpha: 1, duration: 1, delay: 0.2, ease: "power2.out" },
                        "<"
                    );
                }

                if (index < list.length - 1) {
                    tl.fromTo(
                        `#be-${index}`,
                        { autoAlpha: 1 },
                        { autoAlpha: 0, duration: 1, ease: "power2.out" },
                    );
                }

            });
        },
        {
            scope: main,
        }
    );

    return (
        <Box id='BeSeen' w={"100%"} bg={"white"} h={"500vh"}>
            <Box
                ref={main}
                h={"100vh"}
                w={"100%"}
            >
                <Box w={"100%"} h={"100%"} pos={"relative"}>
                    <Box id='beSeen-image' w={"100%"} h={"100%"} pos={"absolute"} top={0} left={0} className='origin-center'>
                        <Image src={bg} alt='bg' className='object-cover h-full w-full' />
                        <Flex
                            pos={"absolute"}
                            top={"50%"}
                            left={"50%"}
                            w={{ base: "90%" }}
                            className='-translate-x-1/2 -translate-y-1/2'
                        >
                            {list.map((o, i) => {
                                return (
                                    <Text
                                        key={i} id={`be-${i}`}
                                        w={{ base: "100%" }}
                                        fz={{ base: 70, sm: 90, md: 120, lg: 140, xl: 160, "2xl": 180 }}
                                        fw={600}
                                        c={"white"}
                                        lh={1.2}
                                        ta={"center"}
                                        className='center-absolute md:whitespace-nowrap'
                                        style={{
                                            textShadow: "0px 0px 30px #000000CC",
                                        }}
                                    >
                                        {o}
                                    </Text>
                                );
                            })}
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

// box-shadow: 0px 0px 8px 0px #00000040;

