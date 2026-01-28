// components/StatsCard.tsx
import { Card, Text } from '@mantine/core';

interface Props {
  value: string | number;
  label: string;
}

export function StatsCard({ value, label }: Props) {
  return (
    <Card
      className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col items-center justify-center"
    >
      <Text fw={600} size="lg" lh={1.4} mb={4}>
        {value}
      </Text>
      <Text size="xs" c="dimmed" lh={1.4}>
        {label}
      </Text>
    </Card>
  );
}
