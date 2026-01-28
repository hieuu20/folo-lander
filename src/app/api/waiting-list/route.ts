import { NextRequest, NextResponse } from "next/server";
import { joinWaitingList } from "@/service/waitingList";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const result = await joinWaitingList(body.email);

        return NextResponse.json({ data: result });
    } catch (error) {
        return NextResponse.json(error);
    }
}
