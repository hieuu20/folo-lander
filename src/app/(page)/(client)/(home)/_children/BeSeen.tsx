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

            const imageDuration = 1;         // 1 unit timeline
            // const textDuration = list.length; // mỗi chữ = 1 unit

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    pin: true,
                    start: 'top top',
                    end: `+=${step * 3}`,
                    scrub: true,
                    markers: false,
                },
            });

            /* ---------------- IMAGE PHASE ---------------- */
            tl.to("#beSeen-image", {
                width: "100%",
                height: "100%",
                duration: imageDuration,
                ease: "power2.inOut",
            });

            /* ---------------- TEXT PHASE ---------------- */
            list.forEach((_, index) => {
                tl.call(
                    () => {
                        list.forEach((__, i) => {
                            gsap.set(`#be-${i}`, {
                                display: i === index ? 'block' : 'none',
                            });
                        });
                    },
                    [],
                    imageDuration + index // ⬅️ bắt đầu SAU image
                );
            });

            /* init */
            list.forEach((_, i) => {
                gsap.set(`#be-${i}`, {
                    display: i === 0 ? 'block' : 'none',
                });
            });

            tl.to("#beSeen-image", {
                opacity: 1,
                duration: imageDuration / 2,
                ease: "power2.inOut",
            });
        },
        { scope: main }
    );

    return (
        <Box id='BeSeen' w={"100%"} bg={"white"} h={"400vh"}>
            <Box
                ref={main}
                h={"100vh"}
                w={"100%"}
            >
                <Flex w={"100%"} h={"100%"} pos={"relative"} justify={"center"} align={"center"}>
                    <Box
                        id='beSeen-image'
                        w={"80%"}
                        h={"80%"}
                        pos={"absolute"}
                        top={"50%"} left={"50%"}
                        className='origin-center -translate-x-1/2 -translate-y-1/2'
                    >
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

                    {/* <Box
                        id='beSeen-image'
                        w={"80%"}
                        h={"80%"}
                        // pos={"absolute"}
                        // top={"50%"} left={"50%"}
                        className='overflow-hidden'
                    >
                        <Image src={bg} alt='bg' fill className='object-cover' />
                    </Box> */}
                </Flex>
            </Box>
        </Box>
    );
}

// box-shadow: 0px 0px 8px 0px #00000040;

