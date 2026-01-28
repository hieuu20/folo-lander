import SectionButton from '@/components/buttons/SectionButton';
import { SuccessPopup } from '@/components/Popups';
import { useDisclosure } from '@/hooks';
import { Flex, Input, Text } from '@mantine/core';
import React, { useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function EmailWaitingListInput() {
    const [submiting, setSubmitting] = useState(false);
    const [susscessOpened, { open: successOpen, close: successClose }] = useDisclosure();
    const [errorMsg, setErrorMsg] = useState("");
    const [isWarning, setIsWarning] = useState(false);

    const [userName, setUserName] = useState('');

    const handleSignup = useCallback(async () => {
        if (!userName) {
            setIsWarning(true);
        
            setTimeout(() => {
                setIsWarning(false);
            }, 2000);
        
            return;
          }
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

    return (
        <Flex
            justify={"space-between"}
            bg={"white"}
            bd={isWarning ? "1px solid #F11E11" : "1px solid #E7E7F8"} 
            p={{ base: 8 }}
            h={{ base: 48, sm: 52, md: 56, lg: 58, xl: 60, "2xl": 64 }}
            w={{ base: "100%", sm: 320, md: 360, lg: 390, xl: 410, "2xl": 438 }}
            align={"center"}
            pos={"relative"}
            className={twMerge('rounded-3xl transition-all ease-in-out duration-200', isWarning && 'animate-shake')}
        >
            <Input
                bg={"white"}
                fz={{ base: 16, md: 18, "2xl": 20 }}
                fw={500}
                placeholder='Your Email address'
                classNames={{
                    input: `${isWarning ? "placeholder-[#F11E11]" : "placeholder-[#4D5053]"} bg-transparent pl-1 md:pl-2 border-none text-base md:text-lg 2xl:text-[20px]`,
                    wrapper: "bg-transparent"
                }}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                c={"black"}
            />

            <SectionButton
                show={true}
                title='Join Now →'
                className='rounded-2xl transition-all duration-300 ease-in-out '
                fz={{ base: 14, md: 15, "2xl": 16 }}
                fw={600}
                w={{ base: 88, md: 96, xl: 107 }}
                h={"100%"}
                bg={"#435EFB"}
                // disabled={!isValid}
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
