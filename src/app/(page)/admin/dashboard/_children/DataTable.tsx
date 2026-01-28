// components/DataTable.tsx
import { Table, Pagination } from '@mantine/core';

const data = Array.from({ length: 10 }).map(() => ({
  user: 'u2723211',
  id: '12312',
  currency: 'Crypto',
  amount: '0.01 ETH ($140.82)',
  paidBy: '123456...010101',
  tx: '5oMNTn...hiWPZ',
  points: '+100',
}));

export function DataTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-100">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>User</Table.Th>
            <Table.Th>Contribute ID</Table.Th>
            <Table.Th>Currency</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Paid by</Table.Th>
            <Table.Th>Transaction link</Table.Th>
            <Table.Th>Points change</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {data.map((row, i) => (
            <Table.Tr key={i}>
              <Table.Td className="font-medium">{row.user}</Table.Td>
              <Table.Td>{row.id}</Table.Td>
              <Table.Td>{row.currency}</Table.Td>
              <Table.Td>{row.amount}</Table.Td>
              <Table.Td>{row.paidBy}</Table.Td>
              <Table.Td className="underline cursor-pointer">
                {row.tx}
              </Table.Td>
              <Table.Td className="text-green-600 font-medium">
                {row.points}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <div className="flex justify-center py-4">
        <Pagination total={11} />
      </div>
    </div>
  );
}
