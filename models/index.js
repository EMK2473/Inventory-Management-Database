// import models
const Product = require("./Product");
const Category = require("./Category");
const User = require("./User");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
// const ProductTag = require("./ProductTag");

// user has many prodcuts
// user has many categories
// user has many orders
User.hasMany(Product, { foreignKey: "user_id" });
User.hasMany(Category, { foreignKey: "user_id" });
User.hasMany(Order, { foreignKey: "user_id" });

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: "category_id" });
Product.belongsToMany(Order, { through: OrderItem });

// Categories have many Products
Category.hasMany(Product, { foreignKey: "category_id" });


// orders belong to users
// orders belongs to product
// orders belong to many products through orderItems
// orders have many orderItems 
Order.belongsTo(User, { foreignKey: "user_id" });
Order.belongsTo(Product, { foreignKey: "product_id" });
Order.belongsToMany(Product, { through: OrderItem });
Order.hasMany(OrderItem, { foreignKey: "order_id" });

OrderItem.belongsTo(Order, { foreignKey: "order_id" });


module.exports = {
  Product,
  Category,
  User,
  Order,
  OrderItem
};
