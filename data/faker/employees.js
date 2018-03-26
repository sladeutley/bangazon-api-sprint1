// creating customer data with Faker
'use strict';

const faker = require('faker');

module.exports.generateEmployees = () => {
  let employees = [];

  for (let i = 0; i < 50; i++) {
    let job_title = faker.name.jobTitle();
    let supervisor = faker.name.lastName();
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let work_email = faker.internet.email();
    let addressStreet = faker.address.streetAddress();
    let addressCity = faker.address.city();
    let addressState = faker.address.state();
    let addressZip = faker.address.zipCode();
    let dept_id = faker.random.number();

    employees.push({
        job_title,
        supervisor,
        first_name,
        last_name,
        work_email,
        addressStreet,
        addressCity,
        addressState,
        addressZip,
        dept_id
    });
  }
  return employees;
};