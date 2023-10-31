import { MongoClient } from 'mongodb';
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI);

if (!MONGODB_URI) {
    throw new Error('Define the Mongo DB Env Varialble')
}

let cachedClient = null;
let cachedDb = null

export async function connectToDataBase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        }
    }

    await client.connect()
    console.log('Connect to Database')
    let db = client.db('sample_airbnb')
    cachedClient = client
    cachedDb = db
    return {
        client: cachedClient,
        db: cachedDb
    }
}
