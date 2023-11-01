import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  let res = {
    message: "success",
    data: { Name: "Vijay", lastName: "gupta", time: new Date().toISOString() },
  };
  return Response.json(res);
}

export async function POST() {
  const data = NextRequest;
  return NextResponse.json({ data: data });
}
