import { Perk } from '@/types/perk';
import { formatNumber } from '@/utils';
import { ActionIcon, Checkbox, Flex, Menu, Pagination, Stack, Table, Text } from '@mantine/core';
import { IconDots, IconEdit, IconLoader2, IconTrash } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import pointLogo from "@public/icons/point-icon.svg";

interface Props {
  data: Perk[];
  loading: boolean;
  setRecordEdit: React.Dispatch<React.SetStateAction<Partial<Perk> | undefined>>;
  setDeleteId: React.Dispatch<React.SetStateAction<string | undefined>>
}
export function PerkTable({ data, loading, setRecordEdit, setDeleteId }: Props) {
  return (
    <Flex
      direction={"column"}
      justify={"space-between"}
      className="overflow-hidden"
      mih={window.innerHeight - 200}
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
            <Table.Th px={12} py={4} fw={400}>Perk title</Table.Th>
            <Table.Th px={12} py={4} fw={400}>Point to claim</Table.Th>
            <Table.Th px={12} py={4} fw={400}>Price to buy ($ USD)</Table.Th>
            <Table.Th px={12} py={4} fw={400}>Total sold</Table.Th>
            <Table.Th px={12} py={4} fw={400}>Status</Table.Th>
            <Table.Th px={12} py={4} fw={400} className="w-[50px]" />
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {data.map((item) => (
            <Table.Tr
              key={item._id}
              className="hover:bg-gray-50 transition"
            >
              <Table.Td>
                <Flex gap={16} align={"center"}>
                  <Image src={item.thumb} alt='perk thum' width={100} height={100} className='object-cover w-[134px] h-16' />

                  <Stack gap={4}>
                    <Text fz={14} fw={500} c={"#131416"}>
                      {item.title}
                    </Text>

                    <Text fz={13} c={"#4D5053"}>
                      {item.description}
                    </Text>
                  </Stack>
                </Flex>
              </Table.Td>

              <Table.Td className="">
                <Flex gap={8} align={"center"}>
                  <Image src={pointLogo} alt='pointLogo' className='w-6 h-auto' />
                  <Text fz={13} fw={500}>{formatNumber(item.pointToClaim)}</Text>
                </Flex>
              </Table.Td>

              <Table.Td className="" fz={13} fw={500}>
                ${formatNumber(item.priceToBuy)}
              </Table.Td>

              <Table.Td className="" fz={13} fw={500}>
                {formatNumber(item.totalSold || "")}
              </Table.Td>

              {/* Status */}
              <Table.Td>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={item.isActive}
                    color="#376CEC"
                    readOnly
                  />
                  <span className="font-medium">
                    Active
                  </span>
                </div>
              </Table.Td>

              {/* Actions */}
              <Table.Td>
                <Menu
                  shadow="md"
                  width={160}
                  position="bottom-end"
                >
                  <Menu.Target>
                    <ActionIcon variant="subtle">
                      <IconDots size={18} />
                    </ActionIcon>
                  </Menu.Target>

                  <Menu.Dropdown className='rounded-lg'>
                    <Menu.Item
                      leftSection={<IconEdit size={20} />}
                      fw={500}
                      fz={14}
                      onClick={() => setRecordEdit(item)}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      color="#F11E11"
                      leftSection={<IconTrash size={20} />}
                      fw={500}
                      fz={14}
                      onClick={() => setDeleteId(item._id)}
                    >
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
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
