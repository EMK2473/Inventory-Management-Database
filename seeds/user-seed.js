const { User } = require("../models");

const userData = [
  {
    username: "Manager1",
    password: "Password",
    isManager: true
  },
  {
    username: "Manager2",
    password: "Password",
    isManager: false,
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;