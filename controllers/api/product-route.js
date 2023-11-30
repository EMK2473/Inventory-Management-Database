const router = require("express").Router();
const { Product, User, Category } = require("../../models");
const withAuth = require("../../utils/withAuth");

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }],
    });
    if (products.length === 0) {
      return res.status(404).json({ message: "ERROR; No products found!" });
    }
    const productNames = products.map((product) => product.product_name);
    res.status(200).json({
      products: products,
      message: `Products: [${productNames.join(", ")}] found! [${
        productNames.length
      }]`,
    });
  } catch (err) {
    res.status(500).json({ message: "ERROR Products not found!" });
  }
});

// get a product
router.get("/:id", async (req, res) => {
  try {
    const productID = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    !productID
      ? res.status(404).json({ message: "ERROR Product ID not found!" })
      : res
          .status(200)
          .json({
            product: productID,
            message: `Product ${productID.product_name} found!`,
          });
  } catch (err) {
    res.status(500).json({ message: "ERROR Product ID not found!" });
  }
});

module.exports = router;
