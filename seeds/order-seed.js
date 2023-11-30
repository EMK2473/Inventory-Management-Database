const { Order } = require('../models');

const orderData = [
  {
    user_id: '1',
    product_id: '1',
    status: true,
    quantity: 100,
  },
  {
    user_id: '1',
    product_id: '1',
    status: true,
    quantity: 100,
  },
  {
    user_id: '2',
    product_id: '1',
    status: true,
    quantity: 100,
  },
  {
    user_id: '2',
    product_id: '1',
    status: true,
    quantity: 100,
  },
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;