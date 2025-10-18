/* eslint-disable react-hooks/rules-of-hooks */
import { useBrowserWidth } from '@/hooks';
import { Box, Flex, Text } from '@mantine/core';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

export function TimeToShineMobile() {
    return (
        <>
            <Box id='Running' pos={"relative"} w={"100%"} bg={"#160328"} className='overflow-hidden aspect-[0.46284829721]'>
                <Box
                    pos={"absolute"}
                    bottom={0}
                    left={"50%"}
                    w={"120%"}
                    className='aspect-square translate-y-2/3 -translate-x-1/2 overflow-hidden z-10'
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(117, 17, 175, 0.4) 0%, rgba(18, 2, 32, 0) 100%)"
                    }}
                />
                <Box
                    pos={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    w={"300%"}
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(117, 17, 175, 0.3) 0%, rgba(18, 2, 32, 0) 100%)",
                    }}
                    className='aspect-[4.44578313253] -translate-x-1/2 -translate-y-1/2'
                />

                <Flex pos={"relative"} className='container-version3' align={"center"} justify={"center"} h={"100%"} >
                    <ImageCircle />
                    <ImageCircle type='left' />

                    <Flex
                        pos={"absolute"}
                        top={"50%"}
                        left={"50%"}
                        direction={"column"}
                        align={"center"}
                        className="-translate-x-1/2 -translate-y-1/2"
                        gap={{ base: 12, md: 16, xl: 24 }}
                        w={"100%"}
                    >
                        <Text
                            px={16}
                            fz={{ base: 40, sm: 44, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                            c={"white"}
                            fw={900}
                            lh={1}
                            className='overflow-hidden'
                            style={{
                                textShadow: "0px 4px 20px #000000CC, 0px 8px 20px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <motion.span
                                initial={{ y: "65%", rotateX: -70 }}
                                whileInView={{ y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    ease: "linear"
                                }}
                                className="inline-block"
                            >
                                TIME TO SHINE.
                            </motion.span>
                        </Text>
                        <Text
                            px={16}
                            fz={{ base: 40, sm: 44, md: 52, lg: 56, xl: 60, "2xl": 64 }}
                            c={"white"}
                            fw={900}
                            lh={1}
                            className='overflow-hidden'
                            style={{
                                textShadow: "0px 4px 20px #000000CC, 0px 8px 20px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <motion.span
                                initial={{ y: "65%", rotateX: -70 }}
                                whileInView={{ y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    ease: "linear"
                                }}
                                className="inline-block"
                            >
                                TIME FOR KNKY.
                            </motion.span>
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

const images = Array.from({ length: 38 }, (_, i) => {
    if (i <= 14) {
        return `/version-3/circle/${i + 1}.webp`;
    }

    return `/version-3/circle/${Math.floor(Math.random() * 14) + 1}.webp`;
});

const ImageCircle = ({ type = 'right' }: { type?: "left" | "right" }) => {
    const { width: browserWidth } = useBrowserWidth();

    const rotation = useMotionValue(0);


    const width = browserWidth * 1;
    // const height = width / 0.91265560166;

    const radius = 0.45428571428 * width;

    useAnimationFrame((t) => {
        rotation.set((t / 1000) * 15);
    });

    const getIsScale = useCallback((x: number) => {
        if (type == "right") {
            return x == 1 || x > 0.2;
        } else if (type == 'left') {
            return x == -1 || x < -0.2;
        }

        return false;
    }, [type]);

    return (
        <Box
            pos={"relative"} w={width}
            className={twMerge(
                "aspect-[0.91265560166] -translate-y-[4%]",
                type == "right" ? "translate-x-[-26%]" : "translate-x-[26%]"
            )}
        >
            {images.map((src, i) => {
                const baseAngle = (i / images.length) * 360;
                const size = 0.0672857142857 * width;

                return (
                    <motion.div
                        key={i}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            x: useTransform(rotation, (r) => {
                                const angle = ((baseAngle + r) * Math.PI) / 180;
                                return radius * Math.cos(angle);
                            }),
                            y: useTransform(rotation, (r) => {
                                const angle = ((baseAngle + r) * Math.PI) / 180;
                                return radius * Math.sin(angle);
                            }),
                            scale: useTransform(rotation, (r) => {
                                const angle = ((baseAngle + r) * Math.PI) / 180;
                                const x = Math.cos(angle);
                                const isScale = getIsScale(x);

                                if (isScale) {
                                    return type == "right" ? 0.52 + 0.6 * (1 - x) : 0.52 + 0.6 * (1 + x);
                                }
                                return 1;
                            }),
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "linear"
                        }}
                        className='rounded-lg overflow-hidden'
                    >
                        <Image
                            src={src}
                            alt={`image-${i}`}
                            width={50}
                            height={50}
                            className="object-cover aspect-[0.63459983831]"
                            style={{ width: size }}
                        />
                    </motion.div>
                );
            })}
        </Box>
    );
};
