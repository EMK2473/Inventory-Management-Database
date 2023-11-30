const seedCategories = require("./category-seed");
const seedProducts = require("./product-seed");
const seedUsers = require("./user-seed")
const seedOrders = require("./order-seed")
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n~~~~~DATABASE~SYNCED~~~~~\n");
  await seedCategories();
  console.log("\n~~~~~CATEGORIES~SEEDED~~~~~\n");
  await seedProducts();
  console.log("\n~~~~~ORDERS~SEEDED~~~~~\n");
  await seedUsers();
  console.log("\n~~~~~PRODUCTS~SEEDED~~~~~\n");
  await seedOrders();
  console.log("\n~~~~~USERS~SEEDED~~~~~\n");
  process.exit(0);
};

seedAll();
