# bangazon-api-sprint1

## H2 To Run

NPM INSTALLS:
  ..*faker
  ..*dotenv
  ..*sqlite3
  ..*express

Steps To Test:

..*Check to make sure there is data stored in customers.json and products.json otherwise run node db/build-data.js and then node db/build-db.js  (You can open bangazon.sqlite in DB Browser and confirm product data is stored)

## H2 CUSTOMER

GET ALL and GET ONE
..*Run the following query with a GET command to receive all products from the customers table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/customers

..*To GET one customer add the id into the route parameters
http://localhost:3000/api/v1/customers/<id_integer>

POST
..*Add a new customer to the customers table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/customers/

{
    "firstName": "Alda",
    "lastName": "Ritchie",
    "userName": "Orpha.Jaskolski35",
    "phoneNumber": "203-323-4489",
    "email": "Daren85@gmail.com",
    "addressStreet": "9582 Blick Forks",
    "addressCity": "Daphnemouth",
    "addressState": "Connecticut",
    "addressZip": 44735
  },

..*On refresh the new customer object will be at the bottom with a new, automatically generated customer_id.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific customer row by passing the customer_id into the route parameters:
http://localhost:3000/api/v1/customers/<customer_id>

..*After refreshing the database, the existing customer object will have your updated data.

DELETE

..*Use the delete method to delete a customer from the database.

## H2 Products

..*Run the following query with a GET command to receive all products from the products table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/products

..*To GET one product add the id into the route parameters
http://localhost:3000/api/v1/products/<id_integer>

POST
..*Add a new product to the products table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/products/

  {
    "title": "Small Frozen Chips",
    "price": "86.00",
    "description": "Ducimus necessitatibus molestiae adipisci inventore molestiae quis vel possimus explicabo.",
    "quantity": "78216",
    "dateCreated": "2017-06-16",
    "type_id": 3,
    "customer_id": 35
  }

..*On refresh the new product object will be at the bottom with a new, automatically generated product_id.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific product row by passing the product_id into the route parameters:
http://localhost:3000/api/v1/products/<product_id>

..*After refreshing the database, the existing product object will have your updated data.

DELETE

..*Use the delete method to delete a product from the database.

## H2 Payment Types

..*Run the following query with a GET command to receive all payment types from the payment types table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/paymentTypes

..*To GET one payment type add the id into the route parameters
http://localhost:3000/api/v1/paymentTypes/<id_integer>

POST
..*Add a new payment type to the payment types table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/paymentTypes/

  {
    "payment_type": "deposit",
    "account_number": 26150505,
    "customer_id": 19
  },

..*On refresh the new payment type object will be at the bottom with a new, automatically generated PaymentTypeID.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific payment type row by passing the PaymentTypeID into the route parameters:
http://localhost:3000/api/v1/paymentType/<PaymentTypeID>

..*After refreshing the database, the existing payment type object will have your updated data.

DELETE

..*Use the delete method to delete a payment type from the database.

## H2 Orders

..*Run the following query with a GET command to receive all orders from the orders table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/orders

..*To GET one order type add the id into the route parameters
http://localhost:3000/api/v1/orders/<id_integer>

POST
..*Add a new order type to the orders table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/orders/

  {
    "transactionDate": "2017-11-12",
    "paymentType_id": 79018,
    "customer_id": 24,
    "prod_id": 14,
    "title": "Ergonomic Fresh Pizza",
    "price": "758.00",
    "description": "Placeat nesciunt est velit amet.",
    "quantity": "40160",
    "dateCreated": "2017-10-05",
    "type_id": 1
  },

..*On refresh the new order object will be at the bottom with a new, automatically generated order_id.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific order row by passing the order_id into the route parameters:
http://localhost:3000/api/v1/orders/<order_id>

..*After refreshing the database, the existing order object will have your updated data.

DELETE

..*Use the delete method to delete an order from the database.

## H2 Product Type

..*Run the following query with a GET command to receive all product types from the product types table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/product-types

..*To GET one product type add the id into the route parameters
http://localhost:3000/api/v1/product-types/<id_integer>

POST
..*Add a new order type to the product types table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/product-types/

  {
    "transactionDate": "2017-11-12",
    "paymentType_id": 79018,
    "customer_id": 24,
    "prod_id": 14,
    "title": "Ergonomic Fresh Pizza",
    "price": "758.00",
    "description": "Placeat nesciunt est velit amet.",
    "quantity": "40160",
    "dateCreated": "2017-10-05",
    "type_id": 1
  },

..*On refresh the new product types object will be at the bottom with a new, automatically generated _id.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific product types row by passing the order_id into the route parameters:
http://localhost:3000/api/v1/product-types/<products_id>

..*After refreshing the database, the existing product types object will have your updated data.

DELETE

..*Use the delete method to delete a product type from the database.
## H2 Training Programs

..*Run the following query with a GET command to receive all training programs from the training program table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/trainingprogs

..*To GET one training program add the id into the route parameters
http://localhost:3000/api/v1/trainingprogs/<id_integer>

POST
..*Add a new training program to the orders table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/trainingprogs/

  {
    "progName": "streamline",
    "progStartDate": "February",
    "progEndDate": "August"
  },

..*On refresh the new training progam object will be at the bottom with a new, automatically generated trainingProgram_id.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific training program row by passing the trainingProgram_id into the route parameters:
http://localhost:3000/api/v1/trainingprogs/<trainingProgram_id>

..*After refreshing the database, the existing training programs object will have your updated data.

DELETE

..*Use the delete method to delete an training program from the database.

## H2 Computers

..*Run the following query with a GET command to receive all computers from the training program table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/computers

..*To GET one computer add the id into the route parameters
http://localhost:3000/api/v1/computers/<id_integer>

POST
..*Add a new computer to the computers table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/computers/

  {
    "datePurchased": "2017-07-11",
    "dateReturned": "2018-01-03"
  },

..*On refresh the new computer object will be at the bottom with a new, automatically generated comp_id.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific training program row by passing the comp_id into the route parameters:
http://localhost:3000/api/v1/computers/<comp_id>

..*After refreshing the database, the existing computers object will have your updated data.

DELETE

..*Use the delete method to delete a computer from the database.

## H2 Employees

..*Run the following query with a GET command to receive all employees from the employees table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/employees

..*To GET one employee add the id into the route parameters
http://localhost:3000/api/v1/employees/<id_integer>

POST
..*Add a new employee to the employees table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/employees/

  {
    "datePurchased": "2017-07-11",
    "dateReturned": "2018-01-03"
  },

..*On refresh the new employee object will be at the bottom with a new, automatically generated employee_id.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific employee row by passing the employee_id into the route parameters:
http://localhost:3000/api/v1/employees/<employee_id>

..*After refreshing the database, the existing employee object will have your updated data.

DELETE

..*Use the delete method to delete a employee from the database.

## H2 Departments

..*Run the following query with a GET command to receive all departments from the departments table in your preferred API testing tool (Postman) or in your browser with JSON Viewer enabled:
http://localhost:3000/api/v1/departments

..*To GET one department add the id into the route parameters
http://localhost:3000/api/v1/departments/<id_integer>

POST
..*Add a new department to the departments table using the POST method and adding to the following query with your JSON formatted as such:
http://localhost:3000/api/v1/departments/

  {
    "datePurchased": "2017-07-11",
    "dateReturned": "2018-01-03"
  },

..*On refresh the new department object will be at the bottom with a new, automatically generated department_id.

PUT
..*Using the same JSON formatting as before, use the PUT method to update or edit a specific department row by passing the department_id into the route parameters:
http://localhost:3000/api/v1/departments/<department_id>

..*After refreshing the database, the existing department object will have your updated data.

DELETE

..*Use the delete method to delete a department from the database.
