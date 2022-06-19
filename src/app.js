import express from "express";
import path from "path";
import homeRoute from "./Router.js";

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${path.resolve()}/public`));
app.use(express.json());
app.use("/", homeRoute);

export default app;
