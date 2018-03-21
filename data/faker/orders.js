// use Faker to generate product types and products data
'use strict';

const faker = require("faker");

module.exports.generateOrders = (productsLen, customersLen, paymentsLen) => {
  let orders = [];

  for (let i = 0; i < 25; i++) {
    let order_id = Math.floor(Math.random() * productsLen) + 1;
    let customer_id = Math.floor(Math.random() * customersLen) + 1;
    let transactionDate = faker.date.past().toISOString().substring(0, 10);
    let paymentType_id = Math.floor(Math.random() * paymentsLen) + 1;

    orders.push({
      order_id,
      customer_id,
      transactionDate,
      paymentType_id
    });
  }
  return orders;
};
    



