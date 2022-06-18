import express from "express";
import { get } from "./routes/home/control.js";

const router = express.Router();

router.get("/", get.index);
router.get("/login", get.login);

export default router;
