const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class OrderItem extends Model {}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    product_id :{
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "product",
      //   key: "stock"
      // }
    },
    order_id :{
        type: DataTypes.INTEGER,
        references: {
          model: "order",
          key: "id"
        }
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

module.exports = OrderItem;