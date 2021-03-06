// creating customer data with Faker
'use strict';

const faker = require('faker');

module.exports.generateCustomers = () => {
  let customers = [];
  
  for (let i = 0; i < 50; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let userName = faker.internet.userName();
    let phoneNumber = faker.phone.phoneNumberFormat();
    let email = faker.internet.email();
    let addressStreet = faker.address.streetAddress();
    let addressCity = faker.address.city();
    let addressState = faker.address.state();
    let addressZip = faker.address.zipCode();
    //IF a cust_id matches one that exists on orders, set isActive to true

    customers.push({
      "first_name": firstName,
      "last_name": lastName,
      "user_name": userName,
      "phone": phoneNumber,
      email,
      addressStreet,
      addressCity,
      addressState,
      addressZip
    });
  }
  return customers;
};