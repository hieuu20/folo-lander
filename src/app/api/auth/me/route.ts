/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { getMe } from "@/service/auth";
import { getUserDetail } from "@/service/user";

export async function GET() {
  try {
    const res = await getUserDetail();

    return NextResponse.json({ data: res });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
