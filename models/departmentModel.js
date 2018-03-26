const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

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

module.exports.getOne = id => {
  return new Promise ((resolve, reject) => {
    db.get(`SELECT * FROM departments WHERE department_id = ${id} `,
    (err, departments) => {
      if (err) return reject(err);
      resolve(departments);
   });
  });
};

module.exports.addOne = ({name, supervisor, budget}) => {
  return new Promise ((resolve, reject)=>{
    db.run(
      `INSERT INTO departments
       VALUES (null, "${name}", "${supervisor}", "${budget}")`,
       (err, departments) => {
          if (err) return reject(err);
          resolve(departments);
      });
  })
};

module.exports.editOne = (id, {name, supervisor, budget}) => {
  return new Promise((resolve, reject) => {
  db.run(
    `UPDATE departments SET 
     name = "${name}",
     supervisor = "${supervisor}",
     budget = "${budget}"
     WHERE department_id = ${id}`,
     (err, departments) => {
       if (err) return reject(err);
       resolve(departments);
      }
    );
  });
};