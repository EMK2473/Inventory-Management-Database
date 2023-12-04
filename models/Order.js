const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    username: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "username" 
      },
    },
    product_id :{
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id"
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;