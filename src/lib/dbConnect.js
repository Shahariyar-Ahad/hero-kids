
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DBNAME;

export const collections = {
  PRODUCTS: "products",
};

let client;
let db;

async function connectDB() {
  if (!uri || !dbName) {
    throw new Error("MongoDB environment variables missing");
  }

  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    db = client.db(dbName);
    console.log("✅ MongoDB connected");
  }

  return db;
}

export async function dbConnect(cname) {
  try {
    if (!db) {
      await connectDB();
    }
    return db.collection(cname);
  } catch (err) {
    console.error("DB connection failed:", err.message);
    return null; // 🔑 VERY IMPORTANT
  }
}
