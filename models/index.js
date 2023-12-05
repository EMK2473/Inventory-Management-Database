const Product = require("./Product");
const Category = require("./Category");
const User = require("./User");

// user has many prodcuts
// user has many categories

User.hasMany(Product, { foreignKey: "user_id" });
User.hasMany(Category, { foreignKey: "user_id" });

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: "category_id" });

// Categories have many Products
Category.hasMany(Product, { foreignKey: "category_id" });

module.exports = {
  Product,
  Category,
  User,
};
