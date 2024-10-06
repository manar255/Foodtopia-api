const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')


const FavoriteItem = sequelize.define('FavoriteItem', {
    
}, {
    timestamps: true
});

FavoriteItem.sync({alert:true}).then(()=>{
    console.log('FavoriteItem table created')
 }).catch((err)=>{
    console.log(err);
 });
module.exports = FavoriteItem;

