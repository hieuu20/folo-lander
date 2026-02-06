import { cookies } from "next/headers";

export const getUserDetail = async () => {
  try {
    const cks = cookies();
    const token = cks.get("access_token")?.value;

    if(!token) return null;

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/client/user/detail`,
      {
        cache: "no-store",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token || ""}`,
        },
      }
    );

    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getEarningOverview = async () => {
  const cks = cookies();
  const token = cks.get("access_token")?.value;

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/client/user/earning-overview`,
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

