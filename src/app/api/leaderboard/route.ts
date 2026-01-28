/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    const cks = cookies();
    const token = cks.get("access_token")?.value;

    const query = new URLSearchParams();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    id && query.set("id", String(id));

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/client/user/leaderboard?${query.toString()}`,
      {
        cache: "no-store",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token || ""}`,
        },
      }
    );
    const resData = await response.json();

    return NextResponse.json({ data: resData });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
