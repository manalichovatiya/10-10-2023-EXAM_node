const { productService } = require("../services");

/** create Product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Product create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get product list */
const getProductList = async (req, res) => {
  try {
    const getList = await productService.getProductList();

    res.status(200).json({
      success: true,
      message: "Get Product list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete product */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }
    await productService.deleteProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update product */
const updateProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const productId = req.params.buproductId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }
    await productService.updateDetails(productId,reqBody);

    res.status(200).json({
      success: true,
      message: "Product update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createProduct,
  getProductList,
  deleteProduct,
  updateProduct
};