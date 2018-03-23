const { createWriteStream } = require('fs'); 
const { generateCustomers } = require('../data/faker/customers'); 
const productTypes = require('../data/prod-types'); 
const { generateProducts } = require('../data/faker/products');
const { generateOrders } = require('../data/faker/orders');

// creating customer JSON
let customers = generateCustomers();
let custStream = createWriteStream(`./data/faker/customers.json`);
custStream.write(JSON.stringify(customers));

// then pass its length, and the product types' length, into the function to create products, so we can randomly assign customer and product type ids to each product
let products = generateProducts(productTypes.length, customers.length);
let prodStream = createWriteStream(`./data/faker/products.json`);
prodStream.write(JSON.stringify(products));

// creating orders JSON
let orders = generateOrders(products.length, customers.length);
let orderStream = createWriteStream(`./data/faker/orders.json`);
orderStream.write(JSON.stringify(orders));