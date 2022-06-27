import db from "../config/db.js";

class UserStorage {
  static #getUserInfo(id, data) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id); // 아이디를 이용해서 인덱스를 찾는다.
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, fields) {
    const users = JSON.parse(data);
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(...fields) {}
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE id = ?`;
      db.query(query, [id], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result[0]);
      });
    });
  }
  static async addUser(userInfo) {}
}
export default UserStorage;
