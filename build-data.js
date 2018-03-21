
const { createWriteStream } = require('fs'); 
const { productTypes } = require('./prod-types'); 
const { generateCustomers } = require('./customers'); 
const { generateProducts } = require('./products');

// creating customer JSON
let customers = generateCustomers();
let custStream = createWriteStream(`customers.json`);
custStream.write(JSON.stringify(customers));

// then pass its length, and the product types' length, into the function to create products, so we can randomly assign customer and product type ids to each product
let products = generateProducts(productTypes.length, customers.length);
let prodStream = createWriteStream(`products.json`);
prodStream.write(JSON.stringify(products));
