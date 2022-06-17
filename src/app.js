import express from "express";
import homeRoute from "./routes/home/index.js";

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", homeRoute);

export default app;
