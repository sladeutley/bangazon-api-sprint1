const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');


module.exports.getAll = () => {
    return new Promise( (resolve, reject) => {
        db.all('SELECT * FROM customers', (err, cust) => {
            if(err) return reject(err);
            resolve(cust);
        });
    });
};

module.exports.getOne = (custId) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM customers WHERE customer_id = ${custId}`,
            (err, cust) => {
                if (err) return reject(err);
                resolve(cust);
            });
    });
};
