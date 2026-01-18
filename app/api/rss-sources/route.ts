import { NextResponse } from "next/server";

const sources = [
  { id: "nfpa", name: "NFPA Journal", url: "https://www.nfpa.org/", status: "active" },
  { id: "iec", name: "IEC Update", url: "https://www.iec.ch/", status: "active" },
  { id: "bs", name: "BSI Insights", url: "https://www.bsigroup.com/", status: "paused" }
];

export function GET() {
  return NextResponse.json({ items: sources });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ status: "added", source: body });
}
