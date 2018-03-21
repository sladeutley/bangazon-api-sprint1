"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");

const getAllPaymentTypes = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM PaymentTypes`, (err, Datas) => {
      if (err) return reject(err);
      resolve(Datas);
    });
  });
};

const getOnePaymentType = id => {
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
