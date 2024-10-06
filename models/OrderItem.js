const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')
const Order = require('./Order')
const Item = require('./Item')


const OrderItem = sequelize.define('OrderItem', {
    // orderId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Order,
    //         key: 'id'
    //     }
    // },
    // itemId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Item,
    //         key: 'id'
    //     }
    // },
    quantity: {
        type: DataTypes.INTEGER
    },


}, {
    timestamps: true
});


module.exports = OrderItem;

