import { Reward } from '@/types/reward';
import { ActionIcon, Checkbox, Flex, Menu, Table } from '@mantine/core';
import { IconDots, IconEdit, IconLoader2, IconTrash } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  rewards: Reward[];
  loading: boolean;
  setRewardEdit: React.Dispatch<React.SetStateAction<Partial<Reward> | undefined>>;
  setDeleteId: React.Dispatch<React.SetStateAction<string | undefined>>
}
export function RewardTable({ rewards, loading, setRewardEdit, setDeleteId }: Props) {
  return (
    <Table
      highlightOnHover
      verticalSpacing="md"
      horizontalSpacing="lg"
    >
      <Table.Thead className="bg-[#F7F7FC]">
        <Table.Tr fz={14} c={"#4D5053"} fw={400}>
          <Table.Th px={12} py={4} fw={400}>No.</Table.Th>
          <Table.Th px={12} py={4} fw={400}>Reward title</Table.Th>
          {/* <Table.Th px={12} py={4} fw={400}>API name</Table.Th> */}
          <Table.Th px={12} py={4} fw={400}>Reward for</Table.Th>
          <Table.Th px={12} py={4} fw={400}>Status</Table.Th>
          <Table.Th px={12} py={4} fw={400} className="w-[50px]" />
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {rewards.map((item, index) => (
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
              <div className="flex items-center gap-2">
                <Image src={item.icon} width={32} height={32} alt={item.name} className='w-8 h-auto' />
                <span className="font-medium">
                  {item.name}
                </span>
              </div>
            </Table.Td>

            {/* API name */}
            {/* <Table.Td className="text-gray-600">
              “{item._id}”
            </Table.Td> */}

            {/* Reward for */}
            <Table.Td>
              Top {item.leaderboardFrom} - Top {item.leaderboardTo}
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
                    onClick={() => setRewardEdit(item)}
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
        {!loading && !rewards.length && (
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
