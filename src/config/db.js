import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "login_lecture",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(" 🟢 MySql Connected...");
});

export default db;
