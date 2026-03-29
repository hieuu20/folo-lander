/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { getAllNews } from "@/service";

export async function GET() {
    try {
        const resData = await getAllNews();
        return NextResponse.json({ data: resData });
    } catch (error) {
        console.log({ error });
        return NextResponse.json({ error: error });
    }
}
