const seedCategories = require("./category-seed");
const seedProducts = require("./product-seed");
const seedTags = require("./tag-seed");
const seedUsers = require("./user-seed")
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n~~~~~DATABASE~SYNCED~~~~~\n");
  await seedCategories();
  console.log("\n~~~~~CATEGORIES~SEEDED~~~~~\n");
  await seedProducts();
  console.log("\n~~~~~PRODUCTS~SEEDED~~~~~\n");
  await seedTags();
  console.log("\n~~~~~TAGS~SEEDED~~~~~\n");
  await seedUsers();
  console.log("\n~~~~~TAGS~SEEDED~~~~~\n");
  process.exit(0);
};

seedAll();
