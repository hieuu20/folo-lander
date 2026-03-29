import { cookies } from "next/headers";

export const getFeaturedCreators = async () => {
  const cks = cookies();
  const token = cks.get("access_token")?.value;
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/client/featured-creator`, {
    next: { revalidate: 300 },
    method: "GET",
    headers: {
      Authorization: `Bearer ${token || ""}`,
    },
  });

  return await response.json();
};
