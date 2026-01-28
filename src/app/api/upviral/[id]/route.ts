import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const apiKey = process.env.UPVIRAL_API_KEY!;
    const campaignId = process.env.CAMPAIGN_ID!;
    const id = params.id;
    
    const bodyParams = new URLSearchParams({
      uvapikey: apiKey,
      uvmethod: "get_lead_details",
      campaign_id: campaignId,
      lead_id: id,
    });

    const res = await fetch(`https://app.upviral.com/api/v1/`, {
      method: "POST",
      body: bodyParams.toString(),
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


export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const apiKey = process.env.UPVIRAL_API_KEY!;
    const campaignId = process.env.CAMPAIGN_ID!;
    const id = params.id;
    
    const bodyParams = new URLSearchParams({
      uvapikey: apiKey,
      uvmethod: "add_points",
      campaign_id: campaignId,
      lead_id: id,
      points: "-3000"
    });

    const res = await fetch(`https://app.upviral.com/api/v1/`, {
      method: "POST",
      body: bodyParams.toString(),
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