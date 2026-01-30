import { getEarningHistory } from "@/service/earningHistory";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const resData = await getEarningHistory();
    return NextResponse.json({ data: resData });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}