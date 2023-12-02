const router = require("express").Router();
const { Product, Category, User, Order } = require("../models");
const withAuth = require("../utils/withAuth");

// /login home route
router.get("/login", async (req, res) => {
  try {
    res.render("login", {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// /signup home route
router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // get all categories and render main view
// router.get("/", async (req, res) => {
//     try {
//       // const categoryData = await Category.findAll({
//       //   include: [{ model: User, attributes: ["username"] }],
//       // });
//       // const categories = categoryData.map((category) => category.get({ plain: true }));
//       res.render("homepage", {
//         // categories,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

module.exports = router;