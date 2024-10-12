const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Cart = sequelize.define('Cart', {
    quantity: {
        type: DataTypes.INTEGER,
        default: 1,
    }

}, {
    timestamps: true
});


module.exports = Cart;

