import { getUserPerk } from "@/service/userPerk";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
  try {
    const resData = await getUserPerk();

    return NextResponse.json({ data: resData });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}

export async function POST(request: NextRequest) {
  try {
    const cks = cookies();
    const token = cks.get("access_token")?.value;
    
    const body = await request.json();
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/client/user-perk`,
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token || ""}`,
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();

    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json(error);
  }
}
