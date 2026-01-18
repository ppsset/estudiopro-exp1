import { NextResponse } from "next/server";
import { projects } from "../../../lib/mock-data";

export function GET() {
  return NextResponse.json({ items: projects });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ status: "created", project: body });
}
