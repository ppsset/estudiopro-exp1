import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ items: [], status: "ok" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ status: "stored", run: body, calculatedAt: new Date().toISOString() });
}
