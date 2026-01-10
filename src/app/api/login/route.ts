import { NextRequest, NextResponse } from "next/server";
import { WaitingEmailModel } from "../_entities";
import { throwBadRequest } from "../_utils";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email?.toLowerCase() as string;

    const ua = headers().get("user-agent") || "";

    const parser = new UAParser(ua);
    const uaResult = parser.getResult();

    if (!email) {
      return throwBadRequest("Email is require");
    }

    // const checkEmailRes = await fetch(
    //   `https://backend.knky.co/v1/users/email-validation?email=${email}`
    // );
    // const checkEmailResData = await checkEmailRes.json();

    // if (!checkEmailResData?.r) {
    //   return throwBadRequest("Check email error");
    // }

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

    const signupRes = await fetch(`https://backend.knky.co/v1/users/social-signup-folo`, {
      method: "POST",
      body: JSON.stringify(postBody),
    });


    const result = await signupRes.json();

    console.log({ result });

    return NextResponse.json({ data: result });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: error });
  }
}
