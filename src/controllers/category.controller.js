const { categoryService } = require("../services");

/** create category */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Category create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get category list */
const getCategoryList = async (req, res) => {
  try {
    const getList = await categoryService.getCategoryList();
    res.status(200).json({
      success: true,
      message: "Get category list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete category */
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryExists = await categoryService.getCategoryById(categoryId);
    if (!categoryExists) {
      throw new Error("Category not found!");
    }
    await categoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update category */
const updateCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const categoryId = req.params.bucategoryId;
    const categoryExists = await categoryService.getCategoryById(categoryId);
    if (!categoryExists) {
      throw new Error("Category not found!");
    }
    await categoryService.updateDetails(categoryId,reqBody);

    res.status(200).json({
      success: true,
      message: "Category update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createCategory,
  getCategoryList,
  deleteCategory,
  updateCategory
};