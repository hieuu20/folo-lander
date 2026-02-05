/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { UAParser } from "ua-parser-js";
import { signin } from "@/service/auth";
import { generateRandomIP } from "@/utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const cks = cookies();

    const ua = headers().get("user-agent") || "";

    const parser = new UAParser(ua);
    const uaResult = parser.getResult();
    const email = (body.email as string).toLowerCase();

    const checkEmailRes = await fetch(
      `https://backend.knky.co/v1/users/email-validation?email=${email}`,
      {
        headers: {
          "x-api-key": "t5w7lItPUwwPyxbsQIbpl9qX",
        },
      }
    );

    const checkEmailResData = await checkEmailRes.json();

    console.log({ checkEmailResData });

    const postBody = {
      email: email,
      password: body.password,
      // validation_id: checkEmailResData.r,
      device_info: {
        device: uaResult.device.type || "desktop",
        os: uaResult.os.name,
        browser: uaResult.browser.name,
        country: "unknow",
        city: "unknow",
        device_id: body.deviceId,
      },
      user_type: "USER",
    };

    console.log({ postBody });

    const signupRes = await fetch(
      `https://backend.knky.co/v1/users/social-signup-folo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-api-key": "t5w7lItPUwwPyxbsQIbpl9qX",
        },
        body: JSON.stringify(postBody),
      }
    );

    const result = await signupRes.json();

    return NextResponse.json({ data: result });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}

// curl -X POST "https://backend.knky.co/v1/users/social-signup-folo" \
//   -H "Content-Type: application/json" \
//   -H "x-api-key: t5w7lItPUwwPyxbsQIbpl9qX" \
//   -d '{
//     "email": "hieu.huynh8900@gmail.com",
//     "password": "o23423243ed3",
//     "device_info": {
//       "device": "desktop",
//       "os": "macOS",
//       "browser": "Chrome",
//       "country": "unknow",
//       "city": "unknow",
//       "device_id": "3802406b-c22c-44f7-b9cb-512f78d8a6a4"
//     },
//     "user_type": "USER"
//   }'
