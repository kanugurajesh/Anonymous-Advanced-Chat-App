import express, { Router } from "express";
import { logOut, login, signUp } from "../controllers/auth.controller";

const authRouter: Router = express.Router();

// setting the login route
authRouter.post("/login", login);

// setting the singup route
authRouter.post("/signup", signUp);

// setting the logout route
authRouter.post("/logout", logOut);

export default authRouter;
