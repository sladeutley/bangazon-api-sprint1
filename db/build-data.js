const { createWriteStream } = require('fs'); 
const { generateCustomers } = require('../data/faker/customers'); 
const { generateEmployees } = require('../data/faker/employees'); 
const { generateProducts } = require('../data/faker/products');
const { generateOrders } = require('../data/faker/orders');
const productTypes = require('../data/prod-types'); 
const { generatePaymentTypes} = require('../data/faker/payment-types');
const { generateTrainingPrograms } = require('../data/faker/trainingProg');
const { generateComputers} = require('../data/faker/computers');
const departments = require('../data/departments'); 
const { generateOrderProducts } = require('../data/faker/order-prod');



// creating customer JSON
let customers = generateCustomers();
let custStream = createWriteStream(`./data/faker/customers.json`);
custStream.write(JSON.stringify(customers));

// creating products JSON
// then pass its length, and the product types' length, into the function to create products, so we can randomly assign customer and product type ids to each product
let products = generateProducts(productTypes.length, customers.length);
let prodStream = createWriteStream(`./data/faker/products.json`);
prodStream.write(JSON.stringify(products));

// creating orders JSON
let orders = generateOrders(products.length, customers.length);
let orderStream = createWriteStream(`./data/faker/orders.json`);
orderStream.write(JSON.stringify(orders));

// creating employees JSON
let workers = generateEmployees();
let employeeStream = createWriteStream(`./data/faker/employees.json`);
employeeStream.write(JSON.stringify(workers));

//create payment JSON
let payments = generatePaymentTypes(customers.length);
let paymentStream = createWriteStream(`./data/faker/payment-types.json`);
paymentStream.write(JSON.stringify(payments));

// create training programs JSON
let trainingProgs = generateTrainingPrograms();
let trainingProgStream = createWriteStream(`./data/faker/trainingProgs.json`);
trainingProgStream.write(JSON.stringify(trainingProgs));

//create computers JSON
let computers = generateComputers();
let compStream = createWriteStream(`./data/faker/computers.json`);
compStream.write(JSON.stringify(computers));

//generating orderProducts
let orderProducts = generateOrderProducts(orders.length, products.length );
let orderProductsStream = createWriteStream('./data/faker/orderProducts.json')
orderProductsStream.write(JSON.stringify(orderProducts));



