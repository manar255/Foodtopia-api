const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const OfferItem = sequelize.define('OfferItem', {
    
}, {
    timestamps: true
});

OfferItem.sync({alert:true}).then(()=>{
    console.log('OfferItem table created')
 }).catch((err)=>{
    console.log(err);
 });
module.exports = OfferItem;

