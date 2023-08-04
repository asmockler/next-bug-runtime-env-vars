import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  console.log("GET /");
  return NextResponse.json({
    TEST: process.env.TEST ?? "not set",
  });
}
