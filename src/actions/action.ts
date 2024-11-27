"use server";

import { cookies } from "next/headers";

export const setCookie = (key: string, value: string, expiryDate?: Date) => {
  const cks = cookies();

  cks.set(key, value, {
    path: "/",
    httpOnly: true,
    expires: expiryDate,
  });
};
