const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "On Sale",
  },
  {
    tag_name: "Premium",
  },
  {
    tag_name: "Low Stock",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;