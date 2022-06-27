import UserStorage from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    try {
      const user = await UserStorage.getUserInfo(this.body.id);
      if (!user) {
        return {
          success: false,
          message: "아이디가 존재하지 않습니다.",
        };
      } else {
        if (user.id) {
          if (
            user.id === this.body.id &&
            user.password === this.body.password
          ) {
            return {
              success: true,
              message: "로그인 성공",
            };
          } else {
            return {
              success: false,
              message: "비밀번호가 일치하지 않습니다.",
            };
          }
        }
      }
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: "로그인 실패",
      };
    }
  }
  async register() {
    // const user = UserStorage.getUserInfo(this.body.id);
    try {
      const response = await UserStorage.addUser(this.body);
      return response;
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: "회원가입 실패",
      };
    }
  }
}

export default User;
