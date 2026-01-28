/* eslint-disable @typescript-eslint/no-unused-vars */


"use client";
import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useState } from "react";
// import { isExpired } from "./common";
import { IUser } from "@/types/user";
import { SystemSetting } from "@/types/systemSetting";


interface AppContextConfig {
    profile: IUser | null;
    setProfile: (data: IUser | null) => void;
    leaderboard: IUser[];
    setting: SystemSetting | null;
}

export const AppContext = createContext<AppContextConfig | undefined>(undefined);

interface Props {
    setting: SystemSetting | null;
}
const AppProvider = ({ children, setting }: PropsWithChildren<Props>) => {
    const [profile, setProfile] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [leaderboard, setLeaderboard] = useState<IUser[]>([]);


    const fetchProfile = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/auth/me");
            const resData = await res.json();

            if (resData.data._id) {
                setProfile(resData.data);
            }

            const ldRes = await fetch(`/api/leaderboard?id=${resData.data._id || ''}`);
            const ldResData = await ldRes.json();

            if (ldResData.data) {
                setLeaderboard(ldResData.data);
            }

        } catch (err) {
            console.log({ err });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    useEffect(() => {
        window.addEventListener("REFETCH_PROFILE", fetchProfile);

        return () => {
            window.removeEventListener("REFETCH_PROFILE", fetchProfile);
        };
    }, [fetchProfile]);

    return (
        <AppContext.Provider
            value={{
                profile,
                setProfile,
                leaderboard,
                setting
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error("useApp must be used within AppProvider");
    return ctx;
};

export default AppProvider;
