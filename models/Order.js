'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bangazon.sqlite');

module.exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM orders`,
    (err, orders) => {
      if (err) return reject(err);
      resolve(orders);
    });
  });
}

module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * orders FROM orders
      WHERE orders.order_id = ${id}`,
      (err, order) => {
        if (err) return reject(err);
        resolve(order);
      }
    );
  });
};

// POST Order
module.exports.addOne = ({
  customer_id,
  transactionDate,
  paymentType_id
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO orders
        VALUES (null, "${customer_id}", "${transactionDate}", "${paymentType_id}")`,
      (err, orders) => {
        if (err) return reject(err);
        resolve(orders);
      }
    );
  });
};