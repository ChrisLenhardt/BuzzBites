import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || 
"mongodb+srv://chrisL:Cl02082005@cluster0.nzksy4h.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("blogBase");

export default db;