const { where } = require("sequelize");
const Category = require("../models/Category");
const createCategory = async (categoryData) => {
    try {
        const category = await Category.create(categoryData);
        return category;
    } catch (error) {
        throw error
    }
}
const getCategories = async (attributes, query) => {
    try {
        const categories = await Category.findAll({
            attributes: attributes,
            where: query
        })
        return categories;

    } catch (err) {
        throw err;
    }
}


module.exports = {
    getCategories,
    createCategory
}