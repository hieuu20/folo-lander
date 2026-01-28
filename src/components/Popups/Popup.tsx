"use client";

import { Modal, ModalProps } from '@mantine/core';
import React from 'react';

export function Popup(props: ModalProps) {
    return (
        <Modal
            size={492}
            centered={true}
            closeButtonProps={{ w: 40, h: 40, ml: "auto" }}
            classNames={{
                header: "pt-0 pr-0 h-10",
                content: "rounded-[18px] overflow-y-scrol",
                title: "absolute bottom-0 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap text-lg md:text-[20px] font-semibold",
                body: "pt-4 pb-6 overflow-hidden"
            }}
            {...props}
        >

        </Modal>
    );
}
