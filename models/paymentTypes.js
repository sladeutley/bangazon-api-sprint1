"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");

//Get All Payment Types
module.exports.getAllPaymentTypes = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Payment_Types`, (err, Datas) => {
      if (err) return reject(err);
      resolve(Datas);
    });
  });
};

//Get One Payment Type
module.exports.getSinglePaymentType = id => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM Payment_Types WHERE PaymentTypeID = ${id}`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

//Add a New Payment Type
module.exports.addNewPaymentType = ({
  payment_type,
  account_number,
  customer_id
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Payment_Types 
      VALUES (null, "${payment_type}", ${account_number}, ${customer_id})`,

      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

//Edit Payment Type
module.exports.editOnePaymentType = (id,{
    payment_type,
    account_number,
    customer_id
}
) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE Payment_Types SET 
        payment_type = '${payment_type}', 
        account_number = '${account_number}', 
        customer_id = '${customer_id}' WHERE PaymentTypeID = '${id}'`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

//Delete One Payment Type
module.exports.deleteSinglePaymentType = id => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM Payment_Types WHERE PaymentTypeID = ${id}`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};
