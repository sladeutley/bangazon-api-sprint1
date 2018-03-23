// use Faker to generate computer data
"use strict";

const faker = require("faker");

module.exports.generateComputers = () => {
  let computers = [];

  for (let i = 0; i < 50; i++) {
    let datePurchased = faker.date.past().toISOString().substring(0, 10);
    let dateReturned = faker.date.past().toISOString().substring(0, 10);

    computers.push({
      datePurchased,
      dateReturned
    });
  }
  return computers;
};
