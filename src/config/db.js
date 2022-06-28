import mysql from "mysql";

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
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
