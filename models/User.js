const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcryptjs = require("bcryptjs");

class User extends Model {
  checkPassword(pWord) {
    return bcryptjs.compareSync(pWord, this.password);
  }

  // static associate(models) {
  //   this.belongsTo(models.Managers, {
  //     foreignKey: "managerID",
  //     as: "manager",
  //   });
  // }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    isManager: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcryptjs.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcryptjs.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
