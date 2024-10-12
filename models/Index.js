const sequelize = require('../config/database')

const User = require('./User')
const Review = require('./Review')
const Category = require('./Category')
const Item = require('./Item')
const Offer = require('./Offer')
const Order = require('./Order')
const favoriteItem = require('./favoriteItem')
const Cart = require('./Cart')
const OrderItem = require('./OrderItem')
const OfferItem = require('./OfferItem')


/*=================Associations===============*/

//Category has meny items and item should belong to one category
Category.hasMany(Item, { foreignKey: { allowNull: false, } })
Item.belongsTo(Category, { foreignKey: { allowNull: false, } })


// User can review many Item and Item has many review
User.belongsToMany(Item, { through: Review })
Item.belongsToMany(User, { through: Review })


// User has many items in favorite list itme can add to many favorite lists
User.belongsToMany(Item, { as: 'favorite', through: favoriteItem })
Item.belongsToMany(User, { as: 'favorite', through: favoriteItem })

// User can have many orders and order belongs to one user
User.hasMany(Order)
Order.belongsTo(User)

// User has many items in cart and item belong to many users
User.belongsToMany(Item, { as: 'cart', through: Cart })
Item.belongsToMany(User, { as: 'cart', through: Cart })

//Order has many items and item can add to many orders
Order.belongsToMany(Item, { onUpdate: 'NO ACTION', through: OrderItem })
Item.belongsToMany(Order, { onUpdate: 'NO ACTION', through: OrderItem })


// // offer has many Item and itme may belong to many offers
Offer.belongsToMany(Item, { through: OfferItem })
Item.belongsToMany(Offer, { through: OfferItem })



sequelize.sync({ force: true }).then(async () => {
    const users = await User.bulkCreate([{
        firstName: "Manar",
        lastName: "khaled",
        email: "manarkhaled@test.com",
        phone: "01112850863",
        password: "123456",
        isVerified: true
    }]);
    const categories = await Category.bulkCreate([
        {
            name: "string",
            description: "string",
            image: "string",
            isMain: true
        }
    ]);
    const items = await Item.bulkCreate([
        {
            title: "lol",
            image: "looool",
            price: 0,
            description: "string",
            calorie: 0,
            praperTime: 0,
            CategoryId: 1
        }, {
            title: "full",
            image: "lll",
            price: 0,
            description: "string",
            calorie: 0,
            praperTime: 0,
            CategoryId: 1
        }
    ]);
    const cartItems =  await Cart.bulkCreate([
        {
            UserId:1,
            ItemId:1,
            // quantity: 1
        }
    ]);
    console.log('Database synced')
}).catch(err => {
    console.log(err)
})