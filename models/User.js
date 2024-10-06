const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')




const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false 
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    otp: {
        type: DataTypes.STRING,
        allowNull: true 
    }
}, {
    timestamps: true
});

 User.sync({alert:true}).then(()=>{
    console.log('User table created')
 }).catch((err)=>{
    console.log(err);
 });
module.exports = User;

// const User = sequelize.define(
//     'User',
//     {
//       // Model attributes are defined here
//       firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//         // allowNull defaults to true
//       },
//     },
//     {
//       // Other model options go here
//     },
//   );


// const UserSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true

//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         // required: true,
//         unique: true
//     },
//     phone: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     isVerified:{
//         type:Boolean,
//         default:false
//     },
//     otp:{
//         type:String,
//     }

// }, {
//     timestamps: true
// });

// const User = mongoose.model('User', UserSchema);
// module.exports = User;