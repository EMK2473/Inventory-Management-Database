const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Beef',
  },
  {
    category_name: 'Poultry',
  },
  {
    category_name: 'Pork',
  },
  {
    category_name: 'Seafood',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;