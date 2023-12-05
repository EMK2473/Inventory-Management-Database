const { User, Managers } = require("../models");

const userData = [
  {
    username: "User1",
    password: "Password",
  },
  {
    username: "User2",
    password: "Password",
  },
];

const managerData = [
  {
    managerID: 1,
    username: "manager1",
    password: "Password",
  },
  {
    managerID: 2,
    username: "manager2",
    password: "Password",
  },
];

const seedUsers = () => User.bulkCreate(userData);
const seedManagers = () => Managers.bulkCreate(managerData);
module.exports = {
  seedUsers,
  seedManagers,
};
