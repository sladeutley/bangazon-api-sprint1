// use Faker to generate order data
'use strict';

const faker = require("faker");

module.exports.generateOrders = (productsLen, customersLen, paymentsLen) => {
  let orders = [];

  for (let i = 0; i < 25; i++) {
    let customer_id = Math.floor(Math.random() * customersLen) + 1;
    let transactionDate = faker.date.past().toISOString().substring(0, 10);
    // let paymentType_id = Math.floor(Math.random() * paymentsLen) + 1;
    let paymentType_id = faker.random.number();

    orders.push({
      customer_id,
      transactionDate,
      paymentType_id
    });
  }
  return orders;
};
    



