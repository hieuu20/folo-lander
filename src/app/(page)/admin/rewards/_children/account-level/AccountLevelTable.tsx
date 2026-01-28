import { AccountLevel } from '@/types/accountLevel';
import { formatNumber } from '@/utils';
import { ActionIcon, Checkbox, Flex, Menu, Table, Text } from '@mantine/core';
import { IconCheck, IconDots, IconEdit, IconLoader2 } from '@tabler/icons-react';
import React from 'react';

interface Props {
  data: AccountLevel[];
  loading: boolean;
  setRecordEdit: React.Dispatch<React.SetStateAction<Partial<AccountLevel> | undefined>>;
  setDeleteId?: React.Dispatch<React.SetStateAction<string | undefined>>
}
export function AccountLevelTable({ data, loading, setRecordEdit }: Props) {
  return (
    <Table
      highlightOnHover
      verticalSpacing="md"
      horizontalSpacing="lg"
    >
      <Table.Thead className="bg-[#F7F7FC]">
        <Table.Tr fz={14} c={"#4D5053"} fw={400}>
          <Table.Th px={12} py={4} fw={400}>No.</Table.Th>
          <Table.Th px={12} py={4} fw={400}>Level title</Table.Th>
          <Table.Th px={12} py={4} fw={400}>Min points</Table.Th>
          <Table.Th px={12} py={4} fw={400}>Perks</Table.Th>
          <Table.Th px={12} py={4} fw={400}>Current users</Table.Th>
          <Table.Th px={12} py={4} fw={400}>Status</Table.Th>
          <Table.Th px={12} py={4} fw={400} className="w-[50px]" />
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {data.map((item, index) => (
          <Table.Tr
            key={item._id}
            className="hover:bg-gray-50 transition"
          >
            {/* No */}
            <Table.Td className="font-medium">
              {index + 1}
            </Table.Td>

            {/* Reward title */}
            <Table.Td>
              <span className="font-medium">
                {item.title}
              </span>
            </Table.Td>

            {/* API name */}
            <Table.Td className="text-gray-600">
              {formatNumber(item.mintPoint)}
            </Table.Td>

            {/* Reward for */}
            <Table.Td>
              {item.perks.map((o, index) => {
                return (
                  <Flex
                    key={index}
                    align={"center"}
                  >
                    <IconCheck size={16} color='#19A50D' className='mr-2' />
                    <Text c={"#131416"} fz={14} flex={1}>{o}</Text>
                  </Flex>
                );
              })}
            </Table.Td>

            <Table.Td className="text-gray-600">
              {formatNumber(item.numberOfUser || 0)}
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
                  {/* <Menu.Item
                    color="#F11E11"
                    leftSection={<IconTrash size={20} />}
                    fw={500}
                    fz={14}
                    onClick={() => setDeleteId(item._id)}
                  >
                    Delete
                  </Menu.Item> */}
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
  );
}
