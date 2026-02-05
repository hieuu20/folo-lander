/* eslint-disable @typescript-eslint/no-explicit-any */
import { INews } from "@/types/news";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export interface RegisterDto {
  userName?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  referralCode?: string;
  userType: string;
  ip: string;
  roleId: string;
  deviceInfo: {
    device: string;
    os: string;
    browser: string;
    country: string;
    city: string;
    device_id: string;
  };
}

export const signup = async (data: RegisterDto): Promise<INews[]> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/auth/register`,
    {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await response.json();
};

export interface SigninResponse {
  user: Partial<IUser>;
  accessToken: string;
  refreshToken: string;
}

export const signin = async (data: RegisterDto): Promise<SigninResponse> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/auth/login`,
    {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await response.json();
};

export const getMe = async (): Promise<SigninResponse["user"]> => {
  const cks = cookies();
  const token = cks.get("access_token")?.value;
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/auth/me`, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token || ""}`,
    },
  });

  return await response.json();
};
