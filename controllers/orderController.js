const { where } = require("sequelize");
const Item = require("../models/Item");
const cartService = require('../services/cartService')
const orderService = require('../services/orderService')
const addOrder = async (req, res, next) => {
    try {
        const userId = 1
        // take items from cart
        const cartItems = await cartService.getCartItems(userId);

        // create new order
        const order = await orderService.create({ UserId: userId });

        // map items in cart
        const orderItems = cartItems.map(item => {
            // check if item is available
            if (item.isAvailable) {
                // if available then push item in order
                return {
                    OrderId: order.id,
                    ItemId: item.id
                }
            } else {
                // else return error
                throw Error('item is to available now!')
            }
        })
        // save order items
        await orderService.addOrderItems(order.id, orderItems);

        //reset cart
        await cartService.resetCart(userId);

        // return response
        res.status(200).json({ message: "Your order added now!" });

    } catch (err) {
        next(err);
    }
}
const getUserOrders = async (req, res, next) => {
    try {
        const userId = 1;

        //user order includeing orderitem
        const userOrders = await orderService.getUserOrders(userId);
        
        // return response
        res.status(200).json(userOrders);

    } catch (err) {
        next(err);
    }
}

/*      for admin      */
const getOrders = async (req, res, next) => {
    try {
        
        const orders = await orderService.getOrders();

        // return response
        res.status(200).json(orders);
    
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addOrder,
    getUserOrders,
    getOrders
}