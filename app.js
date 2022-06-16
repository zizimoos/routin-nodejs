import express from "express";
import homeRoute from "./routes/home/index.js";

const SERVER_PORT = process.env.PORT || 3000;
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", homeRoute);

app.listen(SERVER_PORT, () => {
  console.log(` 🟢 Server started on port ${SERVER_PORT}`);
});
