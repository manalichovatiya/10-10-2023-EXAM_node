const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create cart */
router.post(
  "/create-cart",
  validate(cartValidation.createCart),
  cartController.createcart
);

/** cart list */
router.get(
  "/list",
  cartController.getcartList
)

router.delete(
  "/delete/:cartId",
  cartController.deletecart
)

router.put(
  "/update-cart/:cartId",
  cartController.updatecart
)

module.exports = router;