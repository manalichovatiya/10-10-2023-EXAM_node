const Joi = require("joi");

/** create Product */
const createProduct = {
  body: Joi.object().keys({
    Product_name: Joi.string().required().trim(),
    product_description: Joi.string().required().trim(),
    product_price: Joi.number().required(),
    category: Joi.string().required(),
  }),
};

module.exports = {
    createProduct
}