import UserStorage from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const { id, password } = await UserStorage.getUserInfo(this.body.id);
    console.log(id, this.body.id);
    console.log(id === this.body.id);
    console.log(password === this.body.password);

    if (id) {
      if (id === this.body.id && password === this.body.password) {
        console.log("login success");
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
    } else {
      return {
        success: false,
        message: "아이디가 존재하지 않습니다.",
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
