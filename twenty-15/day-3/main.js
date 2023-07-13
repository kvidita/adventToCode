const fs = require("fs");

const { GuiderElf } = require("./src/guider-elf");
const { Santa, Santas } = require("./src/santa");
const { Location } = require("./src/location");
const { SantasGuiderElf } = require("./src/santa-and-robo-santa-guider-elf");

const main = () => {
  const instructions = fs.readFileSync("./resources/instructions.txt", "utf-8");
  const location = new Location(0, 0);
  const santa = new Santa(location);
  const guiderElf = new GuiderElf(santa);
  const roboSanta = new Santa(location);
  const santas = new Santas(santa, roboSanta);
  const santasGuiderElf = new SantasGuiderElf(santas);

  guiderElf.guideSanta(instructions);
  const numberOfHouseVisitedBySanta = guiderElf.housesVisitedCount;

  santasGuiderElf.guideSantaAndRoboSanta(instructions);
  const numberOfHouseVisitedBySantaAndRoboSanta = santasGuiderElf.visitedHousesCount;

  console.log("Total number of houses that recieves at least one gift are: ",
    numberOfHouseVisitedBySanta);
  console.log("Total number of houses that is visited by santa and robo santa are: ",
    numberOfHouseVisitedBySantaAndRoboSanta);
};

main();