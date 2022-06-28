import db from "../config/db.js";

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE id = ?`;
      db.query(query, [id], (err, result) => {
        if (err) {
          reject(err);
        }
        if (result) {
          console.log(result[0]);
          resolve(result[0]);
        } else {
          resolve(null);
        }
      });
    });
  }

  static async addUser(userInfo) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users(id, name, password, email) VALUES(?, ?, ?, ?)`;
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password, userInfo.emmail],
        (err) => {
          if (err) {
            reject(err);
          }
          resolve({ success: true, message: "회원가입 성공" });
        }
      );
    });
  }
}
export default UserStorage;
