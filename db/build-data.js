
const { createWriteStream } = require('fs'); 
const productTypes = require('../data/prod-types'); 
const { generateCustomers } = require('../data/faker/customers'); 
const { generateProducts } = require('../data/faker/products');

// creating customer JSON
let customers = generateCustomers();
console.log('customers',customers);
let custStream = createWriteStream(`./data/faker/customers.json`);
custStream.write(JSON.stringify(customers));

// then pass its length, and the product types' length, 
// into the function to create products, 
// so we can randomly assign customer and product type ids to each product
let products = generateProducts(productTypes.length, customers.length);
let prodStream = createWriteStream(`./data/faker/products.json`);
prodStream.write(JSON.stringify(products));
