import { Box, Flex, Text } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
// import logo from "@public/banner/logo.png";
// import Image from 'next/image';
// import itemImg from "@public/banner/circle/img.png";
import { motion, useAnimation, useInView } from 'framer-motion';
import phone from "@public/version-3/banner/border-phone.png";
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const images = [
    "/banner/circle/1.webp",
    "/banner/circle/2.webp",
    "/banner/circle/3.webp",
    "/banner/circle/4.webp",
    "/banner/circle/5.webp",
    "/banner/circle/6.webp",
    "/banner/circle/7.webp",
    "/banner/circle/8.webp",
    "/banner/circle/9.webp",
    "/banner/circle/10.webp",
    "/banner/circle/11.webp",
    "/banner/circle/12.webp",
    "/banner/circle/13.webp",
    "/banner/circle/14.webp",
    "/banner/circle/15.webp",
    "/banner/circle/16.webp",
];

export function BannerBottom() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.82 });

    return (
        <Box pt={{ base: "60%" }} pb={{base: "34%"}} className='overflow-hidden'>
            <Flex ref={ref} pos={"relative"} justify={"center"} >
                <Circle isInView={isInView} />
                <Box
                    pos={"absolute"}
                    bottom={"-32%"}
                    w={"100%"}
                    left={0}
                    className='aspect-[0.86405529953]'
                    style={{
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
                    }}
                />
                <Phone isInView={isInView} />
            </Flex>
        </Box>
    );
}

const Phone = ({ isInView }: { isInView: boolean }) => {
    return (
        <Box
            pos={"absolute"}
            w={{ base: "70%", md: "24.95%" }}
            className='aspect-[0.65312441358] top-0 -translate-y-[60%]'
        >
            <motion.div
                className='absolute w-full h-full'
                initial={{
                    scale: 1.8,
                    top: "110%"
                }}
                animate={isInView ? {
                    scale: 1,
                    top: "0%"
                } : {}}
                transition={{
                    duration: 0.6,
                    ease: "easeIn",
                    delay: 0.1
                }}
            >
                <Image src={phone} alt='phone' fill className='object-cover' />
                <video
                    autoPlay={true}
                    playsInline
                    loop
                    preload="auto"
                    controls={true}
                    muted={false}
                    className={twMerge('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[62.8%] h-[88%] object-cover rounded-[8%]')}
                >
                    <source src={"/banner/phone-video.mp4"} type="video/mp4" />
                </video>
                <Flex
                    pos={"absolute"}
                    bottom={{ base: "-18%" }}
                    left={"50%"}
                    direction={"column"}
                    gap={{ base: 8, md: 10, xl: 12 }}
                    align={"center"}
                    className='-translate-x-1/2'
                >
                    <Text fz={{ base: 11, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }} lh={1.2} c={"#FFFFFFCC"} className='whitespace-nowrap'>
                        Content for Public, Pay-to-View, Subscribers Only, Followers,…
                    </Text>

                    <Text fz={{ base: 20, sm: 22, md: 26, lg: 28, xl: 30, "2xl": 32 }} fw={500} lh={1.2} c={"white"} className='whitespace-nowrap'>
                        KNKY is built for your flexibility.
                    </Text>
                </Flex>
            </motion.div>

        </Box>
    );
};

const Circle = ({ isInView }: { isInView: boolean }) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const element = document.getElementById("image-container-mb")?.getBoundingClientRect();
        if (element) {
            setContainerWidth(element.width);
        }
    }, []);

    useEffect(() => {
        if (isInView && containerWidth > 0) {
            controls.start({
                scale: 1.64,
                rotate: 0,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    ease: "easeIn",
                    delay: 0.1
                },
            }).then(() => {
                controls.start({
                    rotate: [0, 180],
                    transition: {
                        repeat: 0,
                        ease: "easeOut",
                        duration: 4,
                    },
                });
            });
        }
    }, [isInView, controls, containerWidth]);

    return (
        <Box
            pos={"relative"}
            id='image-container-mb'
            w={{ base: "164%", md: "84%" }}
            maw={"auto"}
            className='aspect-square'
        >
            <motion.div
                ref={ref}
                animate={controls}
                initial={{ scale: 0.6, rotate: 0, opacity: 0.2 }}
                className="absolute w-full h-full origin-center"
            >
                {images.map((src, i) => {
                    const imgSize = containerWidth * 0.086; // 8% của div ngoài
                    const radius = containerWidth / 2 - (imgSize * 1);

                    const angle = (i / images.length) * 2 * Math.PI - Math.PI / 2;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    const rotate = i * 22.5;

                    return (
                        <motion.img
                            key={i}
                            src={src}
                            alt=""
                            className="absolute w-[8.86%] h-auto object-cover"
                            style={{
                                left: "50%",
                                top: "50%",
                                transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rotate}deg)`,
                            }}
                        />
                    );
                })}
            </motion.div>
        </Box>
    );
};