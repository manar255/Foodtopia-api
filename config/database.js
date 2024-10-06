const Sequelize = require('sequelize');
const { logger } = require('sequelize/lib/utils/logger');

const DB = process.env.DATABASE;

const sequelize = new Sequelize(DB)


module.exports = sequelize;