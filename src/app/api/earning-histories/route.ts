import { getEarningHistory } from "@/service/earningHistory";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if(!id){
      return NextResponse.json({ data: null });
    }

    const resData = await getEarningHistory(id);

    return NextResponse.json({ data: resData });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}