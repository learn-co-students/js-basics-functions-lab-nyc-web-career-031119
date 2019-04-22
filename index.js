// Code your solution in this file!

function distanceFromHqInBlocks (blockNumber) {
  //returns the number of blocks given a value
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}



function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return (end - start) * 264;
  } else {
    return (start - end) * 264;
  }
}


function calculatesFarePrice(start, end) {
  const trip = distanceTravelledInFeet(start, end);
  if (trip <= 400) {
    return 0;
  } else if (trip > 400 && trip <= 2000) {
    return .02 * (trip - 400);
  } else if (trip > 2000 && trip < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
