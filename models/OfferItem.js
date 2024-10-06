const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const OfferItem = sequelize.define('OfferItem', {
    
}, {
    timestamps: true
});


module.exports = OfferItem;

