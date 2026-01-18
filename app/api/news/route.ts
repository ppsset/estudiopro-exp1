import { NextResponse } from "next/server";
import { newsFeed } from "../../../lib/mock-data";

export function GET() {
  return NextResponse.json({ items: newsFeed, sourceCount: 4 });
}
