import { SystemSetting } from "@/types/systemSetting";
import { cookies } from "next/headers";

export const getSystemSetting = async (): Promise<SystemSetting | null> => {
  try {
    const cks = cookies();
    const token = cks.get("access_token")?.value;
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/client/setting`,
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
    console.log({ err });
    return null;
  }
};

