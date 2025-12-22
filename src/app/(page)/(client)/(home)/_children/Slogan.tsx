"use client";

import { Box, Flex, Text, Title } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

import gsap from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import elipse1 from "@public/slogan/ellipse1.webp";
import elipse2 from "@public/slogan/ellipse2.webp";
import elipse3 from "@public/slogan/ellipse3.webp";

import layer1 from "@public/slogan/layer1.webp";
import layer2 from "@public/slogan/layer2.webp";
import layer3 from "@public/slogan/layer3.webp";

import starIcon from "@public/slogan/star.png";

import feature1 from "@public/slogan/feature/1/img.webp";
import feature1Phone from "@public/slogan/feature/1/phone.webp";

import feature2 from "@public/slogan/feature/2/img.webp";
import featureShop from "@public/slogan/feature/2/img2.webp";
import { LiveCount } from './slogan/LiveCount';
import { LiveComments } from './slogan/LiveComment';

import bgFeature3 from "@public/slogan/feature/3/bg.webp";
import img1Feature3 from "@public/slogan/feature/3/img1.webp";
import img2Feature3 from "@public/slogan/feature/3/img2.webp";
import logoFeature3 from "@public/slogan/feature/3/logo.webp";

import bgFeature4 from "@public/slogan/feature/4/img.webp";
import { useWindowHeight } from '@/hooks';



export function Slogan() {
    const main = useRef(null);
    const [ctnPadding, setCtnPadding] = useState(0);

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
            const endValue = step * 3;

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

            // tl.fromTo(
            //     "#slogan",
            //     { x: 0, y: 0 },
            //     { x: 0, y: 0, duration: 1, ease: "power2.out" },
            // );

            tl.fromTo(
                "#slogan-text",
                { autoAlpha: 0, y: "50%", x: "-50%" },
                { autoAlpha: 1, y: -50, x: "-50%", duration: 1, ease: "power2.out" },
                // "<+=0.2"
            );

            tl.fromTo(
                "#feature",
                { y: 0 },
                { y: "-100vh", duration: 1.5, ease: "power2.out", delay: 0.5 },
            );

            tl.fromTo(
                "#feature-1-text",
                { y: "70%", opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "<+=0.6"
            );
        },
        {
            scope: main,
        }
    );

    return (
        <Box>
            <Box ref={main} bg={"white"} h={"400vh"}>
                <Box id='slogan' w={"100%"} h={"100vh"} pos={"relative"} className='overflow-hidden'>
                    <BackgroundAnimation />

                    <Box w={"100%"} h={"100%"} pos={"relative"} className='container'>
                        <Image src={elipse1} alt='elipse' className='w-auto h-[15%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />
                        <Image src={elipse2} alt='elipse' className='w-auto h-[35%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />
                        <Image src={elipse3} alt='elipse' className='w-auto h-[55%] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover ' />

                        <Flex
                            id='slogan-text'
                            direction={"column"}
                            pos={"absolute"}
                            top={"45%"}
                            left={"50%"}
                            align={"center"}
                            c={"white"}
                        >
                            <Image src={starIcon} alt='starIcon' className='w-[104px] h-auto mb-10' />
                            <Title
                                order={2} fz={{ base: 32, md: 40, lg: 45, xl: 50, "2xl": 56 }} fw={600}
                                lh={1.2}
                                ta={"center"}
                                mb={16}
                            >
                                Faster, Simpler and Smarter.
                            </Title>

                            <Text
                                c={"#FFFFFFCC"} fz={{ base: 18, md: 22, lg: 24, xl: 26, "2xl": 28 }} lh={1.2} ta={"center"}
                            >
                                The AI-first system understands your needs, increases your earnings, and improves every micro interaction.
                            </Text>
                        </Flex>
                    </Box>
                </Box>

                <Box id='feature' w={"100%"} bg={"white"} className='rounded-t-[24px] overflow-hidden'>
                    <Feature1 padding={ctnPadding} />
                </Box>
            </Box>

            <Feature2 padding={ctnPadding} />
            <Feature3 padding={ctnPadding} />
            <Feature4 padding={ctnPadding} />
        </Box>
    );
}

const Feature1 = ({ padding }: { padding: number }) => {
    return (
        <Flex
            h={"100vh"}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "space-between" }}
            align={{ base: "center" }}
            pl={padding}
        >
            <Flex id='feature-1-text' direction={"column"} gap={{ base: 16 }} w={"36%"} >
                <Text fz={{ base: 56 }} fw={600} c={"#131416"} lh={1.2}>
                    Conversations Upgraded.
                </Text>

                <Text fz={{ base: 28 }} fw={500} c={"#4D5053"} lh={1.2}>
                    From instant messages to video calls, built to engage, track, and monetise.
                </Text>
            </Flex>

            <Box h={"76%"} w={"fit-content"} pos={"relative"}>
                <Image src={feature1} alt='feature1' className='h-full w-auto object-cover' />
                <Image src={feature1Phone} alt='feature1Phone' className='h-[80%] w-auto absolute bottom-[-6%] left-0 -translate-x-1/2 object-cover' />
            </Box>
        </Flex>
    );
};

const Feature2 = ({ padding }: { padding: number }) => {
    const main = useRef(null);
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.6 });

    const wdheight = useWindowHeight();

    useGSAP(
        () => {
            const step = window.innerHeight;
            const endValue = step * 0.6;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top 35%',
                    end: `+=${endValue}`,
                    markers: false,
                    scrub: true,
                },
            });

            tl.fromTo(
                "#feature-2-text",
                { y: "70%", opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );
        },
        {
            scope: main,
        }
    );

    return (
        <Box
            ref={main}
            h={"115vh"}
        >
            <Flex
                h={wdheight}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "space-between" }}
                align={{ base: "center" }}
                pr={padding}
            >
                <Box ref={ref} h={wdheight * 0.74} w={"auto"} pos={"relative"} className='aspect-[1.11842105263]'>
                    <Image src={feature2} alt='feature1' className='h-full w-auto object-cover' />
                    <Flex
                        h={"10.3%"}
                        pos={"absolute"}
                        top={"3%"}
                        left={"3%"}
                        bg={"#F11E11"}
                        fz={"2.9cqh"}
                        fw={500}
                        c={"white"}
                        justify={"center"}
                        align={"center"}
                        className='rounded-[20px] aspect-[1.72523961661]'
                    >
                        LIVE
                    </Flex>
                    <Flex
                        pos={"absolute"}
                        top={"3%"}
                        left={"22%"}
                        // w={"11.2%"}
                        h={"10.3%"}
                        fz={"2.9cqh"}
                        fw={500}
                        c={"white"}
                        justify={"center"}
                        align={"center"}
                        bg={"#000000CC"}
                        className='rounded-[20px] aspect-[1.32966331578]'
                    >
                        <LiveCount isInView={isInView} />
                    </Flex>

                    <Flex
                        direction={"column"}
                        gap={8}
                        w={"51%"}
                        h={wdheight * 0.42}
                        pos={"absolute"}
                        bottom={"1%"}
                        left={"2%"}
                        className='overflow-hidden'
                    >
                        <LiveComments />
                    </Flex>

                    {isInView && (
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: "circOut",
                                delay: 0.3
                            }}
                            className='absolute w-[37%] h-fit bottom-0 right-[2.5%]'
                        >
                            <Image src={featureShop} alt='featureShop' className='w-full h-auto object-cover' />
                        </motion.div>
                    )}

                </Box>

                <Flex id='feature-2-text' direction={"column"} gap={{ base: 16 }} w={"36%"} >
                    <Text fz={{ base: 56 }} fw={600} c={"#131416"} lh={1.2}>
                        The Open Marketplace.
                    </Text>

                    <Text fz={{ base: 28 }} fw={500} c={"#4D5053"} lh={1.2}>
                        Products, services, subscriptions, and live selling - all in one open marketplace.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

const Feature3 = ({ padding }: { padding: number }) => {
    const main = useRef(null);

    useGSAP(
        () => {
            const step = window.innerHeight;
            const endValue = step * 0.6;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    // pin: true,
                    start: 'top 35%',
                    end: `+=${endValue}`,
                    markers: false,
                    scrub: true,
                },
            });

            tl.fromTo(
                "#feature-3-text",
                { y: "70%", opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );

            tl.fromTo(
                "#logoFeature3",
                { y: "-50%", x: 300, opacity: 0 },
                { y: "-50%", x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "<"
            );

            tl.fromTo(
                "#img1Feature3",
                { y: "-50%", x: 300, opacity: 0 },
                { y: "-50%", x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "<+=0.1"
            );

            tl.fromTo(
                "#img2Feature3",
                { y: "-50%", x: 300, opacity: 0 },
                { y: "-50%", x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "<+=0.1"
            );

        },
        { scope: main, }
    );

    return (
        <Box
            ref={main}
            h={"115vh"}
        >
            <Flex
                h={"100vh"}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "space-between" }}
                align={{ base: "center" }}
                pl={padding}
            >
                <Flex id='feature-3-text' direction={"column"} gap={{ base: 16 }} w={"36%"} >
                    <Text fz={{ base: 56 }} fw={600} c={"#131416"} lh={1.2}>
                        The Platform for Everyone.
                    </Text>

                    <Text fz={{ base: 28 }} fw={500} c={"#4D5053"} lh={1.2}>
                        Express every side of you, with controls that let fans choose their experience.
                    </Text>
                </Flex>

                <Box h={"76%"} w={"fit-content"} pos={"relative"}>
                    <Image src={bgFeature3} alt='bgFeature3' className='h-full w-auto object-cover' />
                    <Image src={img2Feature3} id='img2Feature3' alt='img2Feature3' style={{ opacity: 0 }} className='w-[27%] h-auto absolute left-[63%] top-1/2' />
                    <Image src={img1Feature3} id='img1Feature3' alt='img1Feature3' style={{ opacity: 0 }} className='w-[40%] h-auto absolute left-[28%] top-1/2' />
                    <Image src={logoFeature3} id='logoFeature3' alt='logoFeature3' className='w-[40%] h-auto absolute left-[0%] top-1/2' />
                </Box>
            </Flex>
        </Box>
    );
};

const Feature4 = ({ padding }: { padding: number }) => {
    const main = useRef(null);

    useGSAP(
        () => {
            const step = window.innerHeight;
            const endValue = step * 0.6;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    // pin: true,
                    start: 'top 35%',
                    end: `+=${endValue}`,
                    markers: false,
                    scrub: true,
                },
            });

            tl.fromTo(
                "#feature-4-text",
                { y: "70%", opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );

        },
        {
            scope: main,
        }
    );

    return (
        <Box
            ref={main}
            h={"115vh"}
        >
            <Flex
                h={"100vh"}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "space-between" }}
                align={{ base: "center" }}
                pr={padding}
            >
                <Box h={"76%"} w={"fit-content"} pos={"relative"}>
                    <Image src={bgFeature4} alt='bgFeature4' className='h-full w-auto object-cover' />
                </Box>

                <Flex id='feature-4-text' direction={"column"} gap={{ base: 16 }} w={"36%"} >
                    <Text fz={{ base: 56 }} fw={600} c={"#131416"} lh={1.2}>
                        Where You Get Found
                    </Text>

                    <Text fz={{ base: 28 }} fw={500} c={"#4D5053"} lh={1.2}>
                        More than traffic - Match AI connects your work with fans who actually engage.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};


const BackgroundAnimation = () => {
    return (
        <>
            <motion.div
                // initial={{ height: '75%', opacity: 1 }}
                animate={{
                    height: ['75%', '100%', '75%'],
                }}
                transition={{
                    duration: 2.3,
                    ease: 'circOut',
                    // times: [0, 0.87, 1],
                    repeat: Infinity,
                    // repeatDelay: 1,
                }}
                className='w-full absolute bottom-0 left-0 origin-top'
            >
                <motion.div
                    className='w-full h-full absolute bottom-0 left-0'
                >
                    <Image src={layer3} alt='layer' fill className='object-cover object-top' />
                </motion.div>

                <motion.div
                    className='w-full h-full absolute bottom-0 left-0'
                >
                    <Image src={layer2} alt='layer' className='w-full h-full object-cover object-top' />
                </motion.div>

                <motion.div
                    className='w-full h-[92%] absolute bottom-0 left-0'
                >
                    <Image src={layer1} alt='layer' className='w-full h-full object-cover object-top' />
                </motion.div>
            </motion.div>
        </>
    );
};

// export default function BackgroundAnimation() {
//     const [halos, setHalos] = useState<{ id: number; z: number }[]>([]);

//     useEffect(() => {
//         let id = 0;

//         // spawn mỗi 2.3s
//         const spawn = setInterval(() => {
//             id++;
//             setHalos((prev) => [...prev, { id, z: id }]);

//             // remove sau 4.6s
//             setTimeout(() => {
//                 setHalos((prev) => prev.filter((h) => h.id !== id));
//             }, 4600);
//         }, 2300);

//         return () => clearInterval(spawn);
//     }, []);

//     return (
//         <AnimatePresence>
//             {halos.map((h) => (
//                 <Halo key={h.id} z={h.z} />
//             ))}
//         </AnimatePresence>
//     );
// }

// function Halo({ z }: { z: number }) {
//     return (
//         <motion.div
//             initial={{ height: '75%', opacity: 1 }}
//             animate={{
//                 height: ['75%', '100%', '100%'],
//                 opacity: [1, 1, 0],
//             }}
//             transition={{
//                 duration: 2.3,
//                 ease: 'circOut',
//                 times: [0, 0.87, 1],
//             }}
//             className="w-full absolute bottom-0 left-0 origin-top"
//             style={{ zIndex: z }}
//         >
//             <div className="absolute inset-0">
//                 <Image src={layer3} fill alt="" className="object-cover object-top" />
//             </div>
//             <div className="absolute inset-0">
//                 <Image src={layer2} alt="" className="w-full h-full object-cover object-top" />
//             </div>
//             <div className="absolute bottom-0 left-0 w-full h-[92%]">
//                 <Image src={layer1} alt="" className="w-full h-full object-cover object-top" />
//             </div>
//         </motion.div>
//     );
// }
