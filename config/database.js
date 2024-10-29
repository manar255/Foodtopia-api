const Sequelize = require('sequelize');

const DB = process.env.DATABASE_URL;

const sequelize = new Sequelize(DB)


module.exports = sequelize;