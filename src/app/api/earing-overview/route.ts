import { getEarningOverview } from "@/service/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const resData = await getEarningOverview();
    return NextResponse.json({ data: resData });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
