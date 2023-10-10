const Joi = require("joi");

/** create cart */
const createCart = {
  body: Joi.object().keys({
    total_items: Joi.number().required(),
    total_price: Joi.number().required(),
    product: Joi.string().trim(),
  }),
};

module.exports = {
    createCart
}