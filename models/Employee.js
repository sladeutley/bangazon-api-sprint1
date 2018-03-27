const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');


module.exports.getAll = () => {
	return new Promise((resolve, reject) => {
		db.all('SELECT * FROM employees', (err, emp) => {
			if (err) return reject(err);
			resolve(emp);
		});
	});
};

module.exports.getOne = (empId) => {
	return new Promise((resolve, reject) => {
		db.all(`SELECT * FROM employees WHERE employee_id = ${empId}`,
			(err, emp) => {
				if (err) return reject(err);
				resolve(emp);
			});
	});
};

//POST Customers
module.exports.addOneEmployee = ({
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
	return new Promise((resolve, reject) => {
		db.run(
			`INSERT INTO employees
          VALUES (null, "${job_title}", "${first_name}", "${last_name}", "${work_email}", "${addressStreet}", "${addressCity}", "${addressState}", ${addressZip}, ${dept_id})`,
			(err, cust) => {
				if (err) return reject(err);
				resolve(cust);
			}
		);
	});
};

//PUT Customers

module.exports.editEmployee = (empId, {
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
	return new Promise((resolve, reject) => {
		db.run(`UPDATE customers SET 
        job_title="${job_title}",
        first_name="${first_name}",
        last_name="${user_name}",
        work_email="${work_email}",
        addressStreet="${addressStreet}",
        addressCity="${addressCity}",
        addressState="${addressState}",
        addressZip="${addressZip}",
        dept_id=${dept_id} WHERE employee_id=${empId}`, (err, emp) => {
				if (err) return reject(err);
				resolve(emp);
			}
		);
	});
};

