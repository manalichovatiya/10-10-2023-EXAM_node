const Joi = require("joi");

/** create  */
const createOrder = {
  body: Joi.object().keys({
    order_address: Joi.string().required().trim(),
    User_id: Joi.string().required(),
  }),
};

module.exports = {
    createOrder
}