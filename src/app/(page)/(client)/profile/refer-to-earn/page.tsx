
import React from "react";
import { getUserDetail } from "@/service/user";
import { getMe } from "@/service/auth";
import { redirect } from "next/navigation";
import { ReferToEarnContainer } from "./_children/ReferToEarnContainer";
import { getPointSetting } from "@/service/pointSetting";
export const dynamic = "force-dynamic";

export default async function ProfileDashboardPage() {

    const me = await getMe();

    if (!me) {
        redirect("/");
    }

    const [ profile, pointSettings] = await Promise.all([
        getUserDetail(me._id!),
        getPointSetting()
    ]);
    if (!profile) {
        redirect("/");
    }

    return (
        <ReferToEarnContainer profile={profile} pointSettings={pointSettings} />
    );
}

