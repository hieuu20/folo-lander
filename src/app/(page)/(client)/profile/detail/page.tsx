
import React from "react";
import { getUserDetail } from "@/service/user";
import { redirect } from "next/navigation";
import { ProfileDetailContainer } from "./_children";

export const dynamic = "force-dynamic";

export default async function ProfileDashboardPage() {
    const [profile] = await Promise.all([
        getUserDetail(),
    ]);
    if (!profile) {
        redirect("/");
    }

    return (
        <ProfileDetailContainer profile={profile} />
    );
}

