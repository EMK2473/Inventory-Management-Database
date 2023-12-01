const { Product } = require('../models');

const productData = [
  {
    product_name: 'Brisket',
    price: 14.99,
    casesInStock: 14,
    category_id: 1,
  },
  {
    product_name: 'Chuck Roll',
    price: 9.99,
    casesInStock: 25,
    category_id: 1,
  },
  {
    product_name: 'Eye Round',
    price: 12.99,
    casesInStock: 12,
    category_id: 1,
  },
  {
    product_name: 'Ground Beef',
    price: 7.99,
    casesInStock: 50,
    category_id: 3,
  }, 
  {
    product_name: 'Bone-In Wings',
    price: 4.99,
    casesInStock: 500,
    category_id: 2,
  },
  {
    product_name: 'Breasts',
    price: 14.99,
    casesInStock: 500,
    category_id: 2,
  },
  {
    product_name: 'Thighs',
    price: 12.99,
    casesInStock: 250,
    category_id: 2,
  },
  {
    product_name: 'Nuggets',
    price: 3.99,
    casesInStock: 500,
    category_id: 2,
  },
  {
    product_name: 'Bacon',
    price: 14.99,
    casesInStock: 300,
    category_id: 3,
  },
  {
    product_name: 'Loins',
    price: 17.99,
    casesInStock: 150,
    category_id: 3,
  },{
    product_name: 'Belly',
    price: 19.99,
    casesInStock: 50,
    category_id: 3,
  },{
    product_name: 'Salmon',
    price: 19.99,
    casesInStock: 250,
    category_id: 4,
  },{
    product_name: 'Tilapia',
    price: 12.99,
    casesInStock: 150,
    category_id: 4,
  },{
    product_name: 'King Crab Legs',
    price: 15.99,
    casesInStock: 50,
    category_id: 4,
  },{
    product_name: 'Jumbo Shrimp',
    price: 11.99,
    casesInStock: 500,
    category_id: 4,
  },
  // develop 4 products for each category in seeds
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;