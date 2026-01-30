'use client';

import { IWaitingEmail } from '@/types/waitingEmail';
import { formatTime } from '@/utils';
import { Table, Text, Pagination, Stack, Flex, Group } from '@mantine/core';
import { IconCaretDownFilled, IconCaretUpFilled, IconDownload, IconLoader2 } from '@tabler/icons-react';
import { useCallback, useEffect, useState } from 'react';

export function WaitingTable() {
    const [data, setData] = useState<IWaitingEmail[]>([]);
    const [loading, setLoading] = useState(false);
    const [params] = useState({
        search: '',
        page: 1,
        limit: 20
    });

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const query = new URLSearchParams();
            query.set('page', String(params.page));
            query.set('limit', String(params.limit));
            query.set('search', params.search);
            const res = await fetch(`/api/admin/waiting-email?${query.toString()}`);
            const resData = await res.json();

            if (resData.data.length) {
                setData(resData.data);
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setLoading(false);
        }
    }, [params]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <Flex
            direction={"column"}
            justify={"space-between"}
            className="overflow-hidden"
            mih={window.innerHeight - 150}
        >
            <Table
                highlightOnHover
                verticalSpacing="md"
                horizontalSpacing="lg"
                c={"#131416"}
                fz={13}
            >
                <Table.Thead className="bg-[#F7F7FC]">
                    <Table.Tr fz={14} c={"#4D5053"} fw={400}>
                        <Table.Th px={12} py={4} fw={400} w={100}>No.</Table.Th>
                        <Table.Th px={12} py={4} fw={400} >Email address</Table.Th>
                        <Table.Th px={12} py={4} fw={400} pos={"relative"} className='block'>
                            Registered at
                            <Stack gap={1} pos={"absolute"} top={"-32%"} left={92}>
                                <IconCaretUpFilled color='#AFB1B3' className='text-[16px] translate-y-1/3' />
                                <IconCaretDownFilled color='#4D5053' className='text-[16px] -translate-y-1/3' />
                            </Stack>
                        </Table.Th>
                        <Table.Th px={12} py={4} fw={400} className='text-right' pr={24}>
                            <Group justify="flex-end" gap={6}>
                                <IconDownload size={14} />
                                Export
                            </Group>
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                    {data.map((row, index) => (
                        <Table.Tr key={row._id} fw={500} fz={13} c={"#131416"}>
                            <Table.Td>{index + 1}</Table.Td>
                            <Table.Td>
                                {row.email}
                            </Table.Td>

                            <Table.Td className="">
                                {formatTime(row.createdAt)}
                            </Table.Td>
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
                    {loading && (
                        <Table.Tr className="p-4">
                            <Table.Td align='center' colSpan={6} className="p-4 text-center">
                                <Flex justify={"center"}>
                                    <IconLoader2 className="animate-spin text-gray-400" />
                                </Flex>
                            </Table.Td>
                        </Table.Tr>
                    )}
                    {!loading && !data.length && (
                        <Table.Tr className="p-4">
                            <Table.Td colSpan={6} className="p-4 text-center">
                                No data
                            </Table.Td>
                        </Table.Tr>
                    )}
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
