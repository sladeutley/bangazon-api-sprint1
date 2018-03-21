const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');


module.exports.getAll = () => {
    return new Promise( (resolve, reject) => {
        db.all('SELECT * FROM customers', (err, cust) => {
            if(err) return reject(err);
            resolve(cust);
        });
    });
};

module.exports.getOne = (custId) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM customers WHERE customer_id = ${custId}`,
            (err, cust) => {
                if (err) return reject(err);
                resolve(cust);
            });
    });
};

module.exports.addNewCustomer = () => {
    const { list } = require("../data/faker/customers.json");
    return new Promise((resolve, reject) => {
      list.forEach(({ first_name, last_name, user_name, phone, email, addressStreet, addressCity, addressState, addressZip }) => {
        db.run(
          `INSERT INTO customers
          VALUES ("${first_name}", "${last_name}", "${user_name}", ${phone}, "${email}", "${addressStreet}", "${addressCity}", "${addressState}", ${addressZip})`
        );
      });
      resolve();
    })
  
  };
