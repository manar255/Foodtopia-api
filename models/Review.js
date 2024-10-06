const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Review = sequelize.define('Review', {
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        // allowNull: false
    },

}, {
    timestamps: true
});

Review.sync({ alter: true }).then(() => {
    console.log('Review table created')
}).catch((err) => {
    console.log(err);
});
module.exports = Review;

