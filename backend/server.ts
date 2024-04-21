import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import authRouter from './routes/auth.routes'
import connectToMongoDB from "./db/connectToMongoDB";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json()) // to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth", authRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  connectToMongoDB()
  console.log(`[server]: Server is running at http://localhost:${port}`);
});