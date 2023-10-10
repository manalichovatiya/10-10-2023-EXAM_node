const { Product } = require("../models");

// Create Product
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

// Get Product list
const getProductList = async () => {
  return Product.find().populate("category");
  // return Product.find({$or:[{is_active:false}]});
};

// Get Product details by id
const getProductById = async (productId) => {
  return Product.findById(productId);
};

// Delete Product
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

// Update Product
const updateProduct = async (productId,reqBody) => {
  return Product.findByIdAndUpdate(productId,{$set:reqBody});
};
module.exports = {
    createProduct,
    getProductList,
    getProductById,
    deleteProduct,
    updateProduct
};