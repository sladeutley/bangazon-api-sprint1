const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM products`, (err, prods) => {
      if (err) return reject(err);
      resolve(prods);
    });
  });
};
