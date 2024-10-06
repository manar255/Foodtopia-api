const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')
const Order = require('./Order')
const Item = require('./Item')


const OrderItem = sequelize.define('OrderItem', {
    quantity: {
        type: DataTypes.INTEGER
    },


}, {
    timestamps: true
});

OrderItem.sync({ alert: true }).then(() => {
    console.log('OrderItem table created')
}).catch((err) => {
    console.log(err);
});
module.exports = OrderItem;

