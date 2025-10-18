/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Flex, Text } from '@mantine/core';
import { AnimatePresence, motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function TimeToShine() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        if (isHovering) {
            window.addEventListener('mousemove', handleMove);
        } else {
            window.removeEventListener('mousemove', handleMove);
        }

        return () => window.removeEventListener('mousemove', handleMove);
    }, [isHovering]);

    return (
        <>
            <Box
                id='Running'
                pos={"relative"}
                w={"100%"} h={"110vh"} bg={"#160328"}
                className='overflow-hidden'
            >
                <Box
                    pos={"absolute"}
                    bottom={0}
                    left={"50%"}
                    w={"120%"}
                    className='aspect-[6.68049792531] translate-y-2/3 -translate-x-1/2 overflow-hidden z-10'
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(117, 17, 175, 0.4) 0%, rgba(18, 2, 32, 0) 100%)"
                    }}
                />

                <Flex
                    ref={containerRef}
                    pos={"relative"} className='container-version3' align={"center"} justify={"center"} h={"100%"}
                >
                    <ImageCircle setIsHovering={setIsHovering} isHovering={isHovering} />
                    <ImageCircle type='left' setIsHovering={setIsHovering} isHovering={isHovering} />

                    <Flex
                        pos={"absolute"}
                        top={"50%"}
                        left={"50%"}
                        direction={"column"}
                        align={"center"}
                        className={twMerge("-translate-x-1/2 -translate-y-1/2", isHovering ? 'cursor-none' : 'cursor-pointer')}
                        gap={{ base: 12, md: 16, xl: 24 }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onClick={() => window.open("https://knky.co/fresh", "_blank")}
                    >
                        <Text
                            px={16}
                            fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
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
                            fz={{ base: 40, sm: 45, md: 52, lg: 56, xl: 60, "2xl": 64 }}
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

                    <AnimatePresence>
                        {isHovering && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.15 }}
                                style={{
                                    left: position.x,
                                    top: position.y,
                                    transform: 'translate(-50%, -50%)',
                                }}
                                className="absolute z-[9999] bg-[#AC1991] text-white text-base font-semibold px-5 py-3 rounded-lg shadow-lg pointer-events-none select-none"
                            >
                                Join KNKY →
                            </motion.div>
                        )}
                    </AnimatePresence>
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

const ImageCircle = ({ setIsHovering, isHovering, type = 'right' }: { type?: "left" | "right", setIsHovering: (isHoving: boolean) => void, isHovering: boolean }) => {
    const [windowHeight, setWindowHeight] = useState(0);

    const rotation = useMotionValue(0);

    const height = windowHeight * 0.82;

    const width = height * 0.91265560166;
    const radius = 0.45428571428 * width;

    useAnimationFrame((t, delta) => {
        const speed = isHovering ? 7 : 15; // độ/giây
        const current = rotation.get();
        const next = current + (speed * delta) / 1000; // tích lũy theo thời gian
        rotation.set(next % 360);
    });

    const getIsScale = useCallback((x: number) => {
        if (type == "right") {
            return x == 1 || x > 0.2;
        } else if (type == 'left') {
            return x == -1 || x < -0.2;
        }

        return false;
    }, [type]);

    useEffect(() => {
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        setWindowHeight(height);
    }, []);

    return (
        <Box
            pos={"relative"} w={width}
            className={twMerge(
                "aspect-[0.91265560166] -translate-y-[4%]",
                type == "right" ? "translate-x-[16%]" : "-translate-x-[16%]",
                isHovering ? 'cursor-none' : 'cursor-pointer'
            )}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => window.open("https://knky.co/fresh", "_blank")}
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
                        className='rounded-xl overflow-hidden'
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
