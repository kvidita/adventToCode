const fs = require("fs");
const { getMaxCalories, getMaxThreeElvesCalories } = require("./src/day-1");

const main = () => {
  fs.readFile("./calories.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err)
      return;
    };

    
    console.log("The maximun calories among all the elves is : ", getMaxCalories(data));
    console.log("The sum of three maximum elves calories is : ", getMaxThreeElvesCalories(data));
  });
};

main();