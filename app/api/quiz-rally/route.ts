import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(requset: NextRequest) {
  const data = await requset.json();
  if (["オデュッセウス", "オデッセウス"].includes(data.answer)) {
    return NextResponse.json({ ok: true });
  } else {
    return NextResponse.json({ ok: false });
  }
}
