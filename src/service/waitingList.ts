import { IWaitingEmail } from "@/types/waitingEmail";


export const joinWaitingList = async (email:  string): Promise<IWaitingEmail> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/client/waiting-email`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
  },
    body: JSON.stringify({ email }),
  });

  return await response.json();
};