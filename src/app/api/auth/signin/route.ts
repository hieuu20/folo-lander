/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { UAParser } from "ua-parser-js";
import { signin } from "@/service/auth";
import { generateRandomIP } from "@/utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const cks = cookies();

    const ua = headers().get("user-agent") || "";

    const parser = new UAParser(ua);
    const uaResult = parser.getResult();

    // const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
    //   ","
    // )[0];

    const ip = generateRandomIP();

    const res = await signin({
      email: body.email,
      password: body.password,
      ip,
      userType: body.userType,
      referralCode: body.referralCode,
      roleId: body.roleId,
      deviceId: body.deviceId
    });

    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);
    cks.set('access_token', res.accessToken, {
      path: '/',
      httpOnly: true,
      expires: expiryDate,
    });

    return NextResponse.json({ data: res });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
