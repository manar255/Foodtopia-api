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
Offer.sync({ force: false }).then(()=>{
    console.log('Offer table created')
 }).catch((err)=>{
    console.log(err);
 });
module.exports = Offer;