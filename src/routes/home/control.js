import UserStorage from "../../models/UserStorage.js";

const users = UserStorage.getUsers("id", "password");
console.log("constroller", users);

export const render = {
  index: (req, res) => {
    res.render(`home/index.ejs`);
  },
  login: (req, res) => {
    res.render(`home/login.ejs`);
  },
};

export const process = {
  login: (req, res) => {
    const { id, password } = req.body;
    const response = {};
    if (users.id.includes(id)) {
      if (users.password[users.id.indexOf(id)] === password) {
        response.success = true;
        response.message = "로그인 성공";
        return res.json(response);
      } else {
        response.success = false;
        response.message = "비밀번호가 일치하지 않습니다.";
        return res.json(response);
      }
    }
  },
};
