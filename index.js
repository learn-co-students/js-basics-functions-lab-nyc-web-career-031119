// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  //returns the number of blocks given a value
  return Math.abs(42-street);
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) *264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return (Math.abs(startBlock - endBlock)) *264;
}

function calculatesFarePrice(startBlock, endBlock) {
  let distance = distanceTravelledInFeet(startBlock, endBlock);

  switch (true) {
    case distance < 400:
      return 0;
    case distance < 2000:
      return (distance - 400) * 0.02;
    case distance < 2500:
      return 25
    case distance >= 2500:
      return "cannot travel that far";
  }
}
