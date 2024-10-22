// const { addOrder } = require('../controllers/orderController');
const Item = require('../models/Item');
const Order = require('../models/Order')
const userService = require('../services/userService')

const createOrder = async (orderData) => {
    try {
        const order = await Order.create(orderData);
        return order;
    } catch (err) {
        throw err;
    }
}
const addOrderItems = async (id, orderItems) => {
    try {
        const order = await Order.findByPk(id);
        await order.setOrderItem(orderItems);
        return orderItems;
    } catch (err) {
        throw err;
    }
}
const getUserOrders = async (userId) => {
    try {
        const user = await userService.findUser({ id: userId })
        const orders = await user.getOrder({
            include: [
                {
                    model: Item,
                    through: { attributes: ['id', 'title', 'image'] },
                },
            ],
        })
        return orders;
    } catch (err) {
        throw err;
    }
}

const getOrders = async () => {
    try {
        const orders = await Order.findAll({
            include: [
                {
                    model: Item,
                    through: { attributes: ['id'] },
                },
                {
                    model: User,
                    through: { attributes: ['id', 'firstName'] },
                }
            ],
        });
        return orders;
    } catch (err) {
        throw err;
    }
}
module.exports = {
    createOrder,
    addOrderItems,
    getUserOrders,
    getOrders
}