import { IUSPManager } from '@/app/api/_entities';
import React from 'react';

interface Props {
  usps: IUSPManager[];
}

export function GoldStandard(props: Props) {
  const { usps } = props;
  console.log({usps});
  return (
    <div>GoldStandard</div>
  );
}
