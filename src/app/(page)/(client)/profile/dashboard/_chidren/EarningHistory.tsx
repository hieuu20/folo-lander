import { EarningHistory, EarningStatus, EarningType } from "@/types/earningHistory";
import { formatTime } from "@/utils";
import { Box, Card, Flex, Grid, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { useCallback } from "react";

interface Props {
    earningHistories: EarningHistory[];
}

export function EarningHistories({ earningHistories }: Props) {
    return (
        <Box mt={40}>
            <Flex direction={"column"} gap={4} mb={12}>
                <Text fw={600} fz={20}>Earning history</Text>
                <Text c={"#4D5053"} fz={14} >
                    Need help? <Link href={"mailto:support@folo.com"} className="text-[#435EFB] font-semibold">Contact Our Support →</Link>
                </Text>
            </Flex>

            <Grid gutter={12}>
                {earningHistories.map((o, i) => (
                    <Grid.Col key={i} span={{ base: 12, md: 6 }}>
                        <HistoryItem item={o} />
                    </Grid.Col>
                ))}
            </Grid>
        </Box>
    );
}

function HistoryItem({ item }: { item: EarningHistory }) {

    const getColor = useCallback(() => {
        if (item.status == EarningStatus.CONFIRM) return "#131416";
        return item.value > 0 ? "#138607" : "#F11E11";
    }, [item]);

    const renderStatus = useCallback(() => {
        if (item.status == EarningStatus.CONFIRM) {
            return (
                <Box fz={13} fw={500} lh={1.2} px={8} py={4} bd={"1px solid #F1AD00"} c={"#F1AD00"} bg={"#F1AD0014"} className="rounded">
                    Confirming
                </Box>
            );
        }

        if (item.status == EarningStatus.COMPLETED) {
            return (
                <Box fz={13} fw={500} lh={1.2} px={8} py={4} bd={"1px solid #31A9FF"} c={"#31A9FF"} bg={"#31A9FF14"} className="rounded">
                    Completed
                </Box>
            );
        }
    }, [item]);

    const getType = useCallback(() => {
        if(item.type == EarningType.REFERRAL) return "Referral Bonus";
        if(item.type == EarningType.SHARE_SOCIAL) return "Share link on social";
        if(item.type == EarningType.INVESTMENT) return "Investment";
        if(item.type == EarningType.DONATION) return "Contribution";
        if(item.type == EarningType.FRAUD) return "Hack or Suspected fraud";
        if(item.type == EarningType.CLAIM_REWARD) return "Claim reward";
    }, [item]);

    const getDetail = useCallback(() => {
        if(item.type == EarningType.REFERRAL) return `${item.detail.email} ⋅ ${item.detail.userType}`;
        if(item.type == EarningType.SHARE_SOCIAL) return `${item.detail.socialName}`;
        if(item.type == EarningType.CLAIM_REWARD) return `Claimed ${item.detail.perkName}`;
    }, [item.detail.email, item.detail.perkName, item.detail.socialName, item.detail.userType, item.type]);

    return (
        <Card radius={12} bd={"1px solid #E7E7F8"} p={16} c={"#131416"}>
            <Flex justify="space-between" align="center">
                <Text
                    fw={600}
                    c={getColor()}
                    fz={{ base: 16 }}
                >
                    {item.value > 0 ? `+${item.value}` : item.value}
                </Text>

                {renderStatus()}
            </Flex>

            <Stack gap={4}>
                <Text fz={14}>
                    <span className="text-[#4D5053]">Date time:</span> {formatTime(item.createdAt)}
                </Text>

                <Text fz={14}>
                    <span className="text-[#4D5053]">Type:</span> {getType()}
                </Text>

                <Text fz={14}>
                    <span className="text-[#4D5053]">Details:</span> {getDetail()}
                </Text>
            </Stack>
        </Card>
    );
}
