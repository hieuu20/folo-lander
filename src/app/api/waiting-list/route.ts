import { NextRequest, NextResponse } from "next/server";
import { WaitingEmailModel } from "../_entities";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const exist = await WaitingEmailModel.findOne({ email: body.email });
        if (exist) {
            return NextResponse.json({ message: "Already exist" }, {
                status: 404
            });
        }

        const result = await WaitingEmailModel.create({
            email: body.email,
            createdAt: Date.now()
        });

        return NextResponse.json({ data: result });
    } catch (error) {
        return NextResponse.json(error);
    }
}
