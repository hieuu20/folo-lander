



'use client';

import { Table, Group, Badge, Pagination, Flex, Text } from '@mantine/core';
import { IconFilter, IconDownload } from '@tabler/icons-react';
import { IconHeartFilled, IconCircleFilled } from '@tabler/icons-react';


export type LeaderboardRow = {
    rank: number
    username: string
    level: 'Founder' | 'Prime'
    email: string
    type: 'creator' | 'fan'
    platform: 'Folo' | 'KNKY'
    points: number
    donation: string
}

export const data: LeaderboardRow[] = Array.from({ length: 20 }).map((_, i) => ({
    rank: i + 1,
    username: 'u16232111',
    level: i < 8 ? 'Founder' : 'Prime',
    email: 'thong@x.com',
    type: i % 2 === 0 ? 'creator' : 'fan',
    platform: i % 2 === 0 ? 'Folo' : 'KNKY',
    points: i % 2 === 0 ? 12343 : 10003,
    donation: i === 0 ? '$21,239.92' : i < 8 ? '$x' : '$0',
}));

export function LeaderboardTable() {
    return (
        <Flex
            direction={"column"}
            justify={"space-between"}
            className="overflow-hidden"
            mih={window.innerHeight - 150}
        >
            <Table highlightOnHover className="text-sm">
                <Table.Thead className="bg-gray-50">
                    <Table.Tr>
                        <Table.Th px={12} py={4} fw={400} w={100}>Rank</Table.Th>
                        <Table.Th px={12} py={4} fw={400} w={100}>Username</Table.Th>
                        <Table.Th px={12} py={4} fw={400} w={100}>Level</Table.Th>
                        <Table.Th px={12} py={4} fw={400} w={100}>Email address</Table.Th>

                        <Table.Th px={12} py={4} fw={400} w={100}>
                            <Group gap={6}>
                                Type
                                <IconFilter size={14} />
                            </Group>
                        </Table.Th>

                        <Table.Th px={6} py={4} fw={400} w={100}>
                            <Group gap={6}>
                                Account created on
                                <IconFilter size={14} />
                            </Group>
                        </Table.Th>

                        <Table.Th px={12} py={4} fw={400} w={100}>Total earned points</Table.Th>
                        <Table.Th px={12} py={4} fw={400} w={100}>Donation/invest value</Table.Th>

                        <Table.Th px={12} py={4} fw={400} w={100} className="text-right">
                            <Group justify="flex-end" gap={6}>
                                <IconDownload size={14} />
                                Export
                            </Group>
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                    {data.map((row) => (
                        <Table.Tr key={row.rank}>
                            <Table.Td>{row.rank}</Table.Td>
                            <Table.Td className="font-medium">{row.username}</Table.Td>
                            <Table.Td>{row.level}</Table.Td>
                            <Table.Td>{row.email}</Table.Td>

                            <Table.Td>
                                <TypeBadge type={row.type} />
                            </Table.Td>

                            <Table.Td>
                                <PlatformBadge platform={row.platform} />
                            </Table.Td>

                            <Table.Td className="font-medium">
                                {row.points.toLocaleString()}
                            </Table.Td>

                            <Table.Td>{row.donation}</Table.Td>

                            <Table.Td className="text-right">
                                <Text
                                    fz={13}
                                    fw={500}
                                    className="hover:underline transition-all duration-150 cursor-pointer"
                                >
                                    View details
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>

            <div className="flex justify-center py-4 mt-auto">
                <Pagination
                    total={1}
                    color='#131416'
                    fz={14} fw={600}
                    classNames={{
                        control: "rounded-lg"
                    }}
                />
            </div>
        </Flex>
    );
}

export function PlatformBadge({ platform }: { platform: 'Folo' | 'KNKY' }) {
    return (
        <Group gap={6}>
            {platform === 'Folo' ? (
                <IconCircleFilled size={14} className="text-blue-600" />
            ) : (
                <IconHeartFilled size={14} className="text-pink-500" />
            )}
            <span className="text-sm">{platform}</span>
        </Group>
    );
}

export function TypeBadge({ type }: { type: 'creator' | 'fan' }) {
    return (
        <Badge
            variant="light"
            color={type === 'creator' ? 'blue' : 'gray'}
            radius="sm"
            size="sm"
        >
            {type}
        </Badge>
    );
}
