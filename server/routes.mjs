import { Router } from "express";
import { requestRouter } from "./request.mjs";


export const appRouter = Router();

appRouter.use('/requests',requestRouter);