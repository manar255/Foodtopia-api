const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Cart = sequelize.define('Cart', {
    
}, {
    timestamps: true
});

Cart.sync({alert:true}).then(()=>{
    console.log('Cart table created')
 }).catch((err)=>{
    console.log(err);
 });
module.exports = Cart;

