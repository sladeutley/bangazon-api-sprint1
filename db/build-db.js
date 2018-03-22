const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
const { readFileSync } = require("fs");
const prodData = JSON.parse(readFileSync("./data/faker/products.json"));
const prodTypeData = JSON.parse(readFileSync("./data/prod-types.json"));
const paymentTypeData = JSON.parse(readFileSync("./data/faker/payment-types.json"))

db.serialize(function() { //want db.serialize for pc users does each 'db.run' one by one until each one is finished
  db.run(`DROP TABLE IF EXISTS products`);
  console.log(1);
  db.run(
    `CREATE TABLE IF NOT EXISTS products (
    prod_id INTEGER PRIMARY KEY,
    title TEXT,
    price TEXT,
    description TEXT,
    quantity TEXT,
    dateCreated TEXT,
    type_id INTEGER,
    customer_id INTEGER,
    FOREIGN KEY (type_id) REFERENCES prod_types(type_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
  )`,
    () => {
      console.log(2);
      prodData.forEach(
        ({
          prod_id,
          title,
          price,
          description,
          quantity,
          dateCreated,
          type_id,
          customer_id
        }) => {
          db.run(`INSERT INTO products VALUES (
        null,
        "${title}",
        "${price}",
        "${description}",
        "${quantity}",
        "${dateCreated}",
        ${type_id},
        ${customer_id}
      )`);
        }
      );
    }
  );
  db.run(`DROP TABLE IF EXISTS productTypes`);
  db.run(
    `CREATE TABLE IF NOT EXISTS productTypes (
      prodType_id INTEGER PRIMARY KEY,
      title TEXT
    )`,
    () => {
      console.log(2);
      prodTypeData.forEach(
        ({
          prodType_id,
          title
        }) => {
          db.run(`INSERT INTO productTypes VALUES (
        null,
        "${title}"
      )`);
        }
      );
    }
  );
  db.run(`DROP TABLE IF EXISTS PaymentTypes`);
  db.run(
    `CREATE TABLE IF NOT EXISTS PaymentTypes (
      PaymentTypeID INTEGER PRIMARY KEY, 
      account_number INT,
      customer_id INT
    )`,
  () => {
    console.log(3);
    payment_types.forEach( 
      ({payment_type, 
        account_number, 
        customer_id
      }) => {
      db.run(`INSERT INTO PaymentTypes VALUES (
        "${payment_type}", 
        "${account_number}", 
        "${customer_id}"
      )`);
  }
);
  }
);



