import { NextRequest, NextResponse } from "next/server";

export async function POST(requset: NextRequest, response: NextResponse) {
  const data = await requset.json()
  if (data.answer === "オデュッセウス") {
    return NextResponse.json({ ok: true })
  } else {
    return NextResponse.json({ ok: false })
  }
}