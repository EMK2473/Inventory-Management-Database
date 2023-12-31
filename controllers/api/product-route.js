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
    res.status(500).json(err);
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
      : res.status(200).json({
          product: productID,
          message: `Product ${productID.product_name} found!`,
        });
  } catch (err) {
    res.status(500).json(err);
  }
});

// update/put product 
router.put("/:id", async (req, res) => {  
  // console.log(req.body)
  try {
    req.body.stock ? 
    await Product.increment('stock', { by: req.body.stock, where: { id: req.params.id }, returning: true,}) : 
    await Product.update(req.body, { where: { id: req.params.id },});
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

// post new product
router.post("/new", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res
      .status(200)
      .json({
        product: product,
        message: `Product ${product.product_name} Created!`,
      });
  } catch (err) {
    res.status(400).json({ message: "ERROR creating new product!" });
  }
});

//delete product by :id
router.delete("/:id", async (req, res) => {
  try {
    const productToDelete = await Product.findByPk(req.params.id);
    if (!productToDelete) {
      return res.status(404).json({ message: "ERROR ID not found!" });
    }
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      product: productToDelete,
      message: `Product: ${productToDelete.product_name} deleted!`,
    });
  } catch (err) {
    res.status(500).json({ message: "ERROR Failed to delete product!" });
  }
});

module.exports = router;
