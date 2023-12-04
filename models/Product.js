const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}


Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isNumeric: true, 
      },
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true, 
      },
    },
    unit: {
      type: DataTypes.STRING, 
      allowNull: true, 
      defaultValue: "case",
    },
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 10,
      validate: {
        isNumeric: true, 
      },
    },
    par: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category", 
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;


// we need to fully develop what each Product's columns will contain
// How to add image file to column
