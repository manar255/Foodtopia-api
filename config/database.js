const Sequelize = require('sequelize')

const DB = process.env.DATABASE;

const sequelize = new Sequelize(DB)


module.exports = sequelize;