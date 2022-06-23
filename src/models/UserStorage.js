import { readFile } from "fs/promises";

class UserStorage {
  static #users = {
    id: ["henry", "tessa", "tomson"],
    password: ["1111", "2222", "3333"],
    name: ["헨리", "테사", "톰슨"],
  };

  static #getUserInfo(id, data) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id); // 아이디를 이용해서 인덱스를 찾는다.
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  static getUserInfo(id) {
    return readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(id, data);
      })
      .catch((e) => console.error(e));
  }
  static addUser(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    users.name.push(userInfo.name);
    return { success: true };
  }
}
export default UserStorage;
