import  express  from "express";
import bodyParser from "body-parser";
import "./db.mjs";
import { appRouter } from "./routes.mjs";

const hostname = '127.0.0.1';
const port = '3001';

const app = express();

app.use(bodyParser.json());


app.use('/api',appRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });