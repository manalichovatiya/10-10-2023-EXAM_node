const { cartService } = require("../services");

/** create cart */
const createcart = async (req, res) => {
  try {
    const reqBody = req.body;
    const cart = await cartService.createcart(reqBody);
    if (!cart) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "cart create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get cart list */
const getcartList = async (req, res) => {
  try {
    const getList = await cartService.getcartList();
    res.status(200).json({
      success: true,
      message: "Get cart list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete cart */
const deletecart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cartExists = await cartService.getcartById(cartId);
    if (!cartExists) {
      throw new Error("cart not found!");
    }
    await cartService.deletecart(cartId);

    res.status(200).json({
      success: true,
      message: "cart delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update cart */
const updatecart = async (req, res) => {
  try {
    const reqBody = req.body;
    const cartId = req.params.bucartId;
    const cartExists = await cartService.getcartById(cartId);
    if (!cartExists) {
      throw new Error("cart not found!");
    }
    await cartService.updateDetails(cartId,reqBody);

    res.status(200).json({
      success: true,
      message: "cart update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createcart,
  getcartList,
  deletecart,
  updatecart
};