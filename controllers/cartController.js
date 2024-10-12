const cartService = require('../services/cartService')
const Cart = require("../models/Cart");
const { where } = require("sequelize");

//add to cart
const addToCart = async (req, res, next) => {
    try {
        const userId = 1
        const { itemId } = req.params
        const { quantity } = req.body;

        const cartItem = await cartService.findItemInCart({ UserId: userId, ItemId: itemId })


        if (cartItem) {
            await cartService.updateItemQuantity(cartItem, quantity);
            // await CartItem.update({ quantity: updatedQuantity })

        } else {
            await cartService.addItemToCart(userId, itemId, quantity);
        }

        res.json({ message: "Item added to cart" });

    } catch (err) {
        next(err);
    }
}

//get items in cart
const getItemsInCart = async (req, res, next) => {
    try {
        const userId = 1
        const cartItems = await cartService.getCartItems(userId)
        res.json(cartItems);
    } catch (err) {
        next(err);
    }
}


//update item quantity in cart
const updateItemQuantity = async (req, res, next) => {
    try {
        const userId = 1
        const { itemId } = req.params
        const { quantity } = req.body;
        const cartItem = await cartService.findItemInCart({ UserId: userId, ItemId: itemId })

        if (!cartItem) {
            res.status(404).json({ message: "Item not found in cart" });
        }

        await cartService.updateItemQuantity(cartItem, quantity);

        res.status(200).json({ message: "Item quantity updated" });
    } catch (err) {
        next(err);
    }
}
//remove item from cart
const removeItemFromCart = async (req, res, next) => {
    try {
        const userId = 1
        const { itemId } = req.params;

        await cartService.deleteItemFromCart(userId, itemId);

        res.status(200).json({ message: "Item removed from cart" });

    } catch (err) {
        next(err);
    }
}
module.exports = {
    addToCart,
    getItemsInCart,
    updateItemQuantity,
    removeItemFromCart
}