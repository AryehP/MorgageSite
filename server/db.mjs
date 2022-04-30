import mongoose from "mongoose";


mongoose.connect ('mongodb://127.0.0.1:27017/Maskhanta');

// export async function connectToDB(){
//     const connection = await client.connect();
//     const db = connection.db('Maskhanta');
//     return db;
// }