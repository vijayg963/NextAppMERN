import { connectToDataBase } from "../mongodb";
const limit = 5;

export async function GET() {
  const { db }: any = await connectToDataBase("sample_airbnb");
  const getAllData = await db.collection("listingsAndReviews");
  const data = await getAllData.find({}).limit(limit).toArray();
  return Response.json({ message: "success", data: data });
}

export async function POST() {
  let res = {
    body: { Name: "Vijay", lastName: "gupta", time: new Date().toISOString() },
  };
  const data = await res;
  return Response.json(data);
}

// export async function POST() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//     body: JSON.stringify({ time: new Date().toISOString() }),
//   })

//   const data = await res.json()

//   return Response.json(data)
// }

// import type { NextApiRequest, NextApiResponse } from 'next';

// type ResponseData = {
//   message: string;
// };

// export function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' });
// }

// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function GET(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // const result = await someAsyncOperation()
//     res.status(200).json({ message: 'Hello from Next.js!' });
//   } catch (err) {
//     res.status(500).json({ error: 'failed to load data' });
//   }
// }
