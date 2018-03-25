'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

// Get all orders
module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM trainingPrograms`, (err, programs) => {
      if (err) return reject(err);
      resolve(programs);
    });
  });
};

// Get one order by order ID
module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM trainingPrograms
      WHERE trainingPrograms.trainingProgram_id = ${id}`,
      (err, program) => {
        if (err) return reject(err);
        resolve(program);
      }
    );
  });
};

// POST an order
module.exports.addOne = ({
  progName,
  progStartDate,
  progEndDate
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO trainingPrograms
        VALUES (null, "${progName}", "${progStartDate}", "${progEndDate}")`,
      (err, programs) => {
        if (err) return reject(err);
        resolve(programs);
      }
    );
  });
};

// Edit an order by order ID
module.exports.editOne = (id, {
  progName,
  progStartDate,
  progEndDate
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE trainingPrograms
      SET
      programName = "${progName}",
      startDate = "${progStartDate}",
      endDate = "${progEndDate}" WHERE trainingProgram_id = ${id}`,
      (err, programs) => {
        if (err) return reject(err);
        resolve(programs);
      }
    );
  });
};

// Delete order by order ID
module.exports.deleteOne = id => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM trainingPrograms
      WHERE trainingProgram_id = ${id}`,
      (err, programs) => {
        if (err) return reject(err);
        resolve(programs);
      }
    );
  });
};