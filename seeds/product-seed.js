const { Product } = require('../models');

const productData = [
  {
    product_name: 'Brisket',
    price: 14.99,
    stock: 14,
    par: 15,
    category_id: 1,
    image: "https://embed.widencdn.net/img/beef/0ihtghs7iy/exact/Brisket_Deckle%20Off.psd?keep=c&u=7fueml",
  },
  {
    product_name: 'Chuck Roll',
    price: 9.99,
    stock: 25,
    par: 25,
    category_id: 1,
    image: "https://embed.widencdn.net/img/beef/kevnnxelax/exact/Chuck%20Roll_116A.psd?keep=c&u=7fueml",
  },
  {
    product_name: 'Eye Round',
    price: 12.99,
    stock: 12,
    par: 15,
    category_id: 1,
    image: "https://embed.widencdn.net/img/beef/65dqjurwie/800x600px/Eye%20of%20Round%20Roast.psd?keep=c&u=7fueml",
  },
  {
    product_name: 'Ground Beef',
    price: 7.99,
    stock: 50,
    par: 45,
    category_id: 3,
    image: "https://embed.widencdn.net/img/beef/4hh1pywcnj/exact/Grind_Fine_85.psd?keep=c&u=7fueml",
  }, 
  {
    product_name: 'Bone-In Wings',
    price: 4.99,
    stock: 50,
    par: 55,
    category_id: 2,
    image: "https://phoebestails.files.wordpress.com/2014/01/chicken-wing.jpg?w=400",
  },
  {
    product_name: 'Breasts',
    price: 14.99,
    stock: 50,
    par: 75,
    category_id: 2,
    image: "https://kochfoods.com/wp-content/uploads/2023/01/GCP-5017377209057280.jpg",
  },
  {
    product_name: 'Thighs',
    price: 12.99,
    stock: 25,
    par: 15,
    category_id: 2,
    image: "https://media.istockphoto.com/id/1409422291/photo/isolated-three-fresh-raw-chicken-thighs.jpg?s=612x612&w=0&k=20&c=9CxzsEW1BRAV0B_5tZXTz6n66fzsjZtDvAiMz5ChIeo=",
  },
  {
    product_name: 'Nuggets',
    price: 3.99,
    stock: 200,
    par: 150,
    category_id: 2,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1383770571120.jpeg",
  },
  {
    product_name: 'Bacon',
    price: 14.99,
    stock: 30,
    par: 15,
    category_id: 3,
    image: "https://gdsn.clemensfamilycorp.com/Images_test/Hatfield%20Renderings%20for%20Website/2207_Front.png",
  },
  {
    product_name: 'Loins',
    price: 17.99,
    stock: 15,
    par: 15,
    category_id: 3,
    image: "https://ik.imagekit.io/smithfield/0aba5e4b-3a57-0042-244b-f7dbdf0cc00d/1e110f87-991f-473b-888a-6233ad1e30ab/boneless-loin.png",
  },{
    product_name: 'Belly',
    price: 19.99,
    stock: 20,
    par: 25,
    category_id: 3,
    image: "https://www.tntmeatmarket.com/uploads/1/3/1/6/131617367/s996233972530904061_p51_i1_w1140.jpeg",
  },{
    product_name: 'Salmon',
    price: 19.99,
    stock: 250,
    category_id: 4,
    image: "https://www.citarella.com/media/catalog/product/cache/6bd6bc90948058f1c179c773d53c57be/image/6925c99/organic-king-salmon-fillet.jpg",
  },{
    product_name: 'Tilapia',
    price: 12.99,
    stock: 150,
    par: 149,
    category_id: 4,
    image: "https://storage.googleapis.com/images-sof-prd-9fa6b8b.sof.prd.v8.commerce.mi9cloud.com/product-images/detail/00268980000001.jpg",
  },{
    product_name: 'King Crab Legs',
    price: 15.99,
    stock: 50,
    par: 45,
    category_id: 4,
    image: "https://www.crabdynasty.com/mm5/graphics/00000001/1/IMG_8149_960x720.jpg",
  },{
    product_name: 'Jumbo Shrimp',
    price: 11.99,
    stock: 50,
    par: 50,
    category_id: 4,
    image: "https://www.citarella.com/media/catalog/product/cache/0a1f163765072c838f99d363b77c89e0/image/154b83a/jumbo-shrimp.jpg",
  },
  // develop 4 products for each category in seeds
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;