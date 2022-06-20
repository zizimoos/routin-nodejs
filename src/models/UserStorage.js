class UserStorage {
  static #users = {
    id: ["henry", "tessa", "tomson"],
    password: ["1111", "2222", "3333"],
    name: ["헨리", "테사", "톰슨"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
        // console.log(newUsers);
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}
export default UserStorage;
