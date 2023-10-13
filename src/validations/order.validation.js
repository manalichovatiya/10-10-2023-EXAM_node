const Joi = require("joi");

/** create  */
const create_Order = {
  body: Joi.object().keys({
    order_address: Joi.string().required().trim(),
    Users: Joi.string().required(),
    Cart : Joi.string().required(),
  }),
};
module.exports = {
    create_Order,
    sendMail
}