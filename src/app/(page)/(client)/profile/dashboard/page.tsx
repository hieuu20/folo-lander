
import React from "react";
import { ProfileDashboardContainer } from "./_chidren";
import { getAccountLevel } from "@/service/accountLevel";
import { getUserDetail } from "@/service/user";
import { redirect } from "next/navigation";
import { getEarningHistory } from "@/service/earningHistory";
export const dynamic = "force-dynamic";

export default async function ProfileDashboardPage() {
    const [accountLevels, profile, earningHistories] = await Promise.all([
        getAccountLevel(),
        getUserDetail(),
        getEarningHistory()
    ]);
    if (!profile) {
        redirect("/");
    }

    return (
        <ProfileDashboardContainer accountLevels={accountLevels} profile={profile} earningHistories={earningHistories || []} />
    );
}

