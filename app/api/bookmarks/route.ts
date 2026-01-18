import { NextResponse } from "next/server";
import { newsFeed } from "../../../lib/mock-data";

export function GET() {
  return NextResponse.json({ items: newsFeed.slice(0, 2) });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ status: "saved", bookmark: body });
}
