/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    const query = new URLSearchParams();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    email && query.set("email", String(email));

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/client/user/verify-email?${query.toString()}`);

    const result = await response.json();

    return NextResponse.json({ data: result });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
