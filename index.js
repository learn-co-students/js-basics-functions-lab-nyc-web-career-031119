// Code your solution in this file!
function distanceFromHqInBlocks(street){
  let distance;
  if (street > 42) {
    distance = street - 42
  }
  else {
    distance = 42 - street
  };
  return distance;
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
};

function distanceTravelledInFeet(start, end) {
  return distanceFromHqInFeet(end) - distanceFromHqInFeet(start);
};

function calculatesFarePrice(start, end) {
  let price;
  if (distanceTravelledInFeet(start, end) < 400) {
    price = 0;
  }
  else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000) {
    price = 0.02 * (distanceTravelledInFeet(start, end) - 400);
  }
  else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2500) {
    price = 25;
  }
  else {
    price = `cannot travel that far`;
  };
  return price;
};
