const { orderService , cartService , emailService , userService} = require("../services");

/** create order */
const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;
    //check if user exist or not
    const user = await userService.createUser(reqBody);
    if (!user){
      throw new Error("please add user!");
    }
    //check if order exist or not
    const orderExists = await orderService.getOrderById(reqBody);
    if (!orderExists){
      throw new Error("please add a order!");
    }
    //check if cart exist or not
    const cartExists =await cartService.getcartById(reqBody);
    if (!cartExists){
      throw new Error("please add to cart!")
    }
    const mailSend = await emailService.sendMail(user.email, data , "order done");
    if (!mailSend){
      throw new Error("Something went wrong, please try again or later.");
    }
    res.status(200).json({
      success: true,
      message: "order create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get order list */
const getOrderList = async (req, res) => {
  try {
    const getList = await orderService.getOrderList();

    res.status(200).json({
      success: true,
      message: "Get order list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete order */
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    //check if order exist or not
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("order not found!");
    }
    await orderService.deleteOrder(orderId);

    res.status(200).json({
      success: true,
      message: "order delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update order */
const updateOrder = async (req, res) => {
  try {
    const reqBody = req.body;
    const orderId = req.params.buorderId;
    //check if order exist or not
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("order not found!");
    }
    await orderService.updateDetails(orderId,reqBody);

    res.status(200).json({
      success: true,
      message: "order update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrderList,
  deleteOrder,
  updateOrder
};