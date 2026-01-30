
import React from "react";
import { getUserDetail } from "@/service/user";
import { redirect } from "next/navigation";
import { ReferToEarnContainer } from "./_children/ReferToEarnContainer";
import { getPointSetting } from "@/service/pointSetting";
export const dynamic = "force-dynamic";

export default async function ProfileDashboardPage() {

    const [ profile, pointSettings] = await Promise.all([
        getUserDetail(),
        getPointSetting()
    ]);
    if (!profile) {
        redirect("/");
    }

    return (
        <ReferToEarnContainer profile={profile} pointSettings={pointSettings} />
    );
}

