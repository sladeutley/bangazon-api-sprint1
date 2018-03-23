// use Faker to generate computer data
"use strict";

const faker = require("faker");

module.exports.generateComputers = () => {
  let computers = [];

  for (let i = 0; i < 25; i++) {
    let datePurchased = faker.database
      .past()
      .toISOString()
      .substring(0, 10);
    let dateReturned = faker.database
      .past()
      .toISOString()
      .substring(0, 10);

    products.push({
      datePurchased,
      dateReturned
    });
  }
  return computers;
};
