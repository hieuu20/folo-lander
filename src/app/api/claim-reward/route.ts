import { getUserPerk } from "@/service/userPerk";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if(!id){
      return NextResponse.json({ data: null });
    }

    const resData = await getUserPerk(id);

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
