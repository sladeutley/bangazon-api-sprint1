"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");

//Get All Payment Types
module.exports.getAllPaymentTypes = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM PaymentTypes`, (err, Datas) => {
      if (err) return reject(err);
      resolve(Datas);
    });
  });
};

//Get One Payment Type
module.exports.getOnePaymentType = id => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM PaymentTypes WHERE PaymentTypeID = ${id}`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

//Add a New Payment Type
module.exports.addNewPaymentType = () => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Payment_Types (payment_type, account_number, customer_id) VALUES (
      '${body.payment_type}', 
      '${body.account_number}', 
      '${body.customer_id} ')`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

//Edit Payment Type
module.exports.editPaymentType = (id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE Payment_Types SET 
        payment_type = '${body.payment_type}', 
        account_number = '${body.account_number}', 
        customer_id = '${body.customer_id}' WHERE PaymentTypeID = '${id}'`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

