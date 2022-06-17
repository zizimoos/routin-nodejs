import express from "express";
import { get } from "./control.js";

const router = express.Router();

router.get("/", get.index);
router.get("/login", get.login);

export default router;
