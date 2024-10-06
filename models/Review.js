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


module.exports = Review;

