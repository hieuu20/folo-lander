import { Flex, Loader, Text } from '@mantine/core';
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { PointSetting } from '@/types/pointSetting';
import { useApp } from '@/app/context/AppContext';
import { dispatchFetchProfile } from '@/utils/windowEvent';


interface Props {
  pointSettings: PointSetting[]
}

export function SocialShare({ pointSettings }: Props) {
  const { profile } = useApp();
  const [loadingId, setLoadingId] = useState<string | null>();

  const handleShare = useCallback(async (pointSetting: PointSetting) => {
    setLoadingId(pointSetting._id);
    await fetch("/api/share-social", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        socialId: pointSetting.socialId,
        userId: profile?._id
      })
    }).finally(() => {
      setLoadingId(null);
    });
    dispatchFetchProfile();

    const referralLink = `${window.location.origin}?ref=${profile?.referralCode}`;
    const redirectLink = `${pointSetting.social?.link}${referralLink}`;
    window.open(
      redirectLink,
      "_blank",
    );
  }, [profile?._id, profile?.referralCode]);


  return (
    <Flex gap={{ base: 8, md: 10, xl: 12 }} direction={"column"}>
      <Text
        c={"#4D5053"}
        fz={{ base: 14, md: 16, lg: 17, xl: 18, "2xl": 20 }}
        lh={1.2}
        ta={{ base: "center", md: "left" }}
      >
        Share on socials:
      </Text>
      <Flex wrap={"wrap"} gap={{ base: 8, md: 12 }}>
        {pointSettings?.map((o, index) => {
          const isLoading = loadingId == o._id;

          return (
            <Flex
              pos={"relative"}
              key={index}
              bg={"white"}
              gap={{ base: 4, md: 6 }}
              py={{ base: 6 }}
              px={{ base: 8 }}
              align={"center"}
              className='rounded-lg md:rounded-2xl cursor-pointer hover:opacity-60 transition-all duration-300 overflow-hidden'
              onClick={() => handleShare(o)}
            >
              <>
                {isLoading && (
                  <Flex pos={"absolute"} top={0} left={0} w={"100%"} h={"100%"} bg={"white"} align={"center"} justify={"center"}>
                    <Loader size={20} color={"#4D5053"} />
                  </Flex>
                )}

                {o.social?.icon && (
                  <Image src={o.social?.icon} alt='social icon' width={32} height={32} className='w-6 md:w-7 h-auto' />
                )}

                {!profile?.userSocials?.some((x) => x.socialId == o.socialId) && (
                  <Text fz={{ base: 14, md: 16 }} fw={500} c={"#131416"}>
                    +{o.point}
                  </Text>
                )}
              </>


            </Flex>
          );
        })}

      </Flex>
    </Flex>
  );
}
