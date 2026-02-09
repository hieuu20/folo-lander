import { ProfileContainer } from "@/components/layouts/profile-layout/ProfileContainer";
import { getMe } from "@/service/auth";
import { USER_TYPE_ENUM } from "@/utils";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";


export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await getMe();

  if (!profile) {
    return redirect("/");
  }

  if (profile.userType == USER_TYPE_ENUM.ADMIN) {
    return redirect("/admin");
  }

  return (
    <ProfileContainer>
      {children}
    </ProfileContainer>
  );
}
