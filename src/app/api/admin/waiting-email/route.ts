/* eslint-disable @typescript-eslint/no-unused-expressions */
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");

    const query = new URLSearchParams();
    search && query.set("search", String(search));

    const cks = cookies();
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/admin/waiting-email?${query.toString()}`,
      {
        cache: "no-store",
        method: "GET",
        headers: {
          Authorization: "Bearer " + cks.get("access_token")?.value,
        },
      }
    );

    const result = await res.json();

    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json(error);
  }
}
