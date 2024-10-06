const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')


const FavoriteItem = sequelize.define('FavoriteItem', {
    
}, {
    timestamps: true
});


module.exports = FavoriteItem;

