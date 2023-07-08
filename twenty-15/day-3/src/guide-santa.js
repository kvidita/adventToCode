const DIRECTIONS = { "^": "North", "<": "West", ">": "East", "v": "South" };

const getTotalHousesVisitedBySanta = (instructions, santa) => {
  const initialHouseId = santa.location.coordinates.join("");
  const uniqueLocationsVisited = new Set([initialHouseId]);

  [...instructions].forEach((instruction) => {
    const direction = DIRECTIONS[instruction];
    santa.move(direction);
    const locationId = santa.location.coordinates.join("");
    uniqueLocationsVisited.add(locationId);
  });

  return uniqueLocationsVisited.size;
};

exports.getTotalHousesVisitedBySanta = getTotalHousesVisitedBySanta;