/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { getUserDetail } from "@/service/user";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const res = await getUserDetail();

    if (res?.statusCode == 401) {
      const cks = cookies();
      cks.delete("access_token");
    }

    return NextResponse.json({ data: res });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
