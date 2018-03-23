const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");

// TODO: MAKE SURE PUT CAN REPLACE JUST ONE PROPERTY ON OBJECT AND REST OF PROPERTIES AREN"T UNDEFINED. OR IS THIS PATCH?


//get all computers
module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM computers`, (err, comps) => {
      if (err) return reject(err);
      resolve(comps);
    });
  });
};

//GET SINGLE computer
module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM computers WHERE comp_id = ${id}`, (err, comps) => {
      if (err) return reject(err);
      resolve(comps);
    });
  });
};

//POST computers
module.exports.addOne = ({
  datePurchased, 
  dateReturned
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO computers
        VALUES (null, "${datePurchased}", "${dateReturned}")`,
      (err, comps) => {
        if (err) return reject(err);
        resolve(comps);
      }
    );
  });
};

//edit computer
module.exports.editOne = (id, {
  datePurchased, 
  dateReturned
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE computers 
        SET 
        datePurchased = "${datePurchased}", 
        dateReturned = "${dateReturned}"`,
      (err, comps) => {
        if (err) return reject(err);
        resolve(comps);
      }
    );
  });
};

//Delete One Payment Type
module.exports.deleteOne = id => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM computers WHERE comp_id = ${id}`,
      (err, comps) => {
        if (err) return reject(err);
        resolve(comps);
      }
    );
  });
 };