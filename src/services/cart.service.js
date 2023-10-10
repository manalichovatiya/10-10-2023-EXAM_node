const { Cart } = require("../models");

// cart
const createcart = async (reqBody) => {
  return Cart.create(reqBody);
};

// Get cart list
const getcartList = async () => {
    return Cart.find().populate("product");
};

// Get Cart details by id
const getcartById = async (cartId) => {
  return Cart.findById(cartId);
};

// update Cart
const updateDetails = async (cartId, reqBody) => {
  return Cart.findByIdAndUpdate(cartId, { $set: reqBody });
};

// Delete user
const deletecart = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
};

module.exports = {
    createcart,
    getcartList,
    getcartById,
    updateDetails,
    deletecart
}