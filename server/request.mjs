import { Router } from "express";
import { addNewRequest, deleteRequest, getAllRequests, getRequestById, updateRequest } from "./request.data.mjs";


export const requestRouter = Router();


proudactsRouter.get('/', async (req,res) => {
    res.send(await getAllRequests(req.query));
})

proudactsRouter.post('/', async (req,res) => {
   
    res.send(await addNewRequest(req.body));
})

proudactsRouter.get('/:id', async (req,res) => {

    res.send(await getRequestById(req.params.id));
})

proudactsRouter.put('/:id', async (req,res) => {
   
   res.send(await updateRequest(req.params.id,req.body));
})

proudactsRouter.delete('/:id',async (req,res) => {
   
    deleteRequest(await req.params.id);
   res.send("ok");
})