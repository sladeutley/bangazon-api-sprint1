const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");
const { readFileSync } = require("fs");
const prodData = JSON.parse(readFileSync("./data/faker/products.json"));
const custData = JSON.parse(readFileSync("./data/faker/customers.json"));
const orderData = JSON.parse(readFileSync("./data/faker/orders.json"));
const employeeData = JSON.parse(readFileSync("./data/faker/employees.json"));
const prodTypeData = JSON.parse(readFileSync("./data/prod-types.json"));
const trainingProgData = JSON.parse(
  readFileSync("./data/faker/trainingProgs.json")
);
const paymentTypeData = JSON.parse(
  readFileSync("./data/faker/payment-types.json")
);
const compData = JSON.parse(readFileSync("./data/faker/computers.json"));
const empTrainJoinData = JSON.parse(readFileSync("./data/faker/empTrain.json"));


const departmentData = JSON.parse(readFileSync("./data/departments.json"));
const orderProductsData = JSON.parse(
  readFileSync("./data/faker/orderProducts.json")
);

db.serialize(function() {
  //want db.serialize for pc users does each 'db.run' one by one until each one is finished
  db.run(`DROP TABLE IF EXISTS products`);
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
  //-------------------------CREATE CUSTOMERS DB---------------------

  db.run(`DROP TABLE IF EXISTS customers`);
  db.run(
    `CREATE TABLE IF NOT EXISTS customers (
    customer_id INTEGER PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    userName TEXT,
    phoneNumber TEXT,
    email TEXT,
    addressStreet TEXT,
    addressCity TEXT,
    addressState TEXT,
    addressZip INTEGER
  )`,
    () => {
      custData.forEach(
        ({
          customer_id,
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
          db.run(`INSERT INTO customers VALUES (
        null,
        "${first_name}",
        "${last_name}",
        "${user_name}",
        "${phone}",
        "${email}",
        "${addressStreet}",
        "${addressCity}",
        "${addressState}",
        ${addressZip})`);
        }
      );
    }
  );
  //-------------------------CREATE EMPLOYEES DB---------------------
  db.run(`DROP TABLE IF EXISTS employees`);
  db.run(
    `CREATE TABLE IF NOT EXISTS employees (
    employee_id INTEGER PRIMARY KEY,
    job_title TEXT,
    first_name TEXT,
    last_name TEXT,
    work_email TEXT,
    addressStreet TEXT,
    addressCity TEXT,
    addressState TEXT,
    addressZip INTEGER,
    dept_id INTEGER,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
  )`,
    () => {
      employeeData.forEach(
        ({
          employee_id,
          job_title,
          first_name,
          last_name,
          work_email,
          addressStreet,
          addressCity,
          addressState,
          addressZip,
          dept_id
        }) => {
          db.run(`INSERT INTO employees VALUES (
        null,
        "${job_title}",
        "${first_name}",
        "${last_name}",
        "${work_email}",
        "${addressStreet}",
        "${addressCity}",
        "${addressState}",
        ${addressZip},
        ${dept_id}
      )`);
        }
      );
    }
  );

  //-------------------------CREATE ORDERS DB---------------------

  db.run(`DROP TABLE IF EXISTS orders`);
  db.run(
    `CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY,
    transactionDate TEXT,
    paymentType_id INTEGER,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
    )`,
    () => {
      orderData.forEach(
        ({ order_id, transactionDate, paymentType_id, customer_id }) => {
          db.run(`INSERT INTO orders VALUES (
        null,
        "${transactionDate}",
        ${paymentType_id},
        ${customer_id}
      )`);
        }
      );
    }
  );

  //---------------------CREATE PRODUCT TYPES TABLE----------------------//
  db.run(`DROP TABLE IF EXISTS productTypes`);
  db.run(
    `CREATE TABLE IF NOT EXISTS productTypes (
      prodType_id INTEGER PRIMARY KEY,
      title TEXT
    )`,
    () => {
      prodTypeData.forEach(({ prodType_id, title }) => {
        db.run(`INSERT INTO productTypes VALUES (
        null,
        "${title}"
      )`);
      });
    }
  );

  //---------------------CREATE PAYMENT TYPES TABLE----------------------//
  db.run(`DROP TABLE IF EXISTS Payment_Types`);
  db.run(
    `CREATE TABLE IF NOT EXISTS Payment_Types (
      PaymentTypeID INTEGER PRIMARY KEY,
      payment_type TEXT,
      account_number INT,
      customer_id INT
    )`,
    () => {
      paymentTypeData.forEach(
        ({ paymentType_id, payment_type, account_number, customer_id }) => {
          db.run(`INSERT INTO Payment_Types VALUES (
          null,
        "${payment_type}", 
        "${account_number}", 
        "${customer_id}"
      )`);
        }
      );
    }
  );

  //---------------------CREATE TRAINING PROGRAMS TABLE----------------------//
  db.run(`DROP TABLE IF EXISTS trainingPrograms`);
  db.run(
    `CREATE TABLE IF NOT EXISTS trainingPrograms (
      trainingProgram_id INTEGER PRIMARY KEY,
      progName TEXT,
      progStartDate TEXT,
      progEndDate TEXT
    )`,
    () => {
      trainingProgData.forEach(({ progName, progStartDate, progEndDate }) => {
        db.run(`INSERT INTO trainingPrograms VALUES (
            null,
            "${progName}",
            "${progStartDate}",
            "${progEndDate}"
          )`);
      });
    }
  );

  //---------------------CREATE COMPUTERS TABLE----------------------//
  db.run(`DROP TABLE IF EXISTS computers`);
  db.run(
    `CREATE TABLE IF NOT EXISTS computers (
        comp_id INTEGER PRIMARY KEY,
        datePurchased TEXT,
        dateReturned TEXT
      )`,
    () => {
      compData.forEach(({ comp_id, datePurchased, dateReturned }) => {
        db.run(`INSERT INTO computers VALUES (
              null,
              "${datePurchased}",
              "${dateReturned}"
          )`);
        }
      );
      }
    );
  


//------------EMPLOYEES || TRAINING   JOIN TABLE--------------

  db.run(`CREATE TABLE IF NOT EXISTS employees_training (
  employee_id INTEGER NOT NULL,
  trainingProgram_id INTEGER NOT NULL,
  PRIMARY KEY(employee_id, trainingProgram_id),
  FOREIGN KEY(employee_id) REFERENCES employee(employee_id) ON DELETE CASCADE,
  FOREIGN KEY(trainingProgram_id) REFERENCES trainingProgram(trainingProgram_id) ON DELETE CASCADE
)`, () => {
      // console.log('created EMP_TRAIN JOIN');
      empTrainJoinData.forEach(
        ({
          employee_id,
          trainingProgram_id
        }) => {
          db.run(`INSERT INTO employees_training VALUES (
            "${employee_id}",
            "${trainingProgram_id}"
          )`);
        }
      )
    }
  );


  //---------------------CREATE DEPARTMENTS TABLE----------------------//
  db.run(`DROP TABLE IF EXISTS departments`);
  db.run(
    `CREATE TABLE IF NOT EXISTS departments (
      department_id INTEGER PRIMARY KEY,
      name TEXT,
      supervisor INTEGER,
      budget INTEGER
    )`,
    () => {
      departmentData.forEach(({ department_id, name, supervisor, budget }) => {
        db.run(`INSERT INTO departments VALUES (
            null,
            "${name}",
            "${supervisor}",
            "${budget}"
          )`);
      });
    }
  );

  //---------------CREATE ORDER/PRODUCTS TABLE -------------------//
  db.run(`DROP TABLE IF EXISTS OrderProducts`);
  db.run(
    `CREATE TABLE IF NOT EXISTS OrderProducts (
      order_product_id INTEGER PRIMARY KEY,
      order_id INTEGER,
      product_id INTEGER,
      FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
      )`,
    () => {
      orderProductsData.forEach(({ order_id, product_id }) => {
        db.run(`INSERT INTO orderProducts VALUES (
            null,
          ${order_id},
          ${product_id}
        )`);
      });
    }
  );
});
