const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Item = sequelize.define('Item', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    calorie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    praperTime: {
        type: DataTypes.INTEGER,
        defaultValue: false
    },
    
}, {
    timestamps: true
});

module.exports = Item;

