const { where } = require("sequelize");
const Cart = require("../models/Cart");

const findItemInCart = async (query) => {
    try {
        const cartItem = await Cart.findOne({ where: query });
        return cartItem;
    } catch (err) {
        throw err;
    }
}

const updateItemQuantity = async (cartItem,addedQuantity) => {
    try {
        const updatedQuantity = cartItem.quantity + addedQuantity;
        cartItem.quantity = updatedQuantity;
        await cartItem.save();
    } catch (err) {
        throw err;
    }
}
const addItemToCart = async (UserId,ItemId,quantity) => {
    try {
        const newCartItem = await Cart.create({ UserId, ItemId, quantity })
        return newCartItem;
    } catch (err) {
        throw err;
    }
}
module.exports = {
    findItemInCart,
    updateItemQuantity,
    addItemToCart
}