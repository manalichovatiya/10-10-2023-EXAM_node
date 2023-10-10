const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create order
router.post(
  "/create-order",
  validate(orderValidation.createOrder),
  orderController.createOrder
);

// order list
router.get(
  "/list",
  orderController.getOrderList
)

// delete order
router.delete(
  "/delete/:orderId",
  orderController.deleteOrder
)

//update order
router.put(
  "/update-order/:orderId",
  orderController.updateOrder
)

module.exports = router;