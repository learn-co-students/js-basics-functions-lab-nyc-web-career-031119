function distanceFromHqInBlocks(block) {
  if (block < 42) {
    return 42 - block;
} else if (block > 42) {
    return block - 42;
  }
}

function distanceFromHqInFeet(num) {
  if (num < 42) {
    return (42 - num) * 264;
} else if (num > 42) {
    return (num - 42) * 264;
  }
}

function distanceTravelledInFeet(block1, block2) {
  if (block1 > block2) {
      return (block1 - block2) * 264;
  } else if (block1 < block2) {
      return (block2 - block1) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) >= 400 && (distanceTravelledInFeet(start, destination) <= 2000)) {
    return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return 'cannot travel that far';
  }
}
