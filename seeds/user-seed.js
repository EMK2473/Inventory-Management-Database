const { User } = require("../models");

const userData = [
  {
    username: "Manager1",
    password: "Password",
  },
  {
    username: "Manager2",
    password: "Password",
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;