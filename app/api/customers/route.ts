import { connectToDataBase } from "../mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const { db } = await connectToDataBase("sample_analytics");
  const customers = await db.collection("customers");
  const data = await customers.find({}).limit(5).toArray();
  console.log("customers", data);
  return NextResponse.json({ message: "success", data: data });
}
