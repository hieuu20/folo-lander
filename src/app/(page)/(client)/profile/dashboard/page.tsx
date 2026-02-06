
import React from "react";
import { ProfileDashboardContainer } from "./_chidren";
import { getAccountLevel } from "@/service/accountLevel";
import { getEarningHistory } from "@/service/earningHistory";
export const dynamic = "force-dynamic";

export default async function ProfileDashboardPage() {
    const [accountLevels, earningHistories] = await Promise.all([
        getAccountLevel(),
        getEarningHistory()
    ]);

    return (
        <ProfileDashboardContainer accountLevels={accountLevels} earningHistories={earningHistories || []} />
    );
}

