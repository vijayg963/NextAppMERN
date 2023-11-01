import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Define the Mongo DB Env Varialble");
}

let client = new MongoClient(MONGODB_URI);

let cachedClient = null;
let cachedDb = null;

export async function connectToDataBase(dbName) {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  await client.connect();
  console.log("Connect to Database");
  let db = client.db(dbName);
  cachedClient = client;
  cachedDb = db;
  return {
    client: cachedClient,
    db: cachedDb,
  };
}
