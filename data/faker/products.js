// use Faker to generate product types and products data
"use strict";

const faker = require("faker");

module.exports.generateProducts = (typesLen, customersLen) => {
  let products = [];

  for (let i = 0; i < 25; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let description = faker.lorem.sentence();
    let quantity = faker.random.number();
    let dateCreated = faker.date.past().toISOString().substring(0, 10);
    let type_id = Math.floor(Math.random() * typesLen) + 1;
    let customer_id = Math.floor(Math.random() * customersLen) + 1;

    products.push({
      title,
      price,
      description,
      quantity,
      dateCreated,
      type_id,
      customer_id
    });
  }
  return products;
};
