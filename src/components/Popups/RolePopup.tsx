/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Grid, Modal, Text } from '@mantine/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import checkIcon from "@public/icons/check.svg";
import Image from 'next/image';
import lottie from 'lottie-web';
import { USER_TYPE_ENUM } from '@/utils';
import { Role } from '@/types/role';

interface Props {
    // values: any;
    roles: Role[];
    opened: boolean;
    close: () => void;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    submitForm: () => void;
    values: any
}

const list = [
    {
        icon: "😘",
        title: "I’m a Fan",
        description: "Enjoy and interaction with creators.",
        type: USER_TYPE_ENUM.USER
    },
    {
        icon: "🎉",
        title: "I’m a Creator",
        description: "Earn, share content, and provide services.",
        type: USER_TYPE_ENUM.CREATOR
    },
    {
        icon: "💼",
        title: "We’re a Business",
        description: "Earn, share content, and provide services.",
        type: USER_TYPE_ENUM.BUSINESS
    }
];

export function RolePopup({ roles, setFieldValue, opened, close, submitForm }: Props) {
    const [role, setRole] = useState<Role>(roles[0]);

    useEffect(() => {
        setFieldValue("roleId", role._id);
    }, [role, setFieldValue]);

    const onClose = useCallback(() => {
        close();
        submitForm();
    }, [close, submitForm]);

    return (
        <>
            <Modal
                opened={opened}
                onClose={onClose}
                size={492}
                centered={true}
                title="How will you use FOLO?"
                closeButtonProps={{ w: 40, h: 40, ml: "auto" }}
                classNames={{
                    header: "pt-0 pr-0 h-10",
                    content: "rounded-[18px] overflow-hidden",
                    title: "absolute bottom-0 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap text-lg md:text-[20px] font-semibold",
                    body: "pt-4 pb-6"
                }}
            >
                <Box className='w-[96%] md:w-[92%] mx-auto'>
                    <Grid gutter={12} mb={4}>
                        {roles?.map((o, index) => {
                            const roleContent = list.find(x => x.type == o.name);
                            return (
                                <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                                    <Flex
                                        pos={"relative"}
                                        py={{ base: 8 }}
                                        px={{ base: 12 }}
                                        gap={{ base: 12 }}
                                        w={"100%"}
                                        align={"center"}
                                        bd={role._id == o._id ? "1px solid #435EFB" : "1px solid #E7E7F8"}
                                        className='rounded-lg overflow-hidden cursor-pointer'
                                        onClick={() => setRole(o)}
                                    >
                                        <Text fz={{ base: 20, md: 24 }} fw={600}>{roleContent?.icon}</Text>

                                        <Flex direction={"column"} gap={2} c={"#131416"}>
                                            <Text fz={{ base: 14, md: 14 }} fw={500} lh={1.4}>{roleContent?.title}</Text>
                                            <Text fz={{ base: 12, md: 12 }} fw={400} lh={1.4}>{roleContent?.description}</Text>
                                        </Flex>

                                        {role._id == o._id && (
                                            <Image src={checkIcon} alt='checkIcon' className='absolute top-0 right-0' />
                                        )}
                                    </Flex>

                                </Grid.Col>
                            );
                        })}
                    </Grid>

                    <Flex w={"100%"} justify={"center"} mt={16}>
                        <Button
                            className='rounded-lg'
                            fz={{ base: 16 }}
                            fw={600}
                            w={{ base: 198 }}
                            h={40}
                            px={0}
                            bg={"#435EFB"}
                            type='submit'
                            c={"white"}
                            mx={"auto"}
                            onClick={onClose}
                        >
                            Complete
                        </Button>
                    </Flex>
                </Box>
            </Modal>
        </>
    );
}

export const SuccessPopup = ({ opened, close }: { opened: boolean, close: () => void }) => {
    useEffect(() => {
        const func = () => {
            if (opened) {
                close();
            }
        };
        const timeoutId = setTimeout(func, 3000);

        return () => clearTimeout(timeoutId);

    }, [close, opened]);

    return (
        <Modal
            opened={opened}
            onClose={close}
            size={259}
            centered={true}
            classNames={{
                header: "hidden",
                body: "py-6"
            }}
        >
            <Flex direction={"column"} gap={16} align={"center"}>
                <Tick />
                <Text c={"#131416"} fz={20} fw={600} lh={1.4}>
                    Welcome aboard! 🎉
                </Text>
            </Flex>
        </Modal>
    );
};

const Tick = () => {
    const container = useRef<any>(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/json/tick.json',
        });

        return () => animation.destroy();
    }, []);


    return (
        <Box ref={container} w={64} h={64} />
    );
};