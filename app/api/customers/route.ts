import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from "../mongodb";

const limit = 5;

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDataBase("sample_analytics");
  const customers = await db.collection("customers");
  try {
    const data = await customers.find({}).limit(limit).toArray();
    return Response.json({ message: "success", data: data });
  } catch (err) {
    Response.json({ error: "failed to load data" });
  }
}
