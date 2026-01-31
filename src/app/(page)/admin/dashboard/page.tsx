"use client";

import { StatsCard } from "./_children/StatsCard";

export default function DashboardPage() {
    return (
        <div className="bg-[#F0F0FC] space-y-8">

            {/* USERS OVERVIEW */}
            <section>
                <h2 className="font-semibold text-xl mb-4">Users overview</h2>
                <div className="grid grid-cols-4 gap-4">
                    <StatsCard value="14,283" label="Total credit points earned" />
                    <StatsCard value="650" label="Total users signed up from Folo lander" />
                    <StatsCard value="382" label="Total signed up from referral links" />
                    <StatsCard value="12" label="Today signed up" />
                </div>
            </section>

            {/* WAITLIST */}
            <section>
                <h2 className="font-semibold text-xl mb-4">Waitlist</h2>
                <div className="grid grid-cols-4 gap-4 w-full">
                    <StatsCard value="2,321" label="Total waitlist users" />
                    <StatsCard value="650" label="Total users waitlist created account" />
                </div>
            </section>

            {/* CONTRIBUTION */}
            {/* <section>
                <h2 className="font-semibold mb-4">Contribution</h2>

                <div className="grid grid-cols-5 gap-4 mb-4">
                    <StatsCard value="$16,503.42" label="Total value" />
                    <StatsCard value="202" label="Total contributors" />
                    <StatsCard value="$7,231.41" label="Crypto · 40%" />
                    <StatsCard value="$9,523.12" label="Fiat · 60%" />
                </div>

                <DataTable />
            </section> */}

            {/* INVESTMENT */}
            {/* <section>
                <h2 className="font-semibold mb-4">Investment</h2>

                <div className="grid grid-cols-5 gap-4 mb-4">
                    <StatsCard value="$8,442.42" label="Total value" />
                    <StatsCard value="202" label="Total investors" />
                    <StatsCard value="$4,442.42" label="Crypto · 55%" />
                    <StatsCard value="$4,000.00" label="Fiat · 45%" />
                </div>

                <DataTable />
            </section> */}
        </div>
    );
}
