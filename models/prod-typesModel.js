

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

//Gets all product types //
module.exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM productTypes`,
    (err, productTypes) => {
      if (err) return reject(err);
      resolve(productTypes);
    });
  });
};

// Gets a specific product type //
module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    db.all(
      `Select * FROM productTypes WHERE prodType_id = ${id}`,
      (err, productTypes) => {
        if (err) return reject(err);
        resolve(productTypes);
      }
    )
  })
};

// //
module.exports.addOne = ({
  title
}) => {
  return new Promise((resolve, reject) =>{
    db.run(
      `INSERT INTO productTypes
        VALUES (null, "${title}")`,
        (err, productTypes) => {
          if (err) return reject(err);
          resolve(productTypes);
        }
    );
  });
};
// //
module.exports.editOne = (id, {
  title
  }) => {
  return new Promise((resolve, reject) => {
  db.run(
    `UPDATE productTypes
    SET
    title = "${title}"
    WHERE prodType_id = ${id}`,
    (err, productTypes) => {
      if (err) return reject(err);
        resolve(productTypes);
      }
    );
  });
};
module.exports.deleteOne = (id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM productTypes WHERE prodType_id = ${id}`,
      (err, productTypes) => {
      if (err) return reject(err);
        resolve(productTypes);
      }
    );
  });
}
