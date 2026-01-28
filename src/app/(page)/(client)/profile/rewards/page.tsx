
import React from "react";
import { getUserDetail } from "@/service/user";
import { getMe } from "@/service/auth";
import { redirect } from "next/navigation";
import { ProfileRewardContainer } from "./_chidren/ProfileRewardContainer";
import { getPerks } from "@/service/perk";
import { getUserPerk } from "@/service/userPerk";


export const dynamic = "force-dynamic";

export default async function ProfileRewardPage() {
    const me = await getMe();

    if (!me) {
        redirect("/");
    }

    const [perks, profile, userPerks] = await Promise.all([
        getPerks(),
        getUserDetail(me._id!),
        getUserPerk(me._id!)
    ]);
    if (!profile) {
        redirect("/");
    }

    return (
        <ProfileRewardContainer perks={perks || []} profile={profile} userPerks={userPerks || []} />
    );
}

