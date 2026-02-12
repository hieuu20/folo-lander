import { Box, Flex, Grid, NumberInput, Text, Title } from '@mantine/core';
import React, { useState } from 'react';
import bgPc from "@public/leaderboard/bg-pc.webp";
import bgMb from "@public/leaderboard/bg-mb.webp";
import Image from 'next/image';
import SectionButton from '@/components/buttons/SectionButton';
import { useBrowserWidth } from '@/hooks';
import { formatNumber } from '@/utils';

const calc1 = (followers: number, views: number, sub: number) => {
    return (followers * 1 / 100 * sub) + (views * 0.001);
};

const calc2 = (followers: number, views: number, sub: number) => {
    return (followers * 5 / 100 * sub) + (views * 0.001);
};

export function EarningEstimate() {
    const { isMb } = useBrowserWidth();

    const [followers, setFollowers] = useState(25000);
    const [monthlyViews, setMonthlyViews] = useState(500000);
    const [subscription, setSubscription] = useState(5);

    const [monthlyEarn1, setMonthlyEarn1] = useState(calc1(followers, monthlyViews, subscription));
    const [monthlyEarn2, setMonthlyEarn2] = useState(calc2(followers, monthlyViews, subscription));
    const [loading, setLoading] = useState(false);

    const onChangeFollower = (value: number) => {
        setFollowers(value);
    };

    const onChangeMonthlyView = (value: number) => {
        setMonthlyViews(value);
    };

    const onChangeSubscription = (value: number) => {
        setSubscription(value);
    };

    const onCalc = () => {
        setLoading(true);
        setMonthlyEarn1(calc1(followers, monthlyViews, subscription));
        setMonthlyEarn2(calc2(followers, monthlyViews, subscription));

        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    return (
        <Box w={"100%"} py={{ base: 40, md: 80, xl: 120 }}>
            <Box className='container h-fit'>
                <Flex
                    w={"100%"}
                    pos={"relative"}
                    align={"center"} justify={"center"}
                    px={{ base: 32, md: 60, lg: 90, xl: 120 }}
                    py={{ base: 40, md: 60, xl: 80 }}
                    bd={{ md: "8px solid #f6f4f4" }}
                    className='rounded-3xl md:rounded-[45px] lg:rounded-[56px] 2xl:rounded-[64px] overflow-hidden'
                >
                    <Image src={bgPc} alt='bgPc' fill className='object-cover hidden md:inline-block' />
                    <Image src={bgMb} alt='bgMb' fill className='object-cover md:hidden' />

                    <Flex
                        pos={"relative"}
                        w={"100%"}
                        justify={"space-between"}
                        align={"center"}
                        direction={{ base: "column", md: "row" }}
                        gap={{ base: 24, md: 120 }}
                    >
                        {isMb && <EarningTitle />}
                        {!isMb && (
                            <Flex direction={"column"} gap={{ base: 40 }} flex={1} align={"center"}>
                                <EarningTitle />
                                <EarningForm
                                    followers={followers}
                                    monthlyViews={monthlyViews}
                                    subscription={subscription}
                                    onChangeFollower={onChangeFollower}
                                    onChangeMonthlyView={onChangeMonthlyView}
                                    onChangeSubscription={onChangeSubscription}
                                    onCalc={onCalc}
                                />
                            </Flex>
                        )}

                        <Box flex={1}>
                            <EarningResult
                                monthlyEarn1={monthlyEarn1}
                                monthlyEarn2={monthlyEarn2}
                                loading={loading}
                            />
                        </Box>

                        {isMb && (
                            <EarningForm
                                followers={followers}
                                monthlyViews={monthlyViews}
                                subscription={subscription}
                                onChangeFollower={onChangeFollower}
                                onChangeMonthlyView={onChangeMonthlyView}
                                onChangeSubscription={onChangeSubscription}
                                onCalc={onCalc}
                            />
                        )}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

const EarningTitle = () => {
    return (
        <Flex direction={"column"} gap={{ base: 12, md: 16 }} align={"center"} w={{ base: "90%", md: "80%" }}>
            <Title order={4} fz={{ base: 32, md: 45, xl: 56 }} fw={700} lh={1.2} c={"#131416"} ta={"center"}>
                Earnings Calculator
            </Title>

            <Text fz={{ base: 16, md: 20 }} c={"#4D5053"} lh={1.4} ta={"center"}>
                Enter your information to calculate your potential income with Folo.
            </Text>
        </Flex>
    );
};

const EarningForm = ({ followers, monthlyViews, subscription, onChangeFollower, onChangeMonthlyView, onChangeSubscription, onCalc }: {
    followers: number;
    monthlyViews: number;
    subscription: number;
    onChangeFollower: (value: number) => void;
    onChangeMonthlyView: (value: number) => void;
    onChangeSubscription: (value: number) => void;
    onCalc: () => void;
}) => {
    return (
        <Flex direction={"column"} gap={24} align={"center"}>
            <Grid gutter={16}>
                <Grid.Col span={6}>
                    <NumberInput
                        label="Number of followers"
                        labelProps={{
                            c: "#4D5053",
                            fz: { base: 12, md: 16 },
                            fw: 400,
                            lh: 1.5,
                            mb: 4
                        }}
                        placeholder="Number of followers"
                        allowNegative={false}
                        hideControls
                        thousandSeparator=","
                        min={0}
                        value={followers}
                        onChange={(value) => {
                            onChangeFollower(Number(value));
                        }}
                        classNames={{
                            input: "bg-[#FFFFFF66] rounded-[12px] h-10 md:h-[52px] text-[#131416] border-none text-base md:text-[20px] font-medium px-3 md:px-4"
                        }}
                    />
                </Grid.Col>

                <Grid.Col span={6}>
                    <NumberInput
                        label="Monthly views"
                        labelProps={{
                            c: "#4D5053",
                            fz: { base: 12, md: 16 },
                            fw: 400,
                            lh: 1.5,
                            mb: 4
                        }}
                        placeholder="Monthly views"
                        allowNegative={false}
                        hideControls
                        thousandSeparator=","
                        min={0}
                        value={monthlyViews}
                        onChange={(value) => {
                            onChangeMonthlyView(Number(value));
                        }}
                        classNames={{
                            input: "bg-[#FFFFFF66] rounded-[12px] h-10 md:h-[52px] text-[#131416] border-none text-base md:text-[20px] font-medium px-3 md:px-4"
                        }}
                    />
                </Grid.Col>

                <Grid.Col span={12}>
                    <NumberInput
                        label="Your subscription per month"
                        labelProps={{
                            c: "#4D5053",
                            fz: { base: 12, md: 16 },
                            fw: 400,
                            lh: 1.5,
                            mb: 4
                        }}
                        placeholder="Your subscription per month"
                        allowNegative={false}
                        hideControls
                        thousandSeparator=","
                        min={0}
                        value={subscription}
                        onChange={(value) => {
                            onChangeSubscription(Number(value));
                        }}
                        leftSection={<span className='text-base md:text-[20px] font-medium text-[#4D5053]'>$</span>}
                        classNames={{
                            input: "bg-[#FFFFFF66] rounded-[12px] h-10 md:h-[52px] text-[#131416] border-none text-base md:text-[20px] font-medium px-3 md:px-4 pl-7 md:pl-8",
                        }}
                    />
                </Grid.Col>
            </Grid>

            <SectionButton
                title='Calculate earnings'
                h={{ base: 40, md: 52 }}
                w={{ base: 220, md: 240 }}
                className='rounded-lg'
                c={"white"}
                fz={{ base: 16, md: 20 }}
                fw={600}
                onClick={onCalc}
            />
        </Flex>
    );
};

const EarningResult = ({ monthlyEarn1, monthlyEarn2 }: { monthlyEarn1: number; monthlyEarn2: number; loading: boolean }) => {
    return (
        <Flex
            bg={"white"} direction={"column"} align={"center"}
            gap={{ base: 16 }} py={{ base: 24, md: 80 }}
            px={{ base: 16, md: 48 }}
            className='rounded-2xl md:rounded-[40px]'
        >
            <Text
                fz={{ base: 24, md: 40 }}
                fw={600}
                lh={1.2}
                ta={"center"}
                w={"80%"}
            >
                You could earn between 
                <span className='font-bold text-[#435EFB]'>${formatNumber(monthlyEarn1)}</span> and 
                <span className='font-bold text-[#435EFB]'>${formatNumber(monthlyEarn2)}</span> per month*
            </Text>
            <Text fz={{ base: 8, md: 13 }} c={"#808386"} fw={300} lh={1.2} ta={"center"} w={"96%"}>
                *Based on estimate of between 1% and 5% of your followers subscribing. Earnings are net of platform fees. <br />
                Monthly subscriptions can include profiles, channels & groups. On demand / Shop items  include approximate figures for additional features on the platform such as pay per view, requests, live streams, events, shops, auctions and tips.
            </Text>
        </Flex>
    );
};

// const EarningResult = ({ monthlyEarn }: { monthlyEarn: number, loading: boolean }) => {
//     const { isMb } = useBrowserWidth();

//     return (
//         <Flex
//             bg={"white"} direction={"column"} align={"center"}
//             gap={{ base: 16, md: 40 }} py={{ base: 24, md: 80 }}
//             px={{ base: 16, md: 48 }}
//             className='rounded-2xl md:rounded-[40px]'
//         >
//             {!isMb && <Text c={"#131416"} fz={{ base: 28 }} lh={1.2}>Your estimated earnings:</Text>}
//             <Flex gap={24} w={"100%"}>
//                 <Flex direction={"column"} gap={4} flex={1} align={"center"}>
//                     <Text fz={{ base: 28, md: 40 }} fw={800} lh={1.2}>
//                         {/* {loading ? (
//                             <></>
//                         ) : (
//                             <>
//                                 ${formatNumber(Math.floor(monthlyEarn / 4))}
//                             </>
//                         )} */}
//                         ${formatNumber(Math.floor(monthlyEarn / 4))}
//                     </Text>
//                     <Text fz={{ base: 14, md: 24 }} c={"#4D5053"} lh={1.2}>
//                         Weekly
//                     </Text>
//                 </Flex>

//                 <Flex direction={"column"} gap={4} flex={1} align={"center"}>
//                     <Text fz={{ base: 28, md: 40 }} fw={800} lh={1.2}>
//                         ${formatNumber(Math.floor(monthlyEarn))}
//                     </Text>
//                     <Text fz={{ base: 14, md: 24 }} c={"#4D5053"} lh={1.2}>
//                         Monthly
//                     </Text>
//                 </Flex>
//             </Flex>
//             <Text fz={{ base: 10, md: 16 }} c={"#808386"} fw={300} lh={1.2} ta={"center"} w={"96%"}>
//                 *This is an estimate based on average creator performance. Actual earnings may vary depending on content quality, engagement.
//             </Text>
//         </Flex>
//     );
// };