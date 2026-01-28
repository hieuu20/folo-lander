import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cks = cookies();
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/admin/point-setting", {
      cache: "no-store",
      method: "GET",
      headers: {
        Authorization: "Bearer " + cks.get("access_token")?.value,
      },
    });

    const result = await res.json();

    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const cks = cookies();
    const body = await request.json();

    const result = await fetch(process.env.NEXT_PUBLIC_API_URL + "/admin/point-setting", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + cks.get("access_token")?.value,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json(error);
  }
}
