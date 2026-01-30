
import React from "react";
import { getUserDetail } from "@/service/user";
import { redirect } from "next/navigation";
import { ProfileRewardContainer } from "./_chidren/ProfileRewardContainer";
import { getPerks } from "@/service/perk";
import { getUserPerk } from "@/service/userPerk";


export const dynamic = "force-dynamic";

export default async function ProfileRewardPage() {
    const [perks, profile, userPerks] = await Promise.all([
        getPerks(),
        getUserDetail(),
        getUserPerk()
    ]);
    if (!profile) {
        redirect("/");
    }

    return (
        <ProfileRewardContainer perks={perks || []} profile={profile} userPerks={userPerks || []} />
    );
}

