/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { throwBadRequest } from "../_utils";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";
import { generateRandomIP } from "@/utils";

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.UPVIRAL_API_KEY!;
    const campaignId = process.env.CAMPAIGN_ID!;

    const params = new URLSearchParams({
      uvapikey: apiKey,
      uvmethod: "get_leads_points",
      campaign_id: campaignId,
      points: "0",
      operator: "=",
      start: "0",
      size: "10"
    });
    

    const res = await fetch(`https://app.upviral.com/api/v1/`, {
      method: "POST",
      body: params.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const result = await res.json();

    console.log({ result });

    return NextResponse.json({ data: result });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.UPVIRAL_API_KEY!;
    const campaignId = process.env.CAMPAIGN_ID!;
    const body = await request.json();
    // const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
    //   ","
    // )[0];
    const ip = generateRandomIP();

    console.log({ apiKey });

    const params = new URLSearchParams({
      uvapikey: apiKey,
      uvmethod: "add_contact",
      campaign_id: campaignId,
      email: body.email,
      name: body.name,
      ip_address: ip,
      referral_code: body.referral_code,
    });

    const res = await fetch(`https://app.upviral.com/api/v1/`, {
      method: "POST",
      body: params.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const result = await res.json();

    console.log({ result });

    return NextResponse.json({ data: result });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
// https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https://lander.folo.co/
