const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bangazon.sqlite');

//Gets all product types //
module.exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM departments`,
    (err, departments) => {
      if (err) return reject(err);
      resolve(departments);
    });
  });
};