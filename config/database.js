const Sequelize = require('sequelize');
const mysql2 = require('mysql2')
const DB = process.env.DATABASE_URL;

const sequelize = new Sequelize(DB,{
    dialect: 'mysql',
    logging: false, 
  })

  
module.exports = sequelize;