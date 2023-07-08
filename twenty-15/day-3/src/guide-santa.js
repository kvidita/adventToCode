const DIRECTIONS = { "^": "North", "<": "West", ">": "East", "v": "South" };

const getTotalHousesVisitedBySanta = (instructions, santa) => {
  const locationsVisited = [];

  instructions.split("").forEach((instruction) => {
    const direction = DIRECTIONS[instruction];
    santa.move(direction);
    const locationId = "" + santa.location.coordinates[0] + santa.location.coordinates[1];
    locationsVisited.push(locationId);
  });

  const uniqueLocationsVisited = new Set(locationsVisited);
  return uniqueLocationsVisited.size;
};

exports.getTotalHousesVisitedBySanta = getTotalHousesVisitedBySanta;