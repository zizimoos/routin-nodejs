const users = {
  id: ["henry", "tessa", "tomson"],
  password: ["1111", "2222", "3333"],
};

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
    if (users.id.includes(id)) {
      if (users.password[users.id.indexOf(id)] === password) {
        return res.json({
          success: true,
          message: "Login success",
        });
      } else {
        return res.json({
          success: false,
          message: "Password incorrect",
        });
      }
    }
  },
};
