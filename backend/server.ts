import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes";
import messageRouter from "./routes/message.routes";
import connectToMongoDB from "./db/connectToMongoDB";
import userRouter from "./routes/user.routes";
import { app, server } from "./socket/socket";

dotenv.config();

// const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); // used to access the cookies

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

server.listen(port, () => {
  connectToMongoDB();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
