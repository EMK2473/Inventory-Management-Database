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
    // date :{
    //   type: DataTypes.INTEGER,
    //   dateFormat/dateCreated
    // }
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      // references: {
      //   model: "product",
      //   key: "stock"
      // }
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