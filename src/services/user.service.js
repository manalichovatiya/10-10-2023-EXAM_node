const { User } = require("../models");

// Create user
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

// Get user list
const getUserList = async () => {
  return User.find();
};

// Get user by email
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

// Get user details by id
const getUserById = async (userId) => {
  return User.findById(userId);
};

// user details update by id
const updateDetails = async (userId, reqBody) => {
  return User.findByIdAndUpdate(userId, { $set: reqBody });
};

// Delete user
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  getUserByEmail,
  deleteUser,
};