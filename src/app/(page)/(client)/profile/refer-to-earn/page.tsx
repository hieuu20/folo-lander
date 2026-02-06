
import React from "react";
import { ReferToEarnContainer } from "./_children/ReferToEarnContainer";
import { getPointSetting } from "@/service/pointSetting";
export const dynamic = "force-dynamic";

export default async function ProfileDashboardPage() {

    const [ pointSettings] = await Promise.all([
        getPointSetting()
    ]);

    return (
        <ReferToEarnContainer pointSettings={pointSettings} />
    );
}

