// import models
const Product = require("./Product");
const Category = require("./Category");
const User = require("./User");
const Order = require("./Order");
// const ProductTag = require("./ProductTag");

// user has many prodcuts
// user has many categories
// user has many orders
User.hasMany(Product, { foreignKey: "user_id" });
User.hasMany(Category, { foreignKey: "user_id" });
User.hasMany(Order, { foreignKey: "user_id" });

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: "category_id" });

// Categories have many Products
Category.hasMany(Product, { foreignKey: "category_id" });

// orders belong to users
Order.belongsTo(User, { foreignKey: "user_id" });

// orders belongs to product
Order.belongsTo(Product, { foreignKey: "product_id" });

module.exports = {
  Product,
  Category,
  User,
  Order,
};
