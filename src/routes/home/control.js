import User from "../../models/User.js";

export const render = {
  index: (req, res) => {
    res.render(`home/index.ejs`);
  },
  login: (req, res) => {
    res.render(`home/login.ejs`);
  },
  register: (req, res) => {
    res.render(`home/register.ejs`);
  },
};

export const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    console.log("control.process : ", response);
    res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    console.log("control.process : ", response);
    res.json(response);
  },
};
