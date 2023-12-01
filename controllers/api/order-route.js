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

// get all orders
router.get("/:id", async (req, res) => {
  try {
    const orders = await Order.findByPk(req.params.id, {
      attributes: ['id', 'status', 'quantity', 'user_id'],
      include: [
        { model: User, attributes: ['username'] },
        { model: Product, attributes: ['product_name'] }
      ],
    });
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

router.delete("/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.destroy({
      where: { id: req.params.id },
    });
    if (!deletedOrder) {
      res.status(404).json({ message: "No Order found!" });
      return;
    }
    res.status(200).json(deletedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// put/update existing Order
router.put("/:id", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Order ID:", req.params.id);

    const [numOfUpdatedRows, updatedOrders] = await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    console.log("Generated SQL Query:", Order.sequelize.query);
    console.log("Number of Updated Rows:", numOfUpdatedRows);
    console.log("Updated Orders:", updatedOrders);



    return res.status(200).json(updatedOrders);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

module.exports = router;
