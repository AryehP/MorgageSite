import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017');

export async function connectToDB(){
    const connection = await client.connect();
    const db = connection.db('Maskhanta');
    return db;
}