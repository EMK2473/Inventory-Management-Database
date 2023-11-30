const router = require("express").Router();
const { Category, Product, User } = require("../../models");
const withAuth = require("../../utils/withAuth");

// get all categories
router.get("/", async (req, res) => {
    try {
      const categories = await Category.findAll({
        include: [{ model: Product }],
      });
  
      if (categories.length === 0) {
        return res.status(404).json({ message: "ERROR; No categories found!" });
      }
      const categoryNames = categories.map(category => category.category_name);
      res.status(200).json({
        categories: categories,
        message: `Categories:[${categoryNames.join(', ')}] found! [${categories.length}]`,
      });
    } catch (err) {
      res.status(500).json({ message: "ERROR; Category not found!" });
    }
  });

  // get a categories
router.get("/:id", async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
      if (!category) {
        res.status(404).json({ message: "ERROR; ID not found!" });
        return;
      }
      res.status(200).json({category: category, message: `Category: ${category.category_name} found!`});
    } catch (err) {
      res.status(500).json({ message: "ERROR finding ID!" });
    }
  });
module.exports = router;