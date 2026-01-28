import { cookies } from "next/headers";

export const getPerks = async () => {
  const cks = cookies();
  const token = cks.get("access_token")?.value;
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/client/perk`, {
    cache: "no-store",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token || ""}`,
    },
  });

  return await response.json();
};