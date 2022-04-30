import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
    requester_full_name: String,
    requester_phone_number: String,
    requester_email: String,
    requester_lifestatus: String,
    requester_workstatus: String,
    partner_full_name: String,
    partner_phone_number: String,
    partner_email: String,
    partner_lifestatus: String
});

export const Request = new mongoose.model('Request',RequestSchema);