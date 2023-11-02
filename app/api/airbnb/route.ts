import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from "../mongodb";
const limit = 5;

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { db }: any = await connectToDataBase("sample_airbnb");
  const getAllData = await db.collection("listingsAndReviews");
  try {
    const result = await getAllData.find({}).limit(limit).toArray();
    return Response.json({ message: "success", data: result });
  } catch (err) {
    Response.json({ error: "failed to load data" });
  }
}

export async function POST(req: any, res: NextApiResponse) {
  // const result = await fetch("https://data.mongodb-api.com/...", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY || "",
  //   },
  //   body: JSON.stringify({ data: req.body, time: new Date().toISOString() }),
  // });

  // const data = {
  //   body: JSON.stringify({ data: req.body, time: new Date().toISOString() }),
  // };
  const request = new Request(req);
  console.log("check body", request);
  console.log("check body", request.body);
  console.log("check body", request.url);

  return Response.json({
    time: new Date().toISOString(),
    message: "Data upload succesfully",
  });
}

// type ResponseData = {
//   message: string;
// };

// export function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: "Hello from Next.js!" });
// }
