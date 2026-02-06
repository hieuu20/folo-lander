import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

export async function PUT(request: NextRequest) {
  try {
    const cks = cookies();
    const token = cks.get("access_token")?.value;

    const body = await request.json();

    const ua = headers().get("user-agent") || "";

    const parser = new UAParser(ua);
    const uaResult = parser.getResult();

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/client/user/change-password`,
      {
        cache: "no-store",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token || ""}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...body,
          deviceInfo: {
            device: uaResult.device.type || "desktop",
            os: uaResult.os.name || "",
            browser: uaResult.browser.name || "",
            country: "unknow",
            city: "unknow",
            device_id: body.deviceId,
          },
        }),
      }
    );

    const result = await response.json();

    return NextResponse.json({ data: result });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
