import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

interface Props {
    onClick: () => void;
}
export function CreateButton({ onClick }: Props) {
    return (
        <Button
            bg={"#435EFB"}
            w={118}
            h={32}
            leftSection={<IconPlus className='text-[32px] text-white' />}
            onClick={onClick}
            fz={14}
            c={"white"}
            fw={600}
            classNames={{
                section: "mr-1"
            }}
            px={8}
            className='hover:scale-105 transition-all duration-200'
        >
            Create new
        </Button>
    );
}
