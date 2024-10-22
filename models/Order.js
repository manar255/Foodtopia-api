const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        values: ['active', 'pending', 'deleted'],
        allowNull: false,
        defaultValue: "pending",

    }
}, {
    timestamps: true
})

module.exports = Order;