
import React from "react";
import { ProfileRewardContainer } from "./_chidren/ProfileRewardContainer";
import { getPerks } from "@/service/perk";
import { getUserPerk } from "@/service/userPerk";


export const dynamic = "force-dynamic";

export default async function ProfileRewardPage() {
    const [perks, userPerks] = await Promise.all([
        getPerks(),
        getUserPerk()
    ]);

    return (
        <ProfileRewardContainer perks={perks || []} userPerks={userPerks || []} />
    );
}

