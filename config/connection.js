// set up a Sequelize connection to a MySQL database
const Sequelize = require('sequelize');
require('dotenv').config();
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });
module.exports = sequelize;