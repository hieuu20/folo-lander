import { Button, Flex, Modal, Title } from '@mantine/core';
import React from 'react';
import tickIcon from '@public/icons/tick.svg';
import Image from 'next/image';
import { IconX } from '@tabler/icons-react';

interface Props {
  opened: boolean;
  close: () => void;
  title: string;
  subTitle: string;
}
export function SuccessPopup({ opened, close, title, subTitle }: Props) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      size={912}
      title=""
      closeButtonProps={{
        icon: <IconX size={32} />,
        ml: 'auto',
      }}
    >
      <Flex direction={'column'} gap={8} align={'center'} justify={'center'} pb={40}>
        <Image src={tickIcon} alt="tick icon" width={56} height={56} />
        <Title size={'h2'} fz={{ base: 24, md: 30 }} fw={700} lh={1.4} ta={'center'} c={'#131416'}>
          {title}
        </Title>

        <Title size={'h4'} fz={{ base: 14, md: 16 }} fw={500} lh={1.6} c={'#4D5053'}>
          {subTitle}
        </Title>
        <Button
          mt={16}
          bg={'#AC1991'}
          className="rounded-lg"
          c={'white'}
          onClick={close}
          w={240}
          h={40}
          fw={500}
        >
          Complete
        </Button>
      </Flex>
    </Modal>
  );
}
