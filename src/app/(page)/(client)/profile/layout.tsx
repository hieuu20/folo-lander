import { ProfileContainer } from "@/components/layouts/profile-layout/ProfileContainer";
import { getMe } from "@/service/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await getMe();

  if (!profile) {
    redirect("/");
  }

  return (
    <ProfileContainer>
      {children}
    </ProfileContainer>
  );
}
