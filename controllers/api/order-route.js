const router = require("express").Router();
const { Order, Product, User, Category } = require("../../models");
// const withAuth = require("../../utils/withAuth");



// get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll({
      attributes: ['id', 'status', 'quantity', 'user_id'],
      include: [
        { model: User, attributes: ['username'] },
        { model: Product, attributes: ['product_name'] }
      ],
    });
    if (orders.length === 0) {
    return res.status(404).json({ message: "Alert! No orders were found!" });
    };
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// post new Order
router.post("/", async (req, res) => {
    try {
      const newOrder = await Order.create(req.body);
      res.status(200).json({order: newOrder, message: `Order ${newOrder.id} Created!`});
    } catch (err) {
      res.status(400).json({ message: "ERROR creating new category!" });
    }
});


module.exports = router;
