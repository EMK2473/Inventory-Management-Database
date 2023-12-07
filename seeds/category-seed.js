const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Beef",
    image:
      "https://hoteltalk.app/wp-content/uploads/2022/05/image-12.png",
  },
  {
    category_name: "Poultry",
    image: "https://hoteltalk.app/wp-content/uploads/2022/05/image-15.png",
  },
  {
    category_name: "Pork",
    image: "https://hoteltalk.app/wp-content/uploads/2022/05/image-13.png",
  },
  {
    category_name: "Seafood",
    image: "https://hoteltalk.app/wp-content/uploads/2022/05/image-16.png",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
