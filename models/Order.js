const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true
})

module.exports = Order;