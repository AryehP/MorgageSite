import { Router } from "express";
import { addNewRequest, deleteRequest, getAllRequests, getRequestById, updateRequest } from "./request.data.mjs";


export const requestRouter = Router();


requestRouter.get('/', async (req,res) => {
    res.send(await getAllRequests(req.query));
})

requestRouter.post('/', async (req,res) => {
    res.send(await addNewRequest(req.body));
})

requestRouter.get('/:id', async (req,res) => {

    res.send(await getRequestById(req.params.id));
})

requestRouter.put('/:id', async (req,res) => {
   
   res.send(await updateRequest(req.params.id,req.body));
})

requestRouter.delete('/:id',async (req,res) => {
   
    deleteRequest(await req.params.id);
   res.send("ok");
})