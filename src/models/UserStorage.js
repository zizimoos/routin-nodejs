import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";

class UserStorage {
  // static #users = {
  //   id: ["henry", "tessa", "tomson"],
  //   password: ["1111", "2222", "3333"],
  //   name: ["헨리", "테사", "톰슨"],
  // };

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

  static getUsers(...fields) {
    return readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, fields);
      })
      .catch((e) => console.error(e));
  }
  static getUserInfo(id) {
    return readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(id, data);
      })
      .catch((e) => console.error(e));
  }
  static async addUser(userInfo) {
    console.log(JSON.stringify(userInfo));
    const users = await this.getUsers("id", "password", "name");
    if (users.id.includes(userInfo.id)) {
      return {
        success: false,
        message: "아이디가 이미 존재합니다.",
      };
    } else {
      users.id.push(userInfo.id);
      users.password.push(userInfo.password);
      users.name.push(userInfo.name);
      writeFile("./src/databases/users.json", JSON.stringify(users));
      return {
        success: true,
        message: "회원가입 성공",
      };
    }
  }
}
export default UserStorage;
