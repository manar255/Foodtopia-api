const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Offer = sequelize.define("Offer", {
    
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    percentage:{
        type: DataTypes.INTEGER,
        allowNull:false,
    }
},{
    timestamps: true
    
})

module.exports = Offer;