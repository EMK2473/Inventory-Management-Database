const ItemPile = require("itempile");
const { or } = require("sequelize");
let test = 100;
ItemPile.maxStackSize = 9999;
const stock = new ItemPile("product_name", 10);
const adjustment = new ItemPile("product_name", -1);
console.log(stock)
console.log(adjustment)
stock.mergePile(adjustment);

console.log(stock);


