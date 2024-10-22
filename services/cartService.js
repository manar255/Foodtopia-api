const { where } = require("sequelize");
const Cart = require("../models/Cart");

const { findUser } = require("./userService");

const findItemInCart = async (query) => {
    try {
        const cartItem = await Cart.findOne({ where: query });
        return cartItem;
    } catch (err) {
        throw err;
    }
}

const updateItemQuantity = async (cartItem, addedQuantity) => {
    try {
        const updatedQuantity = cartItem.quantity + addedQuantity;
        cartItem.quantity = updatedQuantity;
        await cartItem.save();
    } catch (err) {
        throw err;
    }
}
const addItemToCart = async (UserId, ItemId, quantity) => {
    try {
        const newCartItem = await Cart.create({ UserId, ItemId, quantity })
        return newCartItem;
    } catch (err) {
        throw err;
    }
}
const deleteItemFromCart = async (UserId, ItemId,) => {
    try {
        await Cart.destroy({ where: { UserId, ItemId } })

    } catch (err) {
        throw err;
    }
}

const getCartItems = async (userId) => {
    try {
        const user = await findUser({ id: userId });
        const cartItems = await user.getCart();
        console.log(cartItems);

        return cartItems;
    } catch (err) {
        throw err;
    }
}
const resetCart = async (userId) => {
    try {
        const user = await findUser({ id: userId });
        await user.gsetCart([]);
       

       
    } catch (err) {
        throw err;
    }
}


module.exports = {
    findItemInCart,
    updateItemQuantity,
    addItemToCart,
    deleteItemFromCart,
    getCartItems,
    resetCart
}