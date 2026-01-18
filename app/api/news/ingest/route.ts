import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ status: "ingestion_queued", message: "Mock ingestion triggered." });
}
