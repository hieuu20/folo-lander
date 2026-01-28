/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { getMe } from "@/service/auth";

export async function GET(request: NextRequest) {
  try {
    const res = await getMe();

    return NextResponse.json({ data: res });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
