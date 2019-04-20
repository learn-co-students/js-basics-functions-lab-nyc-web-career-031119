// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  const start = 42;
  let blocks
  blocks = start - street
  return Math.abs(blocks)
};

function distanceFromHqInFeet(street) {
  const blockFeet = 264
  return distanceFromHqInBlocks(street) * blockFeet
};

function distanceTravelledInFeet(start, street) {
  const blockFeet = 264
  let blocks
  blocks = start - street
  return Math.abs(blocks) * blockFeet
};

function calculatesFarePrice(start, street) {
  let feet = distanceTravelledInFeet(start, street)
  let cost;
  if (feet < 400) {
      cost = 0;
    } else if (feet < 2000 && feet > 400) {
      feet -= 400
      cost = feet * 0.02
    } else if (feet > 2000 && feet < 2500) {
      cost = 25;
    } else {
      cost = "cannot travel that far";
  };
  return cost;
};
