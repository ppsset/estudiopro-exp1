import { NextResponse } from "next/server";
import { knowledgeTopics } from "../../../lib/mock-data";

export function GET() {
  return NextResponse.json({ items: knowledgeTopics });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ status: "created", topic: body });
}
