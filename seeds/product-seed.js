const { Product } = require('../models');

const productData = [
  {
    product_name: 'Brisket',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Chuck Roll',
    price: 90.0,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: 'Eye Round',
    price: 22.99,
    stock: 12,
    category_id: 1,
  },
  {
    product_name: 'Ground Beef',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  // develop 4 products for each category in seeds
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;