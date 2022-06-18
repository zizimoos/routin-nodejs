import express from "express";
import homeRoute from "./Router.js";

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", homeRoute);

export default app;
