const fs = require("fs");

const { GuiderElf } = require("./src/guide-santa");
const { Santa } = require("./src/santa");
const { Location } = require("./lib/location");

const main = () => {
  const instructions = fs.readFileSync("./resources/instructions.txt", "utf-8");
  const location = new Location(0, 0)
  const santa = new Santa(location);
  const guiderElf = new GuiderElf(santa);

  guiderElf.guideSanta(instructions);
  const totalHouseVisitedBySanta = guiderElf.housesVisited;

  console.log("Total houses that recieves at least one gift are: ", totalHouseVisitedBySanta);
};

main();