import UserStorage from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const user = await UserStorage.getUserInfo(this.body.id);

    if (user.id) {
      if (user.id === this.body.id && user.password === this.body.password) {
        return {
          success: true,
          message: "로그인 성공",
          user: user,
        };
      } else {
        return {
          success: false,
          message: "비밀번호가 일치하지 않습니다.",
        };
      }
    } else {
      return {
        success: false,
        message: "아이디가 존재하지 않습니다.",
      };
    }
  }
  register() {
    const user = UserStorage.getUserInfo(this.body.id);
    const response = UserStorage.addUser(this.body);
    return response;
  }
}

export default User;
