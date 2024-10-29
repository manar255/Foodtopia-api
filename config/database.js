const Sequelize = require('sequelize');

const DB = process.env.DATABASE_URL;

const sequelize = new Sequelize(DB,{
    dialect: 'mysql',
    logging: false, 
  })

  async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  testConnection();
module.exports = sequelize;