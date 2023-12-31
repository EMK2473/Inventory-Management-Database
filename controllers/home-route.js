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

// get all categories and render categories.handlebars
router.get("/", withAuth, async (req, res) => {
    try {
      const categoryData = await Category.findAll({
        include: [{ model: Product, attributes: ["product_name", "price", "stock", "par", "unit", "image" ] }],
      });
      const category = categoryData.map((product) => product.get({ plain: true }));
      // console.log(categoryData)
      res.render("categories", {
        category,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// get all products at orders.handelbars
router.get("/inventory", withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product, attributes: ["product_name", "price", "stock", "par", "unit", "id", "image" ] }],
    });
    const userData = await User.findAll({
      attributes: ["username", "isManager"],
    });
    const category = categoryData.map((product) => product.get({ plain: true }));
    const users = userData.map((user) => user.get({ plain: true }));
    res.render("inventory", {
      category,
      users,
      logged_in: req.session.logged_in,
      isManager: req.body.isManager
    });
    console.log('REQsess', req.session)
    console.log('users', users)
  } catch (err) {
    res.status(500).json(err);
  }
});

//
router.get("/new", withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product, attributes: ["product_name", "price", "stock", "par", "unit", "id" ] }],
    });
    const category = categoryData.map((product) => product.get({ plain: true }));
    // console.log(categoryData)
    res.render("new", {
      category,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get login view if not logged in, else redirect to dashboard
router.get("/login", async (req, res) => {
  req.session.logged_in ? res.redirect("/dashboard") : res.render("login");
});

// get sign up view if not logged in, else redirect to dashboard
router.get("/signup", async (req, res) => {
  req.session.logged_in ? res.redirect("/dashboard") : res.render("signup");
});

module.exports = router;