export const get = {
  index: (req, res) => {
    res.render(`home/index.ejs`);
  },
  login: (req, res) => {
    res.render(`home/login.ejs`);
  },
};
