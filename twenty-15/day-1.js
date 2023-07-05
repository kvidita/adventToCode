const fs = require("fs");

const DIRECTIONS = { up: "(", down: ")" };

const determineFloorDirection = (floorSign) => {
  const directions = floorSign.split("");
  return directions.reduce((count, direction) => {
    return direction === DIRECTIONS.up ? ++count : --count;
  }, 0);
}

const ditermineFirstBasementMovePosition = (floorSign) => {
  let floorCount = 0;
  const directions = floorSign.split("");

  let index = 0;
  while (index < directions.length) {
    directions[index] === DIRECTIONS.up ? floorCount++ : floorCount--;
    index++;

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

    console.log("Instructions should take santa on floor 2: ", determineFloorDirection("(("));
    console.log("Instructions should take santa on floor 1: ", determineFloorDirection("(())("));

    console.log("First position that takes santa to basement is : ", ditermineFirstBasementMovePosition(data));
  })
};

main();