"use client";

import { upload } from '@/utils';
import { Flex } from '@mantine/core';
import { IconContrast2Filled } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useCallback, useId } from 'react';


interface Props {
    onSuccess: (src: string) => void;
    src?: string;
    w?: number,
    h?: number
}
export default function UploadImage({ onSuccess, src, w = 120, h = 120 }: Props) {
    const inputFileId = useId();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onChange = useCallback(async (e: any) => {
        const file = e.target.files[0];
        const result = await upload(file);

        if (result?.filePath) {
            onSuccess(result?.filePath);
        }
    }, [onSuccess]);

    return (
        <Flex w={w} h={h} bd={"1px solid #E7E7F8"} className='relative overflow-hidden'>
            {src && (
                <Image src={src} width={120} height={120} alt='image' className='absolute top-1/2 -translate-y-1/2 w-full h-auto object-cover' />
            )}
            <input
                type='file'
                hidden={true}
                id={`upload-${inputFileId}`}
                onChange={onChange}
                accept=".jpg,.png,.jpeg,.webp "
            />
            <label
                className="w-full h-full cursor-pointer relative"
                htmlFor={`upload-${inputFileId}`}
            >
                <IconContrast2Filled className='text-[40px] absolute bottom-0 right-0' />
            </label>

        </Flex>
    );
}
