const router = require("express").Router();
const { Product, Category, User, Order } = require("../models");
const withAuth = require("../utils/withAuth");

// get all categories and render main view
router.get("/", async (req, res) => {
    try {
      // const categoryData = await Category.findAll({
      //   include: [{ model: User, attributes: ["username"] }],
      // });
      // const categories = categoryData.map((category) => category.get({ plain: true }));
      res.render("homepage", {
        // categories,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;