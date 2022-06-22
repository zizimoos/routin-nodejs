import express from "express";
import { render, process } from "./routes/home/control.js";

const router = express.Router();

router.get("/", render.index);
router.get("/login", render.login);
router.get("/register", render.register);
router.post("/login", process.login);
router.post("/register", process.register);

export default router;
