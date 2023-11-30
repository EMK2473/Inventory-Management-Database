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
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true, 
      },
    },
    stock: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        defaultValue: 10,
        validate: {
          isNumeric: true, 
        },
      },
      isPremium: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isFrozen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isOnSale: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
