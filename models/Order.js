'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bangazon.sqlite');

// Get all orders
module.exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM orders`,
      (err, orders) => {
        if (err) return reject(err);
          resolve(orders);
      }
    );
  });
};

// Get one order by order ID
module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM orders
      WHERE orders.order_id = ${id}`,
      (err, order) => {
        if (err) return reject(err);
        resolve(order);
      }
    );
  });
};

// POST an order
module.exports.addOne = ({
  transactionDate,
  paymentType_id,
  customer_id
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO orders
        VALUES (null, "${transactionDate}", ${paymentType_id}, ${customer_id})`,
      (err, orders) => {
        if (err) return reject(err);
        resolve(orders);
      }
    );
  });
};

// Edit an order by order ID
module.exports.editOne = (id, {
  transactionDate,
  paymentType_id,
  customer_id
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE orders
      SET
      transactionDate = "${transactionDate}",
      paymentType_id = ${paymentType_id},
      customer_id = ${customer_id} WHERE order_id = ${id}`,
      (err, orders) => {
        if (err) return reject(err);
        resolve(orders);
      }
    );
  });
};

// Delete order by order ID
module.exports.deleteOne = (id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM orders
      WHERE order_id = ${id}`, 
      (err, orders) => {
        if (err) return reject(err);
        resolve(orders);
      }
    );
  });
};