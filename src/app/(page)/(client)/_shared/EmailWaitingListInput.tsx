import SectionButton from '@/components/buttons/SectionButton';
import { SuccessPopup } from '@/components/Popups';
import { useDisclosure } from '@/hooks';
import { validateEmail } from '@/utils';
import { Flex, Input, Text } from '@mantine/core';
import React, { useCallback, useState } from 'react';

export function EmailWaitingListInput() {
    const [submiting, setSubmitting] = useState(false);
    const [susscessOpened, { open: successOpen, close: successClose }] = useDisclosure();
    const [errorMsg, setErrorMsg] = useState("");

    const [userName, setUserName] = useState('');

    const handleSignup = useCallback(async () => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/waiting-list", {
                method: "POST",
                body: JSON.stringify({ email: userName })
            });

            const result = await res.json();

            if (result?.data) {
                close();
                successOpen();
                setUserName("");
                setErrorMsg("");
            } else {
                setErrorMsg("You’ve already signed up");
            }
        } catch (err) {
            console.log({ err });
        } finally {
            setSubmitting(false);
        }
    }, [successOpen, userName]);
    const isValid = userName && validateEmail(userName);

    return (
        <Flex
            justify={"space-between"}
            bg={"white"}
            bd={"1px solid #E7E7F8"}
            p={{ base: 8 }}
            className='rounded-3xl'
            h={{ base: 48, sm: 52, md: 56, lg: 58, xl: 60, "2xl": 64 }}
            w={{ base: "100%", sm: 320, md: 360, lg: 390, xl: 410, "2xl": 438 }}
            align={"center"}
            pos={"relative"}
        >
            <Input
                bg={"white"}
                fz={{ base: 16, md: 18, "2xl": 20 }}
                fw={500}
                placeholder='Your Email address'
                classNames={{
                    input: "placeholder-[#4D5053] bg-transparent pl-1 md:pl-2",
                    wrapper: "bg-transparent"
                }}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                c={"black"}
            // className='placeholder-[#FFFFFF59]'
            />

            <SectionButton
                show={true}
                title='Join Now →'
                className='rounded-2xl transition-all duration-300 ease-in-out '
                fz={{ base: 14, md: 15, "2xl": 16 }}
                fw={600}
                w={{ base: 88, md: 96, xl: 107 }}
                h={"100%"}
                bg={isValid ? "#435EFB" : "gray"}
                disabled={!isValid}
                px={0}
                onClick={handleSignup}
                loading={submiting}
            />

            {errorMsg && (
                <Text fz={14} c={"#F11E11"} pos={"absolute"} left={12} bottom={-24}>
                    {errorMsg}
                </Text>
            )}

            <SuccessPopup opened={susscessOpened} close={successClose} />
        </Flex>
    );
}
