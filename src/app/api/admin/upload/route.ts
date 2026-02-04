import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const cks = cookies();
    const formData = await request.formData();

    const file = formData.get("file") as File;
    console.log(file.name, file.size, file.type);

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/admin/upload`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + cks.get("access_token")?.value,
      },
      body: formData,
    });
    const result = await res.json();

    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json(error);
  }
}
