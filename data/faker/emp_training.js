const faker = require('faker');


module.exports.createEmpTrainData = () => {
    let empJoinArr = [];
    for(let i=1; i <= 10; i++){
        for(let j = 0; j < 5; j++){
            empJoinArr.push({
                trainingProgram_id: i,
                employee_id: faker.random.number({min:1, max:50})
            });
        };
    };
    return empJoinArr;
};