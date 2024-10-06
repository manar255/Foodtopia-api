const sequelize = require('../config/database')

const User = require('./User')
const Review = require('./Review')
const Category = require('./Category')
const Item = require('./Item')
const Offer = require('./Offer')
const Order = require('./Order')



sequelize.sync().then(()=>{
    console.log('Database synced')
}).catch(err=>{
    console.log(err)
})