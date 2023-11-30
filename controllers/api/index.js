const router = require("express").Router();
const userRoutes = require("./user-route");
const productRoutes = require("./product-route");
const categoryRoutes = require("./category-route");

router.use("/users", userRoutes); 
router.use("/products", productRoutes); 
router.use("/categories", categoryRoutes); 

module.exports = router;