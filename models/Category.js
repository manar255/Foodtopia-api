const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Category = sequelize.define("Category", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isMain:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps: true
    
})

module.exports = Category;