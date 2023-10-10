const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create cart
router.post(
  "/create-cart",
  validate(cartValidation.createCart),
  cartController.createcart
);

// cart list
router.get(
  "/list",
  cartController.getcartList
)

// delete cart
router.delete(
  "/delete/:cartId",
  cartController.deletecart
)

//update cart
router.put(
  "/update-cart/:cartId",
  cartController.updatecart
)

module.exports = router;