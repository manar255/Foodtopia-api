const cartService = require('../services/cartService')
const Cart = require("../models/Cart");
const { where } = require("sequelize");

//add to cart
const addToCart = async (req, res, next) => {
    try {
        const userId = 1
        const { itemId, quantity } = req.body;

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

module.exports = {
    addToCart,
}