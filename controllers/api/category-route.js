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
        return res.status(404).end();
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

  // get a category
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

// post new category
router.post("/new", withAuth, async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json({category: newCategory, message: `Category ${newCategory.category_name} Created!`});
  } catch (err) {
    res.status(400).json({ message: "ERROR creating new category!" });
  }
});

// put/update existing Category
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [numOfUpdatedRows, updatedCategories] = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    return res.status(200).json(updatedCategories);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

// delete category
// no withAuth, used for backend Insomnia until dev'd on front end
router.delete("/:id", async (req, res) => {
  try {
    const categoryToDelete = await Category.findByPk(req.params.id);
    if (!categoryToDelete) {
      return res.status(404).json({ message: "ERROR ID not found!" });
    }
    await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      category: categoryToDelete,
      message: `Category ${categoryToDelete.category_name} deleted!`,
    });
  } catch (err) {
    res.status(500).json({ message: "ERROR deleting category!" });
  }
});

module.exports = router;