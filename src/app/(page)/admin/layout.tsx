import React from "react";
import { AdminContainer } from "@/components/layouts/admin-layout/AdminContainer";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getMe } from "@/service/auth";
import { USER_TYPE_ENUM } from "@/utils";

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
    title: 'Folo Admin',
    description: 'Folo Admin',
};


export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const profile = await getMe();

    if (profile?.userType != USER_TYPE_ENUM.ADMIN) {
        redirect("/");
    }

    return (
        <AdminContainer >
            {children}
        </AdminContainer>
    );
}

