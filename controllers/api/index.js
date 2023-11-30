const router = require("express").Router();
const userRoutes = require("./user-route");
const postRoutes = require("./product-route");
const commentRoutes = require("./category-route");

router.use("/users", userRoutes); 
router.use("/posts", postRoutes); 
router.use("/comments", commentRoutes); 

module.exports = router;