const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");

// TODO: //is this supposed to add to sql table as well?
// TODO: //Do I need to join productType_id and customer_id?

//get all products
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
  return new Promise((resolve, reject) => {
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

//edit product
module.exports.editOne = (id, {
  title,
  price,
  description,
  quantity,
  dateCreated,
  type_id,
  customer_id
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE products 
        SET 
        title = "${title}", 
        price = "${price}", 
        description = "${description}", 
        quantity = "${quantity}", 
        dateCreated = "${dateCreated}", 
        type_id = ${type_id}, 
        customer_id = ${customer_id} WHERE prod_id = ${id}`,
      (err, prods) => {
        if (err) return reject(err);
        resolve(prods);
      }
    );
  });
};

//Delete One Payment Type
module.exports.deleteOne = id => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM products WHERE prod_id = ${id}`,
      (err, prods) => {
        if (err) return reject(err);
        resolve(prods);
      }
    );
  });
 };