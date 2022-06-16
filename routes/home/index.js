import express from "express";
import ctrl from "./control.js";

const router = express.Router();

router.get("/", ctrl.index);
router.get("/login", ctrl.login);

export default router;
