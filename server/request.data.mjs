import { connectToDB } from "./db.mjs";
import { ObjectId } from "mongodb";

async function createDBCollection(){

    const db = await connectToDB();
    return db.collection('Requesters');

}

export async function getAllRequests(){
    const requests = await createDBCollection();
    return requests.find({}).toArray();
}

export async function addNewRequest(newRequest){
    const Request = await createDBCollection();
    return request.insertOne(newRequest);
}

export async function getRequestById(id){
    
    const request = await createDBCollection();
    return request.findOne({_id: ObjectId(id)})
    
}

export async function updateRequest(id, request){
    
   const requests = await createDBCollection();

    return requests.updateOne({_id: ObjectId(id)}, {$set: request});
}

export async function deleteRequest(id){
    const requests = await createDBCollection();
    requests.deleteOne({_id: ObjectId(id)})
}