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
Order.sync({ force: false }).then(() => {
    console.log('Order table created')
}).catch((err) => {
    console.log(err);
});
module.exports = Order;