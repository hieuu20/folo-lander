import { Flex, Modal, Title } from '@mantine/core';
import React from 'react';
import tickIcon from '@public/icons/success-tick.svg';
import Image from 'next/image';

interface Props {
  opened: boolean;
  close: () => void;
  title: string;
}
export function RewardSuccessPopup({ opened, close, title }: Props) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      size={336}
      title=""
      closeButtonProps={{
        // icon: <IconX size={32} />,
        // ml: 'auto',
        display: "none"
      }}
    >
      <Flex direction={'column'} gap={16} align={'center'} justify={'center'} pb={40}>
        <Image src={tickIcon} alt="tick icon" width={56} height={56} />
        <Title size={'h2'} fz={{ base: 18, md: 20 }} fw={600} lh={1.4} ta={'center'} c={'#131416'}>
          {title}
        </Title>
      </Flex>
    </Modal>
  );
}
