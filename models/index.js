// import models
const Product = require("./Product");
const Category = require("./Category");
const User = require('./User')
const Order = require('./Order')
// const ProductTag = require("./ProductTag");

// user has many prodcuts
User.hasMany(Product, {foreignKey: "user_id"})

// user has many categories
User.hasMany(Category, {foreignKey: "user_id"})

// user has many orders
User.hasMany(Order, {foreignKey: "user_id"})

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: "category_id",});

// Categories have many Products
Category.hasMany(Product, {foreignKey: "category_id",});

Order.belongsTo(User, { foreignKey: 'user_id' });

Order.belongsTo(Product, { foreignKey: 'product_id' });

// Order.belongsToMany(Product, {
//   through: "product_id",
//   foreignKey: "product_id"
// });

module.exports = {
  Product,
  Category,
  User,
  Order
};
