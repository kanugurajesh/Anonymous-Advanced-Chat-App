import express, { Request, Response } from 'express'
import { getUsersForSidebar } from '../controllers/user.controller';
import protectRoute from '../middleware/protectRoute';

const userRouter = express.Router();

userRouter.get("/", protectRoute , getUsersForSidebar)

export default userRouter;