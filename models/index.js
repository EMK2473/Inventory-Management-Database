// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const User = require('./User')
// const ProductTag = require("./ProductTag");

User.hasMany(Product, {
  foreignKey: "user_id"
})

User.hasMany(Category, {
  foreignKey: "user_id"
})
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   foreignKey: "product_id",
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   foreignKey: "tag_id",
// });

module.exports = {
  Product,
  Category,
  Tag,
  User,
};
