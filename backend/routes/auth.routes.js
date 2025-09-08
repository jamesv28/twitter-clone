import express from "express";
import { signup, signIn, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", signIn);

router.post("/logout", signUp);
export default router;
