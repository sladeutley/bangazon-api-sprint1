const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');


module.exports.getAll = () => {
    return new Promise( (resolve, reject) => {
        db.all('SELECT * FROM customers', (err, direx) => {
            if(err) return reject(err);
            resolve(direx);
        });
    });
};

module.exports.getOne = (custId) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM customers WHERE customer_id = ${custId}`,
            (err, direx) => {
                if (err) return reject(err);
                resolve(direx);
            });
    });
};