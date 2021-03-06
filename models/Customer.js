const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM customers", (err, cust) => {
      if (err) return reject(err);
      resolve(cust);
    });
  });
};

module.exports.getOne = custId => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM customers WHERE customer_id = ${custId}`,
      (err, cust) => {
        if (err) return reject(err);
        resolve(cust);
      }
    );
  });
};

//POST Customers
module.exports.addOneCustomer = ({
  first_name,
  last_name,
  user_name,
  phone,
  email,
  addressStreet,
  addressCity,
  addressState,
  addressZip
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO customers
          VALUES (null, "${first_name}", "${last_name}", "${user_name}", "${phone}", "${email}", "${addressStreet}", "${addressCity}", "${addressState}", ${addressZip})`,
      (err, cust) => {
        if (err) return reject(err);
        resolve(cust);
      }
    );
  });
};

//PUT Customers

module.exports.editCust = (
  custId,
  {
    first_name,
    last_name,
    user_name,
    phone,
    email,
    addressStreet,
    addressCity,
    addressState,
    addressZip
  }
) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE customers SET 
			firstName="${first_name}",
      lastName="${last_name}",
			userName="${user_name}",
			phoneNumber="${phone}",
			email="${email}",
			addressStreet="${addressStreet}",
			addressCity="${addressCity}",
			addressState="${addressState}",
			addressZip=${addressZip} WHERE customer_id=${custId}`,
      (err, cust) => {
        if (err) return reject(err);
        resolve(cust);
      }
    );
  });
};

// only want customers whose id's dont exist on orders table
module.exports.getCustomersWhoDontBuyStuff = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT customers.* 
						FROM customers
						LEFT JOIN orders
						ON customers.customer_id = orders.customer_id
						WHERE orders.customer_id is null`,
      (err, cust) => {
        if (err) return reject(err);
        resolve(cust);
      }
    );
  });
};
