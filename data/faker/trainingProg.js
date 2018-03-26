// use Faker to generate training program data
'use strict';

const faker = require("faker");

module.exports.generateTrainingPrograms = () => {
  let trainingProgs = [];

  for (let i = 0; i < 10; i++) {
    let progName = faker.company.bsBuzz();
    let progStartDate = faker.date.month();
    let progEndDate = faker.date.month();
    
    trainingProgs.push({
      progName,
      progStartDate,
      progEndDate
    });
  }
  return trainingProgs;
};

    



