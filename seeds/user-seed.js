const { User } = require("../models");

const userData = [
  {
    username: "Manager1",
    email: "manager1@email.com",
    password: "Password",
  },
  {
    username: "Manager2",
    email: "manager2@email.com",
    password: "Password",
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;