const Sequelize = require("sequelize");
const keys = require("../keys");

const sequelize = new Sequelize(keys.DB_NAME, keys.USER_NAME, keys.PASSWORD, {
  host: keys.DB_HOSTNAME,
  dialect: "mysql"
});

module.exports = sequelize;
