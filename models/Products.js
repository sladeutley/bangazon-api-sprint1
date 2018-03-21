const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM products`, (err, prods) => {
      if (err) return reject(err);
      resolve(prods);
    });
  });
};

//GET SINGLE PRODUCT
module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM products WHERE prod_id = ${id}`, (err, prods) => {
      if (err) return reject(err);
      resolve(prods);
    });
  });
};
