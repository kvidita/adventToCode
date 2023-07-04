const fs = require("fs");

const determineFloorDirection = (floorSign) => {
  const directions = floorSign.split("");
  return directions.reduce((count, direction) => {
    return direction === "(" ? ++count : --count;
  }, 0);
}

const ditermineFirstBasementMovePosition = (floorSign) => {
  let floorCount = 0;
  const directions = floorSign.split("");

  for (let index = 0; index < directions.length; index++) {
    directions[index] === "(" ? floorCount++ : floorCount--;

    if (floorCount < 0) {
      return ++index;
    };
  };

  return -1;
}

const main = () => {
  fs.readFile("./floorSign.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err)
      return;
    };

    console.log("Instructions takes santa on floor - ", determineFloorDirection("(("));
    console.log("Instructions takes santa on floor - ", determineFloorDirection("(())("));
    
    console.log("First position that takes santa to basement is : ", ditermineFirstBasementMovePosition(data));
  })
};

main();