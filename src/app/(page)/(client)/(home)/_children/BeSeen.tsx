import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap/dist/gsap';
import { Box, Flex, Text } from '@mantine/core';
import Image from 'next/image';

import bg from "@public/be-seen/img.webp";
import { motion, useAnimate, useInView } from 'framer-motion';

const list = ["Be Seen.", "Be Engaging.", "Be Profitable."];

export function BeSeen() {
    const main = useRef(null);

    const [scope] = useAnimate();
    const isInView = useInView(scope, { amount: 0.99, once: true });

    const [index, setIndex] = useState(0);

    useEffect(() => {
        // if (!isInView) return;

        const iId = setInterval(() => setIndex(o => o == 2 ? 0 : o + 1), 2000);

        return () => clearInterval(iId);
    }, []);

    console.log({ index });

    useGSAP(
        () => {
            const step = window.innerHeight;
            const imageDuration = 1;

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
                <Flex ref={scope} w={"100%"} h={"100%"} pos={"relative"} justify={"center"} align={"center"}>
                    <motion.div
                        id='beSeen-image'
                        initial={{ width: "80%", height: "80%" }}
                        animate={isInView ? { width: "100%", height: "100%" } : {}}
                        transition={{
                            duration: 0.8,
                            ease: "circOut",
                            delay: 0
                        }}
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    >
                        <Image src={bg} alt='bg' className='object-cover h-full w-full' />
                        <Flex
                            pos={"absolute"}
                            top={"50%"}
                            left={"50%"}
                            w={{ base: "90%" }}
                            className='-translate-x-1/2 -translate-y-1/2'
                        >
                            <Text
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
                                {list[index]}
                            </Text>
                        </Flex>
                    </motion.div>
                </Flex>
            </Box>
        </Box>
    );
}

// box-shadow: 0px 0px 8px 0px #00000040;

