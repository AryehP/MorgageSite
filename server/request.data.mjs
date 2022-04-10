import { connectToDB } from "./db.mjs";
import { ObjectId } from "mongodb";

async function getDBCollection(){

    const db = await connectToDB();
    return db.collection('Requesters');

}

export async function getAllRequests(){
    const requests = await getDBCollection();
    return requests.find({}).toArray();
}

export async function addNewRequest(newRequest){
    const request = await getDBCollection();
    return request.insertOne(newRequest);
}

export async function getRequestById(id){
    
    const request = await getDBCollection();
    return request.findOne({_id: ObjectId(id)})
    
}

export async function updateRequest(id, request){
    
   const requests = await getDBCollection();

    return requests.updateOne({_id: ObjectId(id)}, {$set: request});
}

export async function deleteRequest(id){
    const requests = await getDBCollection();
    requests.deleteOne({_id: ObjectId(id)})
}