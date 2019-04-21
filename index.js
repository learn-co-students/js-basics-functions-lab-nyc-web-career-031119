// Code your solution in this file!
function  distanceFromHqInBlocks(street) {
  let dist = (street - 42);
  if (dist < 0) {
    return dist * -1;
  } else {
    return dist;
  }
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
};

function distanceTravelledInFeet(beginBlock, endBlock) {
  let dist = (endBlock - beginBlock) * 264;
  if (dist < 0) {
    return dist * -1;
  } else {
    return dist;
  }
};

function calculatesFarePrice(start, end) {
  let feet = distanceTravelledInFeet(start, end);
  let fare;

  if (feet < 400) {
    fare = 0;
  } else if (feet >= 400 && feet <= 2000) {
    fare = (feet - 400) * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    fare = 25;
  } else {
    return "cannot travel that far"
  };

  return fare;
};
