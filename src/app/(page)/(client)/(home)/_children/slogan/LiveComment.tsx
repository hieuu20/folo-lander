import { useBrowserWidth } from "@/hooks";
import { Cmt, cmts } from "@/utils";
import { Flex, Text } from "@mantine/core";
import { animate, AnimatePresence, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const n = 10;
const list = Array(n).fill(cmts).flat();
const s = 1500;

export function LiveComments() {
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setResetKey(k => k + 1);
        }, (list.length - 4) * s);

        return () => clearInterval(timer);
    }, []);

    return <LiveCommentsWrapper key={resetKey} />;
}

export function LiveCommentsWrapper() {
    const { isMb } = useBrowserWidth();

    const [cursor, setCursor] = useState(0);
    const y = useMotionValue('0%');

    useEffect(() => {
        let step = 0;

        const interval = setInterval(() => {
            step += 100;
            animate(y, `-${step}%`, {
                duration: 0.5,
                ease: 'easeOut',
            });
            setCursor(o => ++o);
        }, s);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="h-fit w-full flex flex-col relative">
            <AnimatePresence initial={false}>
                {list.map((cmt, index) => (
                    <motion.div
                        key={`${cmt.name}-${index}`}
                        style={{ y, height: isMb ? "5vh" : "8.4vh" }}
                        className="w-full pb-1 md:pb-1.5"

                        animate={{
                            opacity: index <= cursor ? 0 : 1,
                        }}
                        transition={{
                            opacity: { duration: 0.4, ease: 'easeOut' },
                        }}
                    >
                        <CommentItem key={index} item={cmt} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

function CommentItem({ item }: { item: Cmt }) {
    const { isMb } = useBrowserWidth();

    return (
        <Flex gap={7} align={"flex-start"} c={"white"} h={"100%"}>
            <Image src={item.avatar} alt={item.name} className="w-[9%] h-auto object-cover" />
            <Flex direction={"column"} flex={1} px={7} py={"2.6%"} bg={"#000000"} justify={"space-between"} h={"100%"} className="rounded-[7px]">
                <Flex justify={"space-between"} align={"center"}>
                    <Flex gap={{ base: 2, md: 4 }} align={"center"}>
                        <Text fz={isMb ? "1.25cqh" : "1.8cqh"} fw={600} lh={1.2}>
                            {item.name}
                        </Text>

                        {item.icons.map((o, i) => {
                            return (
                                <Image src={o} alt="icon" key={i} className="w-[6.2px] md:w-3 h-auto object-cover" />
                            );
                        })}
                    </Flex>

                    <Text lh={1.2} fz={isMb ? "1.25cqh" : "1.8cqh"} fw={400}>
                        Just now
                    </Text>
                </Flex>
                <Text fz={isMb ? "1.25cqh" : "1.8cqh"} fw={400} lh={1.2} lts={-0.5}>
                    {item.text}
                </Text>
            </Flex>
        </Flex>
    );
}
