import { cookies } from "next/headers";

export const getPeopleSays = async () => {
  const cks = cookies();
  const token = cks.get("access_token")?.value;
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/client/people-say`, {
    next: { revalidate: 300 },
    method: "GET",
    headers: {
      Authorization: `Bearer ${token || ""}`,
    },
  });

  return await response.json();
};
