import { Flex, Grid, Text } from '@mantine/core';
import React, { useCallback } from 'react';
import Image from 'next/image';
import { PointSetting } from '@/types/pointSetting';
import { useApp } from '@/app/context/AppContext';


interface Props {
  pointSettings: PointSetting[]
}

export function SocialShare({ pointSettings }: Props) {

  const { profile } = useApp();
  const handleShare = useCallback(async (pointSetting: PointSetting) => {
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
    });

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
      >
        Share on socials:
      </Text>

      <Grid gutter={{ base: 8, md: 12, xl: 16 }}>
        {pointSettings?.map((o, index) => {
          return (
            <Grid.Col key={index} span={{ base: 3, md: 4 }}>
              <Flex
                bg={"white"}
                gap={{ base: 4, md: 6, lg: 8, xl: 10 }}
                align={"center"} justify={"center"}
                py={{ base: 8, md: 10, xl: 12 }}
                className='rounded-2xl cursor-pointer'
                onClick={() => handleShare(o)}
              >
                {o.social?.icon && (
                  <Image src={o.social?.icon} alt='social icon' width={32} height={32} className='w-5 md:w-6 lg:w-7 2xl:w-8 h-auto' />
                )}
                <Text fz={{ base: 14, md: 16, lg: 18, xl: 20 }} fw={500} c={"#131416"}>
                  +{o.point}
                </Text>
              </Flex>
            </Grid.Col>
          );
        })}
      </Grid>
    </Flex>
  );
}
