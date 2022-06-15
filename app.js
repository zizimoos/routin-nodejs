import express from "express";

const SERVER_PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LOGIN</title>
    </head>
    <body>
        <div>여기는 홈입니다.</div>
    </body>
    </html>
`
  );
});
app.get("/login", (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LOGIN</title>
    </head>
    <body>
        <input type="text" placeholder="아이디"/></br>
        <input type="password" placeholder="비밀번호"/>
    </body>
    </html>
    `
  );
});

app.listen(SERVER_PORT, () => {
  console.log(` 🟢 Server started on port ${SERVER_PORT}`);
});
