import { Request } from "./request.model.mjs";

// async function getDBCollection(){

//     const db = await connectToDB();
//     return db.collection('Requesters');

// }

export async function getAllRequests(){
    return Request.find();
}

export async function addNewRequest(newRequest){
    const request = new Request( {
        requester_full_name: newRequest['requester-fullname'],
        requester_phone_number: newRequest['requester-phone'],
        requester_email: newRequest['requester-email'],
        requester_lifestatus: newRequest['requester-lifestatus'],
        requester_workstatus: newRequest['requester-workstatus'],
        partner_full_name: newRequest['partner-fullname'],
        partner_phone_number: newRequest['partner-phone'],
        partner_email: newRequest['partner-email'],
        partner_lifestatus: newRequest['partner-lifestatus'],

    });
    return request.save();
}

export async function getRequestById(id){
    
    return Request.findById(id);
    
}

export async function updateRequest(id, request){
    
  return findByIdAndUpdate(id,request);
}

export async function deleteRequest(id){
    return findByIdAndDelete(id);
}