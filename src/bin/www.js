import app from "../app.js";

const SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, () => {
  console.log(` 🟢 Server started on port ${SERVER_PORT}`);
});
