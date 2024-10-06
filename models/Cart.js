const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Cart = sequelize.define('Cart', {
    
}, {
    timestamps: true
});


module.exports = Cart;

