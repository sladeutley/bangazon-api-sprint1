'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

module.exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT movies.*, directors.name AS director
    FROM movies
    JOIN directors ON director_id = directors.dir_id`,
    (err, orders) => {
      if (err) return reject(err);
      resolve(orders);
    });
  });
}