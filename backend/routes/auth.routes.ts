import express, { Router } from "express";
import { logOut, login, signUp } from "../controllers/auth.controller";

const router: Router = express.Router();

router.get("/login", login);

router.post("/signup", signUp);

router.get("/logout", logOut);

export default router;
