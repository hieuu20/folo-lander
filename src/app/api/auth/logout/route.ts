import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT() {
  const cks = cookies();
  cks.delete("access_token");
  return NextResponse.json({ data: "Logout success" });
}
