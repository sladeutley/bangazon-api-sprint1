'use strict';

//use Faker to generate Payment Accounts and Types
const faker = require('faker');

module.exports.generatePaymentTypes = () => {

    let payments = [];

    for (let i = 0; i < 25; i++) {
        let customerId = null;
        let type = faker.finance.accountName();
        let accountNumber = faker.finance.account();

        payments.push({
            customerId,
            type,
            accountNumber
        });
    }
    return payments;
}


