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

//POST Products
module.exports.addOne = ({
  title,
  price,
  description,
  quantity,
  dateCreated,
  type_id,
  customer_id
}) => {
  // const { productsArray } = require('./data/faker/products.json');
  return new Promise((resolve, reject) => {
    // productsArray.forEach(({ prod_id, title, price, description, quantity, dateCreated, type_id, customer_id}) => {
    db.run(
      `INSERT INTO products
        VALUES (null, "${title}", "${price}", "${description}", "${quantity}", "${dateCreated}", ${type_id}, ${customer_id})`,
      (err, prods) => {
        if (err) return reject(err);
        resolve(prods);
      }
    );
  });
};
