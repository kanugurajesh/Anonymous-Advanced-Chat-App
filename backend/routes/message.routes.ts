import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller";
import protectRoute from "../middleware/protectRoute";

const messageRouter = express.Router();

messageRouter.get("/:id", protectRoute, getMessage);
messageRouter.post("/send/:id", protectRoute, sendMessage);

export default messageRouter;
