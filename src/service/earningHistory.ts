import { cookies } from "next/headers";

export const getEarningHistory = async (id: string) => {
  const cks = cookies();
  const token = cks.get("access_token")?.value;
  const query = new URLSearchParams();
  query.set("id", String(id));

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/client/earning-history?${query.toString()}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token || ""}`,
      },
    }
  );

  return await response.json();
};
