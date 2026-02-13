/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const cks = cookies();

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/auth/login-admin`,
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: body.email,
          password: body.password,
        }),
      },
    );

    const res = await response.json();

    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);
    cks.set("access_token", res.accessToken, {
      path: "/",
      httpOnly: true,
      expires: expiryDate,
    });

    return NextResponse.json({ data: res });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
